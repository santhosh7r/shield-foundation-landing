'use client';

export default function VisionMission() {
  return (
    <section id="vision" className="relative w-full bg-black py-24 md:py-32 text-white">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* Centered Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <p className="text-[#FFBF00] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Foundation
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-white flex flex-wrap justify-center gap-x-4">
            <span>VISION &</span>
            <span className="text-white/30">MISSION.</span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-20 lg:gap-24 max-w-4xl mx-auto">

          {/* Vision Block */}
          <div className="text-center group">
            <h3 className="text-[#FFBF00] text-sm font-bold tracking-[0.2em] uppercase mb-8 border-b border-white/10 pb-4 inline-block">
              The Vision
            </h3>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.2] text-white/90">
              To build a trusted, structured care network delivering rehabilitation and social support with absolute integrity and compassion.
            </p>
          </div>

          {/* Mission Block */}
          <div className="text-center group w-full">
            <h3 className="text-[#FFBF00] text-sm font-bold tracking-[0.2em] uppercase mb-12 border-b border-white/10 pb-4 inline-block">
              The Mission
            </h3>

            <ul className="flex flex-col gap-8 text-left max-w-2xl mx-auto">
              {[
                'Execute professional rehabilitation and addiction recovery protocols.',
                'Establish safe, structured hostels and residential spaces for women.',
                'Operate dignified old age homes with integrated medical support.',
                'Provide direct shelter, education, and support for vulnerable children.'
              ].map((item, i) => (
                <li key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 group/item pt-6 border-t border-white/5">
                  <span className="text-white/20 font-bold text-3xl sm:text-2xl group-hover/item:text-[#FFBF00] transition-colors">
                    0{i + 1}
                  </span>
                  <p className="text-xl sm:text-2xl font-medium leading-[1.3] text-white/70 group-hover/item:text-white transition-colors">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
