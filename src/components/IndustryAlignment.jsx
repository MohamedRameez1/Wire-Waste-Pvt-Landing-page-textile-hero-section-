import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { T, Icon, SectionHeader } from "./shared";

export function IndustryAlignment() {
  return (
    <section
  id="industry-alignment"
  style={{
    position: "relative",
    width: "100%",
    padding: "120px 5%",
    background: "#FFFFFF",
    overflow: "hidden",
  }}

    >
      {/* Soft background details */}
      <div
        style={{
          position: "absolute",
          top: "-180px",
          right: "-160px",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(179, 193, 53, 0.07)",
          filter: "blur(2px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-220px",
          left: "-180px",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(35, 55, 109, 0.035)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        {/* Section Header */}
<SectionHeader
  badge="Industry Alignment"
  title="Supporting a more circular textile future."
  subtitle="Wire Waste is part of a wider movement toward measurable, responsible and circular textile systems."
/>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 70,
            alignItems: "center",
          }}
        >
          {/* Logo Area */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            style={{
              position: "relative",
              minHeight: 310,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "45px",
              background: "#F8F9F6",
              border: "1px solid #E7E9E3",
              borderRadius: 28,
              boxShadow: "0 20px 55px rgba(35, 55, 109, 0.06)",
              overflow: "hidden",
            }}
          >
            {/* Decorative line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 38,
                width: 70,
                height: 3,
                background: "#B3C135",
                borderRadius: 10,
              }}
            />

            {/* Logo */}
            <motion.img
              src="/images/UKTP_Logo_Linear_Forest_Green_RGB_jpg.jpg"
              alt="UK Textiles Pact and WRAP"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              style={{
                display: "block",
                width: "100%",
                maxWidth: 650,
                height: "auto",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </motion.div>

          {/* Text Area */}
          <div>
            <div
              style={{
                marginBottom: 26,
                width: 52,
                height: 4,
                borderRadius: 20,
                background: "#B3C135",
              }}
            />

            <div
              style={{
                color: "#23376D",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              UK Textiles Pact
            </div>

            <h3
              style={{
                margin: 0,
                color: "#23376D",
                fontSize: "clamp(25px, 3vw, 34px)",
                lineHeight: 1.2,
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              Working toward a more circular textile industry.
            </h3>

            <p
              style={{
                margin: "20px 0 0",
                color: "#667085",
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              The UK Textiles Pact brings together organisations across the
              textile value chain to support a more circular and sustainable
              industry.
            </p>

            <p
              style={{
                margin: "14px 0 0",
                color: "#667085",
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              Wire Waste's focus on traceability, measurable waste recovery
              and connected supply-chain data contributes to the broader need
              for better visibility and accountability across textile
              circularity.
            </p>

            {/* CTA */}
            <motion.a
              href="https://www.wrap.ngo/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                x: 4,
              }}
              transition={{
                duration: 0.25,
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                marginTop: 28,
                color: "#23376D",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Explore WRAP
              <ArrowUpRight size={17} strokeWidth={2} />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          style={{
            marginTop: 65,
            paddingTop: 26,
            borderTop: "1px solid #E8EAEF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30,
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#7A8291",
              fontSize: 13,
              lineHeight: 1.7,
              maxWidth: 700,
            }}
          >
            Industry initiatives and collaborative action are important
            building blocks for creating measurable circularity across the
            textile value chain.
          </p>

          
        </motion.div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 900px) {
          #industry-alignment {
            padding: 90px 5% !important;
          }

          #industry-alignment > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 42px !important;
          }
        }

        @media (max-width: 600px) {
          #industry-alignment {
            padding: 75px 20px !important;
          }

          #industry-alignment img {
            max-width: 100% !important;
          }

          #industry-alignment > div > div:nth-child(2) > div:first-child {
            min-height: 210px !important;
            padding: 25px !important;
            border-radius: 22px !important;
          }

          #industry-alignment > div > div:last-child {
            margin-top: 45px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}