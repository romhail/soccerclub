"use client";

import React from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function ParentTestimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Mom of Leo (Age 7, U8 Little Strikers)",
      rating: 5,
      content:
        "My son Leo was timid and had never played in a team. The coaches at World Soccer Academy made him feel welcomed from day one. In just 3 months, his footwork and confidence have skyrocketed!",
      highlight: "Incredible confidence boost",
    },
    {
      name: "Marcus Sterling",
      role: "Dad of Maya (Age 10, U10 Junior Academy)",
      rating: 5,
      content:
        "The difference in coaching quality here compared to standard recreational leagues is night and day. Coach Elena focuses on real ball mastery without yelling or putting undue stress on the kids.",
      highlight: "True professional coaching",
    },
    {
      name: "Dr. Amanda Chen",
      role: "Mom of Tyler (Age 11, U12 Elite Squad)",
      rating: 5,
      content:
        "Tyler loves the competitive matches and Saturday league games. The schedule is super predictable and the facilities are top-notch. WSA strikes the perfect balance between high standards and high fun.",
      highlight: "Structured & competitive",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold text-xs uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Parent Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Loved By Over 350+ Local Families
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            See what moms and dads have to say about the World Soccer Academy experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 dark:text-slate-800" />

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-blue-900 dark:text-amber-300">
                    {rev.highlight}
                  </span>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{rev.content}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900 text-amber-300 flex items-center justify-center font-bold text-sm">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}