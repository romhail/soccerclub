"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgePrograms from "@/components/AgePrograms";
import UpcomingPrograms from "@/components/UpcomingPrograms";
import SchedulesVenues from "@/components/SchedulesVenues";
import CoachesPhilosophy from "@/components/CoachesPhilosophy";
import PricingRegistration from "@/components/PricingRegistration";
import ParentTestimonials from "@/components/ParentTestimonials";
import ContactFaq from "@/components/ContactFaq";
import Footer from "@/components/Footer";
import TrialModal from "@/components/TrialModal";

export default function Home() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-amber-400 selection:text-blue-950 scroll-smooth">
      {/* Top Navigation */}
      <Navbar onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenTrialModal={() => setTrialModalOpen(true)} />
        <AgePrograms onOpenTrialModal={() => setTrialModalOpen(true)} />
        <UpcomingPrograms onOpenTrialModal={() => setTrialModalOpen(true)} />
        <SchedulesVenues />
        <CoachesPhilosophy />
        <PricingRegistration onOpenTrialModal={() => setTrialModalOpen(true)} />
        <ParentTestimonials />
        <ContactFaq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Free Trial Booking Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />
    </div>
  );
}
