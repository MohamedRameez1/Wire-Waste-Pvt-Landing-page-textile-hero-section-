import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, SectionHeader } from './shared';
export function WhereWeOperate() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <section
      id="where-we-operate"
      style={{
        padding: '100px 5%',
        background: T.offWhite
      }}>
      
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto'
        }}>
        
        <SectionHeader badge="Global Presence" title="Where We Operate" />

        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 30
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
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0'
          }}>
          
          <img
            src="/Map.png"
            alt="Wire Waste Global Presence Map"
            style={{
              width: '100%',
              maxWidth: 1000,
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 12px 32px rgba(35,55,109,0.12))'
            }} />
          
        </motion.div>
      </div>
    </section>);

}