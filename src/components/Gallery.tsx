import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, SectionHeader } from './shared';
// Dynamic image array — easily replaceable from CMS or external source
const GALLERY_IMAGES = [
{
  src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop',
  alt: 'Textile recycling facility'
},
{
  src: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
  alt: 'Sustainable fabric production'
},
{
  src: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600&h=400&fit=crop',
  alt: 'Yarn manufacturing process'
},
{
  src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
  alt: 'Quality inspection'
},
{
  src: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&h=400&fit=crop',
  alt: 'Circular economy in action'
},
{
  src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
  alt: 'Supply chain logistics'
}];

const CARD_WIDTH = 340;
const CARD_GAP = 24;
export function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  // Duplicate images for seamless loop
  const images = [...GALLERY_IMAGES, ...GALLERY_IMAGES];
  const totalWidth = GALLERY_IMAGES.length * (CARD_WIDTH + CARD_GAP);
  useEffect(() => {
    if (!inView) return;
    const speed = 0.5; // px per frame
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
      
      <div
        style={{
          padding: '0 5%'
        }}>
        
        <SectionHeader
          badge="Gallery"
          title="Gallery"
          subtitle="A visual journey through our circular ecosystem — from waste collection to recycled yarn production." />
        
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={
        inView ?
        {
          opacity: 1,
          y: 0
        } :
        {}
        }
        transition={{
          duration: 0.8,
          delay: 0.2
        }}
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
        onTouchEnd={handleDragEnd}>
        
        {/* Left fade */}
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
          }} />
        
        {/* Right fade */}
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
          }} />
        

        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: CARD_GAP,
            paddingLeft: 40,
            willChange: 'transform'
          }}>
          
          {images.map((img, i) =>
          <div
            key={i}
            className="ww-gallery-card"
            style={{
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
            
              <img
              src={img.src}
              alt={img.alt}
              draggable={false}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform .5s ease',
                pointerEvents: 'none'
              }} />
            
            </div>
          )}
        </div>
      </motion.div>
    </section>);

}