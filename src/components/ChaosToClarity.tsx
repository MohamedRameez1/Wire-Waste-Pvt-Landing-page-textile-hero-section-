import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, Badge, Icon } from './shared';
export function ChaosToClarity() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const bullets = [
  'Know exactly where your waste comes from and where it goes',
  'Build trust with verified data across the value chain',
  'Ensure compliance, accountability, and sustainability goals',
  'Turn waste into a trackable, valuable resource'];

  return (
    <section
      id="chaos-to-clarity"
      ref={ref}
      style={{
        padding: '100px 5%',
        background: T.white
      }}>
      
      <div
        className="ww-two-col"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center'
        }}>
        
        <motion.div
          initial={{
            opacity: 0,
            x: -30
          }}
          animate={
          inView ?
          {
            opacity: 1,
            x: 0
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
            order: 1 // On mobile, we want image on top, so we'll handle this in CSS if needed, but grid stacking usually puts first item on top.
          }}
          className="ww-chaos-img">
          
          <img
            src="/yarn_ball_copy_(1).png"
            alt="From Chaos to Clarity Yarn Ball"
            style={{
              width: '100%',
              maxWidth: 500,
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 12px 32px rgba(35,55,109,0.08))'
            }} />
          
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 30
          }}
          animate={
          inView ?
          {
            opacity: 1,
            x: 0
          } :
          {}
          }
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          style={{
            order: 2
          }}>
          
          <Badge label="Traceability" />
          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 'clamp(28px,4vw,44px)',
              fontWeight: 500,
              color: T.textPrimary,
              lineHeight: 1.18,
              marginBottom: 24,
              letterSpacing: '-0.02em'
            }}>
            
            From Chaos to Clarity: Traceability That Works
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              fontSize: 16,
              color: T.textSec,
              lineHeight: 1.75,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              marginBottom: 32
            }}>
            
            <p>
              Before traceability, waste flows like a tangled thread —
              scattered, untracked, and difficult to trust. Materials move
              across multiple hands with little visibility, making
              accountability nearly impossible.
            </p>
            <p>
              After adopting our platform, that same flow becomes structured and
              transparent. Every movement is recorded, every stakeholder is
              connected, and every material has a clear journey.
            </p>
            <p>
              What once looked like confusion… now becomes a single, traceable
              thread of truth.
            </p>
          </div>

          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: T.navy,
              marginBottom: 16,
              fontFamily: "'Plus Jakarta Sans',sans-serif"
            }}>
            
            Why It Matters
          </h3>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 32px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
            
            {bullets.map((bullet, i) =>
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                fontSize: 15,
                color: T.textPrimary,
                lineHeight: 1.5
              }}>
              
                <div
                style={{
                  marginTop: 2
                }}>
                
                  <Icon
                  name="check"
                  size={18}
                  color={T.lime}
                  strokeWidth={2.5} />
                
                </div>
                <span>{bullet}</span>
              </li>
            )}
          </ul>

          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: T.navy,
              borderLeft: `4px solid ${T.lime}`,
              paddingLeft: 20,
              paddingTop: 4,
              paddingBottom: 4,
              lineHeight: 1.6
            }}>
            
            One Platform. Complete Visibility. From collection to processing to
            reuse — we bring clarity to every step of your wire waste lifecycle.
          </div>
        </motion.div>
      </div>
    </section>);

}