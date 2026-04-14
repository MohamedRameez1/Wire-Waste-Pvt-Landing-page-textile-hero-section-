import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, Icon, SectionHeader } from './shared';
const TRACE_STEPS = [
{
  label: 'Brand',
  iconName: 'brand',
  detail: 'Demand signal & specs sent',
  color: '#23376D'
},
{
  label: 'Manufacturer',
  iconName: 'factory',
  detail: 'Production & waste logging',
  color: '#2d4580'
},
{
  label: 'Waste Handler',
  iconName: 'recycle',
  detail: 'Collection & segregation',
  color: '#3a5599'
},
{
  label: 'Waste Merchant',
  iconName: 'truck',
  detail: 'Aggregation & logistics',
  color: '#4A7C6F'
},
{
  label: 'Pre-Processor',
  iconName: 'cog',
  detail: 'Sorting & grading',
  color: '#6BA89A'
},
{
  label: 'End-Processor',
  iconName: 'yarn',
  detail: 'Recycling & conversion',
  color: '#5a8f82'
},
{
  label: 'Brand',
  iconName: 'check',
  detail: 'Integration & certification',
  color: '#23376D'
}];

const STAGES = [
{
  name: 'Waste Generation',
  desc: 'Post-industrial textile waste is identified and collected at the source.'
},
{
  name: 'Collection & Aggregation',
  desc: 'Materials are gathered from multiple sites and consolidated for processing.'
},
{
  name: 'Sorting & Processing',
  desc: 'Collected waste is sorted by fibre type, colour, and quality grade.'
},
{
  name: 'Recycling',
  desc: 'Sorted materials are broken down and converted into reusable raw fibres.'
},
{
  name: 'Manufacturing',
  desc: 'Recycled fibres are spun into new yarn ready for textile production.'
},
{
  name: 'Product Integration',
  desc: 'Recycled materials are woven into finished products for brands.'
}];

function TraceStep({
  step,
  index



}: {step: (typeof TRACE_STEPS)[0];index: number;}) {
  const isLast = index === TRACE_STEPS.length - 1;
  const [active, setActive] = useState(false);
  return (
    <div
      className="ww-trace-step-wrapper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        position: 'relative'
      }}>
      
      {!isLast &&
      <div
        className="ww-trace-line"
        style={{
          position: 'absolute',
          background: `linear-gradient(90deg,${TRACE_STEPS[index].color},${TRACE_STEPS[index + 1].color})`,
          opacity: 0.35,
          zIndex: 0
        }} />

      }
      <motion.div
        className="ww-trace-icon"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: active ? step.color : 'rgba(255,255,255,0.95)',
          border: `2px solid ${step.color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
          boxShadow: active ?
          `0 4px 20px ${step.color}55` :
          '0 2px 12px rgba(0,0,0,0.08)',
          transition: 'all .25s'
        }}>
        
        <Icon
          name={step.iconName}
          size={18}
          color={active ? '#fff' : step.color}
          strokeWidth={1.8} />
        
      </motion.div>
      <span
        className="ww-trace-label"
        style={{
          marginTop: 8,
          fontSize: 9,
          fontWeight: 700,
          color: active ? step.color : T.textMuted,
          textAlign: 'center',
          fontFamily: "'JetBrains Mono',monospace",
          letterSpacing: '.04em',
          textTransform: 'uppercase',
          transition: 'color .2s'
        }}>
        
        {step.label}
      </span>
    </div>);

}
export function Traceability() {
  const [activeStage, setActive] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <section
      id="traceability"
      ref={ref}
      style={{
        padding: '100px 5%',
        background: T.white,
        overflow: 'hidden'
      }}>
      
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto'
        }}>
        
        <SectionHeader
          badge="Supply Chain"
          title="End-to-End Traceability"
          subtitle="The platform tracks material movement at every stage of the circular supply chain." />
        
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
            background: T.offWhite,
            borderRadius: 20,
            padding: '36px 24px',
            marginBottom: 48,
            border: `1px solid ${T.blueGreyLt}`
          }}>
          
          <div
            className="ww-trace-flow"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%'
            }}>
            
            {TRACE_STEPS.map((step, i) =>
            <TraceStep key={i} step={step} index={i} />
            )}
          </div>
        </motion.div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))',
            gap: 16
          }}>
          
          {STAGES.map((s, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 16
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
              delay: 0.3 + i * 0.07
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(activeStage === i ? null : i)}
            whileHover={{
              y: -6,
              scale: 1.03
            }}
            whileTap={{
              scale: 0.97
            }}
            style={{
              background: activeStage === i ? T.navy : T.white,
              border: `1px solid ${activeStage === i ? T.navy : T.blueGreyLt}`,
              borderRadius: 14,
              padding: '20px 18px',
              cursor: 'pointer',
              transition: 'all .3s',
              boxShadow:
              activeStage === i ?
              `0 12px 32px rgba(35,55,109,0.24)` :
              '0 1px 4px rgba(0,0,0,0.04)'
            }}>
            
              <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                color: activeStage === i ? T.lime : T.accent,
                marginBottom: 8,
                fontFamily: "'JetBrains Mono',monospace"
              }}>
              
                Stage {i + 1}
              </div>
              <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 8,
                lineHeight: 1.3,
                color: activeStage === i ? '#fff' : T.textPrimary
              }}>
              
                {s.name}
              </div>
              <p
              style={{
                fontSize: 13,
                lineHeight: 1.55,
                margin: 0,
                color:
                activeStage === i ? 'rgba(255,255,255,0.7)' : T.textMuted
              }}>
              
                {s.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}