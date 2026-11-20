"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Check,
  Flame,
  Plus,
  Minus,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";

// Minimalist Desk SVG Logo Icon
function DeskLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Tabletop */}
      <line x1="2" y1="9" x2="22" y2="9" />
      {/* Left Leg */}
      <line x1="4" y1="9" x2="4" y2="20" />
      {/* Right Drawer Unit */}
      <rect x="14" y="9" width="6" height="11" rx="1" />
      <line x1="14" y1="14.5" x2="20" y2="14.5" />
      {/* Minimalist Card Stand on Desk */}
      <path d="M8 9V6.5A1.5 1.5 0 0 1 9.5 5h2A1.5 1.5 0 0 1 13 6.5V9" />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    id: "vipclub",
    brand: "BACKSTAGE",
    headline: "Instant Digital & Physical Pass",
    quote:
      "“Getting my numbered Platinum fan card in the mail felt special—and scanning my digital pass got me straight into the pre-sale queue.”",
    author: "Jude Byrd, Founding Member #0142",
    initials: "JB",
  },
  {
    id: "frontrow",
    brand: "FRONT ROW",
    headline: "No More Missing Out on Tickets",
    quote:
      "“Gold and Platinum cardholders get early presale codes before the general public, so I finally secured front-row seats at face value.”",
    author: "Elena Vance, Gold Cardholder",
    initials: "EV",
  },
  {
    id: "innercircle",
    brand: "INNER CIRCLE",
    headline: "Unmatched Fan Perks",
    quote:
      "“Upgrading to the Platinum membership card unlocked private livestream Q&As and signed merch drops that more than paid for the card.”",
    author: "Marcus Thorne, Platinum Cardholder",
    initials: "MT",
  },
  {
    id: "fanpass",
    brand: "FAN PASS",
    headline: "Everything in One Wallet Pass",
    quote:
      "“My Apple Wallet membership card updates automatically with new presale codes, merch discounts, and VIP event invites.”",
    author: "Sora Takahashi, Verified Supporter",
    initials: "ST",
  },
];

const TIERS = [
  {
    name: "Standard Card",
    price: "$100",
    period: "/month",
    tagline: "Official digital fan card for everyday supporters.",
    featured: false,
    badge: null,
    perks: [
      "Numbered Digital Fan Membership Card",
      "5% member discount on official merch",
      "Access to members-only community feed",
      "Early newsletter & announcement alerts",
    ],
  },
  {
    name: "Gold Card",
    price: "$200",
    period: "/month",
    tagline: "Priority access & physical embossed card for dedicated fans.",
    featured: true,
    badge: "Most Popular",
    perks: [
      "24-hour early presale access to tickets & drops",
      "12% member discount on all official merch",
      "Physical gold-foil membership card mailed to you",
      "Entry into monthly signed merch raffles",
    ],
  },
  {
    name: "Platinum Card",
    price: "$300",
    period: "/month",
    tagline: "All-access VIP card for inner-circle superfans.",
    featured: false,
    badge: "VIP Pass",
    perks: [
      "Private VIP meet-and-greet & soundcheck invites",
      "20% merch discount + free priority shipping",
      "Heavyweight metal Platinum card + welcome gift box",
      "Dedicated VIP fan concierge & direct Q&A access",
    ],
  },
];

const FAQS = [
  {
    q: "Can I upgrade my fan membership card tier anytime?",
    a: "Yes. You can upgrade from Standard to Gold or Platinum anytime to immediately unlock upcoming presale windows, VIP drops, and physical card perks.",
  },
  {
    q: "Do I get both a digital and physical membership card?",
    a: "Every member receives an instant digital membership card for Apple Wallet and Google Wallet. Gold and Platinum members also receive an engraved physical card shipped to their door.",
  },
  {
    q: "How do I use my card for ticket presales and merch discounts?",
    a: "Your unique member ID printed on your card unlocks gated presale links, automatically applies your tier discount at checkout, and verifies your status at live events.",
  },
];

