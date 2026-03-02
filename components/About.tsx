'use client';

import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-16 md:py-32 text-white">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* Centered Top Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-24">
          <p className="text-[#FFBF00] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-6">
            Who We Are
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-white flex flex-wrap justify-center gap-x-4">
            <span>BEYOND</span>
            <span className="text-[#FFBF00]">CARE.</span>
          </h2>
        </div>

        {/* Content Area */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 md:space-y-12">
          <p className="text-xl sm:text-2xl lg:text-4xl font-medium tracking-tight leading-[1.3] md:leading-[1.2] text-white/90">
            Every failure is a lesson. People who have fallen don't just need mere advice; they need a <span className="text-[#FFBF00]">SHIELD</span> to hold and support them.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-white/50 font-medium leading-[1.6] md:leading-[1.5]">
            Merging the precision of an engineer with the empathy of a psychologist, our goal is to repair lives that have fallen apart. We don't just change your path—we transform broken minds into resilient foundations, guiding you from darkness toward a new version of yourself.
          </p>

          {/* Brutalist Stats - Centered */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8 w-full border-t border-white/10 mt-6 md:mt-8 text-center justify-items-center">
            <div className="w-full">
              <p className="text-4xl sm:text-6xl font-bold tracking-tighter text-white mb-1 md:mb-2">6<span className="text-[#FFBF00]">+</span></p>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Dedicated Verticals</p>
            </div>
            <div className="w-full">
              <p className="text-4xl sm:text-6xl font-bold tracking-tighter text-white mb-1 md:mb-2">1<span className="text-[#FFBF00]">k</span></p>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Lives Impacted</p>
            </div>
            <div className="col-span-2 lg:col-span-1 border-t border-white/10 lg:border-t-0 pt-6 lg:pt-0 w-full">
              <p className="text-4xl sm:text-6xl font-bold tracking-tighter text-white mb-1 md:mb-2">'26</p>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#FFBF00] uppercase">"Anbu Doctor" Award</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <a href="#vision" className="group inline-flex items-center gap-4 text-white hover:text-[#FFBF00] transition-colors">
              <span className="text-sm font-bold tracking-[0.2em] uppercase">READ OUR VISION</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
