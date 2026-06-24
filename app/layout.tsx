import type { Metadata, Viewport } from "next";
import { Fraunces, Newsreader, IBM_Plex_Mono, Mr_Dafoe } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "variable",
  axes: ["SOFT", "opsz"],
  display: "swap",
});

const body = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const signature = Mr_Dafoe({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://onemorebeatmovement.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "One More Beat Movement — A movement for people who keep going",
    template: "%s — One More Beat Movement",
  },
  description:
    "One More Beat is a movement for people who keep going. One more beat. One more breath. One more day. Founded by Fernando Moreno.",
  keywords: [
    "One More Beat",
    "resilience",
    "keep going",
    "movement",
    "Fernando Moreno",
  ],
  authors: [{ name: "Fernando Moreno" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "One More Beat Movement",
    description: "A movement for people who keep going.",
    siteName: "One More Beat Movement",
  },
  twitter: {
    card: "summary_large_image",
    title: "One More Beat Movement",
    description: "A movement for people who keep going.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${signature.variable}`}
    >
      <body className="antialiased">
        <a
          href="#manifesto"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-omb-black focus:px-4 focus:py-2 focus:text-omb-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
