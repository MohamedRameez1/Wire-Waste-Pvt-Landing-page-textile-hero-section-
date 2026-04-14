import React from 'react';
import { motion } from 'framer-motion';
import { T, Icon } from './shared';
import { GlobeCanvas } from './GlobeCanvas';
export function GlobeHero() {
  const floatCards = [
  {
    label: 'CO₂ Saved',
    value: '142.8t',
    icon: 'leaf',
    pos: {
      top: '10%',
      left: '-14%'
    } as React.CSSProperties,
    delay: 0.85
  },
  {
    label: 'Live Partners',
    value: '340+',
    icon: 'network',
    pos: {
      bottom: '14%',
      right: '-12%'
    } as React.CSSProperties,
    delay: 1.1
  },
  {
    label: 'Circularity',
    value: '84% Index',
    icon: 'loop',
    pos: {
      top: '50%',
      left: '-16%'
    } as React.CSSProperties,
    delay: 1.35
  }];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.92,
        x: 20
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0
      }}
      transition={{
        duration: 1.1,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 520,
        margin: '0 auto'
      }}>
      
      <div
        style={{
          position: 'absolute',
          inset: -32,
          background: `radial-gradient(ellipse at 50% 50%, rgba(154,181,42,0.14) 0%, rgba(35,55,109,0.08) 55%, transparent 75%)`,
          borderRadius: '50%',
          zIndex: 0
        }} />
      
      {[0, 1, 2].map((i) =>
      <div
        key={i}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '80%',
          height: '80%',
          borderRadius: '50%',
          border: `1.5px solid rgba(154,181,42,${0.18 - i * 0.05})`,
          animation: `pulseRing ${2.2 + i * 0.9}s ${i * 0.65}s ease-out infinite`,
          zIndex: 0
        }} />

      )}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          aspectRatio: '1/1',
          width: '100%'
        }}>
        
        <GlobeCanvas />
      </div>
      {floatCards.map((card, i) =>
      <motion.div
        key={i}
        initial={{
          opacity: 0,
          x: i % 2 === 0 ? -18 : 18
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          delay: card.delay,
          duration: 0.65
        }}
        className="ww-glass"
        style={{
          position: 'absolute',
          ...card.pos,
          borderRadius: 14,
          padding: '10px 14px',
          minWidth: 138,
          zIndex: 2,
          boxShadow: '0 4px 28px rgba(35,55,109,0.13)',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
        
          <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 9,
            background: T.navy,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 2px 12px rgba(35,55,109,0.30)`
          }}>
          
            <Icon name={card.icon} size={16} color={T.lime} strokeWidth={2} />
          </div>
          <div>
            <div
            style={{
              fontSize: 10,
              color: T.textMuted,
              fontFamily: "'JetBrains Mono',monospace",
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              lineHeight: 1.3
            }}>
            
              {card.label}
            </div>
            <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: T.textPrimary,
              fontFamily: "'Plus Jakarta Sans',sans-serif"
            }}>
            
              {card.value}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>);

}