import { Fraunces, Outfit } from 'next/font/google'
import "@/styles/globals.css"

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'Alissa | Front-end Developer',
  description: "I've been building things for the web since dial-up was considered fast. 13+ years of professional front-end experience.",
  openGraph: {
    title: 'Alissa | Front-end Developer',
    description: "Front-end developer. Building for the web since 1999.",
    url: 'https://alissa.dev',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
