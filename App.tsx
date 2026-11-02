import React, { useState } from 'react';
import {
  ArrowRight,
  Wrench,
  Hammer,
  HardHat,
  Box,
  MousePointerClick,
  Mail,
  ClipboardList,
  Gift,
  Trophy,
  Plus,
  Minus,
  Trees,
  Bath,
  Lightbulb,
  Check,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

const CTA_LINK = 'https://giftclick.org/?offer_id=2442&aff_id=144760';

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  brands: string[];
}

const CATEGORIES: CategoryCard[] = [
  {
    id: 'tools',
    title: 'Power Tools & Hardware',
    description: 'Top-brand cordless drills, combo kits, table saws, and accessories built for heavy-duty projects.',
    icon: <Wrench className="w-5 h-5 stroke-[1.8]" />,
    brands: ['Milwaukee M18 FUEL', 'DeWalt 20V MAX', 'Ryobi ONE+', 'Makita LXT', 'Diablo Blades'],
  },
  {
    id: 'outdoor',
    title: 'Patio & Outdoor Living',
    description: 'Grills, outdoor dining sets, pergolas, fire pits, and premium lawn equipment for every season.',
    icon: <Trees className="w-5 h-5 stroke-[1.8]" />,
    brands: ['Weber Genesis', 'Traeger Pellet Grills', 'Hampton Bay', 'Toro', 'Ryobi 40V HP'],
  },
  {
    id: 'remodel',
    title: 'Kitchen & Bath Remodel',
    description: 'Vanities, faucets, custom cabinetry, artisan tile, and stainless appliances in modern finishes.',
    icon: <Bath className="w-5 h-5 stroke-[1.8]" />,
    brands: ['Kohler', 'Moen Commercial', 'Delta Faucet', 'Glacier Bay', 'Bosch Kitchen'],
  },
  {
    id: 'smart-home',
    title: 'Smart Home & Lighting',
    description: 'Smart thermostats, security cameras, ceiling fans, and designer lighting fixtures for every room.',
    icon: <Lightbulb className="w-5 h-5 stroke-[1.8]" />,
    brands: ['Ring Security', 'Google Nest', 'Philips Hue', 'Lutron Caséta', 'Hunter Fans'],
  },
];

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'deals',
    question: 'What are deals?',
    answer:
      'Simple tasks like app downloads, surveys, or trial subscriptions. Each deal is straightforward and designed to be completed quickly.',
  },
  {
    id: 'quantity',
    question: 'How many do I need?',
    answer:
      'You only need to complete 5 simple deals to qualify for your full Home Depot discount voucher code.',
  },
  {
    id: 'time',
    question: 'How long do they take?',
    answer:
      'Typically 10-20 minutes per deal. Most users complete all required deals within a few hours spread across a day or two.',
  },
];

