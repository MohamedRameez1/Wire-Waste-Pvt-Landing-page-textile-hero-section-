import React, { useState, useRef, useEffect } from 'react'; 
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
}: { step: (typeof TRACE_STEPS)[0]; index: number }) {

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
      }}
    >
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
          textTransform: 'uppercase'
        }}>
        {step.label}
      </span>
    </div>
  );
}

export function Traceability() {

  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      id="traceability"
      ref={ref}
      style={{
        padding: '100px 5%',
        background: T.white,
        overflow: 'hidden'
      }}>
      
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        <SectionHeader
          badge="Supply Chain"
          title="End-to-End Traceability"
          subtitle="The platform tracks material movement at every stage of the circular supply chain."
        />

        {/* TRACE STEPS (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
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

        {/* STAGES (SMOOTH GLOW) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
            gap: 24
          }}>
          
          {STAGES.map((s, i) => {
            const active = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  borderRadius: 18,
                  overflow: 'hidden',
                  padding: 2
                }}
              >

                {/* SINGLE SMOOTH GLOW */}
                {active && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: -60,
                      borderRadius: '50%',
                      background:
                        'conic-gradient(from 0deg, #23376D, #3a5599, #6BA89A, #23376D)',
                      animation: 'spinSmooth 6s linear infinite',
                      filter: 'blur(40px)',
                      opacity: 0.5
                    }}
                  />
                )}

                {/* CARD */}
                <div
                  style={{
                    position: 'relative',
                    borderRadius: 16,
                    background: '#ffffff',
                    padding: '20px',
                    zIndex: 1,
                    border: `1px solid ${T.blueGreyLt}`,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 6 }}>
                    Stage {i + 1}
                  </div>

                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>
                    {s.name}
                  </div>

                  <p style={{ fontSize: 13, margin: 0, color: T.textMuted }}>
                    {s.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes spinSmooth {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

    </section>
  );
}