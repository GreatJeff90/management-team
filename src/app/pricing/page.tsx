"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Check,
  Minus,
  Plus,
  CreditCard,
  ShieldCheck,
  Ticket,
  Crown,
  Smartphone,
  Package,
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
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="4" y1="9" x2="4" y2="20" />
      <rect x="14" y="9" width="6" height="11" rx="1" />
      <line x1="14" y1="14.5" x2="20" y2="14.5" />
      <path d="M8 9V6.5A1.5 1.5 0 0 1 9.5 5h2A1.5 1.5 0 0 1 13 6.5V9" />
    </svg>
  );
}

const CARD_TIERS = [
  {
    id: "standard",
    name: "Standard Card",
    monthlyPrice: 9,
    annualPrice: 7,
    tagline: "Official digital fan card for everyday supporters.",
    featured: false,
    badge: null,
    cardMaterial: "Instant Apple & Google Wallet Pass",
    cardStyle:
      "bg-gradient-to-br from-slate-100 via-white to-slate-200 text-blue-950 border border-slate-300/80",
    cardNumber: "MT-STD-0841",
    perks: [
      "Numbered Digital Fan Membership Card",
      "5% member discount on official merch",
      "Access to members-only community feed",
      "Standard presale newsletter & alerts",
      "Digital event check-in badge",
    ],
  },
  {
    id: "gold",
    name: "Gold Card",
    monthlyPrice: 29,
    annualPrice: 24,
    tagline: "Priority access & physical embossed card for dedicated fans.",
    featured: true,
    badge: "Most Popular",
    cardMaterial: "Digital Pass + Gold-Foil PVC Card",
    cardStyle:
      "bg-gradient-to-br from-amber-300 via-orange-400 to-amber-500 text-blue-950 border border-amber-200",
    cardNumber: "MT-GLD-0482",
    perks: [
      "Everything in Standard Card",
      "24-hour early presale access to tickets & drops",
      "12% member discount on all official merch",
      "Physical gold-foil membership card mailed to you",
      "Automatic entry into monthly signed merch raffles",
    ],
  },
  {
    id: "platinum",
    name: "Platinum Card",
    monthlyPrice: 79,
    annualPrice: 64,
    tagline: "All-access VIP card for inner-circle superfans.",
    featured: false,
    badge: "VIP Pass",
    cardMaterial: "Digital Pass + Engraved Metal Card",
    cardStyle:
      "bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white border border-orange-500/60",
    cardNumber: "MT-PLT-0099",
    perks: [
      "Everything in Gold Card",
      "48-hour first-wave VIP presale window",
      "20% merch discount + free priority shipping",
      "Heavyweight brushed metal card + welcome box",
      "Private VIP soundcheck & livestream Q&A invites",
    ],
  },
];

const COMPARISON_ROWS = [
  {
    category: "Membership Credentials",
    features: [
      {
        name: "Apple & Google Wallet Digital Pass",
        standard: true,
        gold: true,
        platinum: true,
      },
      {
        name: "Unique Serialized Member ID",
        standard: true,
        gold: true,
        platinum: true,
      },
      {
        name: "Physical Embossed Gold-Foil Card",
        standard: false,
        gold: true,
        platinum: false,
      },
      {
        name: "Engraved Heavyweight Metal Card",
        standard: false,
        gold: false,
        platinum: true,
      },
    ],
  },
  {
    category: "Tickets, Drops & Discounts",
    features: [
      {
        name: "Official Store Merch Discount",
        standard: "5% Off",
        gold: "12% Off",
        platinum: "20% Off",
      },
      {
        name: "Tour & Event Ticket Presale Window",
        standard: "General Member",
        gold: "24h Early Access",
        platinum: "48h First-Wave VIP",
      },
      {
        name: "Free Priority Shipping on Merch",
        standard: false,
        gold: "Orders $75+",
        platinum: "All Orders",
      },
      {
        name: "Monthly Signed Merch Raffle Entries",
        standard: "1 Entry",
        gold: "3 Entries",
        platinum: "10 Entries",
      },
    ],
  },
  {
    category: "Community & VIP Experiences",
    features: [
      {
        name: "Private Fan Feed & Behind-the-Scenes",
        standard: true,
        gold: true,
        platinum: true,
      },
      {
        name: "Live Q&A & Acoustic Stream Access",
        standard: false,
        gold: true,
        platinum: true,
      },
      {
        name: "VIP Soundcheck & Meet-and-Greet Invites",
        standard: false,
        gold: false,
        platinum: true,
      },
      {
        name: "Dedicated 1-on-1 Fan Concierge",
        standard: false,
        gold: false,
        platinum: true,
      },
    ],
  },
];

