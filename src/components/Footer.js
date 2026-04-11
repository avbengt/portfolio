"use client"

const linkStyle = {
  color: "var(--muted)",
  textDecoration: "underline",
  textUnderlineOffset: 3,
  transition: "color 0.25s",
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "28px 0",
      }}
    >
      <div
        className="content-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: 14,
            color: "var(--muted)",
            margin: 0,
          }}
        >
          © {currentYear}{" "}
          <span
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 700,
              color: "var(--ink)",
            }}
          >
            alissa
          </span>
          <span
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 700,
              color: "var(--seafoam)",
            }}
          >
            .dev
          </span>{" "}
          — crafted with <FooterLink href="https://nextjs.org">Next.js</FooterLink>,{" "}
          <FooterLink href="https://cursor.com">Cursor</FooterLink>{" "}
          &amp; maybe a little too much coffee.
        </p>
        <p
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: 14,
            color: "var(--muted)",
            margin: 0,
          }}
        >
          Deployed on <FooterLink href="https://vercel.com">Vercel</FooterLink>
        </p>
      </div>
    </footer>
  )
}
