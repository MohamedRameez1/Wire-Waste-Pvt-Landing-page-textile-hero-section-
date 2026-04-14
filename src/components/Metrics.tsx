import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, Icon, SectionHeader, CountUp, CircularProgress } from './shared';
export function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const kpis = [
  {
    label: 'Tonnes Diverted from Landfill',
    val: 28400,
    suffix: '+',
    color: T.navy,
    icon: 'trash'
  },
  {
    label: 'CO₂ Emissions Prevented (kg)',
    val: 142800,
    suffix: '+',
    color: T.accent,
    icon: 'co2'
  },
  {
    label: 'Partner Organisations',
    val: 340,
    suffix: '+',
    color: T.navyLt,
    icon: 'network'
  },
  {
    label: 'Circularity Rate',
    val: 84,
    suffix: '%',
    color: T.lime,
    icon: 'loop'
  }];

  return (
    <section
      id="metrics"
      ref={ref}
      style={{
        padding: '100px 5%',
        background: T.white
      }}>
      
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto'
        }}>
        
        <SectionHeader
          badge="Impact"
          title="Measure What Matters"
          subtitle="Real-time intelligence on your circular performance." />
        
        <div
          className="ww-four-col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: 18,
            marginBottom: 52
          }}>
          
          {kpis.map((k, i) =>
          <motion.div
            key={i}
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
              duration: 0.5,
              delay: i * 0.09
            }}
            style={{
              background: T.offWhite,
              borderRadius: 16,
              padding: '26px 22px',
              border: `1px solid ${T.blueGreyLt}`
            }}>
            
              <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: k.color,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 14,
                boxShadow: `0 2px 12px ${k.color}33`
              }}>
              
                <Icon name={k.icon} size={18} color="#fff" strokeWidth={1.9} />
              </div>
              <div
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 40,
                fontWeight: 500,
                color: k.color,
                lineHeight: 1,
                marginBottom: 8
              }}>
              
                <CountUp target={k.val} suffix={k.suffix} />
              </div>
              <div
              style={{
                fontSize: 13,
                color: T.textSec,
                lineHeight: 1.5
              }}>
              
                {k.label}
              </div>
            </motion.div>
          )}
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
            duration: 0.7,
            delay: 0.4
          }}
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: 36,
            background: T.offWhite,
            borderRadius: 20,
            padding: '44px 32px',
            border: `1px solid ${T.blueGreyLt}`
          }}>
          
          <CircularProgress
            pct={84}
            color={T.navy}
            label="Waste Circularity Index"
            iconName="loop" />
          
          <CircularProgress
            pct={71}
            color={T.accent}
            label="CO₂ Emission Reduction"
            iconName="leaf" />
          
          <CircularProgress
            pct={92}
            color={T.lime}
            label="Landfill Diversion Rate"
            iconName="trash" />
          
        </motion.div>
      </div>
    </section>);

}