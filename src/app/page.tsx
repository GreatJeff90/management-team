"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Award,
  Crown,
  Flame,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
  PackageCheck,
  CreditCard,
  Layers,
  CheckCircle2,
  User,
} from "lucide-react";

// Data for the interactive "Who Is PokéVault For?" / Membership Tier showcase
const TIERS = [
  {
    id: "standard",
    tabLabel: "Standard Trainer",
    badge: "ENTRY TIER • FREE / $9 MO",
    cardTitle: "Standard Collector",
    cardDescription:
      "Access our verified marketplace of raw singles, modern booster packs, and weekly restock alerts with buyer protection on every order.",
    cardFooter: "Up to 5% off marketplace singles",
    sideLabel: "For Casual Collectors",
    sideTitle: "Standard Trainer",
    sideSub: "Designed for everyday binder builders and new collectors.",
    perks: ["Verified authentic cards", "Standard tracked shipping"],
  },
  {
    id: "gold",
    tabLabel: "Gold Elite",
    badge: "MOST POPULAR • $29 / MO",
    cardTitle: "Gold Elite Member",
    cardDescription:
      "Unlock 24-hour early access to Japanese & English booster box drops, 12% storewide discounts, and monthly graded slab raffles.",
    cardFooter: "12% off all singles & sealed boxes",
    sideLabel: "For Serious Enthusiasts",
    sideTitle: "Gold Elite",
    sideSub: "Built for set completers, sealed collectors, and active traders.",
    perks: ["24h early drop access", "Free priority insured shipping"],
  },
  {
    id: "platinum",
    tabLabel: "Platinum Master",
    badge: "VIP VAULT ACCESS • $79 / MO",
    cardTitle: "Platinum Vault Master",
    cardDescription:
      "Direct access to PSA 10 grails, vintage WOTC holos, zero-fee consignment, and a guaranteed monthly mystery graded slab shipped to your door.",
    cardFooter: "20% off + 1 Monthly PSA Slab Included",
    sideLabel: "For High-End Investors",
    sideTitle: "Platinum Master",
    sideSub: "Tailored for trophy hunters and high-volume collectors.",
    perks: ["Private vault grail auctions", "Dedicated card concierge"],
  },
  {
    id: "vendors",
    tabLabel: "Card Shops & Traders",
    badge: "PARTNER TIER • CUSTOM",
    cardTitle: "Verified Vendor & Trader",
    cardDescription:
      "List your graded slabs and vintage singles to thousands of pre-vetted members with instant payouts and bulk grading submissions.",
    cardFooter: "2.5% flat seller fee • Instant escrow",
    sideLabel: "For Stores & Bulk Sellers",
    sideTitle: "Card Shops & Traders",
    sideSub: "Streamlined liquidity for local card shops and streamers.",
    perks: ["Bulk PSA/BGS submission rates", "Zero chargeback guarantee"],
  },
];

const WHY_CARDS = [
  {
    icon: ShieldCheck,
    title: "100% Authenticated",
    description:
      "Every single card and sealed box passes multi-point UV, weight, and print-pattern inspection before shipping.",
    featured: true,
  },
  {
    icon: Flame,
    title: "Beat Scalper Bots",
    description:
      "Members-only allocation guarantees fair MSRP access to high-demand Pokémon sets without fighting automated bots.",
    featured: false,
  },
  {
    icon: Layers,
    title: "Vault & Ship Anytime",
    description:
      "Store your hits in our climate-controlled insured vault for free and bundle multiple purchases into one shipment.",
    featured: false,
  },
  {
    icon: CreditCard,
    title: "Transparent Tier Pricing",
    description:
      "No hidden auction buyer premiums. Lock in flat member discounts across raw singles, booster boxes, and PSA slabs.",
    featured: false,
  },
];

const HOW_IT_WORKS = [
  {
    step: "STEP 01",
    icon: Award,
    title: "Choose Your Membership",
    description:
      "Pick Standard, Gold, or Platinum based on how often you rip packs or hunt for graded grails.",
    tag: "Upgrade or cancel anytime",
  },
  {
    step: "STEP 02",
    icon: Search,
    title: "Browse Drops & Vault",
    description:
      "Shop live member-only restocks, vintage singles, and authenticated slabs at locked-in member pricing.",
    tag: "Real-time inventory",
  },
  {
    step: "STEP 03",
    icon: PackageCheck,
    title: "Insured Delivery or Vault",
    description:
      "Have your cards shipped in protective magnetic slabs or hold them in your digital vault to trade instantly.",
    tag: "100% insured transit",
  },
];

