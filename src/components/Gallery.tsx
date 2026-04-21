import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, SectionHeader } from './shared';

const CARD_WIDTH = 340;
const CARD_GAP = 24;

export function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });

  const trackRef = useRef<HTMLDivElement>(null);

  // ✅ NEW STATE
  const [galleryImages, setGalleryImages] = useState<any[]>([]);

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const animRef = useRef<number>(0);
  const posRef = useRef(0);

  // ✅ FETCH DATA (ONLY ADDITION)
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setGalleryImages(data.gallery);
      });
  }, []);

  // ✅ SAME LOGIC
  const images = [...galleryImages, ...galleryImages];
  const totalWidth = galleryImages.length * (CARD_WIDTH + CARD_GAP);

  useEffect(() => {
    if (!inView) return;

    const speed = 0.5;

    const animate = () => {
      if (!isPaused && !isDragging && trackRef.current) {
        posRef.current += speed;

        if (posRef.current >= totalWidth) {
          posRef.current = 0;
        }

        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animRef.current);
  }, [inView, isPaused, isDragging, totalWidth]);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setScrollLeft(posRef.current);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !trackRef.current) return;

    const diff = dragStartX - clientX;
    let newPos = scrollLeft + diff;

    if (newPos < 0) newPos = totalWidth + newPos;
    if (newPos >= totalWidth) newPos = newPos - totalWidth;

    posRef.current = newPos;
    trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="gallery"
      ref={ref}
      style={{
        padding: '100px 0',
        background: T.white,
        overflow: 'hidden'
      }}>

      <div style={{ padding: '0 5%' }}>
        <SectionHeader
          badge="Gallery"
          title="Gallery"
          subtitle="A visual journey through our circular ecosystem — from waste collection to recycled yarn production."
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'relative',
          width: '100%',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setIsDragging(false);
        }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >

        {/* SAME UI */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background:
              'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background:
              'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: CARD_GAP,
            paddingLeft: 40,
            willChange: 'transform'
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="ww-gallery-card" style={{
              flexShrink: 0,
              width: CARD_WIDTH,
              height: 240,
              borderRadius: 16,
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: `1px solid ${T.blueGreyLt}`,
              transition: 'transform .35s ease, box-shadow .35s ease'
            }}>
              <img src={img.src} alt={img.alt} draggable={false} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}