const PRICING_FAQS = [
  {
    q: "How fast do I receive my fan membership card?",
    a: "Your digital membership card is issued immediately upon checkout so you can add it to Apple Wallet or Google Wallet right away. Physical Gold and Platinum cards ship within 5–7 business days with tracking.",
  },
  {
    q: "How does annual billing work?",
    a: "Choosing annual billing saves you up to 20% compared to paying month-to-month, locks in your rate for 12 months, and ships your physical Gold or Platinum card immediately with no waiting period.",
  },
  {
    q: "What happens to my physical card if I upgrade or cancel?",
    a: "Your physical card is yours to keep as a collector's item. If you upgrade from Gold to Platinum, we’ll ship your new engraved metal Platinum card free of charge.",
  },
  {
    q: "Can I gift a fan membership card to someone else?",
    a: "Yes. At checkout, you can toggle 'Send as a Gift' to enter the recipient's name for card engraving and choose whether to send their digital pass immediately or on a specific date.",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500/15 text-orange-600">
        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
      </span>
    ) : (
      <span className="text-slate-300 font-bold">—</span>
    );
  }
  return (
    <span className="text-xs font-bold text-blue-950 bg-slate-100 px-2.5 py-1 rounded-full">
      {value}
    </span>
  );
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* ================= FLOATING PILL NAVBAR ================= */}
      <header className="sticky top-4 z-50 px-4">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-blue-950/5 rounded-full px-4 py-2.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 pl-1 group">
            <div className="w-8 h-8 rounded-full bg-blue-950 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <DeskLogoIcon className="w-4 h-4" />
            </div>
            <span className="text-sm font-extrabold tracking-tight text-blue-950">
              Management <span className="text-orange-500">Team</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-blue-950 transition-colors">
              Start Here
            </Link>
            <Link
              href="/#process"
              className="hover:text-blue-950 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#features"
              className="hover:text-blue-950 transition-colors"
            >
              Card Perks
            </Link>
            <Link
              href="/pricing"
              className="text-blue-950 relative flex flex-col items-center"
            >
              <span>Cards & Pricing</span>
              <span className="w-1 h-1 rounded-full bg-orange-500 mt-0.5" />
            </Link>
            <a href="#faqs" className="hover:text-blue-950 transition-colors">
              FAQs
            </a>
          </nav>

          <a
            href="#cards"
            className="bg-blue-950 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-xs"
          >
            Claim Card
          </a>
        </div>
      </header>

      {/* ================= PRICING HERO + BILLING TOGGLE ================= */}
      <section className="pt-16 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 text-[11px] font-bold mb-6"
          >
            <CreditCard className="w-3.5 h-3.5" />
            Official Fan Membership Cards
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-950 leading-[1.12]"
          >
            Pick the card that fits
            <br />
            your{" "}
            <span className="inline-block px-4 py-0.5 rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-500">
              Fandom
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed"
          >
            Every tier unlocks an instant digital Wallet pass, serialized member
            ID, and gated access to ticket presales and exclusive drops.
          </motion.p>

          {/* Monthly / Annual Billing Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 inline-flex items-center p-1.5 rounded-full bg-slate-100 border border-slate-200/80"
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-blue-950 shadow-xs"
                  : "text-slate-500 hover:text-blue-950"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-blue-950 text-white shadow-xs"
                  : "text-slate-500 hover:text-blue-950"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-extrabold">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= 3 MEMBERSHIP CARD PLANS ================= */}
      <section id="cards" className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-7">
          {CARD_TIERS.map((tier, idx) => {
            const displayPrice =
              billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${
                  tier.featured
                    ? "bg-blue-950 text-white shadow-2xl shadow-blue-950/20 ring-2 ring-orange-500 lg:-translate-y-2"
                    : "bg-white text-blue-950 border border-slate-200/90 shadow-sm"
                }`}
              >
                <div>
                  {/* Visual Fan Card Preview */}
                  <div
                    className={`rounded-2xl p-4 mb-6 shadow-md relative overflow-hidden ${tier.cardStyle}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <DeskLogoIcon className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-black uppercase tracking-wider">
                          Management Team
                        </span>
                      </div>
                      <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-black/10">
                        {tier.id}
                      </span>
                    </div>

                    <div className="mt-7 flex items-end justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest opacity-70">
                          Official Fan Pass
                        </p>
                        <p className="text-xs font-mono font-bold tracking-wider mt-0.5">
                          {tier.cardNumber}
                        </p>
                      </div>
                      <Sparkles className="w-4 h-4 opacity-80" />
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-extrabold">{tier.name}</h2>
                    {tier.badge && (
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
                          tier.featured
                            ? "bg-orange-500 text-white"
                            : "bg-blue-50 text-blue-950"
                        }`}
                      >
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-4xl font-black">${displayPrice}</span>
                    <span
                      className={`text-xs font-medium ${
                        tier.featured ? "text-blue-200" : "text-slate-400"
                      }`}
                    >
                      /month
                    </span>
                    {billingCycle === "annual" && (
                      <span
                        className={`ml-auto text-[11px] font-semibold ${
                          tier.featured ? "text-orange-300" : "text-orange-600"
                        }`}
                      >
                        Billed ${displayPrice * 12}/yr
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-2.5 text-xs leading-relaxed ${
                      tier.featured ? "text-blue-200" : "text-slate-500"
                    }`}
                  >
                    {tier.tagline}
                  </p>

                  {/* Card Material Pill */}
                  <div
                    className={`mt-4 px-3 py-2 rounded-xl text-[11px] font-semibold flex items-center gap-2 ${
                      tier.featured
                        ? "bg-blue-900/80 text-orange-300 border border-blue-800"
                        : "bg-slate-50 text-blue-950 border border-slate-200/70"
                    }`}
                  >
                    <Package className="w-3.5 h-3.5 shrink-0 text-orange-500" />
                    <span>{tier.cardMaterial}</span>
                  </div>

                  {/* Perks List */}
                  <ul className="mt-6 space-y-3">
                    {tier.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2.5 text-xs font-medium"
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.featured
                              ? "text-orange-400"
                              : "text-orange-500"
                          }`}
                        />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`mt-8 w-full py-3.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.featured
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25"
                      : "bg-blue-950 hover:bg-orange-500 text-white"
                  }`}
                >
                  Select {tier.name}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Strip */}
        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 py-3 px-4 rounded-2xl border border-slate-200/60">
            <Smartphone className="w-4 h-4 text-orange-500" />
            <span>Instant Apple & Google Wallet Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 py-3 px-4 rounded-2xl border border-slate-200/60">
            <Ticket className="w-4 h-4 text-orange-500" />
            <span>Verified Presale Access Codes</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 py-3 px-4 rounded-2xl border border-slate-200/60">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span>Upgrade or Cancel Anytime</span>
          </div>
        </div>
      </section>

      {/* ================= FULL COMPARISON MATRIX ================= */}
      <section className="py-20 px-6 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-950 text-[11px] font-bold border border-blue-100">
              Side-by-Side Breakdown
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-950">
              Compare Fan Card Benefits
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              See everything included with each Management Team membership card.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200/80 bg-slate-50/60">
                  <th className="py-4 px-6 text-xs font-extrabold text-blue-950 w-2/5">
                    Member Benefit
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-extrabold text-blue-950">
                    Standard
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-extrabold text-orange-600 bg-orange-50/40">
                    Gold
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-extrabold text-blue-950">
                    Platinum
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((group) => (
                  <React.Fragment key={group.category}>
                    <tr className="bg-slate-50/80 border-y border-slate-100">
                      <td
                        colSpan={4}
                        className="py-2.5 px-6 text-[11px] font-extrabold uppercase tracking-wider text-slate-400"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((feat) => (
                      <tr
                        key={feat.name}
                        className="border-b border-slate-100 last:border-none hover:bg-slate-50/40 transition-colors"
                      >
                        <td className="py-3.5 px-6 text-xs font-semibold text-slate-700">
                          {feat.name}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={feat.standard} />
                        </td>
                        <td className="py-3.5 px-4 text-center bg-orange-50/25">
                          <CellValue value={feat.gold} />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={feat.platinum} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= PRICING FAQS ================= */}
      <section id="faqs" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[11px] font-bold border border-orange-200/70">
              Card & Billing FAQs
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-blue-950">
              Questions About Your Card
            </h2>
          </div>

          <div className="space-y-3">
            {PRICING_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-blue-950 cursor-pointer"
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

      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto rounded-3xl bg-blue-950 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl shadow-blue-950/15">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-[11px] font-bold mb-4">
            <Crown className="w-3.5 h-3.5" />
            Founding Member Window Open
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to claim your official fan card?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-blue-200 max-w-md mx-auto leading-relaxed">
            Lock in a low serial number today and get instant access to upcoming
            presales, exclusive merch drops, and VIP community perks.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cards"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md shadow-orange-500/25 transition-all"
            >
              Choose Your Card
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MINIMALIST FOOTER ================= */}
      <footer className="border-t border-slate-100 py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-blue-950 text-white flex items-center justify-center">
              <DeskLogoIcon className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-extrabold text-blue-950">
              Management <span className="text-orange-500">Team</span>
            </span>
          </Link>

          <p className="text-[11px] text-slate-400">
            © 2026 Management Team Fan Club. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-[11px] font-semibold text-slate-500">
            <Link href="/pricing" className="hover:text-orange-500">
              Cards
            </Link>
            <Link href="/#features" className="hover:text-orange-500">
              Perks
            </Link>
            <a href="#faqs" className="hover:text-orange-500">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}