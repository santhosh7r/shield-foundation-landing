'use client';

export default function Leadership() {
  const values = [
    'System Logic',
    'Deep Empathy',
    'Physical Discipline',
    'Mental Strength'
  ];

  return (
    <section id="leadership" className="relative w-full bg-black py-24 md:py-32 text-white">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Centered Top Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <p className="text-[#FFBF00] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Leadership
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-white flex flex-wrap justify-center gap-x-4">
            <span>FOUNDER &</span>
            <span className="text-white/30">DIRECTOR.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

          {/* Founder Area */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">

            {/* Founder Photo Block */}
            <div className="relative w-full max-w-sm aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black flex justify-end flex-col via-black/20 to-transparent z-10" />

              {/* Founder Image */}
              <img
                src="/founder.png"
                alt="Founder & Director"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Founder Text Info */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-3xl font-bold text-white tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-500 mb-2">
                  HARISUDHAN.V
                </p>
                <p className="text-[#FFBF00] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                  Founder & Managing Director
                </p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-0">

            {/* Brutalist Quote Block */}
            <div className="border-l-4 border-[#FFBF00] pl-6 md:pl-10 mb-12">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-[1.2] text-white">
                "Life isn't just about finding yourself; it’s about engineering the best version of yourself."
              </p>
            </div>

            <p className="text-xl sm:text-2xl text-white/50 font-medium leading-[1.4] max-w-2xl mb-12">
              Merging <span className="text-white">Computer Science</span> logic with <span className="text-white">Clinical Psychology</span>, we believe human behavior can be "re-coded". SHIELD Foundation is a fortress of hope designed to bridge scientific recovery with deep compassion.
            </p>

            {/* Brutalist Values List */}
            <div className="pt-12 mt-8 border-t border-white/20">
              <p className="text-[#FFBF00] text-sm font-bold tracking-[0.3em] uppercase mb-8">
                Recovery Pillars
              </p>

              <ul className="flex flex-col">
                {values.map((value, i) => (
                  <li key={i} className="group relative py-6 md:py-8 border-b border-white/20 flex flex-row items-center justify-between hover:border-[#FFBF00] transition-colors duration-500 cursor-default">
                    <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-white group-hover:text-[#FFBF00] group-hover:translate-x-4 transition-all duration-500">
                      {value}
                    </span>
                    <span className="text-white/20 font-bold text-xl group-hover:text-[#FFBF00] transition-colors duration-500">
                      /{i + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
