'use client';

const projects = [
  {
    number: '01',
    logo: null,
    title: 'REHABILITATION & DE-ADDICTION',
    description: 'Operating rehabilitation centres and clinics providing therapeutic treatments, counselling, and aftercare.',
    status: 'ACTIVE'
  },
  {
    number: '02',
    logo: '/womens.png',
    title: 'WOMEN\'S HOSTELS & RESIDENTIAL',
    description: 'Managing safe, secure homes providing essential amenities and security for women and students.',
    status: 'ACTIVE'
  },
  {
    number: '03',
    logo: null,
    title: 'OLD AGE HOMES & GERIATRIC',
    description: 'Premium senior citizen homes providing assisted living, palliative care, and 24/7 nursing support.',
    status: 'ACTIVE'
  },
  {
    number: '04',
    logo: null,
    title: 'CHILDREN\'S HOMES & ORPHANAGES',
    description: 'Managing homes and foster care to provide shelter, healthcare, and holistic education.',
    status: 'UPCOMING'
  },
  {
    number: '05',
    logo: null,
    title: 'HEALTHCARE & WELLNESS',
    description: 'Providing mental health consultancy and stress management wellness programs.',
    status: 'UPCOMING'
  },
  {
    number: '06',
    logo: null,
    title: 'FOOD SUPPLY & CATERING',
    description: 'Supply of quality food, beverages, and nutrition services to institutions and care centres.',
    status: 'UPCOMING'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-12 md:py-24 text-white overflow-hidden flex flex-col justify-center">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12">
          <p className="text-[#FFBF00] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 md:mb-3">
            Shield Group
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white flex flex-col sm:flex-row flex-wrap justify-center sm:gap-x-4">
            <span>SIX SUB</span>
            <span className="text-[#FFBF00]">BRANDS.</span>
          </h2>
        </div>

        {/* Uniform 3x2 Grid for Single Screen Fit - Scaled Down */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center text-center bg-[#050505] border border-white/10 p-4 md:p-6 hover:border-[#FFBF00] hover:bg-[#0a0a0a] transition-all duration-500 ${project.status === 'UPCOMING' ? 'opacity-60 hover:opacity-100' : ''}`}
            >

              {/* Top Hero Element - Equal size for everyone! Logo for women's, Number for others */}
              <div className="h-16 w-16 md:h-20 md:w-20 mb-4 md:mb-5 rounded-md overflow-hidden bg-white/5 p-2 md:p-3 flex items-center justify-center border border-white/10 group-hover:border-[#FFBF00]/50 group-hover:scale-110 transition-all duration-500">
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(255,191,0,0.5)]"
                  />
                ) : (
                  <span className="text-[#FFBF00] text-3xl md:text-4xl font-bold tracking-tighter">
                    {project.number}
                  </span>
                )}
              </div>

              {/* Title & Badge */}
              <div className="flex flex-col items-center flex-grow">
                <h3 className="text-base md:text-lg font-bold tracking-tight text-white mb-2 md:mb-3 group-hover:text-[#FFBF00] transition-colors duration-500 leading-[1.2]">
                  {project.title}
                </h3>

                <p className="text-[10px] md:text-xs text-white/50 font-medium leading-[1.5] mb-3 md:mb-4">
                  {project.description}
                </p>

                {project.status === 'UPCOMING' && (
                  <span className="mt-auto text-[8px] font-bold tracking-[0.2em] text-[#FFBF00] border border-[#FFBF00]/30 px-3 py-1 uppercase rounded-full">
                    Upcoming
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
