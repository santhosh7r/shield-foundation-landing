'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] bg-black flex flex-col justify-end pb-12 md:pb-24 pt-28 md:pt-32 overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full relative z-10">

        {/* Top minimal header within Hero */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-8 md:mb-16">

          <div className="animate-fade-in-up">
            <p className="text-[#FFBF00] text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-3 md:mb-4">
              Shield Foundation
            </p>
            <p className="text-lg sm:text-lg md:text-2xl text-white/50 font-medium max-w-2xl leading-[1.4] md:leading-[1.3]">
              A modern foundation driving structural change in healthcare, rehabilitation, and community empowerment.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-col gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#vision"
              className="group flex items-center gap-4 text-white hover:text-[#FFBF00] transition-colors"
            >
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Explore Mission</span>
              <div className="w-8 md:w-12 h-[2px] bg-white group-hover:bg-[#FFBF00] relative transition-colors">
                <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300" />
              </div>
            </a>

            <a
              href="#projects"
              className="group flex items-center gap-4 text-white hover:text-[#FFBF00] transition-colors"
            >
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">View Projects</span>
              <div className="w-8 md:w-12 h-[2px] bg-white group-hover:bg-[#FFBF00] relative transition-colors">
                <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300" />
              </div>
            </a>
          </div>

        </div>

        {/* Massive Headline */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-5xl sm:text-7xl md:text-[10vw] xl:text-[140px] font-bold tracking-tighter text-white leading-[0.95] md:leading-[0.85] uppercase">
            SHIELDING <span className="text-white/20 hover:text-white transition-colors duration-700">LIVES.</span><br />
            BUILDING <span className="text-[#FFBF00] hover:text-white transition-colors duration-700">FUTURES.</span>
          </h1>
        </div>

      </div>

      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
