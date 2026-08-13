import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { WelcomePopup } from "@/components/WelcomePopup";
import { profile, seoKeywords, siteUrl } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const title = `${profile.name} | ${profile.jobTitle}`;
const description =
  "Jad Nacouzi is a Senior Full Stack Developer & Technical Consultant with 10+ years delivering enterprise software in Java (Spring Boot), .NET, React, Next.js, and Node.js, from requirements to production support.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: seoKeywords,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0d0e" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <StructuredData />
        <ThemeProvider>
          <div id="top" />
          <Header />
          <main>{children}</main>
          <Footer />
          <WelcomePopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