export default function HomePage() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const currentTier = TIERS[activeTabIndex];

  const handlePrev = () => {
    setActiveTabIndex((prev) => (prev === 0 ? TIERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTabIndex((prev) => (prev === TIERS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* ================= TOP NAVIGATION ================= */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-sm shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-blue-950">
              Poké<span className="text-orange-500">Vault</span>
            </span>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#why" className="hover:text-blue-700 transition-colors">
              Why PokéVault
            </a>
            <a href="#tiers" className="hover:text-blue-700 transition-colors">
              Memberships
            </a>
            <a
              href="#how-it-works"
              className="hover:text-blue-700 transition-colors"
            >
              How It Works
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors shadow-sm">
              <User className="w-3.5 h-3.5 text-orange-400" />
              Member Portal
            </button>
            <button
              aria-label="Account"
              className="w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center text-xs font-bold shadow-sm transition-colors"
            >
              PV
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="pt-14 pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] text-blue-950"
          >
            Welcome
            <br />
            <span className="text-orange-500">To PokéVault</span>
          </motion.h1>

          {/* 3-Column Hero Focal Area (Left tagline, Center Card/Phone Visual, Right CTAs) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <p className="text-slate-600 text-base font-medium leading-snug max-w-[210px]">
                Pokémon card collecting simplified for members
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Verified Singles • Sealed • Slabs
              </div>
            </motion.div>

            {/* Center Visual: Sleek App / Holographic Slab Display */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex justify-center"
            >
              {/* Soft Blue & Orange Aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-orange-50 to-blue-50 rounded-full blur-2xl opacity-80 -z-10" />

              {/* Phone / Vault Frame */}
              <div className="w-[240px] h-[410px] rounded-[36px] bg-blue-950 p-2.5 shadow-2xl shadow-blue-950/20 border-4 border-slate-900 relative">
                {/* Notch */}
                <div className="w-24 h-4 bg-slate-900 rounded-b-xl mx-auto mb-2" />

                {/* Screen Content */}
                <div className="bg-white h-[358px] rounded-[26px] p-4 flex flex-col justify-between overflow-hidden relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-950 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                      PokéVault
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600">
                      GOLD TIER
                    </span>
                  </div>

                  {/* Featured Card Mockup inside Phone */}
                  <div className="my-2 rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-3.5 text-white text-left shadow-md relative overflow-hidden">
                    <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-orange-500/30 blur-lg" />
                    <div className="flex justify-between items-center text-[10px] text-blue-200 font-semibold">
                      <span>PSA 10 • GEM MINT</span>
                      <span className="text-orange-400">#006/165</span>
                    </div>
                    <div className="mt-3 mb-2 h-24 rounded-xl bg-gradient-to-tr from-orange-500/20 to-blue-400/20 border border-white/15 flex flex-col items-center justify-center">
                      <Flame className="w-8 h-8 text-orange-400 mb-1" />
                      <span className="text-[11px] font-bold tracking-wide">
                        Charizard ex SIR
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <p className="text-[9px] text-blue-300">Member Price</p>
                        <p className="text-sm font-extrabold text-white">
                          $215.00
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-orange-500 text-[10px] font-bold">
                        Claim
                      </span>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 font-medium text-center">
                    Next Gold Drop in 02h 14m
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <p className="text-slate-500 text-xs leading-relaxed max-w-[230px]">
                Join Standard, Gold, or Platinum to unlock authenticated Pokémon
                cards at true collector prices.
              </p>
              <div className="mt-4 flex flex-col gap-2.5 w-full max-w-[200px]">
                <a
                  href="#tiers"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-5 py-3 rounded-full shadow-md shadow-orange-500/25 transition-all"
                >
                  Join Membership
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold px-5 py-3 rounded-full transition-all"
                >
                  <Zap className="w-3.5 h-3.5 text-orange-400" />
                  Explore Live Drops
                </a>
              </div>
            </motion.div>
          </div>

          <p className="mt-10 text-[11px] font-medium text-slate-400">
            Zero counterfeit risk • Direct vault storage • Cancel tier anytime
          </p>
        </div>
      </section>

      {/* ================= WHY POKÉVAULT SECTION ================= */}
      <section id="why" className="py-20 px-6 bg-slate-50/60">
        <div className="max-w-5xl mx-auto">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-blue-950">
                Why PokéVault?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
                Card collecting reimagined for modern trainers. Experience
                bot-free drops, guaranteed authenticity, and member-only
                pricing across every era.
              </p>
            </div>
            <a
              href="#tiers"
              className="self-start sm:self-auto bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
            >
              Join Now
            </a>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`rounded-2xl p-6 flex flex-col justify-between transition-all ${
                    card.featured
                      ? "bg-blue-950 text-white shadow-xl shadow-blue-950/15"
                      : "bg-blue-50/70 hover:bg-blue-50 text-blue-950 border border-blue-100/80"
                  }`}
                >
                  <div>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center mb-5 ${
                        card.featured
                          ? "bg-orange-500 text-white"
                          : "bg-white text-orange-500 shadow-xs"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold leading-snug">
                      {card.title}
                    </h3>
                    <p
                      className={`mt-2.5 text-xs leading-relaxed ${
                        card.featured ? "text-blue-200" : "text-slate-600"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <a
                      href="#tiers"
                      className={`inline-block text-[11px] font-bold px-4 py-1.5 rounded-full transition-colors ${
                        card.featured
                          ? "bg-orange-500 hover:bg-orange-600 text-white"
                          : "bg-blue-950 hover:bg-blue-900 text-white"
                      }`}
                    >
                      Join Now
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MEMBERSHIP TIERS (INTERACTIVE SHOWCASE) ================= */}
      <section id="tiers" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Pill Tab Switcher */}
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-full bg-slate-100 border border-slate-200/70">
              {TIERS.map((tier, idx) => {
                const isActive = idx === activeTabIndex;
                return (
                  <button
                    key={tier.id}
                    onClick={() => setActiveTabIndex(idx)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      isActive
                        ? "bg-blue-950 text-white shadow-sm"
                        : "text-slate-600 hover:text-blue-950"
                    }`}
                  >
                    {tier.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Interactive Showcase */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 items-center gap-10">
            {/* Left Column: Section Heading & Slider Controls */}
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-500">
                Tailored Membership Levels
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 leading-tight">
                Choose Your
                <br />
                Trainer Tier
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Whether you are filling out your first binder or hunting PSA 10
                vintage grails, pick a membership built for your budget.
              </p>

              {/* Prev / Next Arrows */}
              <div className="mt-6 flex items-center gap-2.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Tier"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center text-slate-600 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Tier"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center text-slate-600 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="ml-2 text-xs font-bold text-slate-400">
                  0{activeTabIndex + 1} / 0{TIERS.length}
                </span>
              </div>
            </div>

            {/* Center Column: Featured Deep Royal Blue Membership Card */}
            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTier.id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-[300px] min-h-[340px] rounded-3xl bg-gradient-to-b from-blue-900 to-blue-950 text-white p-7 shadow-2xl shadow-blue-950/25 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Decorative Orange Glow */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-orange-500/20 blur-2xl" />

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-black tracking-tight text-white">
                        PV<span className="text-orange-500">.</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-bold tracking-wider text-orange-300">
                        {currentTier.badge}
                      </span>
                    </div>

                    <div className="mt-8">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
                        POKÉVAULT MEMBERSHIP
                      </p>
                      <h3 className="mt-1.5 text-2xl font-extrabold">
                        {currentTier.cardTitle}
                      </h3>
                      <p className="mt-3 text-xs text-blue-100/90 leading-relaxed">
                        {currentTier.cardDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-orange-300">
                    <Crown className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{currentTier.cardFooter}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Tier Details & CTA */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTier.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-xs font-bold text-orange-600">
                      {currentTier.sideLabel}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-extrabold text-blue-950">
                    {currentTier.sideTitle}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    {currentTier.sideSub}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {currentTier.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-center gap-2 text-xs font-medium text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-6 py-3 rounded-full shadow-md shadow-orange-500/20 transition-all">
                    Select {currentTier.tabLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section id="how-it-works" className="py-20 px-6 bg-slate-50/70">
        <div className="max-w-5xl mx-auto">
          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-500">
                Simple, Transparent & Collector-First
              </span>
              <h2 className="mt-1.5 text-3xl font-extrabold tracking-tight text-blue-950">
                How PokéVault Works
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Designed exclusively for Pokémon collectors. Going from sign-up to
              securing your first slab takes less than 2 minutes.
            </p>
          </div>

          {/* 3 Step Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold tracking-widest text-slate-400">
                        {item.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-base font-extrabold text-blue-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-700">
                    <span>{item.tag}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dark Royal Blue Bottom Banner CTA */}
          <div className="mt-12 rounded-3xl bg-blue-950 px-8 py-8 sm:px-10 sm:py-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/15">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-extrabold text-white">
                Ready to level up your collection?
              </h3>
              <p className="mt-1 text-xs text-blue-200">
                Create your account and claim your membership tier in seconds.
              </p>
            </div>
            <a
              href="#tiers"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-6 py-3.5 rounded-full shadow-lg shadow-orange-500/25 transition-all shrink-0"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-100">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-lg font-extrabold text-blue-950">
                  Poké<span className="text-orange-500">Vault</span>
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                Clean, authenticated Pokémon card marketplace built for
                collectors, traders, and graded slab enthusiasts.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 text-[10px] font-bold">
                  100% Authentic
                </span>
                <span className="px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold">
                  Insured Vault
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-blue-950">
                Quick Links
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#why" className="hover:text-orange-500">
                    Why PokéVault
                  </a>
                </li>
                <li>
                  <a href="#tiers" className="hover:text-orange-500">
                    Membership Tiers
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-orange-500">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-blue-950">
                Account
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="#tiers" className="hover:text-orange-500">
                    Create Membership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    My Card Vault
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-blue-950">
                Collector Support
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-500">
                <li>Grading & Authentication Hub</li>
                <li>Live Drop Schedule</li>
                <li>support@pokevault.club</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>© {new Date().getFullYear()} PokéVault Club. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-slate-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-600">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-600">
                Authenticity Guarantee
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}