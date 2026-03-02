'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const { name, phone, email, message } = formData;
    const text = `Hello Shield Foundation!\n\nI am contacting you from your website.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/916383539385?text=${encodedText}`;

    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative w-full bg-black py-16 md:py-48 text-white">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* Centered Top Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-24">
          <p className="text-[#FFBF00] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-6">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-white flex flex-wrap justify-center gap-x-4">
            <span>GET IN</span>
            <span className="text-white/30">TOUCH.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Contact Information Area */}
          <div className="lg:col-span-5 flex flex-col space-y-12 lg:space-y-16">

            <div className="group">
              <h3 className="text-[#FFBF00] text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-6">Headquarters</h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-[1.4] md:leading-[1.3] text-white/90">
                SHIELD FOUNDATION<br />
                <span className="text-white/50">
                  418/5A2, Ezhumalayan Nagar,<br />
                  Via ECHS Military Hospital,<br />
                  Collector Office Road,<br />
                  Dindigul-624004
                </span>
              </p>

              <a
                href="https://maps.app.goo.gl/BwdmVrEULc2rs3cs7?g_st=iw"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-4 mt-8 text-white hover:text-[#FFBF00] transition-colors"
              >
                <span className="text-sm font-bold tracking-[0.2em] uppercase">View on Google Maps</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-[#FFBF00] text-xs font-bold tracking-[0.3em] uppercase mb-4">Phone</h3>
                <p className="text-xl font-medium tracking-tight text-white/80">6383539385</p>
                <p className="text-xl font-medium tracking-tight text-white/80">9363639385</p>
              </div>
              <div>
                <h3 className="text-[#FFBF00] text-xs font-bold tracking-[0.3em] uppercase mb-4">Hours</h3>
                <p className="text-xl font-medium tracking-tight text-white">24 HOURS OPEN</p>
              </div>
            </div>

            <div>
              <h3 className="text-[#FFBF00] text-xs font-bold tracking-[0.3em] uppercase mb-4">Email</h3>
              <a href="mailto:SHIELDFOUNDATION.DGL@GMAIL.COM" className="text-lg md:text-2xl font-bold tracking-tight text-white/80 hover:text-white transition-colors hover:underline underline-offset-4 md:underline-offset-8 break-all">
                SHIELDFOUNDATION.DGL@GMAIL.COM
              </a>
            </div>

          </div>

          {/* Simplified Brutalist Form Area */}
          <div className="lg:col-span-6 lg:col-start-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <div className="flex flex-col gap-2">
                <label className="text-[#FFBF00] text-xs font-bold tracking-[0.2em] uppercase">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111] border border-white/10 px-4 py-4 text-base md:text-lg font-medium text-white placeholder-white/20 focus:border-[#FFBF00] focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#FFBF00] text-xs font-bold tracking-[0.2em] uppercase">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111] border border-white/10 px-4 py-4 text-base md:text-lg font-medium text-white placeholder-white/20 focus:border-[#FFBF00] focus:outline-none transition-colors"
                  placeholder="Enter your phone"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#FFBF00] text-xs font-bold tracking-[0.2em] uppercase">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111] border border-white/10 px-4 py-4 text-base md:text-lg font-medium text-white placeholder-white/20 focus:border-[#FFBF00] focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-[#FFBF00] text-xs font-bold tracking-[0.2em] uppercase">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-[#111] border border-white/10 px-4 py-4 text-base md:text-lg font-medium text-white placeholder-white/20 focus:border-[#FFBF00] focus:outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="group inline-flex items-center gap-4 text-white hover:text-[#FFBF00] transition-colors self-start pb-2 border-b-2 border-transparent hover:border-[#FFBF00]"
              >
                <span className="text-lg md:text-xl font-bold tracking-[0.1em] uppercase">
                  {submitted ? 'MESSAGE SENT' : 'SEND MESSAGE'}
                </span>
                <ArrowRight className={`w-5 h-5 md:w-6 md:h-6 transition-transform ${submitted ? 'translate-x-4 text-[#FFBF00]' : 'group-hover:translate-x-2'}`} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
