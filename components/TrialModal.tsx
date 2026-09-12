"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, Calendar, ShieldCheck, User, Phone, Mail, Award } from "lucide-react";
import Logo from "./Logo";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childDob: "",
    childAgeGroup: "u8",
    preferredVenue: "West Field Athletic Complex",
    preferredDay: "Saturday Morning Session",
    experience: "beginner",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-900 via-blue-950 to-indigo-950 text-white relative">
          <button
            onClick={resetAndClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-blue-950 font-black text-[10px] uppercase">
              100% Free • No Commitment
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black">
            Book a Free Trial Session
          </h3>
          <p className="text-xs text-blue-200 mt-1">
            Experience our coaching, meet the squad, and see your child shine on the pitch!
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Spot Reserved! 🎉
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                Thank you, <strong>{formData.parentName}</strong>! We’ve reserved a free trial spot for <strong>{formData.childName || "your champion"}</strong> at <strong>{formData.preferredVenue}</strong>.
              </p>
              
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2">
                <p className="font-bold text-slate-900 dark:text-white">What happens next?</p>
                <p className="text-slate-600 dark:text-slate-300">1. A confirmation email and SMS with field map details have been sent to <strong>{formData.email}</strong>.</p>
                <p className="text-slate-600 dark:text-slate-300">2. Arrive 10 minutes prior with cleats/sneakers and water.</p>
                <p className="text-slate-600 dark:text-slate-300">3. Coach Marco & Elena will greet you at the registration canopy!</p>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3 rounded-xl font-bold text-sm bg-blue-900 text-white hover:bg-blue-800 transition-colors"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Parent Info */}
              <div className="space-y-3">
                <p className="text-xs font-black uppercase text-slate-400 tracking-wider">
                  1. Parent or Guardian Details
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Phone (for SMS reminder) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Child Info */}
              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-black uppercase text-slate-400 tracking-wider">
                  2. Child Information (Ages 6–12)
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Child’s Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mateo Silva"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Program / Age Group *
                    </label>
                    <select
                      value={formData.childAgeGroup}
                      onChange={(e) => setFormData({ ...formData, childAgeGroup: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    >
                      <option value="u8">U8 Little Strikers (Ages 6–7)</option>
                      <option value="u10">U10 Junior Academy (Ages 8–9)</option>
                      <option value="u12">U12 Elite Squad (Ages 10–12)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Preferred Venue
                    </label>
                    <select
                      value={formData.preferredVenue}
                      onChange={(e) => setFormData({ ...formData, preferredVenue: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    >
                      <option value="West Field Athletic Complex">West Field Athletic Complex</option>
                      <option value="Central Sports Dome">Central Sports Dome (Indoor)</option>
                      <option value="Eastside Premier Turf Ground">Eastside Premier Turf Ground</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Playing Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    >
                      <option value="beginner">First time / Beginner</option>
                      <option value="intermediate">1-2 seasons recreational</option>
                      <option value="advanced">Experienced / Travel soccer</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-blue-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  Confirm Free Trial Spot
                </button>
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>No credit card required. Free 60-min session.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}