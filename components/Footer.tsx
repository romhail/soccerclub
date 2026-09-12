"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone, MapPin, ShieldCheck, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              World Soccer Academy provides premier, age-tailored soccer education for youth aged 6 to 12. We cultivate technical flair, physical confidence, teamwork, and love for the beautiful game.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-[11px] font-semibold text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                US Soccer Affiliated Club
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Programs (6–12)
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  U8 Little Strikers (Ages 6-7)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  U10 Junior Academy (Ages 8-9)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  U12 Elite Squad (Ages 10-12)
                </a>
              </li>
              <li>
                <a href="#camps" className="hover:text-amber-400 transition-colors">
                  Summer 2026 Soccer Camps
                </a>
              </li>
              <li>
                <a href="#camps" className="hover:text-amber-400 transition-colors">
                  Striker & Keeper Clinics
                </a>
              </li>
            </ul>
          </div>

          {/* Academy Info */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Club Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#schedules" className="hover:text-amber-400 transition-colors">
                  Schedules & Locations
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-amber-400 transition-colors">
                  Coaches & Mentors
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  Membership & Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Parent FAQs & Inquiries
                </a>
              </li>
              <li>
                <button
                  onClick={() => alert("Member / Parent Portal will be available in Phase 2!")}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Member / Parent Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>1420 Sports Park Blvd, Suite 200</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>(800) 555-SOCCER</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>info@worldsocceracademy.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} World Soccer Academy (WSA). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Safety Guidelines</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}