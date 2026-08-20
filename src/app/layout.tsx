import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tejal — Developer Portfolio",
  description:
    "Frontend developer and Information Science & Engineering student. Portfolio built as an interactive MS Paint workspace.",
  keywords: [
    "portfolio",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "MS Paint",
  ],
  authors: [{ name: "Tejal" }],
  openGraph: {
    title: "Tejal — Developer Portfolio",
    description:
      "Frontend developer and ISE student. A creative portfolio built inside an MS Paint-inspired workspace.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejal — Developer Portfolio",
    description:
      "Frontend developer and ISE student. A creative portfolio built inside an MS Paint-inspired workspace.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${vt323.variable}`}>
      <body>{children}</body>
    </html>
  );
}