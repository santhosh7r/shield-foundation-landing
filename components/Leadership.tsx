'use client';

export default function Leadership() {
  const values = [
    { title: 'System Logic', subtitle: 'RESTRUCTURING BEHAVIOR' },
    { title: 'Deep Empathy', subtitle: 'COMPASSIONATE CARE' },
    { title: 'Physical Discipline', subtitle: 'ROUTINE & RESILIENCE' },
    { title: 'Mental Strength', subtitle: 'PSYCHOLOGICAL FORTITUDE' }
  ];

  return (
    <section id="leadership" className="relative w-full bg-black py-16 md:py-32 text-white">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Centered Top Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-24">
          <p className="text-[#FFBF00] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-6">
            Leadership
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-white flex flex-wrap justify-center gap-x-4">
            <span>FOUNDER &</span>
            <span className="text-white/30">DIRECTOR.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">

          {/* Founder Area */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">

            {/* Founder Photo Block */}
            <div className="relative w-full max-w-sm aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black flex justify-end flex-col via-black/20 to-transparent z-10" />

              {/* Founder Image */}
              <img
                src="/founder.PNG"
                alt="Founder & Director"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Founder Text Info */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 right-4 md:right-6 z-20">
                <p className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-500 mb-1 md:mb-2">
                  HARISUDHAN.V
                </p>
                <p className="text-[#FFBF00] text-[8px] md:text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">
                  Founder & Managing Director
                </p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-0">

            {/* Brutalist Quote Block */}
            <div className="mb-8 md:mb-12">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-[1.3] md:leading-[1.2] text-white uppercase">
                "LIFE ISN'T JUST ABOUT FINDING YOURSELF; IT'S ABOUT ENGINEERING THE BEST VERSION OF YOURSELF."
              </p>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/50 font-medium leading-[1.5] md:leading-[1.4] max-w-2xl mb-8 md:mb-12">
              Merging <span className="text-white">Computer Science</span> logic with <span className="text-white">Clinical Psychology</span>, we believe human behavior can be "re-coded". SHIELD Foundation is a fortress of hope designed to bridge scientific recovery with deep compassion.
            </p>

            {/* Brutalist Values List - Revamped completely */}
            <div className="pt-4 md:pt-8 mt-4 md:mt-8 w-full relative">
              <p className="text-[#FFBF00] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-12">
                Recovery Pillars
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {values.map((item, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col justify-between aspect-square lg:aspect-[3/4] bg-[#0a0a0a] border border-white/5 hover:border-[#FFBF00] p-4 sm:p-6 transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-[#FFBF00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

                    {/* Top Section */}
                    <div className="relative z-10 flex justify-between items-start mb-8">
                      <span className="text-white/20 font-bold text-3xl md:text-4xl lg:text-5xl tracking-tighter group-hover:text-black/20 transition-colors duration-500">
                        /{i + 1}
                      </span>
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FFBF00] group-hover:text-black transform -rotate-45 group-hover:rotate-0 transition-all duration-500 opacity-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>

                    {/* Bottom Content */}
                    <div className="relative z-10 flex flex-col mt-auto">
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-[#FFBF00] group-hover:text-black/60 uppercase mb-2 transition-colors duration-500">
                        {item.subtitle}
                      </p>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-black transition-colors duration-500 leading-[1.1] sm:leading-[1.2]">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
