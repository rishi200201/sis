import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vite", "TailwindCSS", "Chakra UI", "Material UI"];
  const backendSkills  = ["Node.js", "MongoDB", "Express", "JWT", "Nodemailer", "OpenAI", "AWS"];

  const services = [
    {
      title: "Business Websites",
      desc: "Fast, responsive, SEO-ready websites for startups, brands, and local businesses.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Full-Stack Web Apps",
      desc: "End-to-end MERN applications — authentication, REST APIs, databases.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Portals & Dashboards",
      desc: "Admin panels, ERP systems, and CRM tools built for real workflows.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "API & Integrations",
      desc: "REST APIs, payment gateways, third-party integrations, and automation.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#DC2626] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      <RevealOnScroll>
        <div className="max-w-[1200px] mx-auto">

          {/* ── Section header ── */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#DC2626]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] uppercase">About Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              MERN Stack <span className="text-[#DC2626]">Developer</span>
            </h2>
            <p className="text-gray-500 mt-3 text-base max-w-xl leading-relaxed">
              2+ years building production apps trusted by over 100,000 users. I turn ideas into robust, scalable systems.
            </p>
          </div>

          {/* ── Bio + Services ── */}
          <div className="grid lg:grid-cols-[380px_1fr] gap-8 mb-10">

            {/* Bio card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DC2626] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Rishi Kumar</h3>
                  <p className="text-gray-400 text-sm">MERN Stack Developer</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                A results-driven full-stack developer who transforms client ideas into polished, production-ready web applications. Currently pursuing my Master&apos;s while delivering systems trusted by <span className="text-[#DC2626] font-semibold">100,000+ users</span>.
              </p>

              <div className="border-t border-gray-100 pt-5 grid grid-cols-2 gap-4">
                {[
                  { num: "100K+", label: "Users Served" },
                  { num: "50+",   label: "Projects Shipped" },
                  { num: "2+",    label: "Years Experience" },
                  { num: "5+",    label: "Happy Clients" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-black text-[#DC2626]">{num}</div>
                    <div className="text-xs text-gray-400 mt-0.5 font-medium">{label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#DC2626] text-white text-sm font-bold hover:bg-[#B91C1C] transition-colors duration-200 shadow-[0_4px_12px_rgba(220,38,38,0.25)]"
              >
                Book a Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Services grid */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-5">What I Build for You</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="group p-5 rounded-xl bg-white border border-gray-200 hover:border-[#DC2626]/30 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#DC2626] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                      {s.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1.5">{s.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#DC2626] transition-all duration-400 rounded-b-xl" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Skills ── */}
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {[
              {
                label: "Frontend",
                sub: "UI / UX Implementation",
                skills: frontendSkills,
                icon: (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ),
              },
              {
                label: "Backend",
                sub: "Server & Database",
                skills: backendSkills,
                icon: (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                ),
              },
            ].map(({ label, sub, skills, icon }) => (
              <div key={label} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#DC2626] flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{label} Stack</h3>
                    <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((sk) => (
                    <span
                      key={sk}
                      className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium hover:border-[#DC2626]/40 hover:text-[#DC2626] hover:bg-red-50 transition-all duration-200 cursor-default"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Education + Experience ── */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* Education */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#DC2626] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Education</h3>
                  <p className="text-gray-400 text-xs mt-0.5">Academic Journey</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  {
                    degree: "M.E. in Computer Science",
                    school: "Knowledge Institute of Technology",
                    year: "2024 – 2026",
                    badge: { text: "In Progress", cls: "bg-red-50 text-[#DC2626] border-[#DC2626]/20" },
                  },
                  {
                    degree: "B.E. in Computer Science",
                    school: "KCG College of Technology",
                    year: "2019 – 2023",
                    badge: { text: "Completed", cls: "bg-green-50 text-green-700 border-green-200" },
                  },
                ].map(({ degree, school, year, badge }) => (
                  <div key={degree} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                      <h4 className="text-sm font-semibold text-gray-900">{degree}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${badge.cls}`}>{badge.text}</span>
                    </div>
                    <p className="text-gray-500 text-xs font-medium">{school}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#DC2626] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Work Experience</h3>
                  <p className="text-gray-400 text-xs mt-0.5">Professional Career</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                  <h4 className="text-sm font-semibold text-gray-900">Tech Analyst</h4>
                  <span className="px-2 py-0.5 rounded-full bg-red-50 text-[#DC2626] text-[10px] font-bold border border-[#DC2626]/20">Current</span>
                </div>
                <p className="text-gray-500 text-xs font-medium">SRM Institute of Science and Technology</p>
                <p className="text-[#DC2626] text-xs mt-0.5 font-medium">2024 – Present</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Built feedback system for 100K+ users",
                    "Implemented OAuth & REST APIs",
                    "Created dashboards with Git/GitLab",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-gray-500 text-xs">
                      <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
