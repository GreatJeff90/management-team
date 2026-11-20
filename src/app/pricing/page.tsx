"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  Lock,
  Menu,
  Loader2,
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

const COUNTRY_CODES = [
  { code: "US", name: "United States", dial: "+1" },
  { code: "AF", name: "Afghanistan", dial: "+93" },
  { code: "AL", name: "Albania", dial: "+355" },
  { code: "DZ", name: "Algeria", dial: "+213" },
  { code: "AD", name: "Andorra", dial: "+376" },
  { code: "AO", name: "Angola", dial: "+244" },
  { code: "AG", name: "Antigua & Barbuda", dial: "+1-268" },
  { code: "AR", name: "Argentina", dial: "+54" },
  { code: "AM", name: "Armenia", dial: "+374" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "AT", name: "Austria", dial: "+43" },
  { code: "AZ", name: "Azerbaijan", dial: "+994" },
  { code: "BS", name: "Bahamas", dial: "+1-242" },
  { code: "BH", name: "Bahrain", dial: "+973" },
  { code: "BD", name: "Bangladesh", dial: "+880" },
  { code: "BB", name: "Barbados", dial: "+1-246" },
  { code: "BY", name: "Belarus", dial: "+375" },
  { code: "BE", name: "Belgium", dial: "+32" },
  { code: "BZ", name: "Belize", dial: "+501" },
  { code: "BJ", name: "Benin", dial: "+229" },
  { code: "BT", name: "Bhutan", dial: "+975" },
  { code: "BO", name: "Bolivia", dial: "+591" },
  { code: "BA", name: "Bosnia & Herzegovina", dial: "+387" },
  { code: "BW", name: "Botswana", dial: "+267" },
  { code: "BR", name: "Brazil", dial: "+55" },
  { code: "BN", name: "Brunei", dial: "+673" },
  { code: "BG", name: "Bulgaria", dial: "+359" },
  { code: "BF", name: "Burkina Faso", dial: "+226" },
  { code: "BI", name: "Burundi", dial: "+257" },
  { code: "KH", name: "Cambodia", dial: "+855" },
  { code: "CM", name: "Cameroon", dial: "+237" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "CV", name: "Cape Verde", dial: "+238" },
  { code: "CF", name: "Central African Republic", dial: "+236" },
  { code: "TD", name: "Chad", dial: "+235" },
  { code: "CL", name: "Chile", dial: "+56" },
  { code: "CN", name: "China", dial: "+86" },
  { code: "CO", name: "Colombia", dial: "+57" },
  { code: "KM", name: "Comoros", dial: "+269" },
  { code: "CG", name: "Congo", dial: "+242" },
  { code: "CD", name: "Congo (DRC)", dial: "+243" },
  { code: "CR", name: "Costa Rica", dial: "+506" },
  { code: "CI", name: "Côte d'Ivoire", dial: "+225" },
  { code: "HR", name: "Croatia", dial: "+385" },
  { code: "CU", name: "Cuba", dial: "+53" },
  { code: "CY", name: "Cyprus", dial: "+357" },
  { code: "CZ", name: "Czech Republic", dial: "+420" },
  { code: "DK", name: "Denmark", dial: "+45" },
  { code: "DJ", name: "Djibouti", dial: "+253" },
  { code: "DM", name: "Dominica", dial: "+1-767" },
  { code: "DO", name: "Dominican Republic", dial: "+1-809" },
  { code: "EC", name: "Ecuador", dial: "+593" },
  { code: "EG", name: "Egypt", dial: "+20" },
  { code: "SV", name: "El Salvador", dial: "+503" },
  { code: "GQ", name: "Equatorial Guinea", dial: "+240" },
  { code: "ER", name: "Eritrea", dial: "+291" },
  { code: "EE", name: "Estonia", dial: "+372" },
  { code: "SZ", name: "Eswatini", dial: "+268" },
  { code: "ET", name: "Ethiopia", dial: "+251" },
  { code: "FJ", name: "Fiji", dial: "+679" },
  { code: "FI", name: "Finland", dial: "+358" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "GA", name: "Gabon", dial: "+241" },
  { code: "GM", name: "Gambia", dial: "+220" },
  { code: "GE", name: "Georgia", dial: "+995" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "GH", name: "Ghana", dial: "+233" },
  { code: "GR", name: "Greece", dial: "+30" },
  { code: "GD", name: "Grenada", dial: "+1-473" },
  { code: "GT", name: "Guatemala", dial: "+502" },
  { code: "GN", name: "Guinea", dial: "+224" },
  { code: "GW", name: "Guinea-Bissau", dial: "+245" },
  { code: "GY", name: "Guyana", dial: "+592" },
  { code: "HT", name: "Haiti", dial: "+509" },
  { code: "HN", name: "Honduras", dial: "+504" },
  { code: "HK", name: "Hong Kong", dial: "+852" },
  { code: "HU", name: "Hungary", dial: "+36" },
  { code: "IS", name: "Iceland", dial: "+354" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "ID", name: "Indonesia", dial: "+62" },
  { code: "IR", name: "Iran", dial: "+98" },
  { code: "IQ", name: "Iraq", dial: "+964" },
  { code: "IE", name: "Ireland", dial: "+353" },
  { code: "IL", name: "Israel", dial: "+972" },
  { code: "IT", name: "Italy", dial: "+39" },
  { code: "JM", name: "Jamaica", dial: "+1-876" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "JO", name: "Jordan", dial: "+962" },
  { code: "KZ", name: "Kazakhstan", dial: "+7" },
  { code: "KE", name: "Kenya", dial: "+254" },
  { code: "KI", name: "Kiribati", dial: "+686" },
  { code: "KW", name: "Kuwait", dial: "+965" },
  { code: "KG", name: "Kyrgyzstan", dial: "+996" },
  { code: "LA", name: "Laos", dial: "+856" },
  { code: "LV", name: "Latvia", dial: "+371" },
  { code: "LB", name: "Lebanon", dial: "+961" },
  { code: "LS", name: "Lesotho", dial: "+266" },
  { code: "LR", name: "Liberia", dial: "+231" },
  { code: "LY", name: "Libya", dial: "+218" },
  { code: "LI", name: "Liechtenstein", dial: "+423" },
  { code: "LT", name: "Lithuania", dial: "+370" },
  { code: "LU", name: "Luxembourg", dial: "+352" },
  { code: "MO", name: "Macau", dial: "+853" },
  { code: "MG", name: "Madagascar", dial: "+261" },
  { code: "MW", name: "Malawi", dial: "+265" },
  { code: "MY", name: "Malaysia", dial: "+60" },
  { code: "MV", name: "Maldives", dial: "+960" },
  { code: "ML", name: "Mali", dial: "+223" },
  { code: "MT", name: "Malta", dial: "+356" },
  { code: "MH", name: "Marshall Islands", dial: "+692" },
  { code: "MR", name: "Mauritania", dial: "+222" },
  { code: "MU", name: "Mauritius", dial: "+230" },
  { code: "MX", name: "Mexico", dial: "+52" },
  { code: "FM", name: "Micronesia", dial: "+691" },
  { code: "MD", name: "Moldova", dial: "+373" },
  { code: "MC", name: "Monaco", dial: "+377" },
  { code: "MN", name: "Mongolia", dial: "+976" },
  { code: "ME", name: "Montenegro", dial: "+382" },
  { code: "MA", name: "Morocco", dial: "+212" },
  { code: "MZ", name: "Mozambique", dial: "+258" },
  { code: "MM", name: "Myanmar", dial: "+95" },
  { code: "NA", name: "Namibia", dial: "+264" },
  { code: "NR", name: "Nauru", dial: "+674" },
  { code: "NP", name: "Nepal", dial: "+977" },
  { code: "NL", name: "Netherlands", dial: "+31" },
  { code: "NZ", name: "New Zealand", dial: "+64" },
  { code: "NI", name: "Nicaragua", dial: "+505" },
  { code: "NE", name: "Niger", dial: "+227" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  { code: "KP", name: "North Korea", dial: "+850" },
  { code: "MK", name: "North Macedonia", dial: "+389" },
  { code: "NO", name: "Norway", dial: "+47" },
  { code: "OM", name: "Oman", dial: "+968" },
  { code: "PK", name: "Pakistan", dial: "+92" },
  { code: "PW", name: "Palau", dial: "+680" },
  { code: "PS", name: "Palestine", dial: "+970" },
  { code: "PA", name: "Panama", dial: "+507" },
  { code: "PG", name: "Papua New Guinea", dial: "+675" },
  { code: "PY", name: "Paraguay", dial: "+595" },
  { code: "PE", name: "Peru", dial: "+51" },
  { code: "PH", name: "Philippines", dial: "+63" },
  { code: "PL", name: "Poland", dial: "+48" },
  { code: "PT", name: "Portugal", dial: "+351" },
  { code: "QA", name: "Qatar", dial: "+974" },
  { code: "RO", name: "Romania", dial: "+40" },
  { code: "RU", name: "Russia", dial: "+7" },
  { code: "RW", name: "Rwanda", dial: "+250" },
  { code: "KN", name: "Saint Kitts & Nevis", dial: "+1-869" },
  { code: "LC", name: "Saint Lucia", dial: "+1-758" },
  { code: "VC", name: "Saint Vincent & Grenadines", dial: "+1-784" },
  { code: "WS", name: "Samoa", dial: "+685" },
  { code: "SM", name: "San Marino", dial: "+378" },
  { code: "ST", name: "São Tomé & Príncipe", dial: "+239" },
  { code: "SA", name: "Saudi Arabia", dial: "+966" },
  { code: "SN", name: "Senegal", dial: "+221" },
  { code: "RS", name: "Serbia", dial: "+381" },
  { code: "SC", name: "Seychelles", dial: "+248" },
  { code: "SL", name: "Sierra Leone", dial: "+232" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "SK", name: "Slovakia", dial: "+421" },
  { code: "SI", name: "Slovenia", dial: "+386" },
  { code: "SB", name: "Solomon Islands", dial: "+677" },
  { code: "SO", name: "Somalia", dial: "+252" },
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "KR", name: "South Korea", dial: "+82" },
  { code: "SS", name: "South Sudan", dial: "+211" },
  { code: "ES", name: "Spain", dial: "+34" },
  { code: "LK", name: "Sri Lanka", dial: "+94" },
  { code: "SD", name: "Sudan", dial: "+249" },
  { code: "SR", name: "Suriname", dial: "+597" },
  { code: "SE", name: "Sweden", dial: "+46" },
  { code: "CH", name: "Switzerland", dial: "+41" },
  { code: "SY", name: "Syria", dial: "+963" },
  { code: "TW", name: "Taiwan", dial: "+886" },
  { code: "TJ", name: "Tajikistan", dial: "+992" },
  { code: "TZ", name: "Tanzania", dial: "+255" },
  { code: "TH", name: "Thailand", dial: "+66" },
  { code: "TL", name: "Timor-Leste", dial: "+670" },
  { code: "TG", name: "Togo", dial: "+228" },
  { code: "TO", name: "Tonga", dial: "+676" },
  { code: "TT", name: "Trinidad & Tobago", dial: "+1-868" },
  { code: "TN", name: "Tunisia", dial: "+216" },
  { code: "TR", name: "Turkey", dial: "+90" },
  { code: "TM", name: "Turkmenistan", dial: "+993" },
  { code: "TV", name: "Tuvalu", dial: "+688" },
  { code: "UG", name: "Uganda", dial: "+256" },
  { code: "UA", name: "Ukraine", dial: "+380" },
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "UY", name: "Uruguay", dial: "+598" },
  { code: "UZ", name: "Uzbekistan", dial: "+998" },
  { code: "VU", name: "Vanuatu", dial: "+678" },
  { code: "VA", name: "Vatican City", dial: "+379" },
  { code: "VE", name: "Venezuela", dial: "+58" },
  { code: "VN", name: "Vietnam", dial: "+84" },
  { code: "YE", name: "Yemen", dial: "+967" },
  { code: "ZM", name: "Zambia", dial: "+260" },
  { code: "ZW", name: "Zimbabwe", dial: "+263" },
];

