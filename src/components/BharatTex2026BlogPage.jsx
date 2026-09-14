import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

import {
  CalendarDays,
  MapPin,
  ArrowDown,
  ArrowUpRight,
  ArrowLeft,
  Globe2,
  Recycle,
  Users,
  Sparkles,
  Building2,
  MoveRight,
} from "lucide-react";


/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -55,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 55,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

function BharatTex2026BlogPage() {
  return (
    <>
      <Navbar />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative bg-[#F4F1E8] overflow-hidden pt-24 sm:pt-28">

        {/* Animated decorative circle */}

        <motion.div
          className="absolute top-20 right-[-120px] w-[350px] h-[350px] rounded-full border border-[#B3C135]/30"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        <motion.div
          className="absolute top-28 right-[-80px] w-[250px] h-[250px] rounded-full border border-[#23376D]/10"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] rounded-full bg-[#B3C135]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">

            {/* =================================================
                HERO LEFT CONTENT
            ================================================== */}

           <motion.div 
  className="relative z-10 py-12 lg:py-20" 
  variants={fadeLeft} 
  initial="hidden" 
  animate="visible" 
>
  {/* Back to Journal button */}
  <Link 
    to="/#blog" 
    className="inline-flex items-center gap-2 text-sm font-medium text-[#23376D] transition-colors hover:text-[#4A7C6F] mb-8" 
  > 
    <ArrowLeft className="h-4 w-4" /> 
    Back to Journal 
  </Link>

  {/* Existing Bharat Tex 2026 section starts here */}
  <motion.div 
    className="flex items-center gap-3 mb-7"
  ></motion.div>

              <motion.div
                className="flex items-center gap-3 mb-7"
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
              >

                <motion.div
                  className="h-[2px] bg-[#B3C135]"
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: 40,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25,
                  }}
                />

                <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#23376D]">
                  Bharat Tex 2026
                </span>

              </motion.div>


              <motion.h1
                className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold tracking-[-0.04em] text-[#23376D] leading-[0.95]"
                variants={fadeUp}
              >

                Where

                <motion.span
                  className="block text-[#4F8A42]"
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25,
                  }}
                >
                  Textiles
                </motion.span>

                <motion.span
                  className="block"
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.45,
                  }}
                >
                  Connect.
                </motion.span>

              </motion.h1>


              <motion.p
                className="mt-7 text-lg sm:text-xl text-gray-600 leading-8 max-w-xl"
                variants={fadeUp}
              >
                A look back at Wire Waste's presence at Bharat Tex 2026,
                bringing together conversations around textiles,
                circularity, sustainability, and responsible value chains.
              </motion.p>


              {/* EVENT DETAILS */}

              <motion.div
                className="mt-9 flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >

                {/* DATE */}

                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                    scale: 1.025,
                  }}
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100"
                >

                  <motion.div
                    animate={{
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <CalendarDays
                      size={18}
                      className="text-[#4F8A42]"
                    />
                  </motion.div>

                  <div>

                    <p className="text-[10px] uppercase tracking-wider text-gray-400">
                      Event
                    </p>

                    <p className="text-sm font-bold text-[#23376D]">
                      14–17 July 2026
                    </p>

                  </div>

                </motion.div>


                {/* LOCATION */}

                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                    scale: 1.025,
                  }}
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100"
                >

                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <MapPin
                      size={18}
                      className="text-[#4F8A42]"
                    />
                  </motion.div>

                  <div>

                    <p className="text-[10px] uppercase tracking-wider text-gray-400">
                      Location
                    </p>

                    <p className="text-sm font-bold text-[#23376D]">
                      Bharat Mandapam, New Delhi
                    </p>

                  </div>

                </motion.div>

              </motion.div>


              {/* SCROLL INDICATOR */}

              <motion.div
                className="mt-10 flex items-center gap-3 text-[#23376D]"
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <div className="w-9 h-9 rounded-full border border-[#23376D]/20 flex items-center justify-center">

                  <ArrowDown size={16} />

                </div>

                <span className="text-sm font-semibold">
                  Explore the experience
                </span>

              </motion.div>

            </motion.div>


            {/* =================================================
                HERO IMAGE
            ================================================== */}

            <motion.div
              className="relative"
              variants={fadeRight}
              initial="hidden"
              animate="visible"
            >

              <motion.div
                className="absolute -top-5 -right-5 w-32 h-32 bg-[#B3C135] rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />


              <motion.div
                className="relative overflow-hidden rounded-[2rem]"
                whileHover={{
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.5,
                }}
              >

                <motion.img
                  src="/images/bharat-tex-2026-1.jpg"
                  alt="Bharat Mandapam at Bharat Tex 2026"
                  className="w-full h-[500px] sm:h-[620px] object-cover rounded-[2rem] shadow-2xl"
                  initial={{
                    scale: 1.08,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />


                {/* FLOATING CARD */}

                <motion.div
                  className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-72 bg-[#23376D]/95 backdrop-blur-md text-white rounded-2xl p-5 shadow-2xl"
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                        New Delhi
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        Bharat Mandapam
                      </p>

                    </div>

                    <motion.div
                      animate={{
                        rotate: [0, 8, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      <Building2
                        size={24}
                        className="text-[#B3C135]"
                      />
                    </motion.div>

                  </div>

                  <div className="mt-4 h-px bg-white/10" />

                  <p className="mt-4 text-sm text-white/65 leading-6">
                    Four days of textile conversations,
                    connections and opportunities.
                  </p>

                </motion.div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EVENT INTRODUCTION
      ====================================================== */}

      <section className="py-20 sm:py-28 bg-white">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <motion.div
            className="grid lg:grid-cols-[0.35fr_1fr] gap-10 lg:gap-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <motion.div variants={fadeLeft}>

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4F8A42]">
                The Event
              </p>

              <div className="mt-5 hidden lg:block">

                <motion.div
                  className="w-px h-32 bg-[#E6E8EC] ml-2"
                  initial={{
                    scaleY: 0,
                    transformOrigin: "top",
                  }}
                  whileInView={{
                    scaleY: 1,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                />

                <motion.div
                  className="w-5 h-5 rounded-full border-4 border-[#B3C135] mt-[-5px]"
                  animate={{
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

              </div>

            </motion.div>


            <motion.div variants={fadeRight}>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#23376D] leading-tight">
                Four days at the heart of India's textile conversation.
              </h2>

              <div className="mt-7 space-y-5 text-gray-600 text-base sm:text-lg leading-8">

                <p>
                  From 14–17 July 2026, Bharat Mandapam in New Delhi
                  became a meeting point for the textile ecosystem,
                  bringing together businesses, professionals,
                  innovators, and stakeholders from across the industry.
                </p>

                <p>
                  Bharat Tex 2026 offered an opportunity to step into
                  conversations shaping the future of textiles — from
                  responsible production and sustainability to circularity,
                  innovation, and evolving value chains.
                </p>

                <p>
                  For Wire Waste, the event was an opportunity to connect
                  with people across the textile ecosystem and continue
                  conversations around creating more transparent and
                  responsible material flows.
                </p>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          EVENT NUMBERS
      ====================================================== */}

      <section className="bg-[#23376D] text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {[
              {
                title: "When",
                value: "14–17",
                sub: "July 2026",
              },
              {
                title: "Where",
                value: "New Delhi",
                sub: "Bharat Mandapam",
              },
              {
                title: "Focus",
                value: "Textiles",
                sub: "Circularity & Innovation",
              },
              {
                title: "Purpose",
                value: "Connect",
                sub: "Learn & Collaborate",
              },
            ].map((item, index) => (

              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  backgroundColor: "rgba(255,255,255,0.04)",
                }}
                className={`px-6 py-9 lg:py-12 ${
                  index !== 3
                    ? "border-b sm:border-b-0 sm:border-r"
                    : ""
                } border-white/10`}
              >

                <p className="text-[#B3C135] text-sm font-bold uppercase tracking-[0.2em]">
                  {item.title}
                </p>

                <motion.p
                  className="mt-3 text-2xl font-bold"
                  whileHover={{
                    x: 5,
                  }}
                >
                  {item.value}
                </motion.p>

                <p className="mt-1 text-white/60">
                  {item.sub}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE SECTION
      ====================================================== */}

      <section className="py-20 sm:py-28 bg-[#F7F8FA]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >

            {/* IMAGE */}

            <motion.div
              className="relative"
              variants={fadeLeft}
            >

              <motion.div
                className="absolute -top-5 -left-5 w-28 h-28 bg-[#B3C135] rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />

              <motion.img
                src="/images/bharat-tex-2026-2.jpg"
                alt="Wire Waste team at Bharat Tex 2026"
                className="relative w-full aspect-[4/3] object-cover rounded-[2rem] shadow-xl"
                whileHover={{
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.5,
                }}
              />


              {/* IMAGE LABEL */}

              <motion.div
                className="absolute bottom-5 left-5 bg-white rounded-xl px-5 py-4 shadow-xl"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
              >

                <div className="flex items-center gap-3">

                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#EEF5E5] flex items-center justify-center"
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                  >

                    <Users
                      size={19}
                      className="text-[#4F8A42]"
                    />

                  </motion.div>

                  <div>

                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Wire Waste
                    </p>

                    <p className="font-bold text-[#23376D]">
                      Connecting with the ecosystem
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>


            {/* CONTENT */}

            <motion.div variants={fadeRight}>

              <div className="flex items-center gap-3">

                <span className="text-5xl font-bold text-[#E3E6EA]">
                  01
                </span>

                <motion.div
                  className="h-px bg-[#B3C135]"
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 48,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                />

              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#4F8A42]">
                Our Experience
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#23376D] leading-tight">
                Conversations that move circularity forward.
              </h2>

              <div className="mt-6 space-y-5 text-gray-600 leading-8">

                <p>
                  Being part of a large textile gathering creates
                  opportunities to listen, exchange perspectives,
                  understand industry needs, and build new relationships.
                </p>

                <p>
                  At Bharat Tex 2026, the Wire Waste team engaged with
                  the wider textile community and shared perspectives
                  around sustainability, circularity, and responsible
                  material management.
                </p>

              </div>


              {/* EXPERIENCE POINTS */}

              <motion.div
                className="mt-8 space-y-4"
                variants={staggerContainer}
              >

                {[
                  {
                    icon: <Globe2 size={17} />,
                    text: "Connecting across the textile value chain",
                  },
                  {
                    icon: <Sparkles size={17} />,
                    text: "Exploring new possibilities",
                  },
                  {
                    icon: <Users size={17} />,
                    text: "Building meaningful relationships",
                  },
                ].map((item) => (

                  <motion.div
                    key={item.text}
                    variants={fadeUp}
                    className="flex items-center gap-4"
                    whileHover={{
                      x: 8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >

                    <motion.div
                      className="w-9 h-9 rounded-full bg-[#EEF5E5] flex items-center justify-center"
                      whileHover={{
                        scale: 1.12,
                        rotate: 5,
                      }}
                    >

                      <span className="text-[#4F8A42]">
                        {item.icon}
                      </span>

                    </motion.div>

                    <span className="text-sm font-semibold text-[#23376D]">
                      {item.text}
                    </span>

                  </motion.div>

                ))}

              </motion.div>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          QUOTE SECTION
      ====================================================== */}

      <section className="relative py-20 sm:py-28 overflow-hidden bg-[#F4F1E8]">

        <motion.div
          className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#B3C135]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >

          <motion.div
            className="mx-auto w-14 h-14 rounded-full bg-[#23376D] flex items-center justify-center"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            <Recycle
              size={25}
              className="text-[#B3C135]"
            />

          </motion.div>

          <p className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#23376D] leading-tight">

            The future of textiles will be shaped by

            <span className="text-[#4F8A42]">
              {" "}how we connect people, materials and ideas.
            </span>

          </p>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-7">
            Events such as Bharat Tex create valuable spaces for these
            connections to happen and for the industry to imagine
            what comes next.
          </p>

        </motion.div>

      </section>


      {/* =====================================================
          CIRCULAR JOURNEY
      ====================================================== */}

      <section className="py-20 sm:py-28 bg-white">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4F8A42]">
              Looking Beyond The Event
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#23376D]">
              From conversations to meaningful action.
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              The value of an event continues long after the exhibition
              closes. The conversations, relationships, and ideas
              developed can become the foundation for future collaboration.
            </p>

          </motion.div>


          <div className="mt-16 relative">

            {/* CONNECTING LINE */}

            <motion.div
              className="hidden md:block absolute left-[13%] right-[13%] top-[44px] h-px bg-[#DDE2E7]"
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            />


            <motion.div
              className="grid md:grid-cols-4 gap-8 relative"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              {/* CONNECT */}

              <motion.div
                className="text-center"
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
              >

                <motion.div
                  className="relative mx-auto w-[88px] h-[88px] rounded-full bg-[#EEF5E5] flex items-center justify-center"
                  whileHover={{
                    scale: 1.12,
                    rotate: 5,
                  }}
                >

                  <Users
                    size={28}
                    className="text-[#4F8A42]"
                  />

                </motion.div>

                <h3 className="mt-5 font-bold text-[#23376D]">
                  Connect
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                  Meet people across the ecosystem.
                </p>

              </motion.div>


              {/* DISCOVER */}

              <motion.div
                className="text-center"
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
              >

                <motion.div
                  className="relative mx-auto w-[88px] h-[88px] rounded-full bg-[#23376D] flex items-center justify-center"
                  whileHover={{
                    scale: 1.12,
                    rotate: -5,
                  }}
                >

                  <Globe2
                    size={28}
                    className="text-[#B3C135]"
                  />

                </motion.div>

                <h3 className="mt-5 font-bold text-[#23376D]">
                  Discover
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                  Learn from new perspectives.
                </p>

              </motion.div>


              {/* IMAGINE */}

              <motion.div
                className="text-center"
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
              >

                <motion.div
                  className="relative mx-auto w-[88px] h-[88px] rounded-full bg-[#EEF5E5] flex items-center justify-center"
                  whileHover={{
                    scale: 1.12,
                    rotate: 5,
                  }}
                >

                  <Sparkles
                    size={28}
                    className="text-[#4F8A42]"
                  />

                </motion.div>

                <h3 className="mt-5 font-bold text-[#23376D]">
                  Imagine
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                  Explore new possibilities.
                </p>

              </motion.div>


              {/* ACT */}

              <motion.div
                className="text-center"
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
              >

                <motion.div
                  className="relative mx-auto w-[88px] h-[88px] rounded-full bg-[#23376D] flex items-center justify-center"
                  whileHover={{
                    scale: 1.12,
                    rotate: -5,
                  }}
                >

                  <Recycle
                    size={28}
                    className="text-[#B3C135]"
                  />

                </motion.div>

                <h3 className="mt-5 font-bold text-[#23376D]">
                  Act
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                  Turn ideas into progress.
                </p>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOOKING AHEAD
      ====================================================== */}

      <section className="py-20 sm:py-28 bg-[#23376D] text-white">

        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <motion.div
            className="grid md:grid-cols-[1fr_auto] gap-10 items-end"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <motion.div variants={fadeLeft}>

              <p className="text-[#B3C135] text-sm font-bold uppercase tracking-[0.2em]">
                Looking Ahead
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Carrying the conversations forward.
              </h2>

              <p className="mt-6 max-w-2xl text-white/70 text-lg leading-8">
                Bharat Tex 2026 was another opportunity to connect
                with the textile community, exchange ideas, and strengthen
                our commitment to a more transparent and circular textile
                ecosystem.
              </p>

              <p className="mt-5 max-w-2xl text-white/60 leading-7">
                As the industry continues to evolve, we look forward to
                building on these conversations and creating meaningful
                connections that can contribute to a more sustainable future.
              </p>

            </motion.div>


            <motion.div
              variants={fadeRight}
              className="hidden md:flex w-24 h-24 rounded-full border border-white/20 items-center justify-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.15,
                rotate: 10,
              }}
            >

              <ArrowUpRight
                size={32}
                className="text-[#B3C135]"
              />

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL EVENT CARD
      ====================================================== */}

      <section className="py-14 bg-white">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <motion.div
            className="relative overflow-hidden rounded-[2rem] bg-[#F4F1E8] p-8 sm:p-10 lg:p-12"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              y: -5,
            }}
          >

            <motion.div
              className="absolute right-[-60px] top-[-60px] w-48 h-48 rounded-full border-[20px] border-[#B3C135]/10"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />


            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

              <div>

                <div className="flex items-center gap-3">

                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#23376D] flex items-center justify-center"
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  >

                    <Recycle
                      size={19}
                      className="text-[#B3C135]"
                    />

                  </motion.div>

                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4F8A42]">
                    Bharat Tex 2026
                  </p>

                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-[#23376D]">
                  14–17 July · Bharat Mandapam · New Delhi
                </h3>

                <p className="mt-3 text-gray-600">
                  Connecting textiles, people and possibilities.
                </p>

              </div>


              <motion.div
                className="flex items-center gap-2 text-[#23376D] font-semibold"
                whileHover={{
                  x: 8,
                }}
              >

                <span>
                  Wire Waste
                </span>

                <MoveRight
                  size={20}
                  className="text-[#4F8A42]"
                />

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>


      <Footer />
    </>
  );
}

export default BharatTex2026BlogPage;