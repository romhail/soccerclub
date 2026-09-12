"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "7",
    message: "",
  });

  const faqs = [
    {
      q: "What should my child bring to their first trial session?",
      a: "Just athletic clothing (shorts/t-shirt), soccer cleats or athletic sneakers, shin guards, and a water bottle. We will provide all balls and training equipment.",
    },
    {
      q: "Can complete beginners join the academy?",
      a: "Absolutely! Our U8 and U10 programs have beginner-friendly development streams where fundamentals and confidence are taught with zero intimidation.",
    },
    {
      q: "What is your bad weather or rain policy?",
      a: "We train rain or shine! In the case of extreme weather or lightning, sessions are immediately shifted to our indoor Central Sports Dome facility.",
    },
    {
      q: "How are players evaluated for teams and age groups?",
      a: "Players are grouped strictly by birth year and developmental readiness (U8: ages 6-7, U10: ages 8-9, U12: ages 10-12). Coaches provide quarterly progress feedback.",
    },
    {
      q: "Are the coaches background checked and certified?",
      a: "Yes, 100%. All coaches hold accredited USSF/UEFA coaching badges, have completed SafeSport certification, and passed comprehensive state background checks.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-bold text-xs uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Got Questions? We’re Here to Help</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Frequently Asked Questions & Contact
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Reach out to our parent coordinators or check answers to common questions below.
          </p>
        </div>

        {/* 2-Column Grid: FAQ on Left, Contact Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: FAQs */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Parent FAQs
            </h3>

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Contact info box */}
            <div className="mt-8 p-6 rounded-2xl bg-blue-900 text-white space-y-3">
              <h4 className="font-bold text-base text-amber-400">Direct Academy Hotline</h4>
              <div className="flex items-center gap-3 text-xs text-blue-100">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Call or Text: (800) 555-SOCCER (Mon-Sat 8am - 7pm)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-blue-100">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Email: contact@worldsocceracademy.com</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-blue-100">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Main Office: 1420 Sports Park Blvd, Suite 200</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Our team responds within 2 business hours during weekdays.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-300">
                    Thank You, {formData.parentName || "Parent"}!
                  </h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-400">
                    We received your message regarding your child and will reach out to you at {formData.email || "your email"} shortly!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Child’s Age / Group
                      </label>
                      <select
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                      >
                        <option value="6">Age 6 (U8 Little Strikers)</option>
                        <option value="7">Age 7 (U8 Little Strikers)</option>
                        <option value="8">Age 8 (U10 Junior Academy)</option>
                        <option value="9">Age 9 (U10 Junior Academy)</option>
                        <option value="10">Age 10 (U12 Elite Squad)</option>
                        <option value="11">Age 11 (U12 Elite Squad)</option>
                        <option value="12">Age 12 (U12 Elite Squad)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Child’s Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Liam"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Questions / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your child's soccer background, questions about schedule or camps..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-blue-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}