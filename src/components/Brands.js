"use client"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { brands, brandHoverColors } from "@/lib/brands"
import { DownloadIcon } from "./Icons"
import FadeUp from "./FadeUp"

function BrandItem({ brand, hoverColor }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: hovered ? hoverColor : "transparent",
        transition: "background 0.25s ease",
        cursor: "pointer",
        padding: "0 28px",
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 60,
          filter: "brightness(0) invert(1)",
          transition: "filter 0.25s ease",
        }}
      >
        <Image
          src={brand.src}
          alt={brand.alt}
          fill
          style={{ objectFit: "contain" }}
          sizes="144px"
        />
      </div>
    </a>
  )
}

export default function Brands() {
  return (
    <section
      id="brands"
      className="section-border"
      style={{ padding: "100px 0" }}
    >
      <div className="content-container">

        <FadeUp delay={0}>
          <div className="section-label-new" style={{ marginBottom: 16 }}>
            Brands
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              marginBottom: 48,
            }}
            className="brands-header"
          >
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 900,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Where I&apos;ve left my mark.
            </h2>
            <motion.a
              href="/docs/alissa-bengtson-resume.pdf"
              target="_blank"
              className="btn-fuchsia"
              style={{ flexShrink: 0 }}
            >
              Download résumé <DownloadIcon />
            </motion.a>
          </div>
        </FadeUp>

        {/* Brand grid */}
        <FadeUp delay={0.15}>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: 10,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
            className="brands-grid"
          >
            {brands.map((brand, i) => (
              <div
                key={brand.alt}
                style={{
                  borderRight: i < brands.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <BrandItem
                  brand={brand}
                  hoverColor={brandHoverColors[i]}
                />
              </div>
            ))}
          </div>
        </FadeUp>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .brands-header { flex-direction: column; align-items: flex-start !important; }
          .brands-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .brands-grid > div:nth-child(2) { border-right: none !important; }
          .brands-grid > div:nth-child(1),
          .brands-grid > div:nth-child(2) { border-bottom: 1px solid var(--border); }
        }
      `}</style>
    </section>
  )
}
