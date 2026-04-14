import React from 'react';
import { T, Badge } from './shared';
export function AboutUs() {
  return (
    <section
      id="about"
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
        
        <div>
          <Badge label="About Us" />
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
            
            About Us
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              fontSize: 16,
              color: T.textSec,
              lineHeight: 1.75,
              fontFamily: "'Plus Jakarta Sans',sans-serif"
            }}>
            
            <p>
              Wire Waste Pvt. Ltd is a cloud-based circularity platform that
              enables brands to transform their waste into valuable recycled
              products through a transparent and traceable supply chain.
            </p>
            <p>
              Our platform connects brands, factories, waste handlers,
              merchants, pre-processors, and end-processors within a digital
              ecosystem, ensuring that waste materials are tracked, verified,
              and reintroduced into production cycles.
            </p>
            <p>
              By combining digital traceability and circular design, Wire Waste
              helps organizations move from linear waste disposal to scalable
              circular systems.
            </p>
            <p>
              Operating across India, the UK, and Bangladesh, we support
              organizations in meeting sustainability goals, improving supply
              chain transparency, and complying with emerging environmental
              regulations.
            </p>
            <p
              style={{
                marginTop: 8,
                fontSize: 18,
                fontWeight: 700,
                color: T.navy,
                borderLeft: `4px solid ${T.lime}`,
                paddingLeft: 16
              }}>
              
              Our mission is simple: Make circularity measurable, traceable, and
              scalable.
            </p>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
          
          <img
            src="/Process_Vector_AI_copy_(1).png"
            alt="Wire Waste Circular Process"
            style={{
              width: '100%',
              maxWidth: 600,
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 16
            }} />
          
        </div>
      </div>
    </section>);

}