export default function ManagementTeamHomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* ================= FLOATING PILL NAVBAR ================= */}
      <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-blue-950/5 rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between">
          {/* Minimalist Desk Logo + Name */}
          <Link href="/" className="flex items-center gap-2 pl-0.5 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-950 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <DeskLogoIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="text-[13px] sm:text-sm font-extrabold tracking-tight text-blue-950">
              Management <span className="text-orange-500">Team</span>
            </span>
          </Link>

          {/* Center Navigation Links with Active Dot */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-500">
            <Link
              href="/"
              className="text-blue-950 relative flex flex-col items-center"
            >
              <span>Start Here</span>
              <span className="w-1 h-1 rounded-full bg-orange-500 mt-0.5" />
            </Link>
            <a href="#process" className="hover:text-blue-950 transition-colors">
              How It Works
            </a>
            <a
              href="#features"
              className="hover:text-blue-950 transition-colors"
            >
              Card Perks
            </a>
            <Link
              href="/pricing"
              className="hover:text-blue-950 transition-colors"
            >
              Cards & Pricing
            </Link>
            <a href="#faqs" className="hover:text-blue-950 transition-colors">
              FAQs
            </a>
          </nav>

          {/* Right Pill CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/pricing"
              className="bg-blue-950 hover:bg-orange-500 text-white text-[11px] sm:text-xs font-bold px-3.5 sm:px-4 py-2 rounded-full transition-colors shadow-xs whitespace-nowrap"
            >
              Get Your Card
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="md:hidden w-8 h-8 rounded-full border border-slate-200/80 bg-slate-50 text-blue-950 flex items-center justify-center hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="md:hidden max-w-4xl mx-auto mt-2 bg-white/98 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-blue-950/10 rounded-3xl p-4"
            >
              <nav className="flex flex-col space-y-1 text-xs font-bold text-slate-600">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-2xl bg-orange-50/70 text-blue-950 flex items-center justify-between"
                >
                  <span>Start Here</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                </Link>
                <a
                  href="#process"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-2xl hover:bg-slate-50 hover:text-blue-950 transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-2xl hover:bg-slate-50 hover:text-blue-950 transition-colors"
                >
                  Card Perks
                </a>
                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-2xl hover:bg-slate-50 hover:text-blue-950 transition-colors"
                >
                  Cards & Pricing
                </Link>
                <a
                  href="#faqs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-2xl hover:bg-slate-50 hover:text-blue-950 transition-colors"
                >
                  FAQs
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-14 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Announcement Pill (Single-line on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 p-1 pr-3 rounded-full bg-slate-50 border border-slate-200/80 shadow-2xs mb-6 sm:mb-7 max-w-full"
          >
            <span className="px-2.5 py-0.5 rounded-full bg-blue-950 text-white text-[10px] font-extrabold tracking-wide shrink-0">
              New
            </span>
            <Link
              href="/pricing#cards"
              className="text-[11px] sm:text-xs font-medium text-slate-600 flex items-center gap-1 truncate"
            >
              <span className="sm:hidden truncate">
                VIP presales open with{" "}
                <span className="underline decoration-orange-500 font-semibold text-blue-950">
                  Platinum Card
                </span>
              </span>
              <span className="hidden sm:inline">
                Unlock VIP presales & backstage access with{" "}
                <span className="underline decoration-orange-500 font-semibold text-blue-950 hover:text-orange-600">
                  Platinum Card
                </span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </Link>
          </motion.div>

          {/* Balanced Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-[32px] sm:text-6xl font-extrabold tracking-tight text-blue-950 leading-[1.16] sm:leading-[1.12] max-w-md sm:max-w-none mx-auto"
          >
            A fan card that <br className="hidden sm:inline" />
            works like a{" "}
            <span className="inline-block px-3.5 sm:px-4 py-0.5 mt-1 sm:mt-0 rounded-xl sm:rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-500">
              VIP Pass
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 sm:mt-5 text-[13px] sm:text-base text-slate-500 max-w-sm sm:max-w-lg mx-auto leading-relaxed"
          >
            True supporters deserve more than a follow button—claim your official
            fan membership card for early ticket presales, exclusive merch, and
            inner-circle experiences.
          </motion.p>

          {/* Equal-Width Mobile Stacked / Desktop Inline CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 max-w-xs sm:max-w-none mx-auto"
          >
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-xs sm:text-sm font-bold px-6 py-3.5 sm:py-3 rounded-full shadow-md shadow-blue-950/15 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              Claim Membership Card
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-blue-950 border border-slate-200 text-xs sm:text-sm font-bold px-5 py-3.5 sm:py-3 rounded-full shadow-2xs transition-all"
            >
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-black">
                ★
              </span>
              Compare All Cards
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= 3 STEP CARDS SECTION ================= */}
      <section id="process" className="py-10 sm:py-12 px-5 sm:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="md:-rotate-2 md:hover:rotate-0 bg-slate-50/90 border border-slate-200/70 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between min-h-[210px] sm:min-h-[250px] transition-transform"
          >
            {/* Mini UI Mockup */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-2xs flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400">
                Card Edition
              </span>
              <Link
                href="/pricing#cards"
                className="px-3.5 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-xs transition-colors"
              >
                Choose Card
              </Link>
            </div>

            <div className="mt-6 sm:mt-8">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                STEP 1:
              </span>
              <p className="mt-1 text-sm text-slate-600 leading-snug">
                Pick your <strong className="text-blue-950">Standard, Gold,</strong>{" "}
                or <strong className="text-blue-950">Platinum</strong> card in
                seconds.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="bg-slate-50/90 border border-slate-200/70 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between min-h-[210px] sm:min-h-[250px]"
          >
            {/* Mini Chat / Alert Pills */}
            <div className="space-y-2.5">
              <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-2xs flex items-center gap-2.5 ml-3 sm:ml-4">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px]">
                  <p className="font-bold text-blue-950">Gold Presale Unlocked</p>
                  <p className="text-slate-400 text-[10px]">
                    World Tour VIP Seats • Early Code
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-2xs flex items-center gap-2.5 mr-3 sm:mr-4">
                <div className="w-6 h-6 rounded-full bg-blue-950 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-3 h-3" />
                </div>
                <div className="text-[11px]">
                  <p className="font-bold text-blue-950">Card Activated</p>
                  <p className="text-slate-400 text-[10px]">
                    Member #0482 added to Wallet
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                STEP 2:
              </span>
              <p className="mt-1 text-sm text-slate-600 leading-snug">
                Unlock <strong className="text-blue-950">presales, merch,</strong>{" "}
                and <strong className="text-blue-950">private streams</strong>{" "}
                instantly.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.16 }}
            className="md:rotate-2 md:hover:rotate-0 bg-slate-50/90 border border-slate-200/70 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between min-h-[210px] sm:min-h-[250px] transition-transform"
          >
            {/* Mini Bar Chart Mockup */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-2xs flex items-end justify-center gap-3 h-24">
              <div className="w-4 h-8 rounded-t-md bg-blue-100" />
              <div className="w-4 h-12 rounded-t-md bg-blue-200" />
              <div className="w-4 h-16 rounded-t-md bg-orange-500" />
              <div className="w-4 h-10 rounded-t-md bg-blue-950" />
            </div>

            <div className="mt-6 sm:mt-8">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                STEP 3:
              </span>
              <p className="mt-1 text-sm text-slate-600 leading-snug">
                <strong className="text-blue-950">Flash your pass</strong> online
                or at events and rack up member rewards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CENTERED TESTIMONIAL + LOGO SWITCHER ================= */}
      <section className="py-14 sm:py-16 px-5 sm:px-6 border-y border-slate-100 bg-slate-50/30">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={TESTIMONIALS[activeTestimonial].id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {/* Avatar Circle */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-950 to-blue-800 text-white font-extrabold text-sm flex items-center justify-center mx-auto shadow-md border-2 border-orange-400">
                {TESTIMONIALS[activeTestimonial].initials}
              </div>

              <h3 className="mt-4 text-base font-extrabold text-blue-950">
                {TESTIMONIALS[activeTestimonial].headline}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                {TESTIMONIALS[activeTestimonial].quote}
              </p>
              <p className="mt-2 text-[11px] font-medium text-slate-400">
                — {TESTIMONIALS[activeTestimonial].author}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Fan Experience Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 items-center">
            {TESTIMONIALS.map((item, idx) => {
              const isSelected = idx === activeTestimonial;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-[11px] sm:text-xs font-black tracking-wider transition-all relative ${
                    isSelected
                      ? "bg-white text-blue-950 shadow-sm border border-slate-200/80"
                      : "text-slate-400 hover:text-blue-950"
                  }`}
                >
                  {item.brand}
                  {isSelected && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className="py-16 sm:py-20 px-5 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-950 text-[11px] font-bold border border-blue-100">
              Card Perks
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-blue-950">
              Here’s what Management Team Helps You Unlock
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              One official membership card that puts you first in line every time.
            </p>
          </div>

          {/* 2-Column Feature Dashboard Preview Cards */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Left Feature Card */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/70 p-5 sm:p-6 flex flex-col justify-between">
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-blue-950">
                    Upcoming Cardholder Drops
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 shrink-0">
                    VIP Access
                  </span>
                </div>
                {[
                  {
                    set: "2026 Arena Tour — Front-Row Presale",
                    tier: "Platinum First",
                    date: "Fri, 8:00 PM",
                  },
                  {
                    set: "Limited Signed Collector Hoodie Drop",
                    tier: "Gold & Platinum",
                    date: "Sun, 2:00 PM",
                  },
                  {
                    set: "Members-Only Acoustic Livestream & Q&A",
                    tier: "All Cardholders",
                    date: "Tue, 6:00 PM",
                  },
                ].map((drop) => (
                  <div
                    key={drop.set}
                    className="flex items-start sm:items-center justify-between gap-2 py-2 border-t border-slate-100 text-xs"
                  >
                    <div>
                      <p className="font-bold text-blue-950 leading-snug">
                        {drop.set}
                      </p>
                      <p className="text-[10px] text-orange-500 font-semibold mt-0.5">
                        {drop.tier}
                      </p>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 shrink-0">
                      {drop.date}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-base font-extrabold text-blue-950">
                  Priority Presale & Merch Drops
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Your membership card unlocks gated ticket windows and limited
                  merch runs before links go public.
                </p>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/70 p-5 sm:p-6 flex flex-col justify-between">
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-2xs">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-blue-950">
                    Your Member Card Status
                  </span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                    Verified VIP
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-blue-950 text-white">
                    <p className="text-[9px] sm:text-[10px] text-blue-200">
                      Member ID
                    </p>
                    <p className="text-base sm:text-lg font-extrabold mt-0.5">
                      #0482
                    </p>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-orange-500 text-white">
                    <p className="text-[9px] sm:text-[10px] text-orange-100">
                      Events
                    </p>
                    <p className="text-base sm:text-lg font-extrabold mt-0.5">
                      14
                    </p>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-100 text-blue-950">
                    <p className="text-[9px] sm:text-[10px] text-slate-500">
                      Saved
                    </p>
                    <p className="text-base sm:text-lg font-extrabold mt-0.5">
                      $320
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-base font-extrabold text-blue-950">
                  Digital & Physical Fan Credentials
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Keep your scannable pass in Apple/Google Wallet and show off
                  your personalized physical card anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEMBERSHIP TIERS SECTION ================= */}
      <section id="pricing" className="py-16 sm:py-20 px-5 sm:px-6 bg-slate-50/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[11px] font-bold border border-orange-200/70">
              Membership Cards
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-blue-950">
              Choose Your Fan Membership Card
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Simple monthly plans. Upgrade your card tier or cancel anytime.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                  tier.featured
                    ? "bg-blue-950 text-white shadow-xl shadow-blue-950/20 ring-2 ring-orange-500"
                    : "bg-white text-blue-950 border border-slate-200/80 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-extrabold">{tier.name}</h3>
                    {tier.badge && (
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
                          tier.featured
                            ? "bg-orange-500 text-white"
                            : "bg-blue-50 text-blue-900"
                        }`}
                      >
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-black">{tier.price}</span>
                    <span
                      className={`text-xs ${
                        tier.featured ? "text-blue-200" : "text-slate-400"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>

                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      tier.featured ? "text-blue-200" : "text-slate-500"
                    }`}
                  >
                    {tier.tagline}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {tier.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2 text-xs font-medium"
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.featured ? "text-orange-400" : "text-orange-500"
                          }`}
                        />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/pricing#cards"
                  className={`mt-8 w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    tier.featured
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/25"
                      : "bg-blue-950 hover:bg-orange-500 text-white"
                  }`}
                >
                  Get {tier.name}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-950 hover:text-orange-500 transition-colors"
            >
              View annual discounts & full card comparison
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FAQS SECTION ================= */}
      <section id="faqs" className="py-16 sm:py-20 px-5 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-950 text-[11px] font-bold">
              FAQs
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-blue-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-blue-950"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-orange-500 shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-slate-500 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MINIMALIST FOOTER ================= */}
      <footer className="border-t border-slate-100 py-10 px-5 sm:px-6 bg-white">
  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
    <Link href="/" className="flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-full bg-blue-950 text-white flex items-center justify-center">
        <DeskLogoIcon className="w-3.5 h-3.5" />
      </div>
      <span className="text-sm font-extrabold text-blue-950">
        Management <span className="text-orange-500">Team</span>
      </span>
    </Link>

    <div className="flex flex-col items-center gap-1">
      <p className="text-[11px] text-slate-400">
        © 2026 Management Team Fan Club. All rights reserved.
      </p>
      <a
        href="mailto:admin@managementteamdesk.com"
        className="text-[11px] font-semibold text-blue-950 hover:text-orange-500 transition-colors"
      >
        admin@managementteamdesk.com
      </a>
    </div>

    <div className="flex items-center gap-5 text-[11px] font-semibold text-slate-500">
      <Link href="/pricing" className="hover:text-orange-500">
        Cards
      </Link>
      <a href="#features" className="hover:text-orange-500">
        Perks
      </a>
      <a href="#faqs" className="hover:text-orange-500">
        Support
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}