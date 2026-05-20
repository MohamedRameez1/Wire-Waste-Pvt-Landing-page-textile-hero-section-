import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, Icon, SectionHeader } from './shared';

export function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });

  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setBlogPosts(data.blogs);
      });
  }, []);

  return (
    <section
      id="blog"
      ref={ref}
      style={{
        padding: '100px 0',
        background: T.white
      }}
    >

      {/* 👇 KEEP CONTENT WITH SIDE PADDING */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%' }}>

        <SectionHeader
          badge="Knowledge Hub"
          title="Insights & Updates"
          subtitle="Industry intelligence, case studies, and platform news."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
          gap: 24
        }}>

          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: '0 22px 52px rgba(0,0,0,0.14)'
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: T.white,
                border: `1px solid ${T.blueGreyLt}`,
                borderRadius: 20,
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
              }}
            >

              <div style={{
                height: 52,
                background: `${post.color}10`,
                borderBottom: `1px solid ${post.color}20`,
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                gap: 10
              }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: post.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon name={post.iconName} size={16} color="#fff" />
                </div>

                <span style={{ color: post.color }}>
                  {post.tag}
                </span>

                <span style={{ marginLeft: 'auto' }}>
                  {post.date}
                </span>
              </div>

              <div style={{ padding: '22px' }}>
                <h3>{post.title}</h3>
                <p>{post.preview}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ FULL-WIDTH VIDEO WITH CENTER TEXT */}
      <div
        style={{
          width: '100%',
          marginTop: 80,
          overflow: 'hidden',
          lineHeight: 0,
          position: 'relative'
        }}
      >
        <video
          src="/videos/fabric.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />

        {/* ✅ CENTERED OVERLAY TEXT */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,

            fontSize: 'clamp(18px, 7vw, 90px)', // responsive 275pt feel
            letterSpacing: '0.16em', // ~45 tracking

            color: '#ffffff',
            textAlign: 'center',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',

            opacity: 0.75,
            pointerEvents: 'none',

            mixBlendMode: 'overlay'
          }}
        >
          TRACE AND DESIGN
        </div>
      </div>

    </section>
  );
}