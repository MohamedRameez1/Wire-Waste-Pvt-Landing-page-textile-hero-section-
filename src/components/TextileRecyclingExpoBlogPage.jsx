import React, { useEffect, useRef } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import {
  CalendarDays,
  MapPin,
  ArrowDownRight,
  Recycle,
  Globe2,
  Users,
  Sparkles,
  MoveRight,
} from "lucide-react";

/* =========================================================
   SCROLL REVEAL COMPONENT
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("ww-reveal-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ww-reveal ww-${direction} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

function TextileRecyclingExpoBlogPage() {
  return (
    <>
      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        /* ---------------------------------------------
           GLOBAL REVEAL
        --------------------------------------------- */

        .ww-reveal {
          opacity: 0;
          transition:
            opacity 0.8s cubic-bezier(.22, 1, .36, 1),
            transform 0.8s cubic-bezier(.22, 1, .36, 1);
          will-change: opacity, transform;
        }

        .ww-up {
          transform: translateY(35px);
        }

        .ww-left {
          transform: translateX(-35px);
        }

        .ww-right {
          transform: translateX(35px);
        }

        .ww-scale {
          transform: scale(0.94);
        }

        .ww-reveal-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        /* ---------------------------------------------
           HERO IMAGE
        --------------------------------------------- */

        @keyframes wwHeroZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.075);
          }
        }

        .ww-hero-image {
          animation: wwHeroZoom 15s ease-out forwards;
          will-change: transform;
        }

        /* ---------------------------------------------
           FLOATING BADGE
        --------------------------------------------- */

        @keyframes wwFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .ww-float {
          animation: wwFloat 4s ease-in-out infinite;
        }

        /* ---------------------------------------------
           SOFT ICON PULSE
        --------------------------------------------- */

        @keyframes wwPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(179, 193, 53, 0);
          }

          50% {
            box-shadow: 0 0 0 8px rgba(179, 193, 53, 0.08);
          }
        }

        .ww-pulse {
          animation: wwPulse 3.5s ease-in-out infinite;
        }

        /* ---------------------------------------------
           LINE REVEAL
        --------------------------------------------- */

        @keyframes wwLineGrow {
          from {
            transform: scaleX(0);
            transform-origin: left;
            opacity: 0;
          }

          to {
            transform: scaleX(1);
            transform-origin: left;
            opacity: 1;
          }
        }

        .ww-line {
          animation: wwLineGrow 0.8s cubic-bezier(.22, 1, .36, 1) both;
        }

        /* ---------------------------------------------
           SHIMMER / GLOW
        --------------------------------------------- */

        @keyframes wwSoftGlow {
          0%,
          100% {
            opacity: 0.35;
          }

          50% {
            opacity: 0.7;
          }
        }

        .ww-soft-glow {
          animation: wwSoftGlow 4s ease-in-out infinite;
        }

        /* ---------------------------------------------
           CARD HOVER
        --------------------------------------------- */

        .ww-card {
          transition:
            transform 0.5s cubic-bezier(.22, 1, .36, 1),
            box-shadow 0.5s ease,
            border-color 0.5s ease;
        }

        .ww-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(35, 55, 109, 0.08);
          border-color: rgba(179, 193, 53, 0.35);
        }

        /* ---------------------------------------------
           IMAGE HOVER
        --------------------------------------------- */

        .ww-image-wrapper {
          overflow: hidden;
        }

        .ww-image-wrapper img {
          transition:
            transform 0.9s cubic-bezier(.22, 1, .36, 1),
            filter 0.9s ease;
        }

        .ww-image-wrapper:hover img {
          transform: scale(1.035);
          filter: saturate(1.05);
        }

        /* ---------------------------------------------
           ARROW
        --------------------------------------------- */

        .ww-arrow {
          transition: transform 0.45s cubic-bezier(.22, 1, .36, 1);
        }

        .ww-card:hover .ww-arrow {
          transform: translateX(7px);
        }

        /* ---------------------------------------------
           REDUCED MOTION
        --------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {
          .ww-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .ww-hero-image,
          .ww-float,
          .ww-pulse,
          .ww-line,
          .ww-soft-glow {
            animation: none !important;
          }

          .ww-image-wrapper img,
          .ww-card,
          .ww-arrow {
            transition: none !important;
          }
        }
      `}</style>

      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative bg-white overflow-hidden pt-24 sm:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative min-h-[580px] sm:min-h-[620px] rounded-[2rem] overflow-hidden">

            {/* Hero Image */}

            <img
              src="/images/textile-recycling-expo-brussels-1.jpg"
              alt="Textile Recycling Expo Brussels"
              className="absolute inset-0 w-full h-full object-cover ww-hero-image"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#17213B]/90 via-[#17213B]/58 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17213B]/55 via-transparent to-transparent" />

            {/* Hero Content */}

            <div className="relative z-10 min-h-[580px] sm:min-h-[620px] flex items-end">

              <div className="p-7 sm:p-10 lg:p-14 max-w-3xl text-white">

                {/* Event Label */}

                <Reveal delay={100}>
                  <div className="flex items-center gap-3 mb-7">

                    <div className="w-9 h-9 rounded-full bg-[#B3C135] text-[#23376D] flex items-center justify-center ww-pulse">
                      <Recycle size={17} />
                    </div>

                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B3C135]">
                        Wire Waste
                      </p>

                      <p className="text-xs text-white/65 mt-0.5">
                        Event Journal
                      </p>
                    </div>

                  </div>
                </Reveal>

                {/* Main Heading */}

                <Reveal delay={220}>
                  <h1 className="text-[2.5rem] sm:text-[3.3rem] lg:text-[4rem] font-medium leading-[1.08] tracking-[-0.025em]">

                    Connecting Ideas,

                    <span className="block text-[#B3C135] mt-1">
                      People & Possibilities
                    </span>

                  </h1>
                </Reveal>

                {/* Description */}

                <Reveal delay={350}>
                  <p className="mt-6 text-sm sm:text-base lg:text-[17px] text-white/72 max-w-2xl leading-7">

                    Wire Waste at the Textile Recycling Expo in Brussels,
                    bringing together conversations around textile recycling,
                    circularity, traceability, and the future of textile waste.

                  </p>
                </Reveal>

                {/* Date + Location */}

                <Reveal delay={480}>
                  <div className="mt-8 flex flex-wrap gap-3">

                    {/* Date */}

                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors duration-300">

                      <CalendarDays
                        size={18}
                        className="text-[#B3C135]"
                      />

                      <div>
                        <p className="text-[9px] text-white/45 uppercase tracking-[0.16em]">
                          Date
                        </p>

                        <p className="mt-0.5 text-xs sm:text-sm font-medium">
                          24–25 June 2026
                        </p>
                      </div>

                    </div>

                    {/* Location */}

                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors duration-300">

                      <MapPin
                        size={18}
                        className="text-[#B3C135]"
                      />

                      <div>
                        <p className="text-[9px] text-white/45 uppercase tracking-[0.16em]">
                          Location
                        </p>

                        <p className="mt-0.5 text-xs sm:text-sm font-medium">
                          Brussels, Belgium
                        </p>
                      </div>

                    </div>

                  </div>
                </Reveal>

              </div>
            </div>

            {/* Explore */}

            <div className="absolute bottom-7 right-7 sm:right-10 hidden sm:flex items-center gap-3 text-white/55">

              <span className="text-[9px] uppercase tracking-[0.18em]">
                Explore
              </span>

              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                <ArrowDownRight size={16} />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          EVENT INFORMATION
      ========================================================= */}

      <section className="py-8 sm:py-10 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-gray-200">

              {/* Event */}

              <div className="px-5 py-6 sm:px-7 sm:py-7 border-r border-gray-200 hover:bg-[#F7F8FA] transition-colors duration-300">

                <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400 font-medium">
                  Event
                </p>

                <p className="mt-2 text-sm font-medium text-[#23376D]">
                  Textile Recycling Expo
                </p>

              </div>

              {/* Dates */}

              <div className="px-5 py-6 sm:px-7 sm:py-7 lg:border-r border-gray-200 hover:bg-[#F7F8FA] transition-colors duration-300">

                <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400 font-medium">
                  Dates
                </p>

                <p className="mt-2 text-sm font-medium text-[#23376D]">
                  24–25 June 2026
                </p>

              </div>

              {/* Location */}

              <div className="px-5 py-6 sm:px-7 sm:py-7 border-r border-gray-200 hover:bg-[#F7F8FA] transition-colors duration-300">

                <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400 font-medium">
                  Location
                </p>

                <p className="mt-2 text-sm font-medium text-[#23376D]">
                  Brussels, Belgium
                </p>

              </div>

              {/* Focus */}

              <div className="px-5 py-6 sm:px-7 sm:py-7 hover:bg-[#F7F8FA] transition-colors duration-300">

                <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400 font-medium">
                  Focus
                </p>

                <p className="mt-2 text-sm font-medium text-[#4F8A42]">
                  Textile Recycling
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="py-20 sm:py-24 lg:py-28 bg-[#F7F8FA]">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid md:grid-cols-[160px_1fr] gap-8 lg:gap-14">

            {/* Editorial Label */}

            <Reveal direction="left">

              <div className="hidden md:block pt-2">

                <div className="relative pl-4">

                  <div className="absolute left-0 top-0 w-[2px] h-12 rounded-full bg-[#B3C135]" />

                  <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#4F8A42]">
                    Wire Waste
                  </p>

                  <p className="mt-1.5 text-xs text-[#23376D]">
                    Event Journal
                  </p>

                </div>

              </div>

            </Reveal>

            {/* Content */}

            <div>

              <Reveal>

                <div className="flex items-center gap-3">

                  <span className="w-7 h-px bg-[#B3C135] ww-line" />

                  <p className="text-[10px] font-medium text-[#4F8A42] uppercase tracking-[0.18em]">
                    A European Meeting Point
                  </p>

                </div>

              </Reveal>

              <Reveal delay={120}>

                <h2 className="mt-4 text-[1.9rem] sm:text-[2.3rem] lg:text-[2.7rem] font-medium text-[#23376D] leading-[1.18] tracking-[-0.02em] max-w-3xl">

                  Two days of conversations shaping the future of textile recycling.

                </h2>

              </Reveal>

              <Reveal delay={220}>

                <div className="mt-8 space-y-5 text-gray-600 text-[15px] sm:text-base leading-7 max-w-3xl">

                  <p>
                    On 24–25 June 2026, Brussels became a meeting point for
                    people and organizations working across the textile
                    recycling and circular economy landscape.
                  </p>

                  <p>
                    The Textile Recycling Expo provided an opportunity to
                    connect with industry professionals, exchange ideas,
                    understand emerging approaches, and explore how
                    collaboration can accelerate the transition towards
                    more circular textile systems.
                  </p>

                  <p>
                    For Wire Waste, the event was an opportunity to engage
                    with the wider textile ecosystem and continue conversations
                    around the importance of visibility, responsible waste
                    management, and connected material flows.
                  </p>

                </div>

              </Reveal>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          IMAGE STORY 01
      ========================================================= */}

      <section className="py-20 sm:py-24 lg:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

            {/* Image */}

            <Reveal direction="left">

              <div className="relative group">

                <div className="ww-image-wrapper rounded-[1.75rem]">

                  <img
                    src="/images/textile-recycling-expo-brussels-2.jpg"
                    alt="Wire Waste at Textile Recycling Expo Brussels"
                    className="w-full aspect-[4/3] object-cover rounded-[1.75rem]"
                  />

                </div>

                <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#23376D] text-white rounded-xl px-4 py-3 shadow-lg ww-float">

                  <p className="text-[9px] uppercase tracking-[0.16em] font-medium">
                    01
                  </p>

                  <p className="mt-0.5 text-sm font-medium">
                    Connecting
                  </p>

                </div>

              </div>

            </Reveal>

            {/* Text */}

            <Reveal direction="right" delay={150}>

              <div>

                <span className="text-5xl font-medium text-[#E8EAEE]">
                  01
                </span>

                <h2 className="mt-1 text-[1.8rem] sm:text-[2.1rem] font-medium text-[#23376D] leading-[1.2] tracking-[-0.02em]">

                  Connecting with the Textile Ecosystem

                </h2>

                <p className="mt-5 text-gray-600 text-[15px] sm:text-base leading-7">

                  Events like the Textile Recycling Expo create valuable
                  spaces for stakeholders across the textile value chain
                  to meet, exchange experiences, and discover new
                  opportunities for collaboration.

                </p>

                <p className="mt-4 text-gray-600 text-[15px] leading-7">

                  Bringing different perspectives together is essential
                  to understanding the challenges and opportunities
                  involved in scaling textile recycling.

                </p>

                <div className="mt-6 flex items-center gap-2.5 text-[#4F8A42]">

                  <Globe2 size={18} />

                  <span className="text-sm font-medium">
                    Building stronger connections
                  </span>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>

      {/* =========================================================
          IMAGE STORY 02
      ========================================================= */}

      <section className="py-20 sm:py-24 lg:py-28 bg-[#F5F7F2]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">

            {/* Text */}

            <Reveal direction="left">

              <div>

                <span className="text-5xl font-medium text-[#DDE3D1]">
                  02
                </span>

                <h2 className="mt-1 text-[1.8rem] sm:text-[2.1rem] font-medium text-[#23376D] leading-[1.2] tracking-[-0.02em]">

                  Exploring New Perspectives on Recycling

                </h2>

                <p className="mt-5 text-gray-600 text-[15px] sm:text-base leading-7">

                  Textile recycling is evolving rapidly. New technologies,
                  business models, material recovery approaches, and
                  collaboration models are creating opportunities to
                  rethink how textile waste is managed.

                </p>

                <p className="mt-4 text-gray-600 text-[15px] leading-7">

                  The event offered an opportunity to learn from different
                  voices within the industry and explore the ideas that
                  can contribute to a more resource-efficient future.

                </p>

                <div className="mt-6 flex items-center gap-2.5 text-[#4F8A42]">

                  <Sparkles size={18} />

                  <span className="text-sm font-medium">
                    Exploring what comes next
                  </span>

                </div>

              </div>

            </Reveal>

            {/* Image */}

            <Reveal direction="right" delay={150}>

              <div className="relative">

                <div className="ww-image-wrapper rounded-[1.75rem]">

                  <img
                    src="/images/textile-recycling-expo-brussels-3.jpg"
                    alt="Textile recycling discussions in Brussels"
                    className="w-full aspect-[4/3] object-cover rounded-[1.75rem]"
                  />

                </div>

                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#23376D] text-white rounded-xl px-4 py-3 shadow-lg ww-float">

                  <p className="text-[9px] uppercase tracking-[0.16em] text-white/50">
                    02
                  </p>

                  <p className="mt-0.5 text-sm font-medium">
                    Exploring
                  </p>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>

      {/* =========================================================
          BIG STATEMENT
      ========================================================= */}

      <section className="relative py-20 sm:py-24 lg:py-28 bg-[#23376D] text-white overflow-hidden">

        {/* Decorative circles */}

        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-[#B3C135]/10 ww-soft-glow" />

        <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full border border-[#B3C135]/10 ww-soft-glow" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <Reveal direction="scale">

            <div className="w-14 h-14 mx-auto rounded-full border border-[#B3C135]/40 flex items-center justify-center ww-float">

              <Recycle
                size={24}
                className="text-[#B3C135]"
              />

            </div>

          </Reveal>

          <Reveal delay={180}>

            <p className="mt-7 text-[1.8rem] sm:text-[2.3rem] lg:text-[2.7rem] font-medium leading-[1.2] tracking-[-0.02em]">

              Circularity becomes stronger when

              <span className="text-[#B3C135]">
                {" "}knowledge, technology and people
              </span>{" "}

              move together.

            </p>

          </Reveal>

        </div>

      </section>

      {/* =========================================================
          IMAGE STORY 03
      ========================================================= */}

      <section className="py-20 sm:py-24 lg:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image */}

            <Reveal direction="left">

              <div className="relative">

                <div className="ww-image-wrapper rounded-[1.75rem]">

                  <img
                    src="/images/textile-recycling-expo-brussels-4.jpg"
                    alt="Textile recycling expo experience"
                    className="w-full aspect-[4/3] object-cover rounded-[1.75rem]"
                  />

                </div>

                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur rounded-lg px-3.5 py-2.5 shadow-md">

                  <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400">
                    Brussels
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-[#23376D]">
                    24–25 June 2026
                  </p>

                </div>

              </div>

            </Reveal>

            {/* Text */}

            <Reveal direction="right" delay={150}>

              <div>

                <span className="text-5xl font-medium text-[#E8EAEE]">
                  03
                </span>

                <h2 className="mt-1 text-[1.8rem] sm:text-[2.1rem] font-medium text-[#23376D] leading-[1.2] tracking-[-0.02em]">

                  From Conversations to Collaboration

                </h2>

                <p className="mt-5 text-gray-600 text-[15px] sm:text-base leading-7">

                  Meaningful progress in textile recycling depends on
                  turning conversations into action and connecting
                  stakeholders across the value chain.

                </p>

                <p className="mt-4 text-gray-600 text-[15px] leading-7">

                  The conversations in Brussels reinforced the importance
                  of collaboration in creating a textile ecosystem where
                  materials can be better understood, managed, recovered,
                  and kept in circulation.

                </p>

                <div className="mt-7 flex items-center gap-3">

                  <div className="w-9 h-9 rounded-full bg-[#EEF5E5] flex items-center justify-center">

                    <Users
                      size={17}
                      className="text-[#4F8A42]"
                    />

                  </div>

                  <div>

                    <p className="text-sm font-medium text-[#23376D]">
                      Collaboration matters
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Across the entire textile value chain
                    </p>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>

      {/* =========================================================
          THREE TAKEAWAYS
      ========================================================= */}

      <section className="py-20 sm:py-24 bg-[#F7F8FA]">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="text-center max-w-xl mx-auto">

            <Reveal>

              <div className="flex justify-center items-center gap-3">

                <span className="w-7 h-px bg-[#B3C135] ww-line" />

                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#4F8A42]">
                  Key Takeaways
                </p>

                <span className="w-7 h-px bg-[#B3C135] ww-line" />

              </div>

            </Reveal>

            <Reveal delay={120}>

              <h2 className="mt-3 text-[1.9rem] sm:text-[2.2rem] font-medium text-[#23376D] tracking-[-0.02em]">

                What We Take Forward

              </h2>

            </Reveal>

          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">

            {/* Connect */}

            <Reveal delay={80}>

              <div className="ww-card group bg-white rounded-2xl p-6 border border-gray-100 h-full">

                <span className="text-xs font-medium text-[#B3C135]">
                  01
                </span>

                <h3 className="mt-4 text-lg font-medium text-[#23376D]">
                  Connect
                </h3>

                <p className="mt-2.5 text-sm text-gray-600 leading-6">

                  Stronger connections can create stronger circular
                  material flows.

                </p>

                <div className="mt-5 text-[#4F8A42]">

                  <MoveRight
                    size={18}
                    className="ww-arrow"
                  />

                </div>

              </div>

            </Reveal>

            {/* Learn */}

            <Reveal delay={180}>

              <div className="ww-card group bg-white rounded-2xl p-6 border border-gray-100 h-full">

                <span className="text-xs font-medium text-[#B3C135]">
                  02
                </span>

                <h3 className="mt-4 text-lg font-medium text-[#23376D]">
                  Learn
                </h3>

                <p className="mt-2.5 text-sm text-gray-600 leading-6">

                  Sharing knowledge and perspectives helps the industry
                  identify new possibilities.

                </p>

                <div className="mt-5 text-[#4F8A42]">

                  <MoveRight
                    size={18}
                    className="ww-arrow"
                  />

                </div>

              </div>

            </Reveal>

            {/* Act */}

            <Reveal delay={280}>

              <div className="ww-card group bg-white rounded-2xl p-6 border border-gray-100 h-full">

                <span className="text-xs font-medium text-[#B3C135]">
                  03
                </span>

                <h3 className="mt-4 text-lg font-medium text-[#23376D]">
                  Act
                </h3>

                <p className="mt-2.5 text-sm text-gray-600 leading-6">

                  Collaboration turns ideas into practical steps towards
                  a more circular textile industry.

                </p>

                <div className="mt-5 text-[#4F8A42]">

                  <MoveRight
                    size={18}
                    className="ww-arrow"
                  />

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>

      {/* =========================================================
          CLOSING
      ========================================================= */}

      <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">

        {/* Decorative Accent */}

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#B3C135] to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <Reveal>

            <div className="flex justify-center items-center gap-3">

              <span className="w-7 h-px bg-[#B3C135] ww-line" />

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#4F8A42]">
                Looking Ahead
              </p>

              <span className="w-7 h-px bg-[#B3C135] ww-line" />

            </div>

          </Reveal>

          <Reveal delay={130}>

            <h2 className="mt-4 text-[1.9rem] sm:text-[2.3rem] lg:text-[2.7rem] font-medium text-[#23376D] leading-[1.18] tracking-[-0.025em]">

              Continuing the journey towards a more circular textile future.

            </h2>

          </Reveal>

          <Reveal delay={230}>

            <p className="mt-6 text-gray-600 text-[15px] sm:text-base leading-7">

              Our participation in the Textile Recycling Expo in Brussels
              was another opportunity to connect, learn, and contribute to
              the ongoing conversation around textile circularity.

            </p>

          </Reveal>

          <Reveal delay={330}>

            <p className="mt-4 text-gray-600 text-[15px] sm:text-base leading-7">

              We look forward to continuing these conversations and
              building meaningful collaborations across the textile
              ecosystem.

            </p>

          </Reveal>

          <Reveal delay={430}>

            <div className="mt-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#F3F6EA] text-[#4F8A42] hover:bg-[#EAF1DA] transition-colors duration-300">

              <Recycle size={17} />

              <span className="text-sm font-medium">
                Building circularity together
              </span>

            </div>

          </Reveal>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default TextileRecyclingExpoBlogPage;