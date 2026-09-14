import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const image1 = "/images/intex-2026-1.jpeg";
const image2 = "/images/intex-2026-2.jpeg";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const days = [
  {
    number: "01",
    date: "18 June",
    title: "A New Beginning",
    description:
      "The first day of INtex 2026 opened the door to new conversations, introductions and perspectives from across the textile ecosystem.",
  },
  {
    number: "02",
    date: "19 June",
    title: "Ideas Come Together",
    description:
      "The conversations continued, bringing together different perspectives around textiles, circularity, technology and collaboration.",
  },
  {
    number: "03",
    date: "20 June",
    title: "Looking Forward",
    description:
      "The final day was about carrying those conversations forward and exploring opportunities to build meaningful connections.",
  },
];

const takeaways = [
  {
    number: "01",
    title: "CONNECT",
    description:
      "Building relationships that create meaningful opportunities.",
  },
  {
    number: "02",
    title: "DISCOVER",
    description:
      "Learning from different people, perspectives and experiences.",
  },
  {
    number: "03",
    title: "MOVE FORWARD",
    description:
      "Turning conversations into ideas that can create real progress.",
  },
];

const experienceWords = [
  "People",
  "Connections",
  "Ideas",
  "Circularity",
  "Technology",
  "Collaboration",
];

