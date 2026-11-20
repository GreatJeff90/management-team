import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const deskFaviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="16" fill="#172554"/>
  <g transform="translate(6.5, 6.5) scale(0.79)" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="2" y1="9" x2="22" y2="9"/>
    <line x1="4" y1="9" x2="4" y2="20"/>
    <rect x="14" y="9" width="6" height="11" rx="1"/>
    <line x1="14" y1="14.5" x2="20" y2="14.5"/>
    <path d="M8 9V6.5A1.5 1.5 0 0 1 9.5 5h2A1.5 1.5 0 0 1 13 6.5V9"/>
  </g>
</svg>`;

export const metadata: Metadata = {
  title: "The Management Team Desk",
  description:
    "Claim your official fan membership card for early ticket presales, exclusive merch drops, and VIP inner-circle access.",
  icons: {
    icon: `data:image/svg+xml,${encodeURIComponent(deskFaviconSvg)}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}