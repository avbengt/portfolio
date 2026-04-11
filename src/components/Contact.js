"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FadeUp from "./FadeUp"
import { ArrowRight } from "./Icons"

const ADJECTIVES = [
  "meaningful",
  "beautiful",
  "fabulous",
  "remarkable",
  "extraordinary",
  "unforgettable",
  "impressive",
  "incredible",
  "brilliant",
  "amazing",
]

const FORMSPREE_ID = "mpqoalqk"

export default function Contact() {
  const [adjIndex, setAdjIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setAdjIndex((i) => (i + 1) % ADJECTIVES.length), 2250)
    return () => clearInterval(id)
  }, [])

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.email.trim()) e.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email"
    if (!form.message.trim()) e.message = "Message is required"
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus("sending")
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="section-border" style={{ padding: "100px 0" }}>
      <div className="content-container">

        <FadeUp delay={0}>
          <div className="section-label-new" style={{ marginBottom: 16 }}>
            Contact
          </div>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <FadeUp delay={0.08}>
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 900,
                fontSize: "clamp(36px, 4.5vw, 58px)",
                letterSpacing: "-0.03em",
                color: "var(--ink)",
                lineHeight: 1.02,
                margin: "0 0 20px",
              }}
            >
              Let&apos;s build something{" "}
              <em
                style={{
                  color: "var(--gold)",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={adjIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "inline-block" }}
                  >
                    {ADJECTIVES[adjIndex]}.
                  </motion.span>
                </AnimatePresence>
              </em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: 18,
                color: "var(--muted)",
                margin: "0 0 32px",
                maxWidth: 360,
              }}
            >
              Have a project in mind? Want to work together? Or just want to say hi?
              Drop me a message and I&apos;ll get back to you.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <motion.a
                href="https://www.linkedin.com/in/alissa-bengtson/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <img src="/images/icon-li.svg" width={16}></img> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/avbengt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <img src="/images/icon-gh.svg" width={16}></img> GitHub
              </motion.a>
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.16}>
            {status === "success" ? (
              <div
                style={{
                  background: "var(--fuchsia4)",
                  border: "1px solid var(--fuchsia3)",
                  borderRadius: 10,
                  padding: "36px 32px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "italic",
                    fontSize: 25,
                    fontWeight: 600,
                    color: "var(--fuchsia2)",
                    margin: "0 0 8px",
                  }}
                >
                  Message sent!
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 17,
                    color: "var(--muted)",
                    margin: 0,
                  }}
                >
                  Thanks for reaching out! I&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <div>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: 15,
                        color: "var(--violet2)",
                        margin: "4px 0 0",
                      }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: 15,
                        color: "var(--violet2)",
                        margin: "4px 0 0",
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    className="form-input"
                    name="message"
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    aria-invalid={!!errors.message}
                    style={{ height: 120, resize: "vertical" }}
                  />
                  {errors.message && (
                    <p
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: 15,
                        color: "var(--violet2)",
                        margin: "4px 0 0",
                      }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: 13,
                      color: "var(--violet2)",
                      margin: 0,
                    }}
                  >
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <motion.button
                  type="submit"
                  className="btn-fuchsia"
                  disabled={status === "sending"}
                  style={{
                    width: "fit-content",
                    opacity: status === "sending" ? 0.7 : 1,
                  }}
                >
                  {status === "sending" ? "Sending..." : <>Send it <ArrowRight /></>}
                </motion.button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
        }
      `}</style>
    </section>
  )
}
