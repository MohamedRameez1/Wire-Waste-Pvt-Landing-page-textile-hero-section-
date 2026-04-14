import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, Icon, SectionHeader } from './shared';
const BLOG_POSTS = [
{
  tag: 'Industry Insights',
  color: T.navy,
  title: 'How Textile Circularity Is Reshaping Fashion Supply Chains',
  preview:
  'Global brands are increasingly turning to circularity models to reduce waste and meet sustainability targets.',
  date: 'Mar 2025',
  iconName: 'trend'
},
{
  tag: 'Case Study',
  color: T.accent,
  title: 'Reducing 12 Tonnes of Waste Monthly With Traceable Loops',
  preview:
  'A leading South Asian manufacturer partnered with Wire Waste to build end-to-end traceability for cotton offcuts.',
  date: 'Feb 2025',
  iconName: 'star'
},
{
  tag: 'Sustainability Trends',
  color: T.lime,
  title: 'The Rise of GRS-Certified Recycled Yarn in Premium Apparel',
  preview:
  "Brands now demand third-party verification of recycled content — here's how Wire Waste makes that possible.",
  date: 'Jan 2025',
  iconName: 'leaf'
}];

export function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <section
      id="blog"
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
          badge="Knowledge Hub"
          title="Insights & Updates"
          subtitle="Industry intelligence, case studies, and platform news." />
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
            gap: 24
          }}>
          
          {BLOG_POSTS.map((post, i) =>
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
              delay: i * 0.1
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: '0 22px 52px rgba(0,0,0,0.14)'
            }}
            whileTap={{
              scale: 0.97
            }}
            style={{
              background: T.white,
              border: `1px solid ${T.blueGreyLt}`,
              borderRadius: 20,
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              transition: 'border-color .3s, box-shadow .3s'
            }}>
            
              <div
              style={{
                height: 52,
                background: `${post.color}10`,
                borderBottom: `1px solid ${post.color}20`,
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                gap: 10
              }}>
              
                <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: post.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                
                  <Icon
                  name={post.iconName}
                  size={16}
                  color="#fff"
                  strokeWidth={2} />
                
                </div>
                <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: post.color,
                  fontFamily: "'JetBrains Mono',monospace",
                  letterSpacing: '.07em',
                  textTransform: 'uppercase'
                }}>
                
                  {post.tag}
                </span>
                <span
                style={{
                  marginLeft: 'auto',
                  fontSize: 12,
                  color: T.textMuted
                }}>
                
                  {post.date}
                </span>
              </div>
              <div
              style={{
                padding: '22px 22px 26px'
              }}>
              
                <h3
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: T.textPrimary,
                  lineHeight: 1.4,
                  marginBottom: 11,
                  fontFamily: "'Fraunces',serif"
                }}>
                
                  {post.title}
                </h3>
                <p
                style={{
                  fontSize: 13,
                  color: T.textSec,
                  lineHeight: 1.7
                }}>
                
                  {post.preview}
                </p>
                <div
                style={{
                  marginTop: 18,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  color: post.color,
                  fontSize: 13,
                  fontWeight: 700
                }}>
                
                  Read More
                  <Icon
                  name="arrow"
                  size={14}
                  color={post.color}
                  strokeWidth={2.2} />
                
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}