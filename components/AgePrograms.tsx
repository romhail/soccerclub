"use client";

import React, { useState } from "react";
import { Check, Users, Clock, Trophy, Target, Sparkles, ArrowRight } from "lucide-react";

interface AgeProgramsProps {
  onOpenTrialModal: () => void;
}

export default function AgePrograms({ onOpenTrialModal }: AgeProgramsProps) {
  const [activeTab, setActiveTab] = useState<"all" | "u8" | "u10" | "u12">("all");

  const programs = [
    {
      id: "u8",
      name: "Little Strikers",
      ageRange: "Ages 6 – 7 (U8)",
      tagline: "Building Confidence & Pure Love for the Ball",
      color: "from-blue-600 to-blue-800",
      accentBadge: "Beginner & Intermediate",
      description:
        "Designed specifically for young players stepping into organized soccer. We focus on physical literacy, ball manipulation, joyful mini-games, and 1v1 instincts in a pressure-free environment.",
      keyFeatures: [
        "Maximum touches on the ball per session (300+ touches)",
        "Coordination, agility, balance & spatial awareness",
        "Introduction to dribbling, turning & shooting games",
        "Small-sided 4v4 scrimmage formats (no goalies)",
        "Positive encouragement & confidence building",
      ],
      schedule: "Tue & Thu: 4:30 PM – 5:30 PM | Sat: 9:00 AM match",
      groupSize: "Max 10 players per licensed coach",
      ballSize: "Size 3 Ball",
    },
    {
      id: "u10",
      name: "Junior Academy",
      ageRange: "Ages 8 – 9 (U10)",
      tagline: "Technical Precision & Tactical Awareness",
      color: "from-blue-700 to-indigo-900",
      accentBadge: "Core Development",
      description:
        "The golden age of motor learning. Players learn essential technical fundamentals: first-touch control, passing combinations, positional responsibilities, and team decision-making.",
      keyFeatures: [
        "First-touch control & multi-directional passing",
        "1v1 defending & attacking skill move repertoire",
        "Introduction to 7v7 match formation & spacing",
        "Goalkeeping fundamentals & fast transitions",
        "Individual progress report cards each term",
      ],
      schedule: "Mon & Wed: 5:00 PM – 6:15 PM | Sat: 10:30 AM match",
      groupSize: "Max 12 players per licensed coach",
      ballSize: "Size 4 Ball",
    },
    {
      id: "u12",
      name: "Elite Development",
      ageRange: "Ages 10 – 12 (U12)",
      tagline: "High-Paced Play, Football IQ & Competition",
      color: "from-slate-900 to-blue-950",
      accentBadge: "Advanced & Pre-Competitive",
      description:
        "Preparing players for competitive junior leagues. We emphasize tactical vision, speed of play, physical conditioning, set pieces, and leadership on and off the pitch.",
      keyFeatures: [
        "Advanced tactical vision & team shape in 9v9 play",
        "High-pressure pressing, recovery & counter-attacking",
        "Speed, agility & injury prevention training",
        "Competitive local tournaments & friendly showcases",
        "Video review sessions & personalized coaching goals",
      ],
      schedule: "Tue & Thu: 5:45 PM – 7:15 PM | Sat: 12:00 PM league game",
      groupSize: "Max 12 players per licensed coach",
      ballSize: "Size 4 Ball",
    },
  ];

  const filteredPrograms =
    activeTab === "all" ? programs : programs.filter((p) => p.id === activeTab);

  return (
    <section id="programs" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Age-Appropriate Pathway (Ages 6–12)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Tailored Programs for Every Stage of Growth
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            A child’s brain and motor skills change dramatically between 6 and 12. Our curriculum is custom-engineered for each age group so every child flourishes at their own pace.
          </p>

          {/* Age Filters */}
          <div className="mt-8 inline-flex p-1.5 bg-slate-200/80 dark:bg-slate-800 rounded-2xl gap-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-blue-900 text-white shadow"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
              }`}
            >
              All Age Groups
            </button>
            <button
              onClick={() => setActiveTab("u8")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "u8"
                  ? "bg-blue-900 text-white shadow"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
              }`}
            >
              U8 (Ages 6–7)
            </button>
            <button
              onClick={() => setActiveTab("u10")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "u10"
                  ? "bg-blue-900 text-white shadow"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
              }`}
            >
              U10 (Ages 8–9)
            </button>
            <button
              onClick={() => setActiveTab("u12")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "u12"
                  ? "bg-blue-900 text-white shadow"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
              }`}
            >
              U12 (Ages 10–12)
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              {/* Header Gradient */}
              <div className={`p-6 bg-gradient-to-r ${prog.color} text-white relative`}>
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-amber-300 border border-white/20">
                    {prog.accentBadge}
                  </span>
                  <span className="text-xs font-black px-2.5 py-1 bg-amber-400 text-blue-950 rounded-lg shadow-sm">
                    {prog.ballSize}
                  </span>
                </div>
                <h3 className="text-2xl font-black">{prog.name}</h3>
                <p className="text-amber-300 font-extrabold text-sm tracking-wide mt-1">
                  {prog.ageRange}
                </p>
                <p className="text-blue-100 text-xs mt-2 italic">
                  "{prog.tagline}"
                </p>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">
                    Key Development Focus:
                  </h4>
                  <ul className="space-y-2.5 mb-6">
                    {prog.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer details */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-700/60 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>{prog.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{prog.groupSize}</span>
                  </div>

                  <button
                    onClick={onOpenTrialModal}
                    className="w-full mt-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group-hover:bg-amber-500 group-hover:text-blue-950 cursor-pointer shadow-sm"
                  >
                    <span>Book Trial for {prog.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Not sure which age group banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-blue-700/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Unsure which program fits your child?</h4>
              <p className="text-xs sm:text-sm text-blue-200">
                Bring your child for a complimentary 45-minute skills evaluation. Our head coaches will evaluate and recommend the ideal squad.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-sm shadow-md transition-transform hover:scale-105 cursor-pointer"
          >
            Schedule Assessment
          </button>
        </div>

      </div>
    </section>
  );
}