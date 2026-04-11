"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const EVENTS = [
  {
    year: "'99",
    title: "First website at 11",
    desc: "Dial-up. Busy backgrounds. Comic Sans. Zero regrets.",
    color: "var(--seafoam)",
  },
  {
    year: "'00",
    title: "Survived Y2K",
    desc: 'Kept coding. Discovered CSS when tables were still "the way."',
    color: "var(--violet)",
  },
  {
    year: "'10s",
    title: "Turned pro",
    desc: "13+ years shipping real websites for real brands.",
    color: "var(--fuchsia)",
  },
  {
    year: "Now",
    title: "Still building",
    desc: "Freelancing, personal projects, always learning.",
    color: "var(--gold)",
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div
      ref={ref}
      style={{
        marginTop: 64,
        paddingTop: 48,
        position: "relative",
      }}
    >
      {/* Horizontal line — desktop */}
      <motion.div
        className="timeline-line-h"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          top: 58,
          left: "8%",
          right: "8%",
          height: 1,
          background: "var(--border2)",
          transformOrigin: "left",
        }}
      />

      {/* Vertical line — mobile */}
      <motion.div
        className="timeline-line-v"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "none",
          position: "absolute",
          left: 26,
          top: 30,
          bottom: -10,
          width: 1,
          background: "var(--border2)",
          transformOrigin: "top",
        }}
      />

      <div
        className="timeline-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
        }}
      >
        {EVENTS.map((ev, i) => (
          <motion.div
            key={ev.year}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 16px",
            }}
          >
            {/* Node */}
            <motion.div
              className="timeline-node"
              whileHover={{ scale: 1.3 }}
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: ev.color,
                border: "3px solid var(--bg)",
                boxShadow: `0 0 0 2px ${ev.color}`,
                marginBottom: 18,
                flexShrink: 0,
                cursor: "default",
                position: "relative",
                zIndex: 1,
              }}
            />

            {/* Text group */}
            <div className="timeline-text">
              <p
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: 22,
                  color: ev.color,
                  margin: "0 0 5px",
                  lineHeight: 1,
                }}
              >
                {ev.year}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--ink)",
                  margin: "0 0 5px",
                  lineHeight: 1.3,
                }}
              >
                {ev.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 15,
                  color: "var(--muted)",
                  margin: 0,
                }}
              >
                {ev.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line-h { display: none !important; }
          .timeline-line-v { display: block !important; }
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .timeline-grid > div {
            flex-direction: row !important;
            align-items: flex-start !important;
            text-align: left !important;
            gap: 16px;
            padding-left: 16px !important;
          }
          .timeline-node {
            margin-bottom: 0 !important;
            margin-top: 3px;
            flex-shrink: 0;
          }
          .timeline-text {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  )
}
