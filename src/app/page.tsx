"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Check,
  ShieldCheck,
  Layers,
  Crown,
  Flame,
  Plus,
  Minus,
  BarChart3,
  MessageSquare,
  PackageCheck,
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
      {/* Minimalist Monitor / Card Stand on Desk */}
      <path d="M8 9V6.5A1.5 1.5 0 0 1 9.5 5h2A1.5 1.5 0 0 1 13 6.5V9" />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    id: "psa",
    brand: "PSA VAULT",
    headline: "Quick and Easy Setup",
    quote:
      "“We’ve scaled to thousands of member card allocations monthly—Management Team’s tier dashboard is the only thing that keeps our drops sane.”",
    author: "Jude Byrd, Head Collector at Vault Partners",
    initials: "JB",
  },
  {
    id: "pokecenter",
    brand: "CARDEX",
    headline: "Zero Bot Interference",
    quote:
      "“Gold and Platinum members actually get booster boxes at fair prices without fighting scalper bots on release morning.”",
    author: "Elena Vance, TCG Portfolio Manager",
    initials: "EV",
  },
  {
    id: "slabhub",
    brand: "SLABHUB",
    headline: "Seamless Tier Upgrades",
    quote:
      "“Upgrading from Standard to Platinum unlocked private grail auctions and paid for itself on my very first vintage holo purchase.”",
    author: "Marcus Thorne, Vintage WOTC Collector",
    initials: "MT",
  },
  {
    id: "mintgrade",
    brand: "MINTGRADE",
    headline: "Instant Vault Tracking",
    quote:
      "“Every single card I buy goes straight into my digital vault with real-time population and price tracking.”",
    author: "Sora Takahashi, High-End Trader",
    initials: "ST",
  },
];

const TIERS = [
  {
    name: "Standard",
    price: "$9",
    period: "/month",
    tagline: "Essential access for casual binder builders.",
    featured: false,
    badge: null,
    perks: [
      "Verified raw singles & modern packs",
      "5% member discount storewide",
      "Standard tracked bubble-mailer shipping",
      "Weekly restock email alerts",
    ],
  },
  {
    name: "Gold",
    price: "$29",
    period: "/month",
    tagline: "Built for active collectors & set completers.",
    featured: true,
    badge: "Most Popular",
    perks: [
      "24-hour early access to booster box drops",
      "12% member discount storewide",
      "Free insured priority shipping",
      "Entry into monthly PSA slab raffles",
    ],
  },
  {
    name: "Platinum",
    price: "$79",
    period: "/month",
    tagline: "VIP vault access for serious grail hunters.",
    featured: false,
    badge: "VIP Access",
    perks: [
      "Private vintage & PSA 10 grail auctions",
      "20% member discount + 0% vault storage fees",
      "1 guaranteed graded slab shipped monthly",
      "Dedicated 1-on-1 card sourcing concierge",
    ],
  },
];

const FAQS = [
  {
    q: "Can I switch between Standard, Gold, and Platinum anytime?",
    a: "Yes. You can upgrade immediately to unlock an upcoming booster drop or downgrade at the end of your current billing cycle with one click.",
  },
  {
    q: "How do you guarantee Pokémon cards are authentic?",
    a: "Every single card, booster box, and graded slab passes multi-point UV, weight, and print-pattern verification at our desk before entering member inventory.",
  },
  {
    q: "What happens to cards stored in my digital vault?",
    a: "Cards held in your vault are stored in a climate-controlled, fully insured facility. You can request physical delivery or trade them to other members anytime.",
  },
];

