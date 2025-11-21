import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://alwan-projects.me";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Alwan Jauza Rosyad | Full Stack Developer & Engineer",
    template: "%s | Alwan Jauza Rosyad",
  },

  description:
    "Professional portfolio of Alwan Jauza Rosyad, a Lead Full Stack Developer specializing in scalable enterprise applications using Next.js, Django, and Cloud Architecture.",

  keywords: [
    "Alwan Jauza Rosyad",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer Indonesia",
    "Next.js Developer",
    "Django Developer",
    "React Expert",
    "Portfolio",
  ],

  authors: [{ name: "Alwan Jauza Rosyad", url: BASE_URL }],
  creator: "Alwan Jauza Rosyad",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Alwan Jauza Rosyad | Full Stack Developer",
    description:
      "Building scalable web applications where clean code drives efficiency. Explore the portfolio of a Full Stack Engineer based in Indonesia.",
    siteName: "Alwan Jauza Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alwan Jauza Rosyad Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alwan Jauza Rosyad | Full Stack Developer",
    description:
      "Building scalable web applications where clean code drives efficiency.",
    images: ["/og-image.jpg"],
    creator: "@alwanjauza",
  },

  icons: {
    icon: "/logo/icon.png",
    shortcut: "/logo/icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F7F3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#F8F7F3] text-[#323131]`}
      >
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alwan Jauza Rosyad",
              url: BASE_URL,
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://linkedin.com/in/alwanjauza",
                "https://github.com/alwanjauza",
                "https://instagram.com/alwanjauza",
              ],
              worksFor: {
                "@type": "Organization",
                name: "PT. Maleo Teknologi Indonesia",
              },
            }),
          }}
        />

        {children}
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
