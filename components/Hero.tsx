"use client";

import React from "react";
import { ShieldCheck, Trophy, Users, Star, ArrowRight, Play, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenTrialModal: () => void;
}

export default function Hero({ onOpenTrialModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Decorative Pitch & Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px]" />
        {/* Pitch Circle center overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-2 border-dashed border-white/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-400/40" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/80 border border-blue-600/50 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span>Premier Youth Development • Ages 6–12</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Ignite Your Child’s <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                Passion For Soccer
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              World Soccer Academy builds technical mastery, teamwork, and confidence through fun, age-tailored coaching in a safe, inspiring environment.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 bg-blue-900/50 border border-blue-700/40 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">UEFA & USSF Licensed</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-900/50 border border-blue-700/40 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">12:1 Player Ratio</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-900/50 border border-blue-700/40 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">All Skill Levels</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-base text-blue-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Book a Free Trial Session</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#programs"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm text-white bg-blue-800/60 hover:bg-blue-800 border border-blue-600/60 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Age Groups</span>
              </a>
            </div>

            {/* Parent Rating Proof */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-blue-800/40">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-blue-950 flex items-center justify-center text-xs font-bold text-blue-950">JS</div>
                <div className="w-8 h-8 rounded-full bg-amber-400 border-2 border-blue-950 flex items-center justify-center text-xs font-bold text-blue-950">MK</div>
                <div className="w-8 h-8 rounded-full bg-emerald-400 border-2 border-blue-950 flex items-center justify-center text-xs font-bold text-blue-950">AL</div>
                <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-blue-950 flex items-center justify-center text-xs font-bold text-blue-950">RT</div>
              </div>
              <div className="text-left">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-blue-200 mt-0.5 font-medium">
                  Rated <span className="text-white font-bold">4.9/5</span> by 350+ local parents
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Stats & Age Spotlight */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-blue-800/80 to-blue-950/90 p-6 sm:p-8 border border-blue-600/40 shadow-2xl backdrop-blur-md">
                
                {/* Header of Card */}
                <div className="flex items-center justify-between pb-4 border-b border-blue-700/50 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Academy Quick Facts</h3>
                      <p className="text-xs text-blue-200">2026 Spring & Summer Season</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold rounded-full">
                    Enrolling Now
                  </span>
                </div>

                {/* Age Brackets Pills */}
                <div className="space-y-3 mb-6">
                  {/* U8 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-blue-900/60 border border-blue-700/40 hover:border-amber-400/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 bg-blue-700 text-amber-300 font-black text-xs rounded-lg">U8</span>
                      <div>
                        <p className="text-sm font-bold text-white">Little Strikers (Ages 6–7)</p>
                        <p className="text-xs text-blue-300">Fundamentals, agility & joy</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-amber-300">4v4 Format</span>
                  </div>

                  {/* U10 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-blue-900/60 border border-blue-700/40 hover:border-amber-400/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 bg-blue-700 text-amber-300 font-black text-xs rounded-lg">U10</span>
                      <div>
                        <p className="text-sm font-bold text-white">Junior Academy (Ages 8–9)</p>
                        <p className="text-xs text-blue-300">Skill moves, passing & IQ</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-amber-300">7v7 Format</span>
                  </div>

                  {/* U12 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-blue-900/60 border border-blue-700/40 hover:border-amber-400/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 bg-blue-700 text-amber-300 font-black text-xs rounded-lg">U12</span>
                      <div>
                        <p className="text-sm font-bold text-white">Elite Squad (Ages 10–12)</p>
                        <p className="text-xs text-blue-300">Tactics, pace & tournament</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-amber-300">9v9 Format</span>
                  </div>
                </div>

                {/* 3 Metric counters */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-blue-700/50 text-center">
                  <div className="p-2 rounded-lg bg-blue-950/50">
                    <p className="text-xl font-black text-amber-400">450+</p>
                    <p className="text-[11px] text-slate-300 font-medium">Kids Enrolled</p>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-950/50">
                    <p className="text-xl font-black text-amber-400">4</p>
                    <p className="text-[11px] text-slate-300 font-medium">Turf Venues</p>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-950/50">
                    <p className="text-xl font-black text-amber-400">100%</p>
                    <p className="text-[11px] text-slate-300 font-medium">Fun & Safety</p>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenTrialModal}
                  className="mt-5 w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-blue-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Reserve Free Trial Spot This Week</span>
                </button>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-sm">
                  ⚽
                </div>
                <div>
                  <p className="text-xs font-black">Official Kit Included</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Jersey, shorts & socks</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}