export default function App() {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['deals']);

  const toggleCategory = (id: string) => {
    setExpandedCategoryId((prev) => (prev === id ? null : id));
  };

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#F96302] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark Charcoal Gradient with Home Depot Orange glow)      */}
      {/* ========================================================================= */}
      <section className="relative bg-[#0d0e11] text-white pt-20 pb-24 md:pt-28 md:pb-32 px-4 overflow-hidden border-b border-neutral-900">
        {/* Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              'radial-gradient(circle at 50% 25%, rgba(249, 99, 2, 0.16) 0%, rgba(249, 99, 2, 0.04) 45%, rgba(0, 0, 0, 0) 75%)',
          }}
        />

        {/* Faint Background Line-Art Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-16 left-[8%] md:left-[12%] text-[#F96302]/20">
            <Box className="w-10 h-10 md:w-12 md:h-12 stroke-[1.2]" />
          </div>
          <div className="absolute top-14 right-[8%] md:right-[12%] text-[#F96302]/20">
            <HardHat className="w-10 h-10 md:w-12 md:h-12 stroke-[1.2]" />
          </div>
          <div className="absolute bottom-16 left-[12%] md:left-[16%] text-[#F96302]/15">
            <Hammer className="w-9 h-9 md:w-11 md:h-11 stroke-[1.2]" />
          </div>
          <div className="absolute bottom-20 right-[12%] md:right-[16%] text-[#F96302]/15">
            <Wrench className="w-9 h-9 md:w-11 md:h-11 stroke-[1.2]" />
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center z-10">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-[#F96302]/30 shadow-xs mb-8 transition-transform hover:scale-105 cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#F96302] shadow-[0_0_8px_rgba(249,99,2,0.9)] animate-pulse" />
            <span className="text-xs font-semibold text-neutral-200 tracking-wide">
              Applications Open
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-3xl mb-6">
            The <span className="text-[#F96302]">Home Depot</span>
            <br />
            Discounts They
            <br />
            Don't Advertise
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed mb-10 text-balance">
            Discover how shoppers are unlocking hidden discounts on Home Depot's everyday essentials — Power Tools, Milwaukee & DeWalt gear, Patio Furniture, and Home Renovation.
          </p>

          {/* CTA & Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#F96302] hover:bg-[#e05700] text-white font-extrabold px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(249,99,2,0.35)] hover:shadow-[0_6px_28px_rgba(249,99,2,0.5)] transition-all cursor-pointer text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-3 text-left">
              <div className="flex items-center -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces&auto=format&q=80"
                  alt="Shopper avatar"
                  className="w-8 h-8 rounded-full border-2 border-[#0d0e11] ring-1 ring-[#F96302]/30 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&auto=format&q=80"
                  alt="Shopper avatar"
                  className="w-8 h-8 rounded-full border-2 border-[#0d0e11] ring-1 ring-[#F96302]/30 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=faces&auto=format&q=80"
                  alt="Shopper avatar"
                  className="w-8 h-8 rounded-full border-2 border-[#0d0e11] ring-1 ring-[#F96302]/30 object-cover"
                />
              </div>
              <p className="text-xs text-neutral-400 font-medium leading-tight max-w-[170px]">
                Join <span className="text-neutral-200 font-semibold">12,000+ shoppers</span> who've already claimed their discounts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HOW IT WORKS (5-Step Alternating Timeline)                             */}
      {/* ========================================================================= */}
      <section className="bg-white py-20 sm:py-28 px-4 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F96302] mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Five Simple Steps to<br />Claiming Your Discounts
            </h2>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-[2px] bg-neutral-200 -translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {/* STEP 1 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-14 items-center">
                <div className="bg-white rounded-2xl border border-neutral-200/90 hover:border-[#F96302]/40 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 group">
                  <div className="text-left">
                    <h3 className="font-bold text-neutral-900 text-base sm:text-lg group-hover:text-[#F96302] transition-colors">
                      Click apply now
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      Start your application — it takes seconds.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-orange-50 text-[#F96302] border border-orange-100/80 shrink-0">
                    <MousePointerClick className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F96302] text-white items-center justify-center text-xs font-bold ring-4 ring-orange-100 shadow-xs z-10">
                  1
                </div>

                <div className="hidden md:flex items-center text-left pl-6 select-none">
                  <span className="text-7xl lg:text-8xl font-black text-neutral-200/80 tracking-tighter">
                    01
                  </span>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-14 items-center">
                <div className="hidden md:flex items-center justify-end text-right pr-6 select-none">
                  <span className="text-7xl lg:text-8xl font-black text-neutral-200/80 tracking-tighter">
                    02
                  </span>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F96302] text-white items-center justify-center text-xs font-bold ring-4 ring-orange-100 shadow-xs z-10">
                  2
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200/90 hover:border-[#F96302]/40 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex items-center gap-4 group">
                  <div className="p-2.5 rounded-xl bg-orange-50 text-[#F96302] border border-orange-100/80 shrink-0">
                    <Mail className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-neutral-900 text-base sm:text-lg group-hover:text-[#F96302] transition-colors">
                      Enter your email
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      Quick 30-second signup process.
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-14 items-center">
                <div className="bg-white rounded-2xl border border-neutral-200/90 hover:border-[#F96302]/40 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 group">
                  <div className="text-left">
                    <h3 className="font-bold text-neutral-900 text-base sm:text-lg group-hover:text-[#F96302] transition-colors">
                      Complete the survey
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      Share your shopping preferences.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-orange-50 text-[#F96302] border border-orange-100/80 shrink-0">
                    <ClipboardList className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F96302] text-white items-center justify-center text-xs font-bold ring-4 ring-orange-100 shadow-xs z-10">
                  3
                </div>

                <div className="hidden md:flex items-center text-left pl-6 select-none">
                  <span className="text-7xl lg:text-8xl font-black text-neutral-200/80 tracking-tighter">
                    03
                  </span>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-14 items-center">
                <div className="hidden md:flex items-center justify-end text-right pr-6 select-none">
                  <span className="text-7xl lg:text-8xl font-black text-neutral-200/80 tracking-tighter">
                    04
                  </span>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F96302] text-white items-center justify-center text-xs font-bold ring-4 ring-orange-100 shadow-xs z-10">
                  4
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200/90 hover:border-[#F96302]/40 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex items-center gap-4 group">
                  <div className="p-2.5 rounded-xl bg-orange-50 text-[#F96302] border border-orange-100/80 shrink-0">
                    <Gift className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-neutral-900 text-base sm:text-lg group-hover:text-[#F96302] transition-colors">
                      Complete 5+ deals
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      Simple tasks like app downloads & trials.
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 5 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-14 items-center">
                <div className="bg-white rounded-2xl border border-neutral-200/90 hover:border-[#F96302]/40 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 group">
                  <div className="text-left">
                    <h3 className="font-bold text-neutral-900 text-base sm:text-lg group-hover:text-[#F96302] transition-colors">
                      Receive your discount
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      Delivered straight to your inbox.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-orange-50 text-[#F96302] border border-orange-100/80 shrink-0">
                    <Trophy className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F96302] text-white items-center justify-center text-xs font-bold ring-4 ring-orange-100 shadow-xs z-10">
                  5
                </div>

                <div className="hidden md:flex items-center text-left pl-6 select-none">
                  <span className="text-7xl lg:text-8xl font-black text-neutral-200/80 tracking-tighter">
                    05
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Button */}
          <div className="text-center mt-14 sm:mt-18">
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#F96302] hover:bg-[#e05700] text-white font-extrabold px-8 py-3.5 rounded-full transition-all cursor-pointer text-sm sm:text-base shadow-[0_4px_18px_rgba(249,99,2,0.3)] hover:shadow-[0_6px_24px_rgba(249,99,2,0.45)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SHOP THE COLLECTION (2x2 Grid)                                         */}
      {/* ========================================================================= */}
      <section className="bg-[#f9fafb] py-20 sm:py-28 px-4 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F96302] mb-3">
              SHOP THE COLLECTION
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              What You Can Do With Your Discount
            </h2>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {CATEGORIES.map((cat) => {
              const isExpanded = expandedCategoryId === cat.id;

              return (
                <div
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`bg-white rounded-2xl border transition-all cursor-pointer p-6 sm:p-7 relative overflow-hidden group shadow-xs hover:shadow-md ${
                    isExpanded
                      ? 'border-[#F96302] ring-1 ring-[#F96302]/30 shadow-sm'
                      : 'border-neutral-200/90 hover:border-[#F96302]/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCategory(cat.id);
                    }}
                    className="absolute top-5 right-5 text-neutral-400 group-hover:text-[#F96302] transition-colors p-1"
                    aria-label={`Toggle ${cat.title} details`}
                  >
                    {isExpanded ? (
                      <Minus className="w-4 h-4 stroke-[2.2] text-[#F96302]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2]" />
                    )}
                  </button>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-orange-50 text-[#F96302] border border-orange-100/80 shrink-0 group-hover:bg-orange-100/70 transition-colors">
                      {cat.icon}
                    </div>

                    <div className="pr-6">
                      <h3 className="font-bold text-neutral-900 text-base sm:text-lg mb-1 leading-snug group-hover:text-[#F96302] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                        {cat.description}
                      </p>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-neutral-100 animate-in fade-in duration-200">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#F96302] mb-2">
                            Popular eligible brands:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {cat.brands.map((brand) => (
                              <span
                                key={brand}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-50 text-neutral-800 border border-orange-200/60 text-xs font-medium"
                              >
                                <Check className="w-3 h-3 text-[#F96302]" />
                                {brand}
                              </span>
                            ))}
                          </div>
                          <a
                            href={CTA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mt-3 text-xs font-bold text-[#F96302] hover:text-[#d85600] underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                          >
                            Claim discount for this department →
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. QUESTIONS & ANSWERS (FAQ Accordion)                                    */}
      {/* ========================================================================= */}
      <section className="bg-white py-20 sm:py-28 px-4 border-b border-neutral-100">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F96302] mb-3">
              QUESTIONS & ANSWERS
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion Stack */}
          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border shadow-xs transition-all overflow-hidden ${
                    isOpen
                      ? 'border-[#F96302]/40 ring-1 ring-[#F96302]/15'
                      : 'border-neutral-200/90 hover:border-[#F96302]/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-bold text-sm sm:text-base transition-colors ${
                        isOpen ? 'text-[#F96302]' : 'text-neutral-900'
                      }`}
                    >
                      {faq.question}
                    </span>

                    {isOpen ? (
                      <div className="w-7 h-7 rounded-full bg-[#F96302] text-white flex items-center justify-center shrink-0 transition-transform shadow-xs">
                        <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0 transition-transform">
                        <ChevronDown className="w-4 h-4 stroke-[2]" />
                      </div>
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-500 leading-relaxed border-t border-neutral-100/60 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. READY TO START SAVING? (Footer CTA Banner)                             */}
      {/* ========================================================================= */}
      <footer className="relative bg-[#0d0e11] text-white py-24 sm:py-32 px-4 overflow-hidden border-t border-neutral-900">
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(249, 99, 2, 0.18) 0%, rgba(249, 99, 2, 0.04) 50%, rgba(0, 0, 0, 0) 80%)',
          }}
        />

        {/* Faint Background Line-Art Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-12 left-[10%] text-[#F96302]/15">
            <Hammer className="w-10 h-10 stroke-[1.2]" />
          </div>
          <div className="absolute bottom-12 right-[10%] text-[#F96302]/15">
            <Wrench className="w-10 h-10 stroke-[1.2]" />
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center z-10">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-[#F96302]/30 shadow-xs mb-6 transition-transform hover:scale-105 cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#F96302] shadow-[0_0_8px_rgba(249,99,2,0.9)] animate-pulse" />
            <span className="text-xs font-semibold text-neutral-200 tracking-wide">
              Applications Open
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Ready to Start Saving?
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl font-normal leading-relaxed mb-8">
            Join thousands of shoppers who have already claimed their discount code. Your Home Depot savings are just a few clicks away.
          </p>

          {/* Home Depot Orange Pill Button */}
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#F96302] hover:bg-[#e05700] text-white font-extrabold px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(249,99,2,0.35)] hover:shadow-[0_6px_28px_rgba(249,99,2,0.5)] transition-all cursor-pointer text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Disclaimer */}
          <p className="text-[11px] text-neutral-500 mt-16 font-medium">
            Independent shopper promotion portal. The Home Depot® is a registered trademark of Homer TLC, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
