import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
const font = Hanken_Grotesk({ subsets: ["latin"] });
import { OpenPanelComponent } from '@openpanel/nextjs';
import Script from "next/script";
import { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://ifti.engineer"),
  title: {
    default: "Taha",
    template: "%s | Taha",
  },
  description: "Full Stack Web Developer and Engineer from India, specializing in Node.js, React, and TypeScript.",
  keywords: ["Full Stack Developer", "Web Designer", "Backend Developer", "React", "TypeScript", "India", "Python"],
  authors: [{ name: "Taha", url: "https://ifti.engineer/" }],
  creator: "Taha",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ifti.engineer",
    siteName: "Taha's Portfolio",
    title: "Taha - Backend Developer",
    description: "Full Stack Web Developer and Designer from India, specializing in Backend, React, and TypeScript.",
    images: [
      {
        url: "https://ifti.engineer/Website_overview.png",
        width: 1200,
        height: 675,
        alt: "Taha's Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DexterIfti",
    creator: "@DexterIfti",
    images: [
      {
        url: "https://ifti.engineer/Website_overview.png",
        width: 1200,
        height: 675,
        alt: "Taha's Profile Picture",
      },
    ],
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} bg-[#fafafa] text-neutral-900 dark:bg-[#111010] dark:text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <OpenPanelComponent
            clientId="89e02301-b6bb-4341-a2b4-29d138532b7b"
            trackScreenViews={true}
          />
          <Navbar />
          {children}
          <Script src="/oneko.js" strategy="afterInteractive" />
        </ThemeProvider>
      </body>
    </html>
  );
}
