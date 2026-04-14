import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, Icon, Badge } from './shared';
const ROLES = [
'Brand / Retailer',
'Manufacturer',
'Waste Handler',
'Waste Merchant',
'Pre-Processor',
'End-Processor',
'Investor',
'Other'];

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: ''
  });
  const [focused, setFocused] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const field = (n: string): React.CSSProperties => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: 10,
    border: `1.5px solid ${focused === n ? T.navy : T.blueGreyLt}`,
    fontSize: 14,
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    color: T.textPrimary,
    background: '#fff',
    outline: 'none',
    transition: 'border-color .2s',
    boxShadow: focused === n ? `0 0 0 3px rgba(35,55,109,0.09)` : 'none'
  });
  const ctaBtns = [
  {
    icon: 'demo',
    label: 'Request Demo',
    desc: 'See the platform in action',
    primary: true
  },
  {
    icon: 'phone',
    label: 'Contact Sales',
    desc: 'Talk to our team',
    primary: false
  },
  {
    icon: 'rocket',
    label: 'Get Started',
    desc: 'Onboard your organisation',
    primary: false
  }];

  return (
    <section
      id="about-us"
      ref={ref}
      style={{
        padding: '100px 5%',
        background: `linear-gradient(168deg,${T.offWhite} 0%,rgba(179,186,204,0.18) 100%)`
      }}>
      
      <div
        className="ww-two-col"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 72,
          alignItems: 'start'
        }}>
        
        <motion.div
          initial={{
            opacity: 0,
            x: -24
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
            duration: 0.7
          }}>
          
          <Badge label="Get In Touch" />
          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 'clamp(28px,4vw,44px)',
              fontWeight: 500,
              color: T.textPrimary,
              lineHeight: 1.18,
              marginBottom: 18,
              letterSpacing: '-0.02em'
            }}>
            
            Ready to Transform Your Textile Waste Management?
          </h2>
          <p
            style={{
              fontSize: 15,
              color: T.textSec,
              lineHeight: 1.82,
              marginBottom: 36
            }}>
            
            Join our network of manufacturers, recyclers, and waste handlers to
            build a more sustainable textile industry.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
            
            {ctaBtns.map((cta, i) =>
            <motion.button
              key={i}
              whileHover={{
                x: 5
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                background: cta.primary ?
                `linear-gradient(135deg,${T.navy},${T.navyMid})` :
                'transparent',
                color: cta.primary ? '#fff' : T.textPrimary,
                border: `1.5px solid ${cta.primary ? T.navy : T.blueGreyLt}`,
                borderRadius: 13,
                padding: '14px 20px',
                cursor: 'pointer',
                textAlign: 'left' as const,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                transition: 'all .2s',
                boxShadow: cta.primary ?
                `0 4px 18px rgba(35,55,109,0.22)` :
                'none'
              }}>
              
                <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  flexShrink: 0,
                  background: cta.primary ?
                  'rgba(255,255,255,0.18)' :
                  T.offWhite,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                
                  <Icon
                  name={cta.icon}
                  size={18}
                  color={cta.primary ? '#fff' : T.navy}
                  strokeWidth={1.8} />
                
                </div>
                <div>
                  <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700
                  }}>
                  
                    {cta.label}
                  </div>
                  <div
                  style={{
                    fontSize: 12,
                    opacity: 0.65,
                    marginTop: 2
                  }}>
                  
                    {cta.desc}
                  </div>
                </div>
              </motion.button>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 24
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
            duration: 0.7,
            delay: 0.15
          }}
          className="ww-glass"
          style={{
            borderRadius: 22,
            padding: '38px 34px',
            boxShadow: '0 8px 44px rgba(35,55,109,0.10)'
          }}>
          
          <h3
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: T.textPrimary,
              marginBottom: 26,
              fontFamily: "'Fraunces',serif"
            }}>
            
            Schedule a Demo
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}>
            
            {[
            {
              name: 'name',
              placeholder: 'Your Name',
              type: 'text'
            },
            {
              name: 'email',
              placeholder: 'your.email@company.com',
              type: 'email'
            },
            {
              name: 'company',
              placeholder: 'Your Company',
              type: 'text'
            },
            {
              name: 'phone',
              placeholder: 'Phone Number',
              type: 'tel'
            }].
            map((f) =>
            <input
              key={f.name}
              type={f.type}
              placeholder={f.placeholder}
              value={form[f.name as keyof typeof form]}
              onChange={(e) =>
              setForm((p) => ({
                ...p,
                [f.name]: e.target.value
              }))
              }
              onFocus={() => setFocused(f.name)}
              onBlur={() => setFocused(null)}
              style={field(f.name)} />

            )}
            <select
              value={form.role}
              onChange={(e) =>
              setForm((p) => ({
                ...p,
                role: e.target.value
              }))
              }
              onFocus={() => setFocused('role')}
              onBlur={() => setFocused(null)}
              style={{
                ...field('role'),
                color: form.role ? T.textPrimary : T.textMuted
              }}>
              
              <option value="">Select your role</option>
              {ROLES.map((r) =>
              <option key={r} value={r}>
                  {r}
                </option>
              )}
            </select>
            <motion.button
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
                background: `linear-gradient(135deg,${T.navy},${T.navyMid})`,
                color: '#fff',
                border: 'none',
                borderRadius: 11,
                padding: '15px',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                boxShadow: `0 4px 22px rgba(35,55,109,0.30)`,
                marginTop: 4
              }}>
              
              <Icon name="rocket" size={16} color="#fff" strokeWidth={2} />
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>);

}