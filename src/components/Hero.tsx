import React from 'react';
import { motion } from 'framer-motion';
import { T, Icon } from './shared';
import Silk from "./Silk";
import ShinyText from './ShinyText';

export function Hero() {
  return (
    <section
      className="ww-hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >

      {/* Silk Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Silk
          speed={5}
          scale={1}
          color="#5227ff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(5,10,25,0.4) 100%)'
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '120px 5% 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          width: '100%'
        }}
      >

        {/* 🔥 SHINY HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 'clamp(34px,5vw,62px)',
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: '-0.025em',
            textShadow: '0 2px 24px rgba(0,0,0,0.3)'
          }}
        >
          <ShinyText
            text="Reimagining Waste into Measurable Value"
            speed={4} // smoother premium feel
            delay={0.5}
            color="rgba(255,255,255,0.7)"
            shineColor="#ffffff"
            spread={140}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: 17,
            lineHeight: 1.78,
            color: 'rgba(255,255,255,0.72)',
            marginBottom: 40,
            maxWidth: 480
          }}
        >
          A data-driven platform connecting manufacturers, recyclers, and
          waste handlers in real time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >

          {/* Request Demo */}
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth'
              })
            }
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              background: T.lime,
              color: '#0f1e42',
              border: 'none',
              borderRadius: 11,
              padding: '14px 30px',
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              boxShadow: `0 4px 24px rgba(154,181,42,0.38)`,
              letterSpacing: '.01em',
              transition: 'all .25s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 8px 34px rgba(154,181,42,0.52)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow =
                `0 4px 24px rgba(154,181,42,0.38)`;
            }}
          >
            <Icon name="demo" size={16} color="#0f1e42" strokeWidth={2.2} />
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
              gap: 9,
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.28)',
              backdropFilter: 'blur(12px)',
              borderRadius: 11,
              padding: '14px 30px',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              transition: 'all .25s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.16)';
              e.currentTarget.style.borderColor =
                'rgba(255,255,255,0.50)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.borderColor =
                'rgba(255,255,255,0.28)';
            }}
          >
            <Icon name="arrow" size={15} color="#fff" strokeWidth={2} />
            Learn More
          </button>

        </motion.div>
      </div>
    </section>
  );
}