import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { T, Badge } from './shared';

const metricsData = [
  {
    title: 'Circularity Metrics',
    desc: 'Measure how much waste is recovered, recycled, reused, and converted back into valuable resources through the platform.'
  },
  {
    title: 'Traceability',
    desc: 'Track waste movement and processing from source to final recycling stage with complete material visibility and records.'
  },
  {
    title: 'Inventory',
    desc: 'Manage available waste stock, material quantities, bag details, and storage data in real time across facilities.'
  },
  {
    title: 'Shipment',
    desc: 'Create, monitor, and manage waste material dispatches and deliveries between stakeholders with transparent tracking.'
  }
];

export function MetricsPage() {
  return (
    <>
      <Navbar />

      {/* =========================
          BACK LINK
      ========================= */}

      <div className="pt-24 sm:pt-28 bg-[#F5F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#metrics"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#23376D] transition-colors hover:text-[#4A7C6F]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </div>

      <div
        style={{
          padding: '40px 5% 100px',
          background: '#f8faf9'
        }}>

        <div
          style={{
            maxWidth: 1250,
            margin: '0 auto'
          }}>

          {/* Hero Section */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 100
            }}>

            <Badge label="Metrics" />

            <h1
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 'clamp(38px,5vw,70px)',
                fontWeight: 500,
                color: '#1f2c24',
                lineHeight: 1.05,
                marginTop: 24,
                marginBottom: 30,
                letterSpacing: '-0.04em'
              }}>

              Waste Circular Yarn
              <br />
              Closing the Loop

            </h1>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 22,
                maxWidth: 980,
                margin: '0 auto',
                fontSize: 17,
                color: '#5d6a63',
                lineHeight: 1.9,
                fontFamily: "'Plus Jakarta Sans',sans-serif"
              }}>

              <p>
                In the absence of traceability, textile waste moves through
                disconnected systems with limited oversight, unclear ownership,
                and minimal accountability. Brands lack visibility into how
                their waste is handled, manufacturers have no structured way to
                document outcomes, and sustainability claims remain difficult
                to substantiate.
              </p>

              <p>
                As regulatory scrutiny increases, the inability to track,
                report, and verify waste flows exposes organizations to
                compliance risks, reputational damage, and operational
                inefficiencies. Traceability provides the foundation for
                control, credibility, and informed decision-making across the
                textile value chain.
              </p>
            </div>
          </div>

          {/* WC Yarn Section */}
          <motion.section
            className="wc-yarn-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              marginBottom: 130,
              background: '#eef4ef',
              borderRadius: 36,
              padding: '85px 70px',
              position: 'relative',
              overflow: 'hidden'
            }}>

            {/* TOP HEADER */}
            <div
              style={{
                textAlign: 'center',
                maxWidth: 820,
                margin: '0 auto 70px'
              }}>

              <Badge label="WC Yarn" />

              <h2
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 'clamp(42px,4vw,72px)',
                  lineHeight: 1.02,
                  color: '#233128',
                  marginTop: 26,
                  marginBottom: 24,
                  fontWeight: 500,
                  letterSpacing: '-0.04em'
                }}>

                Textile Waste
                <br />

                Reimagined Into Yarn

              </h2>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.95,
                  color: '#5d6a63',
                  fontFamily: "'Plus Jakarta Sans',sans-serif"
                }}>

                WC Yarn transforms discarded textile waste into verified recycled yarn
                through a connected and traceable ecosystem that supports transparency,
                circularity, and sustainability accountability.

              </p>
            </div>

            {/* CENTER IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}>

              <motion.img
                src="/Fill.png"
                alt="WC Yarn"
                whileHover={{
                  y: -8,
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '100%',
                  maxWidth: 620,
                  objectFit: 'contain'
                }}
              />
            </motion.div>
          </motion.section>

          {/* Platform Features */}
          <div
            className="ww-two-col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 70,
              alignItems: 'center'
            }}>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 24
              }}>

              <Badge label="Platform Features" />

              {metricsData.map((item, index) => (
                <motion.div
                  whileHover={{ x: 6 }}
                  key={index}
                  style={{
                    background: '#fff',
                    borderRadius: 20,
                    padding: '28px 30px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 10px 30px rgba(10,20,40,0.05)'
                  }}>

                  <h3
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontSize: 24,
                      color: '#1f2c24',
                      marginBottom: 12,
                      fontWeight: 500
                    }}>

                    {item.title}

                  </h3>

                  <p
                    style={{
                      fontSize: 16,
                      color: '#5d6872',
                      lineHeight: 1.8,
                      fontFamily: "'Plus Jakarta Sans',sans-serif"
                    }}>

                    {item.desc}

                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}>

              <motion.img
                whileHover={{ scale: 1.02 }}
                src="/Set (1).png"
                alt="Wire Waste Dashboard"
                style={{
                  width: '100%',
                  maxWidth: 620,
                  borderRadius: 24,
                  boxShadow: '0 20px 60px rgba(10,20,40,0.10)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
              />
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 980px) {
            .ww-two-col {
              grid-template-columns: 1fr !important;
            }

            .wc-yarn-section {
              padding: 60px 28px !important;
            }
          }

          @media (max-width: 640px) {
            .wc-yarn-section h2 br {
              display: none;
            }
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
}