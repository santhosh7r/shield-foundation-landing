'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black border-t border-white/10 text-white py-24">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 items-start">

          {/* Brand Section */}
          <div className="md:col-span-6 flex flex-col h-full justify-between gap-12">
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
                SHIELD<br />
                <span className="text-[#FFBF00]">FOUNDATION.</span>
              </h2>
              <p className="text-xl sm:text-2xl text-white/50 font-medium max-w-sm leading-[1.3]">
                Structured Care. Sustainable Impact. Re-coding lives for a better tomorrow.
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-[#FFBF00] text-xs font-bold tracking-[0.3em] uppercase mb-4">Focus Areas</p>
              <p className="text-white/60 text-lg font-medium tracking-tight">
                Rehabilitation <span className="text-white/20 mx-2">/</span>
                Psychology <span className="text-white/20 mx-2">/</span>
                Social Welfare
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[#FFBF00] text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Index
            </h4>
            <ul className="flex flex-col space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Vision', href: '#vision' },
                { name: 'Projects', href: '#projects' },
                { name: 'Leadership', href: '#leadership' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-2xl sm:text-3xl font-bold text-white/70 hover:text-[#FFBF00] hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="md:col-span-3">
            <h4 className="text-[#FFBF00] text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Connect
            </h4>
            <ul className="flex flex-col space-y-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-2xl sm:text-3xl font-bold text-white/70 hover:text-[#FFBF00] hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col lg:flex-row justify-center items-center gap-6">
          <p className="text-[10px] sm:text-xs text-white/40 tracking-[0.2em] uppercase font-bold text-center">
            © {currentYear} SHIELD FOUNDATION. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
