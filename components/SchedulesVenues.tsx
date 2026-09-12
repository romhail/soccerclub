"use client";

import React, { useState } from "react";
import { MapPin, Clock, Calendar, Shield, ExternalLink, Navigation, CheckCircle } from "lucide-react";

export default function SchedulesVenues() {
  const [selectedDay, setSelectedDay] = useState<"all" | "weekdays" | "saturdays">("all");

  const venues = [
    {
      name: "West Field Athletic Complex",
      address: "1420 Sports Park Blvd, Westside",
      surface: "FIFA-Grade All-Weather AstroTurf",
      features: ["Floodlit Night Pitches", "Parent Pavilion & Cafe", "Ample Free Parking", "Locker Rooms"],
      status: "Primary Training Hub",
    },
    {
      name: "Central Sports Dome",
      address: "880 Olympic Way, Downtown Central",
      surface: "Climate-Controlled Indoor Turf",
      features: ["All-Season Weather Protected", "Speed & Agility Track", "Spectator Grandstand", "Pro Shop"],
      status: "Winter & Camp Center",
    },
    {
      name: "Eastside Premier Turf Ground",
      address: "310 Meadow Lane, East Valley",
      surface: "Natural Hybrid Grass / Turf",
      features: ["Weekend League Match Pitch", "Digital Scoreboards", "Family Picnic Area", "First-Aid Center"],
      status: "Weekend Match Day Hub",
    },
  ];

  const scheduleData = [
    {
      day: "Monday",
      time: "5:00 PM – 6:15 PM",
      category: "U10 Junior Academy (Ages 8-9)",
      venue: "Central Sports Dome",
      type: "Technical Drills & Passing Combinations",
      isWeekend: false,
    },
    {
      day: "Tuesday",
      time: "4:30 PM – 5:30 PM",
      category: "U8 Little Strikers (Ages 6-7)",
      venue: "West Field Complex",
      type: "Ball Mastery & 1v1 Games",
      isWeekend: false,
    },
    {
      day: "Tuesday",
      time: "5:45 PM – 7:15 PM",
      category: "U12 Elite Squad (Ages 10-12)",
      venue: "West Field Complex",
      type: "Tactical Shape, Pressing & Shooting",
      isWeekend: false,
    },
    {
      day: "Wednesday",
      time: "5:00 PM – 6:15 PM",
      category: "U10 Junior Academy (Ages 8-9)",
      venue: "Central Sports Dome",
      type: "Small-Sided Scrimmages & 7v7 Tactics",
      isWeekend: false,
    },
    {
      day: "Thursday",
      time: "4:30 PM – 5:30 PM",
      category: "U8 Little Strikers (Ages 6-7)",
      venue: "West Field Complex",
      type: "Speed Ladders & Shooting Accuracy",
      isWeekend: false,
    },
    {
      day: "Thursday",
      time: "5:45 PM – 7:15 PM",
      category: "U12 Elite Squad (Ages 10-12)",
      venue: "West Field Complex",
      type: "Set Pieces & High-Pace Match Simulation",
      isWeekend: false,
    },
    {
      day: "Saturday (Match Day)",
      time: "9:00 AM – 10:15 AM",
      category: "U8 Little Strikers (Ages 6-7)",
      venue: "Eastside Premier Turf",
      type: "4v4 Fun Festivals & Friendly Matches",
      isWeekend: true,
    },
    {
      day: "Saturday (Match Day)",
      time: "10:30 AM – 11:45 AM",
      category: "U10 Junior Academy (Ages 8-9)",
      venue: "Eastside Premier Turf",
      type: "7v7 League Fixture",
      isWeekend: true,
    },
    {
      day: "Saturday (Match Day)",
      time: "12:00 PM – 1:30 PM",
      category: "U12 Elite Squad (Ages 10-12)",
      venue: "Eastside Premier Turf",
      type: "9v9 Championship League Game",
      isWeekend: true,
    },
  ];

  const filteredSchedule = scheduleData.filter((item) => {
    if (selectedDay === "weekdays") return !item.isWeekend;
    if (selectedDay === "saturdays") return item.isWeekend;
    return true;
  });

  return (
    <section id="schedules" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-bold text-xs uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Weekly Timetable & Locations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Structured Schedules Built For Busy Families
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Consistent weekly time slots and premium local turf venues make planning simple and reliable for parents.
          </p>
        </div>

        {/* 2-Column Layout: Schedule Table & Venues */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Weekly Schedule */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <span>Weekly Training Schedule</span>
                </h3>

                {/* Day selector tabs */}
                <div className="flex p-1 bg-slate-100 dark:bg-slate-700/60 rounded-xl text-xs font-bold">
                  <button
                    onClick={() => setSelectedDay("all")}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      selectedDay === "all"
                        ? "bg-blue-900 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
                    }`}
                  >
                    All Days
                  </button>
                  <button
                    onClick={() => setSelectedDay("weekdays")}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      selectedDay === "weekdays"
                        ? "bg-blue-900 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
                    }`}
                  >
                    Weekdays
                  </button>
                  <button
                    onClick={() => setSelectedDay("saturdays")}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      selectedDay === "saturdays"
                        ? "bg-blue-900 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
                    }`}
                  >
                    Match Saturdays
                  </button>
                </div>
              </div>

              {/* Schedule list */}
              <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                {filteredSchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-700/50 hover:border-blue-500/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-md bg-blue-900 text-white text-[11px] font-extrabold">
                          {item.day}
                        </span>
                        <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                          {item.time}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.category}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.type}
                      </p>
                    </div>

                    <div className="text-left sm:text-right flex-shrink-0">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        {item.venue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>⚠️ Schedule remains rain or shine (indoor backup active)</span>
                <span className="font-semibold text-blue-700 dark:text-amber-400">Arrive 10 mins before start</span>
              </div>
            </div>
          </div>

          {/* Right Column: Venues */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              <span>Our Safe Training Grounds</span>
            </h3>

            {venues.map((venue, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {venue.name}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {venue.status}
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>{venue.address}</span>
                </p>

                <div className="text-xs font-semibold text-blue-700 dark:text-amber-400 mb-3">
                  Surface: {venue.surface}
                </div>

                <div className="grid grid-cols-2 gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700">
                  {venue.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}