export default function ManagementTeamHomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* ================= FLOATING PILL NAVBAR ================= */}
      <header className="sticky top-4 z-50 px-4">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-blue-950/5 rounded-full px-4 py-2.5 flex items-center justify-between">
          {/* Minimalist Desk Logo + Name */}
          <a href="#" className="flex items-center gap-2.5 pl-1 group">
            <div className="w-8 h-8 rounded-full bg-blue-950 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <DeskLogoIcon className="w-4 h-4" />
            </div>
            <span className="text-sm font-extrabold tracking-tight text-blue-950">
              Management <span className="text-orange-500">Team</span>
            </span>
          </a>

          {/* Center Navigation Links with Active Dot */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-500">
            <a
              href="#"
              className="text-blue-950 relative flex flex-col items-center"
            >
              <span>Start Here</span>
              <span className="w-1 h-1 rounded-full bg-orange-500 mt-0.5" />
            </a>
            <a href="#process" className="hover:text-blue-950 transition-colors">
              Process
            </a>
            <a
              href="#features"
              className="hover:text-blue-950 transition-colors"
            >
              Features
            </a>
            <a href="#pricing" className="hover:text-blue-950 transition-colors">
              Memberships
            </a>
            <a href="#faqs" className="hover:text-blue-950 transition-colors">
              FAQs
            </a>
          </nav>

          {/* Right Pill CTA */}
          <a
            href="#pricing"
            className="bg-blue-950 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-xs"
          >
            View Plans
          </a>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="pt-16 pb-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 p-1 pr-3.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-2xs mb-7"
          >
            <span className="px-2.5 py-0.5 rounded-full bg-blue-950 text-white text-[10px] font-extrabold tracking-wide">
              New
            </span>
            <span className="text-xs font-medium text-slate-600 flex items-center gap-1">
              Unlock early Pokémon drops with{" "}
              <a
                href="#pricing"
                className="underline decoration-orange-500 font-semibold text-blue-950 hover:text-orange-600"
              >
                Platinum Tier
              </a>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </span>
          </motion.div>

          {/* Bold Two-Line Headline with Highlighted Pill Word */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-blue-950 leading-[1.12]"
          >
            A card club that
            <br />
            works like a{" "}
            <span className="inline-block px-4 py-0.5 rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-500">
              Vault
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-5 text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed"
          >
            Serious collectors deserve a platform that does it all—from verified
            singles and bot-free booster drops to tiered member rewards.
          </motion.p>

          {/* Dual Pill CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md shadow-blue-950/15 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              Join Membership
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-blue-950 border border-slate-200 text-xs sm:text-sm font-bold px-5 py-3 rounded-full shadow-2xs transition-all"
            >
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-black">
                ★
              </span>
              Browse Live Cards
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= 3 TILTED STEP CARDS SECTION ================= */}
      <section id="process" className="py-12 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Tilted Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            whileHover={{ rotate: 0, y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="bg-slate-50/90 border border-slate-200/70 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-[250px]"
          >
            {/* Mini UI Mockup */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-2xs flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400">
                Tier Level
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold shadow-xs">
                Select Tier
              </span>
            </div>

            <div className="mt-8">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                STEP 1:
              </span>
              <p className="mt-1 text-sm text-slate-600 leading-snug">
                Pick <strong className="text-blue-950">Standard, Gold,</strong>{" "}
                or <strong className="text-blue-950">Platinum</strong> in
                seconds.
              </p>
            </div>
          </motion.div>

          {/* Card 2 (Straight Center) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="bg-slate-50/90 border border-slate-200/70 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-[250px]"
          >
            {/* Mini Chat / Alert Pills */}
            <div className="space-y-2.5">
              <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-2xs flex items-center gap-2.5 ml-4">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px]">
                  <p className="font-bold text-blue-950">Gold Drop Unlocked</p>
                  <p className="text-slate-400 text-[10px]">
                    151 Booster Bundle • $26.99
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-2xs flex items-center gap-2.5 mr-4">
                <div className="w-6 h-6 rounded-full bg-blue-950 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-3 h-3" />
                </div>
                <div className="text-[11px]">
                  <p className="font-bold text-blue-950">Slab Verified</p>
                  <p className="text-slate-400 text-[10px]">
                    PSA 10 Umbreon VMAX ready
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                STEP 2:
              </span>
              <p className="mt-1 text-sm text-slate-600 leading-snug">
                Claim <strong className="text-blue-950">singles, boxes,</strong>{" "}
                and <strong className="text-blue-950">graded slabs</strong> at
                member rates.
              </p>
            </div>
          </motion.div>

          {/* Card 3 (Tilted Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            whileHover={{ rotate: 0, y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.16 }}
            className="bg-slate-50/90 border border-slate-200/70 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-[250px]"
          >
            {/* Mini Bar Chart Mockup */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-2xs flex items-end justify-center gap-3 h-24">
              <div className="w-4 h-8 rounded-t-md bg-blue-100" />
              <div className="w-4 h-12 rounded-t-md bg-blue-200" />
              <div className="w-4 h-16 rounded-t-md bg-orange-500" />
              <div className="w-4 h-10 rounded-t-md bg-blue-950" />
            </div>

            <div className="mt-8">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                STEP 3:
              </span>
              <p className="mt-1 text-sm text-slate-600 leading-snug">
                <strong className="text-blue-950">Vault or ship</strong> your
                cards and watch your collection grow.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CENTERED TESTIMONIAL + LOGO SWITCHER ================= */}
      <section className="py-16 px-6 border-y border-slate-100 bg-slate-50/30">
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

          {/* Interactive Partner / Collector Brand Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 items-center">
            {TESTIMONIALS.map((item, idx) => {
              const isSelected = idx === activeTestimonial;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`py-3 px-4 rounded-xl text-xs font-black tracking-wider transition-all relative ${
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

      {/* ================= FEATURES SECTION ("HERE'S WHAT MANAGEMENT TEAM HELPS YOU MANAGE") ================= */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-950 text-[11px] font-bold border border-blue-100">
              Features
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-blue-950">
              Here’s what Management Team Helps You Manage
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              So you can focus on completing master sets and hunting grails.
            </p>
          </div>

          {/* 2-Column Feature Dashboard Preview Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Feature Card */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/70 p-6 flex flex-col justify-between">
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-blue-950">
                    Upcoming Member Drops
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600">
                    Live Queue
                  </span>
                </div>
                {[
                  {
                    set: "Scarlet & Violet: Prismatic Evolutions",
                    tier: "Platinum First",
                    date: "Fri, 8:00 PM",
                  },
                  {
                    set: "Japanese Terastal Festival Box",
                    tier: "Gold & Platinum",
                    date: "Sun, 2:00 PM",
                  },
                  {
                    set: "WOTC Base Set 1st Ed. Slab Lot",
                    tier: "All Members",
                    date: "Tue, 6:00 PM",
                  },
                ].map((drop) => (
                  <div
                    key={drop.set}
                    className="flex items-center justify-between py-2 border-t border-slate-100 text-xs"
                  >
                    <div>
                      <p className="font-bold text-blue-950">{drop.set}</p>
                      <p className="text-[10px] text-orange-500 font-semibold">
                        {drop.tier}
                      </p>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">
                      {drop.date}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-base font-extrabold text-blue-950">
                  Priority Drop Allocation
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Your membership tier automatically reserves your spot in high-demand
                  English and Japanese restocks.
                </p>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/70 p-6 flex flex-col justify-between">
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-2xs">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-blue-950">
                    Your Member Vault Stats
                  </span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                    +18.4% Value
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-3 rounded-xl bg-blue-950 text-white">
                    <p className="text-[10px] text-blue-200">Vaulted Cards</p>
                    <p className="text-lg font-extrabold mt-0.5">142</p>
                  </div>
                  <div className="p-3 rounded-xl bg-orange-500 text-white">
                    <p className="text-[10px] text-orange-100">PSA 10 Slabs</p>
                    <p className="text-lg font-extrabold mt-0.5">19</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100 text-blue-950">
                    <p className="text-[10px] text-slate-500">Saved</p>
                    <p className="text-lg font-extrabold mt-0.5">$640</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-base font-extrabold text-blue-950">
                  Real-Time Portfolio & Vault Desk
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Track market prices, request insured shipping, or trade slabs
                  instantly from your Management Team desk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEMBERSHIP TIERS SECTION ================= */}
      <section id="pricing" className="py-20 px-6 bg-slate-50/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[11px] font-bold border border-orange-200/70">
              Memberships
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-blue-950">
              Choose Your Membership Level
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Transparent monthly tiers. Upgrade, downgrade, or cancel anytime.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${
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

                <button
                  className={`mt-8 w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    tier.featured
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/25"
                      : "bg-blue-950 hover:bg-orange-500 text-white"
                  }`}
                >
                  Join {tier.name}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQS SECTION ================= */}
      <section id="faqs" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
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
      <footer className="border-t border-slate-100 py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-blue-950 text-white flex items-center justify-center">
              <DeskLogoIcon className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-extrabold text-blue-950">
              Management <span className="text-orange-500">Team</span>
            </span>
          </div>

          <p className="text-[11px] text-slate-400">
            © 2026 Management Team Card Club. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-[11px] font-semibold text-slate-500">
            <a href="#pricing" className="hover:text-orange-500">
              Memberships
            </a>
            <a href="#features" className="hover:text-orange-500">
              Vault
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