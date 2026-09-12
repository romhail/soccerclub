"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Sparkles, HelpCircle, ArrowRight } from "lucide-react";

interface PricingRegistrationProps {
  onOpenTrialModal: () => void;
}

export default function PricingRegistration({ onOpenTrialModal }: PricingRegistrationProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "seasonal">("seasonal");

  const plans = [
    {
      name: "Academy Starter",
      target: "Ideal for beginners & busy weekday schedules",
      popular: false,
      monthlyPrice: "$120",
      seasonalPrice: "$320",
      seasonPeriod: "3-Month Season",
      sessions: "1 Practice / week + Weekend Match Festival",
      features: [
        "1x Weekly 60-min skill practice",
        "Weekend small-sided match day access",
        "Official WSA Match Jersey & Socks",
        "10:1 Player to Coach Ratio",
        "End-of-term progress evaluation report",
      ],
      notIncluded: ["Tournament entry fees", "Video tactical breakdown"],
      cta: "Register for Starter",
    },
    {
      name: "Academy Premier",
      target: "Most popular choice for active young players",
      popular: true,
      monthlyPrice: "$185",
      seasonalPrice: "$495",
      seasonPeriod: "3-Month Season",
      savings: "Save $60 with Seasonal",
      sessions: "2 Practices / week + Saturday League Fixture",
      features: [
        "2x Weekly 75-min advanced technical sessions",
        "Saturday official competitive match / fixture",
        "Full Home & Away Kit Package + Training Bag",
        "12:1 Player to Coach Ratio",
        "Quarterly Player Skill Evaluation Card",
        "Free access to Spring Break 1-Day Clinic",
      ],
      cta: "Join Academy Premier",
    },
    {
      name: "Elite Performance",
      target: "For dedicated players aiming for top youth leagues",
      popular: false,
      monthlyPrice: "$240",
      seasonalPrice: "$650",
      seasonPeriod: "3-Month Season",
      sessions: "3 Practices / week + Match + Video Analysis",
      features: [
        "3x Weekly high-intensity technical & tactical sessions",
        "Saturday League + Regional Tournament entry included",
        "Full Custom Nike Academy Kit Bundle + Ball",
        "Individual 1-on-1 coach feedback & video analysis",
        "Speed, agility & injury prevention conditioning",
        "Priority registration & discounts for all holiday camps",
      ],
      cta: "Apply for Elite Squad",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Clear & Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Invest in Your Child’s Skills, Fitness & Friendships
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            No hidden fees, no surprise equipment surcharges. All plans include official uniform kits and qualified licensed coaches.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-200 dark:bg-slate-800 rounded-2xl gap-2">
            <button
              onClick={() => setBillingCycle("seasonal")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === "seasonal"
                  ? "bg-blue-900 text-white shadow"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
              }`}
            >
              Full Season (Best Value ⭐️)
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-blue-900 text-white shadow"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
              }`}
            >
              Month-to-Month
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-white dark:bg-slate-800 border-2 border-amber-400 shadow-2xl scale-105 z-10"
                  : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Popular ribbon */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-blue-950 text-xs font-black uppercase tracking-wider shadow-md">
                  Most Popular For Ages 6–12
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {plan.target}
                </p>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">
                      {billingCycle === "seasonal" ? plan.seasonalPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      {billingCycle === "seasonal" ? `/${plan.seasonPeriod}` : "/month"}
                    </span>
                  </div>
                  {billingCycle === "seasonal" && plan.savings && (
                    <span className="mt-1 inline-block text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      ✨ {plan.savings}
                    </span>
                  )}
                  <p className="mt-2 text-xs font-bold text-blue-700 dark:text-amber-400">
                    {plan.sessions}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                    What's Included:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div>
                <button
                  onClick={onOpenTrialModal}
                  className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? "bg-amber-400 hover:bg-amber-300 text-blue-950 shadow-md shadow-amber-500/20"
                      : "bg-blue-900 hover:bg-blue-800 text-white dark:bg-blue-700 dark:hover:bg-blue-600"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  First trial session is 100% Free • No commitment
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Family Discount & Guarantee */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 font-bold">
              15%
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Sibling Discount</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                15% off tuition for the second and third registered child in the same family.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">100% Happiness Guarantee</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                If your child is not thrilled after their first 2 full weeks, we’ll issue a full refund.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}