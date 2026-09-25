import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion, useReducedMotion } from "framer-motion";

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
   PERFORMANCE-FRIENDLY ANIMATION SETTINGS
   ========================================================= */

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const viewport = {
  once: true,
  amount: 0.15,
};

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

function BharatTex2026BlogPage() {
  const shouldReduceMotion = useReducedMotion();

  const reducedFadeUp = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : fadeUp;

  const reducedFadeLeft = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : fadeLeft;

  const reducedFadeRight = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : fadeRight;

  return (
    <>
      <Navbar />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F4F1E8] pt-24 sm:pt-28">

        {/* Static decorative circles */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 right-[-120px] h-[350px] w-[350px] rounded-full border border-[#B3C135]/30"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-28 right-[-80px] h-[250px] w-[250px] rounded-full border border-[#23376D]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-[250px] w-[250px] rounded-full bg-[#B3C135]/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            {/* HERO LEFT CONTENT */}

            <motion.div
              className="relative z-10 py-12 lg:py-20"
              variants={reducedFadeLeft}
              initial="hidden"
              animate="visible"
            >

              {/* Back to Journal */}

              <Link
                to="/#blog"
                className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#23376D] transition-colors duration-200 hover:text-[#4A7C6F]"
              >
                <ArrowLeft
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
                />

                Back to Journal
              </Link>

              {/* Event label */}

              <motion.div
                className="mb-7 flex items-center gap-3"
                variants={reducedFadeUp}
              >
                <div className="h-[2px] w-10 bg-[#B3C135]" />

                <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#23376D]">
                  Bharat Tex 2026
                </span>
              </motion.div>

              {/* Heading */}

              <motion.h1
                className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[#23376D] sm:text-6xl lg:text-[5.5rem]"
                variants={reducedFadeUp}
              >
                Where

                <span className="block text-[#4F8A42]">
                  Textiles
                </span>

                <span className="block">
                  Connect.
                </span>
              </motion.h1>

              {/* Description */}

              <motion.p
                className="mt-7 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl"
                variants={reducedFadeUp}
              >
                A look back at Wire Waste&apos;s presence at Bharat Tex 2026,
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
                  variants={reducedFadeUp}
                  className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex-shrink-0">
                    <CalendarDays
                      size={18}
                      className="text-[#4F8A42]"
                    />
                  </div>

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
                  variants={reducedFadeUp}
                  className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex-shrink-0">
                    <MapPin
                      size={18}
                      className="text-[#4F8A42]"
                    />
                  </div>

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

              <div className="mt-10 flex items-center gap-3 text-[#23376D]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#23376D]/20">
                  <ArrowDown size={16} />
                </div>

                <span className="text-sm font-semibold">
                  Explore the experience
                </span>
              </div>

            </motion.div>

            {/* HERO IMAGE */}

            <motion.div
              className="relative"
              variants={reducedFadeRight}
              initial="hidden"
              animate="visible"
            >

              {/* Static glow */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#B3C135]/20 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-[2rem]">

                <img
                  src="/images/bharat-tex-2026-1.jpg"
                  alt="Bharat Mandapam at Bharat Tex 2026"
                  width="1200"
                  height="900"
                  loading="eager"
                  decoding="async"
                  className="h-[500px] w-full rounded-[2rem] object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.015] sm:h-[620px]"
                />

                {/* FLOATING CARD */}

                <motion.div
                  className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#23376D]/95 p-5 text-white shadow-2xl backdrop-blur-sm sm:left-auto sm:right-6 sm:w-72"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: shouldReduceMotion ? 0 : 0.3,
                    ease,
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

                    <div>
                      <Building2
                        size={24}
                        className="text-[#B3C135]"
                      />
                    </div>

                  </div>

                  <div className="mt-4 h-px bg-white/10" />

                  <p className="mt-4 text-sm leading-6 text-white/65">
                    Four days of textile conversations,
                    connections and opportunities.
                  </p>

                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          EVENT INTRODUCTION
      ====================================================== */}

      <section className="bg-white py-20 sm:py-28">

        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <motion.div
            className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >

            <motion.div variants={reducedFadeLeft}>

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4F8A42]">
                The Event
              </p>

              <div className="mt-5 hidden lg:block">

                <div className="ml-2 h-32 w-px bg-[#E6E8EC]" />

                <div className="mt-[-5px] h-5 w-5 rounded-full border-4 border-[#B3C135]" />

              </div>

            </motion.div>

            <motion.div variants={reducedFadeRight}>

              <h2 className="text-3xl font-bold leading-tight text-[#23376D] sm:text-4xl lg:text-5xl">
                Four days at the heart of India&apos;s textile conversation.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-gray-600 sm:text-lg">

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

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
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
                variants={reducedFadeUp}
                className={`border-white/10 px-6 py-9 transition-colors duration-200 hover:bg-white/[0.04] lg:py-12 ${
                  index !== 3
                    ? "border-b sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B3C135]">
                  {item.title}
                </p>

                <p className="mt-3 text-2xl font-bold">
                  {item.value}
                </p>

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

      <section className="bg-[#F7F8FA] py-20 sm:py-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >

            {/* IMAGE */}

            <motion.div
              className="relative"
              variants={reducedFadeLeft}
            >

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-5 -top-5 h-28 w-28 rounded-full bg-[#B3C135]/20 blur-2xl"
              />

              <div className="relative">

                <img
                  src="/images/bharat-tex-2026-2.jpg"
                  alt="Wire Waste team at Bharat Tex 2026"
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl transition-transform duration-500 hover:scale-[1.015]"
                />

                {/* IMAGE LABEL */}

                <div className="absolute bottom-5 left-5 rounded-xl bg-white px-5 py-4 shadow-xl">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF5E5]">
                      <Users
                        size={19}
                        className="text-[#4F8A42]"
                      />
                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-wider text-gray-400">
                        Wire Waste
                      </p>

                      <p className="font-bold text-[#23376D]">
                        Connecting with the ecosystem
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* CONTENT */}

            <motion.div variants={reducedFadeRight}>

              <div className="flex items-center gap-3">

                <span className="text-5xl font-bold text-[#E3E6EA]">
                  01
                </span>

                <div className="h-px w-12 bg-[#B3C135]" />

              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#4F8A42]">
                Our Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#23376D] sm:text-4xl">
                Conversations that move circularity forward.
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-gray-600">

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
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
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
                    variants={reducedFadeUp}
                    className="group flex items-center gap-4"
                  >

                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#EEF5E5] transition-transform duration-200 group-hover:scale-105">

                      <span className="text-[#4F8A42]">
                        {item.icon}
                      </span>

                    </div>

                    <span className="text-sm font-semibold text-[#23376D] transition-transform duration-200 group-hover:translate-x-1">
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

      <section className="relative overflow-hidden bg-[#F4F1E8] py-20 sm:py-28">

        {/* Static background decoration */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#B3C135]/10 blur-3xl"
        />

        <motion.div
          className="relative mx-auto max-w-5xl px-4 text-center sm:px-6"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#23376D]">

            <Recycle
              size={25}
              className="text-[#B3C135]"
            />

          </div>

          <p className="mt-8 text-3xl font-bold leading-tight text-[#23376D] sm:text-4xl lg:text-5xl">

            The future of textiles will be shaped by

            <span className="text-[#4F8A42]">
              {" "}how we connect people, materials and ideas.
            </span>

          </p>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-600">
            Events such as Bharat Tex create valuable spaces for these
            connections to happen and for the industry to imagine
            what comes next.
          </p>

        </motion.div>
      </section>

      {/* =====================================================
          CIRCULAR JOURNEY
      ====================================================== */}

      <section className="bg-white py-20 sm:py-28">

        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={reducedFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4F8A42]">
              Looking Beyond The Event
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#23376D] sm:text-4xl lg:text-5xl">
              From conversations to meaningful action.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              The value of an event continues long after the exhibition
              closes. The conversations, relationships, and ideas
              developed can become the foundation for future collaboration.
            </p>

          </motion.div>

          <div className="relative mt-16">

            {/* CONNECTING LINE */}

            <div
              aria-hidden="true"
              className="absolute left-[13%] right-[13%] top-[44px] hidden h-px bg-[#DDE2E7] md:block"
            />

            <motion.div
              className="relative grid gap-8 md:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >

              {/* CONNECT */}

              <motion.div
                className="group text-center"
                variants={reducedFadeUp}
              >

                <div className="relative mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#EEF5E5] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">

                  <Users
                    size={28}
                    className="text-[#4F8A42]"
                  />

                </div>

                <h3 className="mt-5 font-bold text-[#23376D]">
                  Connect
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Meet people across the ecosystem.
                </p>

              </motion.div>

              {/* DISCOVER */}

              <motion.div
                className="group text-center"
                variants={reducedFadeUp}
              >

                <div className="relative mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#23376D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">

                  <Globe2
                    size={28}
                    className="text-[#B3C135]"
                  />

                </div>

                <h3 className="mt-5 font-bold text-[#23376D]">
                  Discover
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Learn from new perspectives.
                </p>

              </motion.div>

              {/* IMAGINE */}

              <motion.div
                className="group text-center"
                variants={reducedFadeUp}
              >

                <div className="relative mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#EEF5E5] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">

                  <Sparkles
                    size={28}
                    className="text-[#4F8A42]"
                  />

                </div>

                <h3 className="mt-5 font-bold text-[#23376D]">
                  Imagine
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Explore new possibilities.
                </p>

              </motion.div>

              {/* ACT */}

              <motion.div
                className="group text-center"
                variants={reducedFadeUp}
              >

                <div className="relative mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#23376D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">

                  <Recycle
                    size={28}
                    className="text-[#B3C135]"
                  />

                </div>

                <h3 className="mt-5 font-bold text-[#23376D]">
                  Act
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
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

      <section className="bg-[#23376D] py-20 text-white sm:py-28">

        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          <motion.div
            className="grid items-end gap-10 md:grid-cols-[1fr_auto]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >

            <motion.div variants={reducedFadeLeft}>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B3C135]">
                Looking Ahead
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Carrying the conversations forward.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Bharat Tex 2026 was another opportunity to connect
                with the textile community, exchange ideas, and strengthen
                our commitment to a more transparent and circular textile
                ecosystem.
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-white/60">
                As the industry continues to evolve, we look forward to
                building on these conversations and creating meaningful
                connections that can contribute to a more sustainable future.
              </p>

            </motion.div>

            <motion.div
              variants={reducedFadeRight}
              className="hidden h-24 w-24 items-center justify-center rounded-full border border-white/20 md:flex"
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

      <section className="bg-white py-14">

        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <motion.div
            className="relative overflow-hidden rounded-[2rem] bg-[#F4F1E8] p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10 lg:p-12"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 20 }
            }
            whileInView={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0 }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease,
            }}
          >

            {/* Static decorative ring */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-60px] top-[-60px] h-48 w-48 rounded-full border-[20px] border-[#B3C135]/10"
            />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

              <div>

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#23376D]">

                    <Recycle
                      size={19}
                      className="text-[#B3C135]"
                    />

                  </div>

                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4F8A42]">
                    Bharat Tex 2026
                  </p>

                </div>

                <h3 className="mt-4 text-2xl font-bold text-[#23376D] sm:text-3xl">
                  14–17 July · Bharat Mandapam · New Delhi
                </h3>

                <p className="mt-3 text-gray-600">
                  Connecting textiles, people and possibilities.
                </p>

              </div>

              <div className="group flex items-center gap-2 font-semibold text-[#23376D]">

                <span>
                  Wire Waste
                </span>

                <MoveRight
                  size={20}
                  className="text-[#4F8A42] transition-transform duration-200 group-hover:translate-x-1"
                />

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default BharatTex2026BlogPage;