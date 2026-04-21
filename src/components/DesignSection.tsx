import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, Icon, SectionHeader } from './shared';
const DESIGN_FEATURES = [
{
  title: 'Design Collaboration',
  desc: 'Co-create with recyclers and suppliers on circular material specs.',
  icon: 'collab'
},
{
  title: 'Material Integration',
  desc: 'Seamlessly embed recycled inputs into your product BOM.',
  icon: 'atom'
},
{
  title: 'Verified Sourcing',
  desc: 'Each material batch is digitally certified and traceable.',
  icon: 'shield'
},
{
  title: 'Recycler Network',
  desc: 'Access 200+ vetted recyclers and pre-processors globally.',
  icon: 'network'
},
{
  title: 'Recycled Yarn Access',
  desc: 'Direct sourcing of GRS-certified recycled yarn varieties.',
  icon: 'thread'
},
{
  title: 'Circular Value Chains',
  desc: 'Build end-to-end loops that eliminate waste at every step.',
  icon: 'loop'
}];

const FLOW_STEPS = ['Waste', 'Fiber', 'Yarn', 'Fabric', 'Product'];
export function DesignSection() {
  const [activeFlow, setActiveFlow] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  useEffect(() => {
    const t = setInterval(
      () => setActiveFlow((p) => (p + 1) % FLOW_STEPS.length),
      1900
    );
    return () => clearInterval(t);
  }, []);
  return (
    <section
      id="design"
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
          badge="Circular Design"
          title="Design with Circular Materials"
          subtitle="Wire Waste enables brands to integrate recycled materials into product development through a traceable ecosystem." />
        
        <motion.div
          className="ww-flow-steps"
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
            duration: 0.7,
            delay: 0.2
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
            marginBottom: 52,
            background: T.white,
            borderRadius: 18,
            padding: '26px 28px',
            border: `1px solid ${T.blueGreyLt}`
          }}>
          
          {FLOW_STEPS.map((step, i) =>
          <div
            key={step}
            className="ww-flow-step-item"
            style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            
              <motion.div
              animate={{
                background:
                activeFlow === i ?
                T.navy :
                activeFlow > i ?
                T.accent :
                T.offWhite,
                color: activeFlow >= i ? '#fff' : T.textMuted,
                scale: activeFlow === i ? 1.07 : 1
              }}
              transition={{
                duration: 0.4
              }}
              style={{
                padding: '10px 22px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                letterSpacing: '.01em',
                border: `1.5px solid ${activeFlow === i ? T.navy : activeFlow > i ? T.accent : T.blueGreyLt}`,
                transition: 'all .4s'
              }}>
              
                {step}
              </motion.div>
              {i < FLOW_STEPS.length - 1 &&
            <motion.div
              className="ww-flow-line"
              animate={{
                background: activeFlow > i ? T.accent : T.blueGreyLt
              }}
              style={{
                width: 28,
                height: 2,
                margin: '0 3px',
                transition: 'background .4s'
              }} />

            }
            </div>
          )}
        </motion.div>{/* 🎥 VIDEO SECTION (EDGE-TO-EDGE CLEAN) */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.3 }}
  style={{
    width: '100vw',                 // full viewport width
    marginLeft: 'calc(-50vw + 50%)', // break out of container
    marginRight: 'calc(-50vw + 50%)',
    marginBottom: 60,
    overflow: 'hidden',
    position: 'relative'
  }}
>
  <video
    src="/videos/design.mp4"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }}
  />
</motion.div>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
            gap: 20
          }}>
          
          {DESIGN_FEATURES.map((f, i) =>
          <FlipCard key={i} f={f} i={i} inView={inView} />
          )}
        </div>
      </div>
    </section>);

}
function FlipCard({ f, i, inView }: {f: any;i: number;inView: boolean;}) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
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
        duration: 0.5,
        delay: 0.3 + i * 0.08
      }}
      style={{
        perspective: 1200,
        height: 220,
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}>
      
      <motion.div
        animate={{
          rotateY: isFlipped ? 180 : 0
        }}
        transition={{
          duration: 0.6,
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d'
        }}>
        
        {/* Front Face */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            background: T.white,
            borderRadius: 16,
            padding: '28px 24px',
            border: `1px solid ${T.blueGreyLt}`,
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
          
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 13,
              background: T.accentPale,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 18
            }}>
            
            <Icon name={f.icon} size={22} color={T.accent} strokeWidth={1.6} />
          </div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: T.navy,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              lineHeight: 1.3
            }}>
            
            {f.title}
          </h3>
        </div>

        {/* Back Face */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: T.navy,
            borderRadius: 16,
            padding: '28px 24px',
            border: `1px solid ${T.navyMid}`,
            boxShadow: '0 12px 32px rgba(35,55,109,0.2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 12
            }}>
            
            <Icon name={f.icon} size={18} color={T.lime} strokeWidth={2} />
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: T.white,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                margin: 0
              }}>
              
              {f.title}
            </h3>
          </div>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.65,
              margin: 0
            }}>
            
            {f.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>);

}