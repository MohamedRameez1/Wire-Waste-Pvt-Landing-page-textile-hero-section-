import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { T, Icon, WW_LOGO } from './shared';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobile] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [
  {
    label: 'About Us',
    href: '#about-us'
  },
  {
    label: 'Traceability',
    href: '#traceability'
  },
  {
    label: 'Design',
    href: '#design'
  },
  {
    label: 'Metrics',
    href: '#metrics'
  },
  {
    label: 'Stakeholders',
    href: '#stakeholders'
  },
  {
    label: 'Gallery',
    href: '#gallery'
  },
  {
    label: 'Blog',
    href: '#blog'
  }];

  return (
    <>
      <motion.nav
        initial={{
          y: -70,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={scrolled ? 'ww-glass-nav' : ''}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 5%',
          height: 66,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s'
        }}>
        
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0
          }}>
          
          <img
            src={WW_LOGO}
            alt="Wire Waste"
            style={{
              height: 40,
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'multiply',
              userSelect: 'none'
            }} />
          
        </a>
        <div
          className="ww-desk"
          style={{
            display: 'flex',
            gap: 28,
            alignItems: 'center'
          }}>
          
          {links.map((l) =>
          <a key={l.label} href={l.href} className="ww-nav-link">
              {l.label}
            </a>
          )}
          <button
            onClick={() =>
            document.querySelector('#about-us')?.scrollIntoView({
              behavior: 'smooth'
            })
            }
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: `linear-gradient(135deg,${T.navy},${T.navyMid})`,
              color: '#fff',
              border: 'none',
              borderRadius: 9,
              padding: '9px 20px',
              fontSize: 13.5,
              fontWeight: 600,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              cursor: 'pointer',
              boxShadow: `0 3px 16px rgba(35,55,109,0.26)`,
              letterSpacing: '.01em',
              transition: 'all .22s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1.5px)';
              e.currentTarget.style.boxShadow =
              '0 6px 22px rgba(35,55,109,0.34)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = `0 3px 16px rgba(35,55,109,0.26)`;
            }}>
            
            <Icon name="mail" size={14} color="#fff" strokeWidth={2} />
            Contact Us
          </button>
        </div>
        <button
          className="ww-mob-btn"
          onClick={() => setMobile(!mobileOpen)}
          style={{
            background: 'rgba(35,55,109,0.07)',
            border: `1px solid rgba(35,55,109,0.13)`,
            borderRadius: 9,
            cursor: 'pointer',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40
          }}>
          
          <Icon
            name={mobileOpen ? 'close' : 'menu'}
            size={20}
            color={T.navy}
            strokeWidth={1.9} />
          
        </button>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -12
          }}
          style={{
            position: 'fixed',
            top: 66,
            left: 0,
            right: 0,
            zIndex: 99,
            background: 'rgba(244,246,251,0.97)',
            backdropFilter: 'blur(28px)',
            borderBottom: `1px solid ${T.blueGreyLt}`,
            padding: '22px 5% 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}>
          
            {links.map((l) =>
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMobile(false)}
            style={{
              color: T.textPrimary,
              textDecoration: 'none',
              fontSize: 16,
              fontWeight: 500,
              fontFamily: "'Plus Jakarta Sans',sans-serif"
            }}>
            
                {l.label}
              </a>
          )}
            <button
            style={{
              background: T.navy,
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              padding: '13px',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans',sans-serif"
            }}>
            
              Contact Us
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}