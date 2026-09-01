import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import {
  Calendar,
  BookOpen,
  Recycle,
  ScanLine,
  Users,
  Leaf,
  Quote,
  ExternalLink,
  ArrowUpRight,
  ChevronRight,
  FileText,
} from "lucide-react";

/* =========================
   Animation Variants
========================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
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
      duration: 0.7,
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

/* =========================
   Component
========================= */

function ICCEBlogPage() {
  const journalUrl =
    "https://www.linkedin.com/company/wire-waste/posts/?feedView=all";

  return (
    <>
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="relative overflow-hidden bg-[#F5F7F2] pt-28 sm:pt-32 pb-16 sm:pb-24">

        {/* Animated Background */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B3C135]/20 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#23376D]/10 blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* HERO CONTENT */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#23376D] text-sm font-semibold mb-7"
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 25px rgba(35,55,109,0.08)",
                }}
              >
                <BookOpen size={16} />
                <span>ICCE Journal Publication</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#23376D] leading-[1.08]">

                Scaling Up

                <motion.span
                  className="block text-[#4F8A42]"
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                  }}
                >
                  Post-Industrial
                </motion.span>

                <span className="block">
                  & Pre-Consumer
                </span>

                <span className="block">
                  Textile Waste
                </span>

              </h1>

              <motion.p
                className="mt-6 text-xl sm:text-2xl font-medium text-gray-600 leading-relaxed"
                variants={fadeUp}
              >
                Unlocking Circular Economy Potential
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-7 text-sm text-gray-500"
                variants={fadeUp}
              >

                <div className="flex items-center gap-2">
                  <Calendar size={17} />
                  <span>07 August 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <FileText size={17} />
                  <span>ICCE Journal</span>
                </div>

                <div className="flex items-center gap-2">
                  <BookOpen size={17} />
                  <span>Pages 30–36</span>
                </div>

              </motion.div>

              <motion.p
                className="mt-7 max-w-2xl text-base sm:text-lg text-gray-600 leading-8"
                variants={fadeUp}
              >
                Exploring how traceability, circular product design, and
                collaboration can help scale the reuse of post-industrial
                and pre-consumer textile waste.
              </motion.p>

              {/* AUTHOR */}

              <motion.div
                className="flex items-center gap-4 mt-8"
                variants={fadeUp}
              >

                <motion.div
                  className="w-12 h-12 rounded-full bg-[#23376D] flex items-center justify-center text-white font-bold"
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                >
                  KL
                </motion.div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Karthikeyan Lakshmanan
                  </p>

                  <p className="text-sm text-gray-500">
                    Circular Economy Lead · Wire Waste
                  </p>
                </div>

              </motion.div>

            </motion.div>

            {/* JOURNAL IMAGE */}

            <motion.div
              className="relative flex justify-center lg:justify-end"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              <div className="absolute w-[78%] h-[88%] bg-[#23376D] rounded-[2rem] rotate-6 opacity-10" />

              <motion.div
                className="relative w-full max-w-md"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <motion.div
                  className="bg-white p-3 sm:p-4 rounded-[1.5rem] shadow-2xl"
                  whileHover={{
                    scale: 1.025,
                    rotate: -1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >

                  <img
                    src="/images/icce-journal-cover.jpg"
                    alt="International Council for Circular Economy Journal"
                    className="w-full rounded-xl object-cover"
                  />

                </motion.div>

                <motion.div
                  className="absolute -bottom-5 -left-5 sm:-left-8 bg-[#23376D] text-white rounded-2xl px-5 py-4 shadow-xl"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                  }}
                >

                  <p className="text-xs uppercase tracking-wider text-white/70">
                    Featured Article
                  </p>

                  <p className="text-lg font-bold">
                    Pages 30–36
                  </p>

                </motion.div>

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================= */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#4F8A42]">
              A Publication Milestone
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#23376D]">
              Wire Waste Featured in the ICCE Journal
            </h2>

          </motion.div>

          <motion.div
            className="space-y-6 text-gray-600 text-base sm:text-lg leading-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <motion.p variants={fadeUp}>
              We’re proud to share that Wire Waste’s article,
              <strong className="text-gray-900">
                {" "}
                “Scaling Up Post-Industrial and Pre-Consumer Textile Waste:
                Unlocking Circular Economy Potential,”
              </strong>
              has been published in the International Council for Circular
              Economy (ICCE) Journal.
            </motion.p>

            <motion.p variants={fadeUp}>
              Written by{" "}
              <strong className="text-gray-900">
                Karthikeyan Lakshmanan, Circular Economy Lead at Wire Waste
              </strong>
              , the article explores how traceability, circular product
              design, and collaboration can help scale the reuse of
              post-industrial and pre-consumer textile waste.
            </motion.p>

            <motion.p variants={fadeUp}>
              The publication contributes to the wider conversation around
              how the textile industry can move towards more circular,
              transparent, and resource-efficient systems.
            </motion.p>

          </motion.div>

        </div>
      </section>

      {/* =========================
          QUOTE
      ========================= */}

      <section className="py-14 sm:py-20 bg-[#23376D] text-white">

        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >

          <motion.div variants={scaleIn}>
            <Quote
              size={42}
              className="mx-auto mb-6 text-[#B3C135]"
            />
          </motion.div>

          <motion.p
            className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed"
            variants={fadeUp}
          >
            Traceability, circular product design, and collaboration
            can help unlock the potential of textile waste.
          </motion.p>

        </motion.div>

      </section>

      {/* =========================
          ARTICLE FOCUS
      ========================= */}

      <section className="py-16 sm:py-24 bg-[#F7F8FA]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="max-w-3xl mb-12"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#4F8A42]">
              Article Focus
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#23376D]">
              Three Pathways Towards a More Circular Textile Industry
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              The article explores key approaches that can support the
              transition from linear textile waste management towards
              more circular material systems.
            </p>

          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {/* TRACEABILITY */}

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >

              <motion.div
                className="w-14 h-14 rounded-2xl bg-[#EAF0FF] flex items-center justify-center text-[#23376D] mb-6"
                whileHover={{
                  rotate: 6,
                  scale: 1.08,
                }}
              >
                <ScanLine size={27} />
              </motion.div>

              <h3 className="text-xl font-bold text-[#23376D]">
                Traceability
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Traceability can improve visibility across textile
                material flows, helping stakeholders understand where
                waste originates, where it moves, and how it is
                ultimately processed.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#4F8A42]">
                <span>Improve visibility</span>
                <ChevronRight size={16} />
              </div>

            </motion.div>

            {/* CIRCULAR DESIGN */}

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >

              <motion.div
                className="w-14 h-14 rounded-2xl bg-[#EEF5E5] flex items-center justify-center text-[#4F8A42] mb-6"
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
              >
                <Recycle size={27} />
              </motion.div>

              <h3 className="text-xl font-bold text-[#23376D]">
                Circular Product Design
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Designing products with reuse, recovery, and recycling
                in mind can help retain the value of materials and
                support longer product and material lifecycles.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#4F8A42]">
                <span>Design for circularity</span>
                <ChevronRight size={16} />
              </div>

            </motion.div>

            {/* COLLABORATION */}

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >

              <motion.div
                className="w-14 h-14 rounded-2xl bg-[#F1ECF9] flex items-center justify-center text-[#6C4A8C] mb-6"
                whileHover={{
                  rotate: -6,
                  scale: 1.08,
                }}
              >
                <Users size={27} />
              </motion.div>

              <h3 className="text-xl font-bold text-[#23376D]">
                Collaboration
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Strong collaboration between brands, manufacturers,
                waste handlers, processors, recyclers, and other
                stakeholders can create stronger circular material
                flows.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#4F8A42]">
                <span>Connect the ecosystem</span>
                <ChevronRight size={16} />
              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* =========================
          FROM WASTE TO RESOURCE
      ========================= */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#4F8A42]">
                From Waste to Resource
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#23376D] leading-tight">
                Rethinking Textile Waste
              </h2>

              <div className="mt-6 space-y-5 text-gray-600 leading-8">

                <p>
                  Post-industrial and pre-consumer textile waste
                  represents an opportunity to retain valuable materials
                  within the textile ecosystem instead of allowing them
                  to become lost resources.
                </p>

                <p>
                  Unlocking this potential requires more than simply
                  collecting waste. It requires systems that can connect
                  material flows, improve transparency, and support
                  responsible reuse and recovery.
                </p>

                <p>
                  Traceability, circular product design, and collaboration
                  can work together to create more efficient and
                  transparent textile value chains.
                </p>

              </div>

            </motion.div>

            <motion.div
              className="relative"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              <motion.div
                className="rounded-[2rem] bg-[#F3F6EA] p-8 sm:p-10"
                whileHover={{
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                <motion.div
                  className="grid grid-cols-2 gap-5"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                >

                  {/* RECOVER */}

                  <motion.div
                    variants={fadeUp}
                    whileHover={{
                      y: -5,
                    }}
                    className="bg-white rounded-2xl p-5 shadow-sm"
                  >

                    <Leaf
                      className="text-[#4F8A42]"
                      size={28}
                    />

                    <p className="mt-4 font-bold text-[#23376D]">
                      Recover
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      Keep valuable materials in use.
                    </p>

                  </motion.div>

                  {/* TRACE */}

                  <motion.div
                    variants={fadeUp}
                    whileHover={{
                      y: -5,
                    }}
                    className="bg-white rounded-2xl p-5 shadow-sm"
                  >

                    <ScanLine
                      className="text-[#23376D]"
                      size={28}
                    />

                    <p className="mt-4 font-bold text-[#23376D]">
                      Trace
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      Improve material visibility.
                    </p>

                  </motion.div>

                  {/* REUSE */}

                  <motion.div
                    variants={fadeUp}
                    whileHover={{
                      y: -5,
                    }}
                    className="bg-white rounded-2xl p-5 shadow-sm"
                  >

                    <Recycle
                      className="text-[#4F8A42]"
                      size={28}
                    />

                    <p className="mt-4 font-bold text-[#23376D]">
                      Reuse
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      Extend material lifecycles.
                    </p>

                  </motion.div>

                  {/* COLLABORATE */}

                  <motion.div
                    variants={fadeUp}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    className="bg-[#23376D] rounded-2xl p-5 shadow-sm text-white"
                  >

                    <Users
                      size={28}
                      className="text-[#B3C135]"
                    />

                    <p className="mt-4 font-bold">
                      Collaborate
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      Connect the textile ecosystem.
                    </p>

                  </motion.div>

                </motion.div>

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================
          COLLABORATION
      ========================= */}

      <section className="py-16 sm:py-24 bg-[#F7F8FA]">

        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#4F8A42]">
            Collaboration Matters
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#23376D]">
            Circularity Requires a Connected Ecosystem
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Scaling textile circularity requires collaboration across
            the value chain. Every stakeholder has a role in creating
            more transparent and effective material flows.
          </p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >

            {[
              "Brands",
              "Manufacturers",
              "Waste Handlers",
              "Processors",
              "Recyclers",
              "Circular Economy Leaders",
            ].map((item) => (

              <motion.span
                key={item}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                className="px-5 py-3 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm cursor-default"
              >
                {item}
              </motion.span>

            ))}

          </motion.div>

        </motion.div>

      </section>

      {/* =========================
          JOURNAL CTA
      ========================= */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <motion.div
            className="relative overflow-hidden rounded-[2rem] bg-[#23376D]"
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <motion.div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#B3C135]/20 blur-2xl"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/5 blur-2xl" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center p-8 sm:p-12 lg:p-16">

              {/* JOURNAL COVER */}

              <div className="flex justify-center">

                <motion.div
                  className="w-64 sm:w-72 bg-white p-3 rounded-2xl shadow-2xl rotate-[-3deg]"
                  initial={{
                    opacity: 0,
                    x: -40,
                    rotate: -8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotate: -3,
                  }}
                  whileHover={{
                    rotate: 0,
                    scale: 1.04,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  <img
                    src="/images/icce-journal-cover.jpg"
                    alt="ICCE Journal"
                    className="w-full rounded-xl"
                  />

                </motion.div>

              </div>

              {/* CTA CONTENT */}

              <motion.div
                className="text-white"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
              >

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium">
                  <BookOpen size={16} />
                  International Council for Circular Economy
                </span>

                <h2 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight">
                  Read the Full Journal
                </h2>

                <p className="mt-5 text-white/75 leading-7">
                  Our article is available in the International Council
                  for Circular Economy Journal on pages 30–36.
                </p>

                <div className="mt-7 space-y-3 text-sm text-white/80">

                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#B3C135]" />
                    <span>
                      Article: Pages 30–36
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#B3C135]" />
                    <span>
                      Author: Karthikeyan Lakshmanan
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#B3C135]" />
                    <span>
                      Circular Economy Lead, Wire Waste
                    </span>
                  </div>

                </div>

                <motion.a
                  href={journalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.04,
                    x: 3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="inline-flex items-center gap-2 mt-9 px-6 py-3.5 rounded-xl bg-[#B3C135] text-[#23376D] font-bold hover:bg-white transition-all duration-300"
                >
                  Read the Full Journal
                  <ExternalLink size={18} />
                </motion.a>

              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =========================
          CONGRATULATIONS
      ========================= */}

      <section className="py-16 sm:py-24 bg-[#F5F7F2]">

        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >

          <motion.div
            className="w-16 h-16 mx-auto rounded-full bg-[#23376D] flex items-center justify-center text-white text-xl font-bold"
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
          >
            KL
          </motion.div>

          <span className="block mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#4F8A42]">
            A Moment to Celebrate
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#23376D]">
            Congratulations, Karthikeyan!
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Congratulations to Karthikeyan Lakshmanan on the publication
            of this article in the International Council for Circular
            Economy (ICCE) Journal.
          </p>

          <p className="mt-4 text-gray-600 leading-7">
            This publication reflects the importance of continuing the
            conversation around textile circularity, traceability,
            circular product design, and collaboration.
          </p>

          <motion.div
            className="mt-8 inline-flex items-center gap-2 text-[#4F8A42] font-semibold"
            whileHover={{
              y: -3,
            }}
          >
            <Leaf size={20} />
            <span>
              Building a more circular textile future
            </span>
          </motion.div>

        </motion.div>

      </section>

      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="py-14 bg-white border-t border-gray-100">

        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

            <div>

              <p className="text-sm font-semibold text-[#4F8A42]">
                FEATURED PUBLICATION
              </p>

              <h3 className="mt-1 text-2xl font-bold text-[#23376D]">
                Scaling Up Textile Waste Circularity
              </h3>

              <p className="mt-2 text-gray-500">
                Read the full article in the ICCE Journal.
              </p>

            </div>

            <motion.a
              href={journalUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                x: 3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#23376D] text-white font-semibold hover:bg-[#1a2b57] transition-all"
            >
              Read Journal
              <ArrowUpRight size={18} />
            </motion.a>

          </div>

        </motion.div>

      </section>

      <Footer />
    </>
  );
}

export default ICCEBlogPage;