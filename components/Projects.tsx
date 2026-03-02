'use client';

const projects = [
  {
    number: '01',
    title: 'REHABILITATION & DE-ADDICTION',
    description: 'Operating rehabilitation centres and clinics providing therapeutic treatments, professional counselling, and comprehensive aftercare programs.',
    status: 'ACTIVE'
  },
  {
    number: '02',
    title: 'WOMEN\'S HOSTELS & RESIDENTIAL',
    description: 'Managing safe, secure, and well-equipped hostels and short-stay homes providing essential amenities and security for women and students.',
    status: 'ACTIVE'
  },
  {
    number: '03',
    title: 'OLD AGE HOMES & GERIATRIC',
    description: 'Premium senior citizen homes providing assisted living, palliative care, and 24/7 nursing and healthcare support for a dignified environment.',
    status: 'ACTIVE'
  },
  {
    number: '04',
    title: 'CHILDREN\'S HOMES & ORPHANAGES',
    description: 'Managing homes and foster care to provide shelter, nutrition, healthcare, and education focused on holistic development and training.',
    status: 'UPCOMING'
  },
  {
    number: '05',
    title: 'HEALTHCARE & WELLNESS',
    description: 'Providing mental health consultancy, stress management workshops, and wellness programs for individuals and corporate sectors.',
    status: 'UPCOMING'
  },
  {
    number: '06',
    title: 'FOOD SUPPLY & CATERING',
    description: 'Supply of quality food, beverages, and nutrition services to institutions and care centres, ensuring strict food safety compliance.',
    status: 'UPCOMING'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-16 md:py-48 text-white">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* Centered Top Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-24">
          <p className="text-[#FFBF00] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-6">
            Shield Group
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-white flex flex-wrap justify-center gap-x-4">
            <span>SIX SUB</span>
            <span className="text-[#FFBF00]">BRANDS.</span>
          </h2>
        </div>

        {/* Minimal Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-24 gap-x-12">
          {projects.map((project, index) => (
            <div key={index} className={`group relative ${project.status === 'UPCOMING' ? 'opacity-50 hover:opacity-100 transition-opacity duration-500' : ''}`}>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="block text-[#FFBF00] text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter group-hover:translate-x-3 transition-transform duration-500">
                  {project.number}
                </span>
                {project.status === 'UPCOMING' && (
                  <span className="text-[10px] font-bold tracking-[0.2em] text-black bg-white/80 px-2 py-1 uppercase rounded-sm group-hover:bg-[#FFBF00] transition-colors duration-500">
                    Upcoming Project
                  </span>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-[1.2] md:leading-[1.1]">
                {project.title}
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-white/50 font-medium leading-[1.5] md:leading-[1.4] max-w-sm">
                {project.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
