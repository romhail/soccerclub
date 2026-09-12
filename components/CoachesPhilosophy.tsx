"use client";

import React from "react";
import { ShieldCheck, Heart, Award, Sparkles, Star, Users } from "lucide-react";

export default function CoachesPhilosophy() {
  const pillars = [
    {
      icon: Heart,
      title: "Play With Joy & Courage",
      description:
        "Kids play best when they feel safe to make mistakes. We foster fearless creativity, encouraging players to try new skill moves without the fear of failure.",
    },
    {
      icon: Award,
      title: "Ball Mastery & IQ First",
      description:
        "Tactics matter, but ball control, body orientation, and quick thinking are the bedrock. We give every child hundreds of touches in every single training session.",
    },
    {
      icon: ShieldCheck,
      title: "Character & Respect",
      description:
        "Soccer is our classroom for life lessons: honoring teammates, respecting referees, learning grit through setbacks, and winning or losing with grace.",
    },
  ];

  const coaches = [
    {
      name: "Coach Marco Silva",
      role: "Academy Technical Director",
      license: "UEFA 'A' & USSF National Youth License",
      exp: "14+ Years Youth Coaching",
      bio: "Former professional youth academy trainer with a passion for cultivating high football intelligence and technical poise in young players.",
      quote: "Every champion started with a ball at their feet and a dream in their heart.",
    },
    {
      name: "Coach Elena Rostova",
      role: "Head of U8 & U10 Development",
      license: "USSF 'B' License & Youth Fitness Specialist",
      exp: "10+ Years Experience",
      bio: "Specializes in early childhood motor literacy and confidence building. Elena makes every session high-energy, positive, and immensely fun.",
      quote: "Joy and confidence are the true secrets to unlocking a child's soccer potential.",
    },
    {
      name: "Coach David Adeyemi",
      role: "U12 Elite Squad & Tactical Lead",
      license: "USSF 'B' License & Former Division 1 Standout",
      exp: "8+ Years Experience",
      bio: "Focuses on transitioning U12 players into high-tempo competitive gameplay, positional awareness, decision-making speed, and team cohesion.",
      quote: "Discipline, work ethic, and smart decisions turn good players into extraordinary leaders.",
    },
  ];

  return (
    <section id="coaches" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-bold text-xs uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Philosophy & Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Coaching Designed for Children, Not Mini-Adults
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Our certified coaching staff focuses on long-term athletic development, emotional encouragement, and individual attention.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-400/50 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 text-amber-400 flex items-center justify-center mb-6 shadow-md shadow-blue-900/20">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Coaches Grid Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            Meet Your Child’s Mentors
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            All coaches are 100% Safesport Certified, CPR/First-Aid Trained & Background Checked
          </p>
        </div>

        {/* Coach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="p-6">
                {/* Avatar / Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-900 via-indigo-900 to-blue-700 flex items-center justify-center text-amber-300 font-black text-xl border-2 border-amber-400/40 shadow-inner">
                    {coach.name.split(" ")[1]?.substring(0, 2) || "WSA"}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white">
                      {coach.name}
                    </h4>
                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {coach.role}
                    </p>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                      {coach.exp}
                    </span>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] font-bold text-blue-800 dark:text-blue-300 mb-4">
                  🏅 {coach.license}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {coach.bio}
                </p>
              </div>

              {/* Quote Footer */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-800 text-xs italic text-slate-600 dark:text-slate-400">
                "{coach.quote}"
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}