import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './shared';
import ShinyText from './ShinyText.jsx';

export function Hero() {
  return (
    <section
      className="ww-hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100dvh',
        height: '100dvh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          filter: 'brightness(1.15)',
          zIndex: 0
        }}
      >
        <source src="/videos/fabric.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.10), rgba(0,0,0,0.20))'
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '120px 24px 60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(38px, 7vw, 72px)',
            lineHeight: 1.08,
            fontWeight: 500,
            letterSpacing: '-0.03em',
            margin: 0,
            marginBottom: '24px',
            textShadow: '0 4px 20px rgba(0,0,0,0.30)'
          }}
        >
          <ShinyText
            text="Reimagining Waste into Measurable Value"
            speed={4}
            delay={0.5}
            color="rgba(255,255,255,0.95)"
            shineColor="#ffffff"
            spread={140}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '700px',
            marginBottom: '40px'
          }}
        >
          A data-driven platform connecting manufacturers,
          recyclers, and waste handlers in real time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          {/* Request Demo */}
          <button
            onClick={() =>
              document.querySelector('#about-us')?.scrollIntoView({
                behavior: 'smooth'
              })
            }
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: '#23376D',
              color: '#fff',
              border: 'none',
              borderRadius: '14px',
              padding: '16px 32px',
              minWidth: '220px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(35,55,109,0.35)',
              transition: 'all 0.3s ease'
            }}
          >
            <Icon
              name="demo"
              size={18}
              color="#fff"
              strokeWidth={2.2}
            />
            Request Demo
          </button>

          {/* Learn More */}
          <button
            onClick={() =>
              document.querySelector('#traceability')?.scrollIntoView({
                behavior: 'smooth'
              })
            }
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.35)',
              backdropFilter: 'blur(10px)',
              borderRadius: '14px',
              padding: '16px 32px',
              minWidth: '220px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <Icon
              name="arrow"
              size={16}
              color="#fff"
              strokeWidth={2}
            />
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}