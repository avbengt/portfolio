import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollHandler from "@/components/ScrollHandler";
import Script from "next/script";
import "flowbite";

export const metadata = {
  title: "Alissa Bengtson",
  description: "Alissa Bengtson is a frontend software engineer who builds modern, accessible, and engaging digital experiences for the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/og.png" />
        <meta property="og:url" content="https://alissa.dev" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/og.png" />
        <meta name="twitter:url" content="https://alissa.dev" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fjord+One&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Navbar */}
        <Navbar />

        {/* Scroll Handler */}
        <ScrollHandler />

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* External Scripts */}
        <Script src="https://code.jquery.com/jquery-3.6.4.min.js" strategy="beforeInteractive" />
        <Script src="/js/breakpoints.min.js" strategy="beforeInteractive" />
        <Script src="/js/browser.min.js" strategy="beforeInteractive" />
        <Script src="/js/util.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.scrolly.min.js" strategy="afterInteractive" />
        <Script src="/js/flowbite.min.js" strategy="afterInteractive" />

        {/* Feather Icons */}
        <Script id="feather-icons" strategy="afterInteractive">
          {`if (window.feather) { feather.replace(); }`}
        </Script>
      </body>
    </html>
  );
}