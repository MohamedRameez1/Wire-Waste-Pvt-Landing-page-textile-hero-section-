import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  T,
  Icon,
  SectionHeader,
  CountUp,
  CircularProgress
} from './shared';

export function Metrics() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });

  const kpis = [
    {
      label: 'Tonnes Diverted from Landfill',
      val: 28400,
      suffix: '+',
      color: T.navy,
      icon: 'trash'
    },
    {
      label: 'CO₂ Emissions Prevented (kg)',
      val: 142800,
      suffix: '+',
      color: T.accent,
      icon: 'co2'
    },
    {
      label: 'Partner Organisations',
      val: 40,
      suffix: '+',
      color: T.navyLt,
      icon: 'network'
    },
    {
      label: 'Circularity Rate',
      val: 84,
      suffix: '%',
      color: T.lime,
      icon: 'loop'
    }
  ];

  return (
    <section
      id="metrics"
      ref={ref}
      style={{
        width: '100%',
        padding: '110px 5%',
        background: '#F7F8FA',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto'
        }}
      >
        {/* HEADER */}

        <SectionHeader
          badge="Impact"
          title="Measure What Matters"
          subtitle="Real-time intelligence on your circular performance."
        />

        {/* MAIN IMPACT PANEL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0
                }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: 'easeOut'
          }}
          className="metrics-main-panel"
          style={{
            position: 'relative',
            background: '#FFFFFF',
            border: `1px solid ${T.blueGreyLt}`,
            borderRadius: 26,
            padding: '34px',
            marginBottom: 22,
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}
        >
          {/* DECORATIVE ELEMENT */}

          <div
            style={{
              position: 'absolute',
              top: -100,
              right: -80,
              width: 260,
              height: 260,
              borderRadius: '50%',
              border: '1px solid rgba(35,55,109,0.07)',
              pointerEvents: 'none'
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: -55,
              right: -35,
              width: 150,
              height: 150,
              borderRadius: '50%',
              border: '1px solid rgba(179,193,53,0.10)',
              pointerEvents: 'none'
            }}
          />

          <div
            className="metrics-main-content"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 1fr',
              gap: 40,
              alignItems: 'center'
            }}
          >
            {/* PRIMARY METRIC */}

            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 18
                }}
              >
                <div
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    background: T.lime,
                    boxShadow: `0 0 0 5px ${T.lime}18`
                  }}
                />

                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: T.textSec
                  }}
                >
                  Total Impact
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 8,
                  marginBottom: 12
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(52px, 7vw, 82px)',
                    lineHeight: 0.95,
                    fontWeight: 500,
                    letterSpacing: '-0.045em',
                    color: T.navy
                  }}
                >
                  <CountUp
                    target={28400}
                    suffix="+"
                  />
                </span>

                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: T.textSec
                  }}
                >
                  tonnes
                </span>
              </div>

              <h3
                style={{
                  margin: '0 0 10px',
                  fontSize: 20,
                  lineHeight: 1.3,
                  fontWeight: 700,
                  color: '#2D2D2D',
                }}
              >
                Diverted from landfill
              </h3>

              <p
                style={{
                  maxWidth: 480,
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: T.textSec
                }}
              >
                Measurable textile recovery tracked across the circular
                supply chain.
              </p>
            </div>

            {/* IMPACT SIDE */}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12
              }}
            >
              {kpis.slice(1).map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{
                    opacity: 0,
                    y: 15
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          y: 0
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + i * 0.08
                  }}
                  className="metrics-mini-card"
                  style={{
                    background: '#F7F8FA',
                    borderRadius: 17,
                    padding: '20px 18px',
                    border: `1px solid ${T.blueGreyLt}`,
                    minHeight: 140,
                    boxSizing: 'border-box',
                    transition:
                      'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: `${k.color}12`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 17
                    }}
                  >
                    <Icon
                      name={k.icon}
                      size={17}
                      color={k.color}
                      strokeWidth={1.9}
                    />
                  </div>

                  <div
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: 30,
                      fontWeight: 500,
                      lineHeight: 1,
                      color: k.color,
                      marginBottom: 9
                    }}
                  >
                    <CountUp
                      target={k.val}
                      suffix={k.suffix}
                    />
                  </div>

                  <div
                    style={{
                      fontSize: 11.5,
                      lineHeight: 1.45,
                      color: T.textSec
                    }}
                  >
                    {k.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CIRCULARITY PERFORMANCE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.35,
            ease: 'easeOut'
          }}
          className="metrics-performance-panel"
          style={{
            background: '#FFFFFF',
            border: `1px solid ${T.blueGreyLt}`,
            borderRadius: 26,
            padding: '30px 34px',
            boxSizing: 'border-box'
          }}
        >
          {/* PERFORMANCE HEADER */}

          <div
            className="metrics-performance-header"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 20,
              marginBottom: 28
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: T.navy,
                  marginBottom: 8
                }}
              >
                Circular Performance
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#2D2D2D',
                  letterSpacing: '-0.02em'
                }}
              >
                Your impact at a glance
              </h3>
            </div>

            <div
              style={{
                fontSize: 12,
                color: T.textSec,
                textAlign: 'right',
                maxWidth: 270,
                lineHeight: 1.5
              }}
            >
              Key indicators across recovery, emissions and landfill
              diversion.
            </div>
          </div>

          {/* PROGRESS ITEMS */}

          <div
            className="metrics-progress-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 18
            }}
          >
            {/* ITEM 1 */}

            <motion.div
              whileHover={{
                y: -3
              }}
              transition={{
                duration: 0.25
              }}
              style={{
                borderRadius: 18,
                background: '#F7F8FA',
                border: `1px solid ${T.blueGreyLt}`,
                padding: '24px 20px',
                display: 'flex',
                justifyContent: 'center',
                boxSizing: 'border-box'
              }}
            >
              <CircularProgress
                pct={84}
                color={T.navy}
                label="Waste Circularity Index"
                iconName="loop"
              />
            </motion.div>

            {/* ITEM 2 */}

            <motion.div
              whileHover={{
                y: -3
              }}
              transition={{
                duration: 0.25
              }}
              style={{
                borderRadius: 18,
                background: '#F7F8FA',
                border: `1px solid ${T.blueGreyLt}`,
                padding: '24px 20px',
                display: 'flex',
                justifyContent: 'center',
                boxSizing: 'border-box'
              }}
            >
              <CircularProgress
                pct={71}
                color={T.accent}
                label="CO₂ Emission Reduction"
                iconName="leaf"
              />
            </motion.div>

            {/* ITEM 3 */}

            <motion.div
              whileHover={{
                y: -3
              }}
              transition={{
                duration: 0.25
              }}
              style={{
                borderRadius: 18,
                background: '#F7F8FA',
                border: `1px solid ${T.blueGreyLt}`,
                padding: '24px 20px',
                display: 'flex',
                justifyContent: 'center',
                boxSizing: 'border-box'
              }}
            >
              <CircularProgress
                pct={92}
                color={T.lime}
                label="Landfill Diversion Rate"
                iconName="trash"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* RESPONSIVE + HOVER STYLES */}

      <style>{`

        /* ================================
           MAIN METRIC CARDS
        ================================= */

        .metrics-mini-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 12px 30px rgba(35, 55, 109, 0.08);
        }


        /* ================================
           MAIN PANEL
        ================================= */

        .metrics-main-panel {
          transition:
            box-shadow 0.35s ease,
            transform 0.35s ease;
        }

        .metrics-main-panel:hover {
          box-shadow:
            0 18px 45px rgba(35, 55, 109, 0.07);
        }


        /* ================================
           TABLET
        ================================= */

        @media (max-width: 900px) {

          .metrics-main-content {
            grid-template-columns: 1fr !important;
          }

          .metrics-progress-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }

        }


        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 767px) {

          #metrics {
            padding: 75px 18px !important;
          }

          .metrics-main-panel {
            padding: 24px !important;
            border-radius: 21px !important;
          }

          .metrics-mini-card {
            min-height: 130px !important;
            padding: 17px 15px !important;
          }

          .metrics-progress-grid {
            grid-template-columns: 1fr !important;
          }

          .metrics-performance-panel {
            padding: 24px 18px !important;
            border-radius: 21px !important;
          }

          .metrics-performance-header {
            align-items: flex-start !important;
            flex-direction: column !important;
            margin-bottom: 22px !important;
          }

          .metrics-performance-header > div:last-child {
            text-align: left !important;
          }

        }


        /* ================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 480px) {

          #metrics {
            padding-left: 14px !important;
            padding-right: 14px !important;
          }

          .metrics-main-panel {
            padding: 20px !important;
          }

          .metrics-main-content {
            gap: 28px !important;
          }

          .metrics-main-content > div:last-child {
            grid-template-columns: 1fr !important;
          }

          .metrics-mini-card {
            min-height: auto !important;
          }

          .metrics-performance-panel {
            padding: 20px 15px !important;
          }

        }


        /* ================================
           REDUCE MOTION
        ================================= */

        @media (prefers-reduced-motion: reduce) {

          .metrics-main-panel,
          .metrics-mini-card {
            transition: none !important;
          }

        }

      `}</style>
    </section>
  );
}