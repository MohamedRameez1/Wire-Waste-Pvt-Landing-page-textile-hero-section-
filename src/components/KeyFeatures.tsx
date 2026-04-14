import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, SectionHeader, Icon } from './shared';
const FEATURES = [
{
  title: 'QR Code Enabled Traceability',
  desc: 'Scan and track materials instantly at every stage of the lifecycle.',
  icon: 'network',
  color: T.navy
},
{
  title: 'Assured & Risk-Managed Supply Chain',
  desc: 'Mitigate compliance risks with verified, transparent data flows.',
  icon: 'shield',
  color: T.accent
},
{
  title: 'Certified Recycling Standards',
  desc: 'Ensure every process meets global environmental and quality benchmarks.',
  icon: 'check',
  color: T.lime
},
{
  title: 'Circularity Data for Brands',
  desc: 'Access real-time analytics to measure and report sustainability impact.',
  icon: 'trend',
  color: '#4a90e2'
}];

export function KeyFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <section
      id="key-features"
      ref={ref}
      style={{
        padding: '100px 5%',
        background: T.offWhite
      }}>
      
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto'
        }}>
        
        <SectionHeader
          badge="Platform"
          title="Key Features"
          subtitle="Our platform provides powerful tools to transform textile waste management and create a truly circular economy." />
        

        <div
          className="ww-four-col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            marginTop: 48
          }}>
          
          {FEATURES.map((feat, i) =>
          <FeatureCard key={i} feat={feat} i={i} inView={inView} />
          )}
        </div>
      </div>
    </section>);

}
function FeatureCard({
  feat,
  i,
  inView




}: {feat: any;i: number;inView: boolean;}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      className={`ww-animated-border-card ${isActive ? 'active' : ''}`}
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
        delay: 0.2 + i * 0.1
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: '0 16px 40px rgba(35,55,109,0.12)'
      }}
      whileTap={{
        scale: 0.98
      }}
      onClick={() => setIsActive(!isActive)}
      onMouseLeave={() => setIsActive(false)}
      style={{
        borderRadius: 20,
        padding: '32px 24px',
        border: `1px solid ${T.blueGreyLt}`,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
        cursor: 'pointer',
        transition: 'all .3s ease'
      }}>
      
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: `${feat.color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        
        <Icon name={feat.icon} size={28} color={feat.color} strokeWidth={1.8} />
      </div>
      <div>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: T.navy,
            marginBottom: 12,
            lineHeight: 1.3,
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            transition: 'color .3s ease'
          }}>
          
          {feat.title}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: T.textSec,
            lineHeight: 1.6,
            margin: 0,
            transition: 'color .3s ease'
          }}>
          
          {feat.desc}
        </p>
      </div>
    </motion.div>);

}