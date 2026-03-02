'use client';

export default function Map() {
    return (
        <section className="relative w-full bg-black py-16 md:py-24">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12">
                <div className="relative w-full h-[50vh] md:h-[60vh] border border-white/20 bg-[#111] overflow-hidden group">
                    <iframe
                        src="https://maps.google.com/maps?q=418/5A2,+EZHUMALAYAN+NAGAR,+VIA+ECHS+Military+Hospital,+Dindigul-624004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shield Foundation Location"
                    ></iframe>

                    <div className="absolute inset-0 pointer-events-none z-10 box-border border-2 border-transparent group-hover:border-[#FFBF00] transition-colors duration-700" />
                </div>
            </div>
        </section>
    );
}
