import React, {
  useCallback,
  useState,
  useRef,
  useEffect
} from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { T, Icon, SectionHeader } from './shared';

const STAKEHOLDERS = [
  {
    label: 'Brand',
    angle: 270,
    desc: 'Global brands integrating recycled materials into collections.',
    iconName: 'brand'
  },
  {
    label: 'Manufacturer',
    angle: 330,
    desc: 'Textile mills and CMT factories logging waste streams.',
    iconName: 'factory'
  },
  {
    label: 'Waste\nHandler',
    angle: 30,
    desc: 'On-site collection and initial sorting partners.',
    iconName: 'recycle'
  },
  {
    label: 'Waste\nMerchant',
    angle: 90,
    desc: 'Aggregators who consolidate and transport materials.',
    iconName: 'truck'
  },
  {
    label: 'Pre\nProcessor',
    angle: 150,
    desc: 'Grading, cleaning, and fibre preparation facilities.',
    iconName: 'cog'
  },
  {
    label: 'End\nProcessor',
    angle: 210,
    desc: 'Recyclers converting waste into usable raw materials.',
    iconName: 'yarn'
  }
];

export function Stakeholders() {
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const activeIndex =
    selected !== null ? selected : hovered;

  const R = 170;

  const handleNodeInteract = useCallback((i: number) => {
    setSelected(i);
  }, []);

  return (
    <section
      id="stakeholders"
      ref={ref}
      style={{
        padding: '100px 5%',
        background: T.offWhite
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto'
        }}
      >
        <SectionHeader
          badge="Ecosystem"
          title="Our Circular Ecosystem"
          subtitle="Six stakeholder types working together on one connected platform."
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 48
          }}
        >
          <motion.div
            className="ww-stakeholder-diagram"
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    scale: 1
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            style={{
              position: 'relative',
              width: 420,
              height: 420,
              flexShrink: 0
            }}
          >
            <svg
              width={420}
              height={420}
              style={{
                position: 'absolute',
                inset: 0
              }}
            >
              {STAKEHOLDERS.map((s, i) => {
                const a = (s.angle * Math.PI) / 180;
                const x = 210 + R * Math.cos(a);
                const y = 210 + R * Math.sin(a);

                const active = activeIndex === i;

                return (
                  <motion.line
                    key={i}
                    x1={210}
                    y1={210}
                    x2={x}
                    y2={y}
                    stroke={active ? T.lime : T.blueGrey}
                    strokeWidth={active ? 2.5 : 1.5}
                    strokeOpacity={active ? 1 : 0.7}
                    strokeDasharray="5 4"
                    initial={{ opacity: 0 }}
                    animate={
                      inView
                        ? {
                            opacity: 1
                          }
                        : {}
                    }
                    transition={{
                      delay: 0.3 + i * 0.08
                    }}
                    style={{
                      transition:
                        'stroke .3s, stroke-width .3s, stroke-opacity .3s'
                    }}
                  />
                );
              })}
            </svg>

            {/* Center Circle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: 92,
                height: 92,
                borderRadius: '50%',
                background: `linear-gradient(135deg,${T.navy},${T.navyMid})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 10,
                zIndex: 2,
                boxShadow: `0 4px 28px rgba(35,55,109,0.32)`
              }}
            >
              <span
                style={{
                  color: '#fff',
                  fontSize: 9,
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '.04em',
                  lineHeight: 1.45
                }}
              >
                WIRE WASTE PLATFORM
              </span>
            </div>

            {STAKEHOLDERS.map((s, i) => {
              const a = (s.angle * Math.PI) / 180;
              const x = 210 + R * Math.cos(a);
              const y = 210 + R * Math.sin(a);

              const active = activeIndex === i;

              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          scale: 1
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.5 + i * 0.1,
                    type: 'spring'
                  }}
                  onMouseEnter={() => {
                    if (!isMobile && selected === null) {
                      setHovered(i);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMobile && selected === null) {
                      setHovered(null);
                    }
                  }}
                  onClick={() => {
                    handleNodeInteract(i);
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    handleNodeInteract(i);
                  }}
                  style={{
                    position: 'absolute',
                    left: x - 37,
                    top: y - 37,
                    width: 74,
                    height: 74,
                    borderRadius: '50%',
                    background: active ? T.navy : T.white,
                    border: `2.5px solid ${
                      active ? T.lime : T.blueGrey
                    }`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    cursor: 'pointer',
                    userSelect: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    boxShadow: active
                      ? `0 6px 28px rgba(35,55,109,0.28)`
                      : '0 2px 12px rgba(0,0,0,0.07)',
                    transition: 'all .25s',
                    zIndex: 3
                  }}
                >
                  <Icon
                    name={s.iconName}
                    size={22}
                    color={active ? T.lime : T.accent}
                    strokeWidth={1.6}
                  />

                  <span
  style={{
    fontSize: 9,
    fontWeight: 600,
    textAlign: 'center',
    color: active ? '#fff' : T.textMuted,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    lineHeight: 1.15,
    whiteSpace: 'pre-line',
    letterSpacing: '0.01em',
    padding: '0 4px'
  }}
>
  {s.label}
</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Detail Panel */}
          <div
            style={{
              maxWidth: 340,
              flex: '1 1 280px',
              minHeight: 200
            }}
          >
            <AnimatePresence mode="wait">
              {activeIndex !== null ? (
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    x: 14
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  exit={{
                    opacity: 0,
                    x: -14
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  style={{
                    background: T.white,
                    border: `1px solid ${T.blueGreyLt}`,
                    borderRadius: 18,
                    padding: '32px 28px',
                    boxShadow:
                      '0 8px 32px rgba(0,0,0,0.10)'
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: T.navy,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 18
                    }}
                  >
                    <Icon
                      name={
                        STAKEHOLDERS[activeIndex].iconName
                      }
                      size={26}
                      color={T.lime}
                      strokeWidth={1.6}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      color: T.textPrimary,
                      marginBottom: 12,
                      fontFamily: "'Fraunces', serif"
                    }}
                  >
                    {STAKEHOLDERS[activeIndex].label}
                  </h3>

                  <p
                    style={{
                      fontSize: 15,
                      color: T.textSec,
                      lineHeight: 1.78
                    }}
                  >
                    {STAKEHOLDERS[activeIndex].desc}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    color: T.textMuted,
                    fontSize: 15,
                    fontStyle: 'italic',
                    lineHeight: 1.78,
                    padding: '32px 28px',
                    background: T.white,
                    borderRadius: 18,
                    border: `1px dashed ${T.blueGreyLt}`,
                    textAlign: 'center'
                  }}
                >
                  Hover or tap any node to learn more about
                  each stakeholder's role in the circular
                  ecosystem.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}