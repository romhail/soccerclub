"use client";

import React from "react";
import { Calendar, MapPin, Sparkles, Flame, CheckCircle, ArrowRight, Sun, ShieldAlert } from "lucide-react";

interface UpcomingProgramsProps {
  onOpenTrialModal: () => void;
}

export default function UpcomingPrograms({ onOpenTrialModal }: UpcomingProgramsProps) {
  const camps = [
    {
      title: "Summer 2026 Elite Academy Camp",
      badge: "Most Popular",
      dates: "July 6 – July 10, 2026",
      time: "9:00 AM – 2:00 PM Daily",
      ages: "Ages 6 – 12 (All Skill Levels)",
      venue: "Central Sports Dome & Stadium Turf",
      spotsLeft: "8 Spots Left",
      features: [
        "Daily technical drills & Champions League mini-tournament",
        "Official Nike camp training jersey + soccer ball included",
        "Hydration station & healthy snacks provided daily",
        "Special guest coaching session with former pro players",
      ],
      price: "$275 / week",
    },
    {
      title: "Spring Break Soccer Blitz",
      badge: "Upcoming Soon",
      dates: "April 13 – April 17, 2026",
      time: "9:30 AM – 1:30 PM Daily",
      ages: "Ages 6 – 12",
      venue: "West Field Athletic Complex",
      spotsLeft: "12 Spots Left",
      features: [
        "1v1 skills mastery, freestyle juggling & agility ladders",
        "High-energy 3v3 and 5v5 King of the Pitch tournaments",
        "Daily prizes, medals and certificate of completion",
        "Early drop-off available from 8:30 AM",
      ],
      price: "$225 / week",
    },
    {
      title: "Weekend Striker & Finishing Masterclass",
      badge: "Specialized Clinic",
      dates: "May 2 – May 23, 2026 (4 Saturdays)",
      time: "1:00 PM – 3:00 PM",
      ages: "Ages 8 – 12",
      venue: "Eastside Premier Turf Pitch",
      spotsLeft: "5 Spots Left",
      features: [
        "Striking technique: volleys, headers, bending shots & penalties",
        "Attacking movement off the ball and creating 1v1 separation",
        "Radar gun shot speed measurement & form correction",
        "Goalkeeper collaboration for realistic game scenario finishes",
      ],
      price: "$180 / 4 sessions",
    },
    {
      title: "Girls Youth Soccer Development Clinic",
      badge: "Empowering Girls",
      dates: "June 1 – June 5, 2026",
      time: "9:00 AM – 12:30 PM Daily",
      ages: "Ages 6 – 12 (Girls Only)",
      venue: "West Field Athletic Complex",
      spotsLeft: "10 Spots Left",
      features: [
        "Led exclusively by former NCAA & National team female coaches",
        "Confidence building, leadership, teamwork & technical brilliance",
        "Special Q&A on nutrition, athleticism, and mental toughness",
        "Custom academy kit & team photo shoot",
      ],
      price: "$240 / week",
    },
  ];

  return (
    <section id="camps" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold text-xs uppercase tracking-wider mb-3 border border-amber-300/40">
              <Sun className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Upcoming Programs & Seasonal Camps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Action-Packed Holiday Camps & Clinics
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-base max-w-2xl">
              Keep your young soccer stars active, energized, and developing during school breaks with our high-intensity, fun-filled camps.
            </p>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-blue-700 dark:text-amber-400 hover:underline"
          >
            <span>Have questions about camps? Contact our camp coordinator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Camp Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {camps.map((camp, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/80 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-blue-600 to-indigo-700" />

              <div>
                {/* Header with badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-900 text-amber-300">
                    {camp.badge}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-200 dark:border-rose-900/50">
                    <Flame className="w-3.5 h-3.5 fill-rose-500" />
                    {camp.spotsLeft}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                  {camp.title}
                </h3>

                {/* Meta details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 p-3.5 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{camp.dates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>{camp.time}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{camp.venue}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 my-5">
                  {camp.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Price & Signup */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Registration Fee</span>
                  <span className="text-xl font-black text-blue-950 dark:text-amber-400">{camp.price}</span>
                </div>

                <button
                  onClick={onOpenTrialModal}
                  className="px-5 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider text-blue-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all cursor-pointer"
                >
                  Register Camper
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}