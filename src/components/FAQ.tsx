import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { T, SectionHeader, Icon } from './shared';
const FAQS = [
{
  q: 'What is Wire Waste?',
  a: 'Wire Waste is a cloud-based circularity platform that enables brands to transform their textile waste into valuable recycled products through a transparent and traceable supply chain.'
},
{
  q: 'How does the traceability feature work?',
  a: 'Our platform uses QR code-enabled tracking to monitor the movement of materials at every stage—from waste generation and collection to recycling and manufacturing. This ensures complete visibility and accountability.'
},
{
  q: 'Who can use the Wire Waste platform?',
  a: 'Our platform is designed for brands, manufacturers, waste handlers, merchants, pre-processors, and end-processors involved in the textile supply chain.'
},
{
  q: 'What regions do you operate in?',
  a: 'We currently operate across India, the UK, and Bangladesh, supporting organizations globally in meeting their sustainability goals.'
},
{
  q: 'How does Wire Waste help with compliance?',
  a: 'By providing verified, real-time data on waste movement and recycling processes, our platform helps brands meet emerging environmental regulations and sustainability reporting requirements.'
},
{
  q: 'Can I integrate Wire Waste with my existing systems?',
  a: 'Yes, our platform is designed to integrate seamlessly with existing supply chain management and ERP systems to provide a unified view of your circularity efforts.'
},
{
  q: 'What types of waste do you handle?',
  a: 'We primarily focus on post-industrial textile waste, helping brands recycle offcuts, deadstock, and other manufacturing byproducts into new yarn and fabrics.'
},
{
  q: 'How do you ensure the quality of recycled materials?',
  a: 'We partner with certified recycling facilities and use our traceability platform to ensure that all processes meet global environmental and quality benchmarks.'
},
{
  q: 'Is my data secure on the platform?',
  a: 'Absolutely. We use enterprise-grade security protocols to ensure that all supply chain data is encrypted, secure, and accessible only to authorized stakeholders.'
},
{
  q: 'How can I request a demo?',
  a: 'You can request a demo by clicking the "Request Demo" button on our website and filling out the contact form. Our team will get in touch to schedule a personalized walkthrough.'
},
{
  q: 'Do you offer support for onboarding?',
  a: 'Yes, we provide comprehensive onboarding support, including training sessions and dedicated account managers, to ensure a smooth transition to our platform.'
}];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  return (
    <section
      id="faq"
      ref={ref}
      style={{
        padding: '100px 5%',
        background: T.white
      }}>
      
      <div
        style={{
          maxWidth: 800,
          margin: '0 auto'
        }}>
        
        <SectionHeader badge="FAQ" title="Frequently Asked Questions" />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }}>
          
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
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
                  delay: 0.1 + i * 0.05
                }}
                style={{
                  background: T.offWhite,
                  borderRadius: 16,
                  border: `1px solid ${isOpen ? T.lime : T.blueGreyLt}`,
                  overflow: 'hidden',
                  transition: 'border-color .3s'
                }}>
                
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: T.textPrimary,
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: "'Plus Jakarta Sans',sans-serif"
                  }}>
                  
                  <span
                    style={{
                      paddingRight: 24
                    }}>
                    
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{
                      rotate: isOpen ? 0 : 45
                    }}
                    transition={{
                      duration: 0.2
                    }}
                    style={{
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: isOpen ? T.lime : T.textSec
                    }}>
                    
                    <Icon name="close" size={20} strokeWidth={2.5} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}>
                    
                      <div
                      style={{
                        padding: '0 24px 24px',
                        color: T.textSec,
                        fontSize: 15,
                        lineHeight: 1.6
                      }}>
                      
                        {faq.a}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}