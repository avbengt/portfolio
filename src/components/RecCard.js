"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLinkIcon } from "./Icons"

export default function RecCard({ rec, index }) {
  const [linkHovered, setLinkHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--violet)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)"
      }}
      style={{
        background: "var(--surface)",
        border: "1.5px solid var(--border)",
        borderRadius: 10,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s, box-shadow 0.2s",
        position: "relative",
      }}
    >
      {/* Decorative large quote mark */}
      <div
        className="rec-quote-mark"
        style={{
          position: "absolute",
          top: -25,
          right: 10,
          fontFamily: "var(--font-fraunces)",
          fontStyle: "italic",
          fontWeight: 900,
          fontSize: 72,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          transform: "rotate(180deg)",
          zIndex: 0,
        }}
      >
        &ldquo;
      </div>

      {/* Quote */}
      <div style={{ padding: "28px 28px 20px", flex: 1, position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: 18,
            color: "var(--ink2)",
            margin: 0,
          }}
        >
          &ldquo;{rec.quote}&rdquo;
        </p>
      </div>

      {/* Divider */}
      <div style={{ margin: "0 28px", borderTop: "1px solid var(--border)" }} />

      {/* Footer */}
      <div
        style={{
          padding: "16px 28px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "var(--violet)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 15,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.04em",
            }}
          >
            {rec.initials}
          </span>
        </div>

        {/* Name + role */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 16,
              fontWeight: 700,
              color: "var(--ink)",
              margin: "0 0 2px",
              lineHeight: 1.3,
            }}
          >
            {rec.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 15,
              color: "var(--muted)",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {rec.role}
          </p>
        </div>

        {/* Full review link */}
        {rec.link && (
          <a
            href={rec.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setLinkHovered(true)}
            onMouseLeave={() => setLinkHovered(false)}
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 15,
              fontWeight: 600,
              color: "var(--violet)",
              whiteSpace: "nowrap",
              flexShrink: 0,
              textDecoration: linkHovered ? "underline" : "none",
              textUnderlineOffset: 3,
              letterSpacing: "0.02em",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Full review <ExternalLinkIcon />
          </a>
        )}
      </div>

      <style>{`
        .rec-quote-mark { color: rgba(123, 63, 160, 0.25); }
      `}</style>
    </motion.div>
  )
}
