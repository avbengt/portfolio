import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollHandler from "@/components/ScrollHandler";
import Script from "next/script";

// Metadata should be defined inside the file, not imported
export const metadata = {
  title: "Alissa Bengtson | Portfolio",
  description: "Front-End Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjord+One&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <ScrollHandler />
        <main className="xl:ml-[25em]">
          {children}

        <Footer />
        </main>

        {/* External Scripts */}
        <Script src="https://code.jquery.com/jquery-3.6.4.min.js" strategy="beforeInteractive" />
        <Script src="/js/breakpoints.min.js" strategy="beforeInteractive" />
        <Script src="/js/browser.min.js" strategy="beforeInteractive" />
        <Script src="/js/util.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.scrolly.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />

        {/* Feather Icons */}
        <Script id="feather-icons" strategy="afterInteractive">
          {`if (window.feather) { feather.replace(); }`}
        </Script>
      </body>
    </html>
  );
}