const CARD_TIERS = [
  {
    id: "standard",
    name: "Standard Card",
    monthlyPrice: 100,
    annualPrice: 80,
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
    monthlyPrice: 200,
    annualPrice: 160,
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
    monthlyPrice: 300,
    annualPrice: 240,
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

type CardTier = (typeof CARD_TIERS)[number];

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Selected Card Application Modal State
  const [selectedTier, setSelectedTier] = useState<CardTier | null>(null);
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("US");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Separate Thank-You Confirmation Pop-Up State
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const selectedCountry =
    COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0];

  const handleOpenCheckout = (tier: CardTier) => {
    setSelectedTier(tier);
    setSubmitError(null);
  };

  const handleCloseCheckout = () => {
    if (isSubmitting) return;
    setSelectedTier(null);
    setSubmitError(null);
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTier || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const monthlyRate =
      billingCycle === "annual"
        ? selectedTier.annualPrice
        : selectedTier.monthlyPrice;
    const totalBilled =
      billingCycle === "annual" ? monthlyRate * 12 : monthlyRate;

    try {
      const response = await fetch("https://formspree.io/f/xppdjaro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          cardTier: selectedTier.name,
          cardSerialPreview: selectedTier.cardNumber,
          billingCycle: billingCycle === "annual" ? "Annual" : "Monthly",
          amount: `$${totalBilled} (${
            billingCycle === "annual" ? `$${monthlyRate}/mo billed annually` : "billed monthly"
          })`,
          fullName,
          phoneNumber: `${selectedCountry.dial} ${phoneNumber}`,
          country: `${selectedCountry.name} (${selectedCountry.code})`,
          houseAddress: address,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit application. Please try again.");
      }

      // Close form modal, clear fields, and open the Thank-You pop-up
      setSelectedTier(null);
      setFullName("");
      setCountryCode("US");
      setPhoneNumber("");
      setAddress("");
      setEmail("");
      setShowSuccessPopup(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* ================= FLOATING PILL NAVBAR ================= */}
      <header className="sticky top-3 sm:top-4 z-40 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-blue-950/5 rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 pl-0.5 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-950 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <DeskLogoIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="text-[13px] sm:text-sm font-extrabold tracking-tight text-blue-950">
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

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="#cards"
              className="bg-blue-950 hover:bg-orange-500 text-white text-[11px] sm:text-xs font-bold px-3.5 sm:px-4 py-2 rounded-full transition-colors shadow-xs whitespace-nowrap"
            >
              Claim Card
            </a>

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
                  className="px-3.5 py-2.5 rounded-2xl hover:bg-slate-50 hover:text-blue-950 transition-colors"
                >
                  Start Here
                </Link>
                <Link
                  href="/#process"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-2xl hover:bg-slate-50 hover:text-blue-950 transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="/#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-2xl hover:bg-slate-50 hover:text-blue-950 transition-colors"
                >
                  Card Perks
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-2xl bg-orange-50/70 text-blue-950 flex items-center justify-between"
                >
                  <span>Cards & Pricing</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
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

      {/* ================= PRICING HERO + BILLING TOGGLE ================= */}
      <section className="pt-12 sm:pt-16 pb-10 px-5 sm:px-6">
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
            className="text-[32px] sm:text-5xl font-extrabold tracking-tight text-blue-950 leading-[1.16] sm:leading-[1.12] max-w-md sm:max-w-none mx-auto"
          >
            Pick the card that fits{" "}
            <br className="hidden sm:inline" />
            your{" "}
            <span className="inline-block px-3.5 sm:px-4 py-0.5 mt-1 sm:mt-0 rounded-xl sm:rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-500">
              Fandom
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 text-[13px] sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed"
          >
            Click any card below to register your member details and claim an
            instant digital Wallet pass plus gated presale access.
          </motion.p>

          {/* Monthly / Annual Billing Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-7 sm:mt-8 inline-flex items-center p-1.5 rounded-full bg-slate-100 border border-slate-200/80"
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-blue-950 shadow-xs"
                  : "text-slate-500 hover:text-blue-950"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-blue-950 text-white shadow-xs"
                  : "text-slate-500 hover:text-blue-950"
              }`}
            >
              <span>Annual</span>
              <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-extrabold">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= 3 MEMBERSHIP CARD PLANS ================= */}
      <section id="cards" className="pb-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
          {CARD_TIERS.map((tier, idx) => {
            const displayPrice =
              billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => handleOpenCheckout(tier)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenCheckout(tier);
                  }
                }}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer group ${
                  tier.featured
                    ? "bg-blue-950 text-white shadow-2xl shadow-blue-950/20 ring-2 ring-orange-500 lg:-translate-y-2 hover:ring-orange-400"
                    : "bg-white text-blue-950 border border-slate-200/90 shadow-sm hover:border-orange-400 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Visual Fan Card Preview */}
                  <div
                    className={`rounded-2xl p-4 mb-6 shadow-md relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] ${tier.cardStyle}`}
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
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenCheckout(tier);
                  }}
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
        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 py-3 px-4 rounded-2xl border border-slate-200/60">
            <Smartphone className="w-4 h-4 text-orange-500 shrink-0" />
            <span>Instant Apple & Google Wallet Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 py-3 px-4 rounded-2xl border border-slate-200/60">
            <Ticket className="w-4 h-4 text-orange-500 shrink-0" />
            <span>Verified Presale Access Codes</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 py-3 px-4 rounded-2xl border border-slate-200/60">
            <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
            <span>Upgrade or Cancel Anytime</span>
          </div>
        </div>
      </section>

      {/* ================= FULL COMPARISON MATRIX ================= */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
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
      <section id="faqs" className="py-16 sm:py-20 px-5 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
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
      <section className="px-5 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto rounded-3xl bg-blue-950 text-white p-7 sm:p-12 text-center relative overflow-hidden shadow-xl shadow-blue-950/15">
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
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 max-w-xs sm:max-w-none mx-auto">
            <a
              href="#cards"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md shadow-orange-500/25 transition-all"
            >
              Choose Your Card
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all"
            >
              Back to Home
            </Link>
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

      {/* ================= MEMBER REGISTRATION MODAL ================= */}
      <AnimatePresence>
        {selectedTier && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseCheckout}
            className="fixed inset-0 z-50 bg-blue-950/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden my-auto"
            >
              {/* Modal Top Bar */}
              <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-950 text-white flex items-center justify-center">
                    <DeskLogoIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-blue-950">
                      {selectedTier.name} Registration
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {billingCycle === "annual"
                        ? `$${selectedTier.annualPrice}/mo (billed $${
                            selectedTier.annualPrice * 12
                          }/yr)`
                        : `$${selectedTier.monthlyPrice}/mo billed monthly`}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCloseCheckout}
                  disabled={isSubmitting}
                  aria-label="Close modal"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Member Details Form */}
              <form
                onSubmit={handleCheckoutSubmit}
                className="p-5 sm:p-6 space-y-4"
              >
                {/* Mini Live Card Strip */}
                <div
                  className={`rounded-2xl px-4 py-3 flex items-center justify-between shadow-xs ${selectedTier.cardStyle}`}
                >
                  <div>
                    <p className="text-[9px] uppercase tracking-widest opacity-75">
                      Cardholder Name
                    </p>
                    <p className="text-xs font-extrabold truncate max-w-[190px]">
                      {fullName.trim() || "YOUR NAME HERE"}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-bold">
                    {selectedTier.cardNumber}
                  </span>
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="member-name"
                    className="block text-xs font-bold text-blue-950 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="member-name"
                    name="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Jordan Taylor"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-xs sm:text-sm text-blue-950 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone Number with Country Code */}
                <div>
                  <label
                    htmlFor="member-phone"
                    className="block text-xs font-bold text-blue-950 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <div className="flex items-stretch gap-2">
                    <select
                      aria-label="Country Code"
                      name="countryCode"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-[125px] sm:w-[140px] shrink-0 rounded-xl border border-slate-200 bg-slate-50/60 px-2.5 py-2.5 text-xs font-semibold text-blue-950 focus:bg-white focus:border-orange-500 focus:outline-none transition-colors"
                    >
                      {COUNTRY_CODES.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code} ({country.dial}) — {country.name}
                        </option>
                      ))}
                    </select>

                    <input
                      id="member-phone"
                      name="phoneNumber"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="555 234 5678"
                      className="flex-1 min-w-0 rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-xs sm:text-sm text-blue-950 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* House Address */}
                <div>
                  <label
                    htmlFor="member-address"
                    className="block text-xs font-bold text-blue-950 mb-1.5"
                  >
                    House Address
                  </label>
                  <input
                    id="member-address"
                    name="houseAddress"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street address, apartment, city, state/postal code"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-xs sm:text-sm text-blue-950 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="member-email"
                    className="block text-xs font-bold text-blue-950 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="member-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-xs sm:text-sm text-blue-950 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                {submitError && (
                  <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200/80 rounded-xl px-3 py-2">
                    {submitError}
                  </p>
                )}

                {/* Compact Submit Row */}
                <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>Encrypted submission</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white text-xs font-bold px-6 py-2.5 shadow-sm shadow-orange-500/20 transition-all cursor-pointer shrink-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= THANK YOU CONFIRMATION POP-UP ================= */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccessPopup(false)}
            className="fixed inset-0 z-50 bg-blue-950/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 sm:p-7 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-orange-500/15 text-orange-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>

              <h3 className="mt-4 text-lg font-extrabold text-blue-950">
                Application Received
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Thank you for your application, the admin will contact you.
              </p>

              <button
                type="button"
                onClick={() => setShowSuccessPopup(false)}
                className="mt-6 w-full py-3 rounded-full bg-blue-950 hover:bg-orange-500 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}