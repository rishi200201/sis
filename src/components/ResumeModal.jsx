import { useEffect } from "react";

export const ResumeModal = ({ open, onClose }) => {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto py-8 px-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Paper */}
      <div className="relative bg-white w-full max-w-[860px] rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.3)] overflow-hidden my-auto" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── Toolbar ── */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <span className="text-sm font-bold text-gray-700">Rishi Kumar — Resume</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Rishi_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#DC2626] border border-[#DC2626]/30 rounded-lg hover:bg-red-50 transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close resume"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Resume content ── */}
        <div className="px-10 py-10 text-[13.5px] leading-relaxed text-gray-700">

          {/* Header */}
          <div className="text-center mb-6 pb-6 border-b border-gray-200">
            <h1 className="text-[2rem] font-black tracking-tight text-gray-900 leading-tight">RISHI KUMAR S</h1>
            <p className="text-base font-semibold text-gray-500 mt-1">Tech Analyst | MERN Stack Developer</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Chennai, Tharamani
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                82485 68354
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
              <a href="mailto:rishi20020107@gmail.com" className="flex items-center gap-1 hover:text-[#DC2626] transition-colors">
                <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                rishi20020107@gmail.com
              </a>
              <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
              <a href="https://github.com/rishi200201" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#DC2626] transition-colors">
                <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                rishi200201
              </a>
            </div>
          </div>

          {/* About */}
          <Section title="ABOUT ME">
            <p className="text-gray-600 leading-relaxed">
              Tech Analyst skilled in MERN stack development, focused on crafting efficient code and building professional,
              user-friendly web applications. Experienced in React, Node.js, Express, and MongoDB, with expertise in
              responsive design, RESTful APIs, and performance optimization. Strong problem-solving and collaborative skills
              to deliver reliable technical solutions.
            </p>
          </Section>

          {/* Work Experience */}
          <Section title="WORK EXPERIENCE">
            <div>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Analyst – Technology Services – MERN Stack Developer (ERP Systems)</h3>
                  <p className="text-gray-500 text-xs mt-0.5">SRM College</p>
                </div>
                <span className="text-xs font-semibold text-[#DC2626] bg-red-50 px-2.5 py-1 rounded-full border border-[#DC2626]/20 flex-shrink-0">2024 – Present</span>
              </div>
              <ul className="mt-2 space-y-1.5 pl-4">
                {[
                  "Developed full-stack MERN applications and ERP modules for academic and administrative users.",
                  "Built role-based dashboards with secure authentication, integrating frontend components with backend APIs for real-time data handling.",
                  "Implemented CRUD workflows, optimized database performance, and maintained clean, scalable code.",
                  "Collaborated with cross-functional teams to deliver technical solutions and improve application efficiency.",
                  "Analyzed data to support business decisions and enhance user experience.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-[12.5px]">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#DC2626] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* Technical Skills */}
          <Section title="TECHNICAL SKILLS">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {[
                { cat: "Frontend",           val: "React.js, HTML5, CSS3, JavaScript (ES6+), Material UI, Tailwind CSS" },
                { cat: "Backend",            val: "Node.js, Express.js" },
                { cat: "Database",           val: "MongoDB, Mongoose" },
                { cat: "APIs & Real-Time",   val: "RESTful APIs, Axios, Socket.IO, Nodemailer, Stripe" },
                { cat: "OS & Platforms",     val: "Linux (Debian, Ubuntu), Windows" },
                { cat: "Security & Tools",   val: "JWT Authentication, Rate Limiting, Helmet, Git, GitHub, GitLab, Postman" },
                { cat: "Other",              val: "MVC Architecture, Responsive Design, CRUD Workflows, Integrations" },
                { cat: "Soft Skills",        val: "Time Management · Communication · Critical Thinking · Analytics · Project Management · SEO" },
              ].map(({ cat, val }) => (
                <div key={cat} className="flex gap-1.5 text-[12.5px]">
                  <span className="font-bold text-gray-900 flex-shrink-0">{cat}:</span>
                  <span className="text-gray-600">{val}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section title="PROJECTS">
            <div className="space-y-3">
              {[
                {
                  name: "NVZ Website",
                  tech: "React, Vite, Material UI, TailwindCSS, Responsive Design",
                  desc: "Developed a responsive freelance website ensuring a fast, polished, and client-focused user experience.",
                },
                {
                  name: "Fine Click Photography",
                  tech: "React, Vite, Material UI, TailwindCSS, Performance Optimization",
                  desc: "Built a minimal and elegant photography showcase optimized for speed, performance, and responsiveness.",
                },
                {
                  name: "E-commerce Platform",
                  tech: "React, Express.js, MongoDB, Stripe",
                  desc: "Created a full-featured online store with secure payment integration, dynamic product management, and smooth user interactions.",
                },
              ].map(({ name, tech, desc }) => (
                <div key={name} className="pl-4 border-l-2 border-[#DC2626]/20 hover:border-[#DC2626]/50 transition-colors">
                  <p className="text-[12.5px]">
                    <span className="font-bold text-gray-900">{name}</span>
                    <span className="text-gray-400 mx-1">–</span>
                    <span className="text-gray-500 italic text-[11.5px]">{tech}</span>
                  </p>
                  <p className="text-gray-600 text-[12.5px] mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="EDUCATION" last>
            <div className="space-y-3">
              {[
                {
                  degree: "Master of Engineering (M.E.) in Computer Science and Engineering",
                  inst: "Knowledge Institute of Technology (KIOT), Salem",
                  cgpa: "8.2",
                },
                {
                  degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
                  inst: "KCG College of Technology, Chennai",
                  cgpa: "7.8",
                },
              ].map(({ degree, inst, cgpa }) => (
                <div key={inst} className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-[12.5px] text-gray-600">{degree}</p>
                    <p className="font-bold text-gray-900 text-[12.5px] mt-0.5">{inst}</p>
                  </div>
                  <span className="text-xs font-bold text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full flex-shrink-0">CGPA: {cgpa}</span>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children, last }) => (
  <div className={`mb-6 ${last ? "" : "pb-6 border-b border-gray-100"}`}>
    <div className="flex items-center gap-3 mb-3">
      <h2 className="text-[11px] font-black tracking-[0.22em] text-gray-900 uppercase">{title}</h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
    {children}
  </div>
);
