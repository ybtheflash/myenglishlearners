import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Learners",
  description:
    "Happy Learning! Master English with comprehensive video lessons, interactive content, and expert guidance.",
  keywords: [
    "English Learning",
    "English Grammar",
    "Literature",
    "Maithree Roy",
    "English Lessons",
    "Online English Course",
    "YouTube English",
    "Literaree",
    "Happy Learning",
  ],
  authors: [{ name: "Maithree Roy" }],
  creator: "Maithree Roy",
  publisher: "English Learners",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://myenglishlearners.in",
    title: "English Learners by Maithree Roy - Happy Learning!",
    description:
      "Happy Learning! Master English with comprehensive video lessons, interactive content, and expert guidance.",
    siteName: "English Learners",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Learners by Maithree Roy - Happy Learning!",
    description:
      "Happy Learning! Master English with comprehensive video lessons, interactive content, and expert guidance.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Preload fonts */}
        <link
          rel="preload"
          href="/fonts/Maharlika-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Garet-Book.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* PWA primary color */}
        <meta name="theme-color" content="#ae8fc6" />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </body>
    </html>
  );
}
