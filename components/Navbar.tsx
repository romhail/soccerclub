"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X, Phone, Calendar, User, ChevronRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export default function Navbar({ onOpenTrialModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs (Ages 6-12)", href: "#programs" },
    { name: "Upcoming Camps", href: "#camps", badge: "New" },
    { name: "Schedules & Venues", href: "#schedules" },
    { name: "Coaches & Philosophy", href: "#coaches" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs & Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white text-xs py-2 px-4 border-b border-blue-800/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-medium text-[11px] border border-amber-400/30">
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
              Spring & Summer 2026 Registration Open
            </span>
            <span className="text-slate-300">Limited spots for U8, U10 & U12 teams!</span>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <a href="tel:+18005557622" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(800) 555-SOCCER</span>
            </a>
            <div className="h-3 w-px bg-blue-800" />
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>Next Free Assessment: This Saturday</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80 dark:border-slate-800"
            : "bg-white dark:bg-slate-900 py-4 border-b border-slate-100 dark:border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 dark:text-slate-200 dark:hover:text-amber-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.2 bg-amber-500 text-blue-950 font-black text-[10px] rounded-full uppercase">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Member Portal link - prepared for future phase */}
            <button
              onClick={() => alert("Member & Admin Portal authentication is coming soon in Phase 2!")}
              className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-blue-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
              title="Parent & Member Portal"
            >
              <User className="w-4 h-4 text-blue-600" />
              <span>Portal Login</span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenTrialModal}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-blue-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Book Free Trial</span>
              <ChevronRight className="w-4 h-4 text-blue-950 font-bold" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenTrialModal}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 transition-colors"
            >
              Free Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span>{link.name}</span>
                  {link.badge ? (
                    <span className="px-2 py-0.5 bg-amber-400 text-blue-950 text-[10px] font-black rounded-full">
                      {link.badge}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 rounded-xl font-bold text-sm text-blue-950 bg-amber-400 hover:bg-amber-300 text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Book a Free Trial Session</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  alert("Member & Admin Portal authentication is coming soon in Phase 2!");
                }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-blue-600" />
                <span>Member / Parent Portal Login</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}