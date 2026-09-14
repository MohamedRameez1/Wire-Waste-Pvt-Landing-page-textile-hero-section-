import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { T, SectionHeader } from './shared';

interface Stage {
  name: string;
  desc: string;
}

const STAGES: Stage[] = [
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
  }
];

export function Traceability(): React.ReactElement {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const ref = useRef<HTMLElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });

  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return (): void => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section
      id="traceability"
      ref={ref}
      style={{
        width: '100%',
        padding: isMobile ? '60px 18px' : '90px 5%',
        background: T.white,
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto'
        }}
      >
        {/* HEADER */}

        <SectionHeader
          badge="Supply Chain"
          title="End-to-End Traceability"
          subtitle="The platform tracks material movement at every stage of the circular supply chain."
        />

        {/* TRACEABILITY IMAGE */}

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
              : {
                  opacity: 0,
                  y: 25
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut'
          }}
          style={{
            width: '100%',
            marginBottom: isMobile ? 40 : 55,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            className="trace-image-wrapper"
            style={{
              width: '100%',
              background: '#F7F8FA',
              borderRadius: isMobile ? 14 : 20,
              border: `1px solid ${T.blueGreyLt}`,
              padding: isMobile ? 8 : 18,
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}
          >
            <img
              src="/images/traceability.png"
              alt="End-to-End Textile Traceability Supply Chain"
              className="traceability-image"
            />
          </div>
        </motion.div>

        {/* STAGES TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0
                }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: 0.35
          }}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? 22 : 30
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#23376D',
              marginBottom: 7
            }}
          >
            Circular Journey
          </div>

          <h3
            style={{
              margin: 0,
              fontSize: isMobile ? 22 : 26,
              fontWeight: 700,
              color: '#2D2D2D',
              letterSpacing: '-0.02em'
            }}
          >
            From Waste to New Product
          </h3>
        </motion.div>

        {/* STAGES */}

        <div
          className="trace-stages-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(3, minmax(0, 1fr))',
            gap: isMobile ? 15 : 20,
            width: '100%'
          }}
        >
          {STAGES.map((stage: Stage, index: number) => {
            const active: boolean = hovered === index;

            return (
              <motion.div
                key={stage.name}
                initial={{
                  opacity: 0,
                  y: 20
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
                  duration: 0.55,
                  delay: 0.45 + index * 0.08,
                  ease: 'easeOut'
                }}
                className={`trace-stage-card ${
                  active ? 'trace-stage-active' : ''
                }`}
                onMouseEnter={(): void => setHovered(index)}
                onMouseLeave={(): void => setHovered(null)}
                style={{
                  position: 'relative',
                  width: '100%',
                  minHeight: isMobile ? 150 : 165,
                  borderRadius: 17,
                  padding: 1,
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                  background: '#E6E8EC'
                }}
              >
                {/* RUNNING LIGHT */}

                <div className="running-border" />

                {/* CARD CONTENT */}

                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    minHeight: isMobile ? 148 : 163,
                    padding: isMobile ? '18px 18px' : '20px 21px',
                    borderRadius: 16,
                    background: '#FFFFFF',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}
                >
                  {/* TOP ROW */}

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 13
                    }}
                  >
                    {/* NUMBER */}

                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: active
                          ? '#23376D'
                          : '#F1F3F7',
                        color: active ? '#FFFFFF' : '#23376D',
                        fontSize: 11,
                        fontWeight: 700,
                        transition: 'all 0.3s ease',
                        flexShrink: 0
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* SMALL LINE */}

                    <div
                      style={{
                        flex: 1,
                        height: 1,
                        marginLeft: 12,
                        marginRight: 12,
                        background: active
                          ? 'linear-gradient(90deg, #23376D, transparent)'
                          : '#E6E8EC',
                        transition: 'all 0.3s ease'
                      }}
                    />

      
                    
                  </div>

                  {/* TITLE */}

                  <h4
                    style={{
                      margin: '0 0 7px 0',
                      fontSize: isMobile ? 15 : 16,
                      lineHeight: 1.3,
                      fontWeight: 700,
                      color: active ? '#23376D' : '#2D2D2D',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {stage.name}
                  </h4>

                  {/* DESCRIPTION */}

                  <p
                    style={{
                      margin: 0,
                      fontSize: isMobile ? 12 : 13,
                      lineHeight: 1.55,
                      color: '#7A7F89'
                    }}
                  >
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* STYLES */}

      <style>{`

        /* ================================
           TRACEABILITY IMAGE
        ================================= */

        .traceability-image {
          display: block;
          width: 100%;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        .trace-image-wrapper {
          transition:
            box-shadow 0.35s ease,
            transform 0.35s ease;
        }

        .trace-image-wrapper:hover {
          transform: translateY(-2px);
          box-shadow:
            0 12px 35px rgba(35, 55, 109, 0.08);
        }


        /* ================================
           STAGE CARD
        ================================= */

        .trace-stage-card {
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .trace-stage-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 14px 35px rgba(35, 55, 109, 0.10);
        }


        /* ================================
           RUNNING BORDER
        ================================= */

        .running-border {
          position: absolute;
          inset: -100%;
          width: 300%;
          height: 300%;

          background:
            conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 300deg,
              #23376D 325deg,
              #6BA89A 340deg,
              #B3C135 350deg,
              transparent 360deg
            );

          opacity: 0;
          transition: opacity 0.3s ease;

          animation:
            runningBorder 3.5s linear infinite;

          pointer-events: none;
        }

        .trace-stage-card:hover .running-border,
        .trace-stage-active .running-border {
          opacity: 1;
        }


        /* ================================
           RUNNING BORDER ANIMATION
        ================================= */

        @keyframes runningBorder {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }


        /* ================================
           TABLET
        ================================= */

        @media (min-width: 768px) and (max-width: 1024px) {

          #traceability {
            padding-left: 4% !important;
            padding-right: 4% !important;
          }

          .traceability-image {
            width: 100%;
            height: auto;
          }

          .trace-stages-grid {
            gap: 16px !important;
          }
        }


        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 767px) {

          #traceability {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          .traceability-image {
            width: 100%;
            height: auto;
          }

          .trace-stage-card {
            min-height: 150px;
          }
        }


        /* ================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 480px) {

          #traceability {
            padding-left: 14px !important;
            padding-right: 14px !important;
          }

          .trace-image-wrapper {
            padding: 6px !important;
            border-radius: 13px !important;
          }

          .trace-stage-card {
            border-radius: 15px;
          }

          .trace-stage-card > div:nth-child(2) {
            border-radius: 14px !important;
          }
        }


        /* ================================
           REDUCE MOTION
        ================================= */

        @media (prefers-reduced-motion: reduce) {

          .running-border {
            animation: none;
          }

          .trace-stage-card,
          .trace-image-wrapper {
            transition: none;
          }
        }

      `}</style>
    </section>
  );
}