function ExperienceWords() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % experienceWords.length
      );
    }, 1700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-14 flex flex-wrap justify-center gap-x-3 gap-y-4 sm:gap-x-5">
      {experienceWords.map((word, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={word}
            animate={{
              opacity: isActive ? 1 : 0.38,
              y: isActive ? -3 : 0,
              scale: isActive ? 1.04 : 1,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <span
              className={`text-sm font-medium transition-colors duration-700 sm:text-base ${
                isActive
                  ? "text-[#D7E06F]"
                  : "text-white/50"
              }`}
            >
              {word}
            </span>

            {index < experienceWords.length - 1 && (
              <span className="ml-3 text-white/20 sm:ml-5">
                ·
              </span>
            )}

            {isActive && (
              <motion.span
                layoutId="activeWord"
                className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] rounded-full bg-[#B3C135]"
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Intex2026BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F8FA] text-[#23376D]">

      {/* HERO */}

      <section className="relative bg-white">
        <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#B3C135]/[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-[1380px] px-5 pb-16 pt-7 sm:px-8 lg:px-12 lg:pb-24 lg:pt-10">

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-center justify-between"
          >
           <Link
  to="/#blog"
  className="inline-flex items-center gap-2 text-sm font-medium text-[#23376D] transition-colors hover:text-[#4A7C6F]"
>
  <ArrowLeft className="h-4 w-4" />
  Back to Journal
</Link>

            <div className="flex items-center gap-2 rounded-full border border-[#23376D]/10 bg-[#F7F8FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#23376D]/60">
              <CalendarDays size={14} />
              Events
            </div>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              <motion.div
                variants={fadeUp}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#B3C135]/40 bg-[#B3C135]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]"
              >
                <span className="h-2 w-2 rounded-full bg-[#B3C135]" />
                INtex 2026
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[clamp(3.4rem,8vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
              >
                Three days.
                <br />
                <span className="text-[#23376D]/35">
                  Many
                </span>{" "}
                possibilities.
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#23376D]/65"
              >
                <span className="font-semibold text-[#23376D]">
                  18 — 20 June 2026
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-[#B3C135] sm:block" />

                <span>
                  Textile Industry · Events
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-lg leading-8 text-[#23376D]/65 sm:text-xl"
              >
                Three days of conversations, connections and
                possibilities shaping the future of textiles.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              className="relative"
            >
              <div className="relative aspect-[4/4.7] overflow-hidden rounded-[2rem] bg-[#E6E8EC] shadow-[0_25px_80px_rgba(35,55,109,0.12)]">

                <img
                  src={image1}
                  alt="INtex 2026 event"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#23376D]/50 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">

                  <div className="inline-block rounded-2xl border border-white/20 bg-white/90 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#23376D]/50">
                      Three Days
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      People · Connections · Ideas
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* THE EXPERIENCE */}

      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B3C135]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#23376D]/50">
                  The Experience
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Where people
                <br />
                <span className="text-[#23376D]/35">
                  meet ideas.
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <p className="text-xl leading-9 text-[#23376D]/75 sm:text-2xl sm:leading-10">
                INtex 2026 brought together people, businesses
                and ideas from across the textile industry.
              </p>

              <p className="mt-7 text-base leading-8 text-[#23376D]/55 sm:text-lg">
                For Wire Waste, it was an opportunity to connect,
                listen and understand the possibilities that emerge
                when the industry comes together.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BEYOND THE EXHIBITION */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1380px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] bg-[#23376D]"
          >

            <div className="grid min-h-[560px] lg:grid-cols-[1.15fr_0.85fr]">

              <div className="relative min-h-[360px] overflow-hidden lg:min-h-[560px]">

                <img
                  src={image2}
                  alt="People and conversations at INtex 2026"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#23376D]/40" />

                <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                  INtex 2026
                </div>

              </div>

              <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16">

                <span className="mb-7 text-xs font-bold uppercase tracking-[0.22em] text-[#B3C135]">
                  Beyond the Exhibition
                </span>

                <h2 className="max-w-lg text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  The most valuable part of an event is often the conversation.
                </h2>

                <div className="mt-9 h-px w-16 bg-[#B3C135]/70" />

                <p className="mt-7 max-w-md text-base leading-8 text-white/60">
                  Events create space for people to meet,
                  exchange ideas and discover possibilities that
                  may not have existed before the conversation began.
                </p>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* THREE DAYS — INNOVATIVE TIMELINE */}

     <section className="bg-[#F7F8FA] py-24 md:py-32">
  <div className="mx-auto max-w-6xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 max-w-2xl"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#4A7C6F]">
        Three Days, One Experience
      </p>

      <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#23376D] md:text-5xl">
        Different moments.
        <br />
        One shared direction.
      </h2>

      <p className="mt-6 text-base leading-8 text-slate-500">
        Each day brought a different perspective, but the conversations
        continued to move in the same direction — towards connection,
        collaboration and meaningful possibilities.
      </p>
    </motion.div>

    <div className="relative">

      {/* Connecting line */}
      <div className="absolute left-[19px] top-6 hidden h-[calc(100%-48px)] w-px bg-slate-200 md:block" />

      <div className="space-y-12">

        {[
          {
            number: "01",
            date: "18 June",
            title: "A New Beginning",
            text: "The first day opened the door to new conversations, introductions and perspectives from across the textile ecosystem.",
          },
          {
            number: "02",
            date: "19 June",
            title: "Ideas Come Together",
            text: "The conversations continued, bringing together different perspectives around textiles, circularity, technology and collaboration.",
          },
          {
            number: "03",
            date: "20 June",
            title: "Looking Forward",
            text: "The final day was about carrying those conversations forward and exploring opportunities to build meaningful connections.",
          },
        ].map((day, index) => (
          <motion.div
            key={day.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
            }}
            className="relative flex gap-6 md:gap-10"
          >

            {/* Number */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-[#23376D] shadow-sm">
              {day.number}
            </div>

            {/* Content */}
            <div className="group flex-1 pb-2">

              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4A7C6F]">
                  {day.date}
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span className="text-xs uppercase tracking-[0.14em] text-slate-400">
                  INtex 2026
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#23376D] transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                {day.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                {day.text}
              </p>

              {/* Subtle animated accent */}
              <div className="mt-6 h-px w-12 bg-[#B3C135] transition-all duration-500 group-hover:w-24" />
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  </div>
</section>

      {/* PEOPLE CONNECTIONS IDEAS */}

      <section className="relative overflow-hidden bg-[#23376D]">

        <div className="pointer-events-none absolute -right-40 top-[-180px] h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

        <div className="pointer-events-none absolute -right-20 top-[-120px] h-[360px] w-[360px] rounded-full border border-white/[0.06]" />

        <div className="relative mx-auto max-w-[1180px] px-5 py-24 sm:px-8 lg:py-36">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B3C135]">
              People · Connections · Ideas
            </p>

            <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Different perspectives.
              <br />

              <span className="text-white/35">
                Shared direction.
              </span>
            </h2>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mx-auto mt-10 max-w-2xl text-center"
          >

            <p className="text-base leading-8 text-white/55 sm:text-lg">
              Bringing different perspectives together creates
              a clearer understanding of where the textile
              industry can go next.
            </p>

          </motion.div>

          <ExperienceWords />

        </div>
      </section>

      {/* WHAT WE TAKE FORWARD */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-8 bg-[#B3C135]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#23376D]/50">
                  What We Take Forward
                </span>

              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Conversations
                <br />

                <span className="text-[#23376D]/35">
                  that continue.
                </span>
              </h2>

            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >

              <p className="text-xl leading-9 text-[#23376D]/75 sm:text-2xl sm:leading-10">
                Events create connections. Connections create
                possibilities.
              </p>

              <p className="mt-7 text-base leading-8 text-[#23376D]/55 sm:text-lg">
                The conversations at INtex 2026 gave us an
                opportunity to hear different perspectives from
                the textile ecosystem.
              </p>

              <p className="mt-5 text-base leading-8 text-[#23376D]/55 sm:text-lg">
                Those conversations continue to shape how we
                think about traceability, circularity and
                collaboration across the textile value chain.
              </p>

            </motion.div>

          </div>

          {/* TAKEAWAY CARDS — NO ARROWS */}

          <div className="mt-20 grid gap-5 md:grid-cols-3 lg:mt-28">

            {takeaways.map((item, index) => (

              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative min-h-[290px] overflow-hidden rounded-[1.5rem] border border-[#23376D]/10 bg-[#F7F8FA] p-7 transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(35,55,109,0.09)] sm:p-9"
              >

                <span className="text-sm font-bold text-[#B3C135]">
                  {item.number}
                </span>

                <div className="mt-20">

                  <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#23376D]/55 sm:text-base">
                    {item.description}
                  </p>

                </div>

                <motion.div
                  className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-[#B3C135]/[0.08]"
                  whileHover={{
                    scale: 1.25,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FINAL SECTION */}

      <section className="bg-[#F7F8FA]">

        <div className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 sm:px-8 lg:pb-36 lg:pt-16">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
            }}
            className="relative overflow-hidden rounded-[2rem] bg-white px-7 py-16 text-center shadow-[0_20px_70px_rgba(35,55,109,0.07)] sm:px-12 sm:py-20 lg:px-20 lg:py-28"
          >

            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#B3C135]/10 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#23376D]/5 blur-2xl" />

            <div className="relative">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#B3C135]/15">
                <Sparkles size={21} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#23376D]/45">
                Until the Next Connection
              </p>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
                The conversation
                <br />

                <span className="text-[#23376D]/35">
                  continues.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#23376D]/55 sm:text-lg">
                Three days at INtex 2026. Many conversations.
                And plenty more possibilities ahead.
              </p>

              <div className="mt-10">

            
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* FOOTER META */}

      <div className="border-t border-[#23376D]/10 bg-white">

        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-5 py-7 text-xs text-[#23376D]/40 sm:px-8 sm:flex-row sm:items-center sm:justify-between">

          <span>
            Wire Waste · INtex 2026
          </span>

          <span>
            18 — 20 June 2026
          </span>

        </div>

      </div>

    </main>
  );
}