import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { projects, getProjectSlug } from "../../data/projects";

/* ── Badge meta ── */
const badgeMeta = {
  Live:     { label: "Live",     dot: "#DC2626", text: "text-[#DC2626]",  bg: "bg-red-50",  border: "border-[#DC2626]/25" },
  Hosted:   { label: "Hosted",  dot: "#2563EB", text: "text-[#2563EB]",  bg: "bg-blue-50", border: "border-blue-200" },
  Personal: { label: "Personal",dot: "#9CA3AF", text: "text-gray-500",   bg: "bg-gray-50", border: "border-gray-200" },
};

const FILTERS = ["All", "Live", "Hosted", "Personal"];

/* ── SVG icon map ── */
const ProjectIcon = ({ type }) => {
  const cls = "w-5 h-5 text-white";
  const icons = {
    trophy: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 21h8m-4-4v4M7 3H5a2 2 0 00-2 2v3c0 3.314 2.686 6 6 6h2c3.314 0 6-2.686 6-6V5a2 2 0 00-2-2h-2M7 3V2m10 1V2" />
      </svg>
    ),
    activity: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    briefcase: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    camera: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><circle cx="12" cy="13" r="3" strokeWidth={1.8} />
      </svg>
    ),
    printer: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    store: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    package: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    gift: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    cart: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  };
  return icons[type] ?? icons.briefcase;
};

/* ── 3D tilt ── */
const TiltCard = ({ children }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top)  / r.height - 0.5) * 7,
      y: ((e.clientX - r.left) / r.width  - 0.5) * -7,
    });
  };
  return (
    <div
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHover(false); }}
      style={{
        transform: hover
          ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : "perspective(900px) rotateX(0) rotateY(0)",
        transition: hover ? "transform 0.07s ease-out" : "transform 0.4s ease-out",
        boxShadow: hover ? "0 16px 48px rgba(0,0,0,0.10)" : "none",
      }}
      className="rounded-2xl h-full"
    >
      {children}
    </div>
  );
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const visible = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.badge === activeFilter);

  return (
    <section
      id="projects"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Subtle ambient */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DC2626] opacity-[0.025] rounded-full blur-[120px] pointer-events-none" />

      <RevealOnScroll>
        <div className="max-w-[1160px] mx-auto">

          {/* ── Header ── */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#DC2626]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#DC2626] uppercase">Selected Works</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                  Projects &amp; <span className="text-[#DC2626]">Work</span>
                </h2>
                <p className="text-gray-400 mt-2.5 text-[15px] max-w-lg leading-relaxed">
                  Production-grade digital products built with precision, clean architecture, and modern tech.
                </p>
              </div>
              {/* Stats */}
              <div className="flex items-center gap-6 flex-shrink-0">
                {[
                  { num: projects.filter(p => p.badge === "Live").length,     label: "Live Sites" },
                  { num: projects.filter(p => p.badge === "Hosted").length,   label: "Hosted" },
                  { num: projects.filter(p => p.badge === "Personal").length, label: "Side Projects" },
                ].map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-xl font-black text-gray-900">{num}</div>
                    <div className="text-[10px] text-gray-400 font-semibold mt-0.5 tracking-wide uppercase">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Filters ── */}
          <div className="flex items-center gap-2 mb-10 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 border ${
                  activeFilter === f
                    ? "bg-[#DC2626] text-white border-[#DC2626] shadow-[0_2px_12px_rgba(220,38,38,0.28)]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#DC2626]/30 hover:text-[#DC2626]"
                }`}
              >
                {f}
                {f !== "All" && (
                  <span className={`ml-1.5 ${activeFilter === f ? "text-white/70" : "text-gray-300"}`}>
                    {projects.filter(p => p.badge === f).length}
                  </span>
                )}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-3">
              {Object.entries(badgeMeta).map(([key, m]) => (
                <div key={key} className="hidden sm:flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: m.dot }} />
                  <span className="text-[10.5px] text-gray-400 font-medium">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((project, i) => {
              const meta = badgeMeta[project.badge] ?? badgeMeta.Personal;
              const slug = getProjectSlug(project.title);
              return (
                <TiltCard key={project.title}>
                  <div
                    id={`project-${slug}`}
                    className="group relative flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#DC2626]/20 transition-colors duration-300"
                  >
                    {/* Gradient top bar */}
                    <div className={`h-[3px] w-full bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5">
                      {/* Icon + badge row */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-sm`}>
                          <ProjectIcon type={project.iconType} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${meta.bg} ${meta.text} ${meta.border}`}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: meta.dot }} />
                            {project.badge}
                          </span>
                          <span className="text-[10px] font-mono text-gray-300 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[15px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#DC2626] transition-colors duration-200">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-[12.5px] leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-gray-50 border border-gray-200 text-gray-500 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Footer action */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#DC2626] hover:text-[#B91C1C] transition-colors duration-200"
                          >
                            View Live
                            <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <span className="text-[12px] text-gray-300 font-medium italic">Private Project</span>
                        )}
                        <div className={`h-[2px] rounded-full bg-gradient-to-r ${project.gradient} w-0 group-hover:w-10 transition-all duration-500`} />
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${project.gradient} opacity-60`} />
                  </div>
                </TiltCard>
              );
            })}
          </div>

          {/* ── GitHub CTA ── */}
          <div className="mt-14 flex justify-center">
            <a
              href="https://github.com/rishi200201"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-950 text-white text-[13px] font-bold hover:bg-gray-800 transition-colors duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View All Projects on GitHub
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
