export const MobileMenu = ({ menuOpen, setMenuOpen, onResumeOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 bg-white ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Red top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#DC2626]" />

      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#DC2626] transition-colors duration-300"
        aria-label="Close Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Logo inside menu */}
      <div className="absolute top-4 left-6 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#DC2626] flex items-center justify-center">
          <span className="font-black text-white text-sm font-mono">rk</span>
        </div>
        <span className="font-black text-gray-900 text-lg">Rishi<span className="text-[#DC2626]"> Kumar</span></span>
      </div>

      <nav className="flex flex-col items-center gap-1">
        {[
          { name: "Home",     delay: "80ms" },
          { name: "About",    delay: "140ms" },
          { name: "Projects", delay: "200ms" },
          { name: "Contact",  delay: "260ms" },
        ].map(({ name, delay }) => (
          <a
            key={name}
            href={`#${name.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`relative text-4xl font-black text-gray-800 hover:text-[#DC2626] transition-all duration-300 px-8 py-2 group ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: menuOpen ? delay : "0ms" }}
          >
            {name}
            <span className="absolute bottom-1 left-8 h-0.5 w-0 bg-[#DC2626] group-hover:w-12 transition-all duration-300 rounded-full" />
          </a>
        ))}
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`px-10 py-4 bg-[#DC2626] text-white text-lg font-black rounded-xl hover:bg-[#B91C1C] transition-all duration-300 shadow-[0_4px_20px_rgba(220,38,38,0.35)] ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: menuOpen ? "320ms" : "0ms" }}
          >
            Hire Me
          </a>
          <button
            onClick={() => { setMenuOpen(false); onResumeOpen(); }}
            className={`inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-200 text-gray-600 text-base font-bold rounded-xl hover:border-[#DC2626] hover:text-[#DC2626] transition-all duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: menuOpen ? "380ms" : "0ms" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            View Resume
          </button>
        </div>
      </nav>

      {/* Bottom decoration */}
      <div className="absolute bottom-8 flex items-center gap-6 text-xs text-gray-400">
        <a href="https://github.com/rishi200201" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors duration-300">GitHub</a>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <a href="mailto:rishi20020107@gmail.com" className="hover:text-[#DC2626] transition-colors duration-300">rishi20020107@gmail.com</a>
      </div>
    </div>
  );
};
