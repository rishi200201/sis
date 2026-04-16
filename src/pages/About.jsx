import { motion } from "framer-motion";
import { HiHeart, HiShieldCheck, HiArrowRight } from "react-icons/hi";
import { GiMortar, GiMasonJar } from "react-icons/gi";
import { Link } from "react-router-dom";

const values = [
  {
    icon: <HiHeart className="w-7 h-7" />,
    title: "Homemade with Care",
    desc: "Every product is made with the same love and responsibility we apply to cooking for our own family.",
  },
  {
    icon: <HiShieldCheck className="w-7 h-7" />,
    title: "No Unnecessary Additives",
    desc: "Absolutely no artificial additives or preservatives. Only naturally clean, pure ingredients in every pack.",
  },
  {
    icon: <GiMortar className="w-7 h-7" />,
    title: "Traditional Methods",
    desc: "We use time-honoured preparation methods — with modern awareness of health and nutrition needs.",
  },
  {
    icon: <GiMasonJar className="w-7 h-7" />,
    title: "Fresh Small Batches",
    desc: "We prepare in small, controlled batches to ensure peak freshness and quality in every product that leaves our kitchen.",
  },
];

const timeline = [
  { year: "The Challenge", title: "A real everyday problem", desc: "Like many modern families, we found it difficult to balance work, home, and the responsibility of giving our children nutritious food. Limited time made healthy meal preparation a daily struggle." },
  { year: "The Realisation", title: "Healthy food, without resistance", desc: "Convincing children to eat healthy was never easy. We wanted to create food that could blend nutrition effortlessly into everyday meals — so children and adults would consume healthy ingredients without resistance." },
  { year: "The Beginning", title: "Multi-Seed Health Podi", desc: "This thought became the foundation of our first product — the Multi-Seed Health Podi. A nutritious blend that could be simply mixed with rice, dosa, or idli — easy for the whole family." },
  { year: "Today", title: "Serving 500+ families", desc: "What started as a solution for our own family became something we wanted to share. Today, hundreds of families enjoy our products — bringing wholesome nutrition to modern tables." },
];

const About = () => {
  return (
    <main className="pt-16" style={{ backgroundColor: "#F5E9DC" }}>

      {/* ── Hero ── */}
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #6B3E2E 0%, #4A2518 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(212,163,115,0.2)", border: "1px solid rgba(212,163,115,0.3)" }}>
              <GiMasonJar className="w-10 h-10" style={{ color: "#D4A373" }} />
            </div>
            <h1
              className="font-black text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontFamily: "'Playfair Display', serif" }}
            >
              Our Story
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
              Born from a real family need. Crafted with love. Delivered fresh to your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: "#D4A373" }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6B3E2E" }}>Who We Are</span>
              </div>
              <h2
                className="font-black mb-6 leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}
              >
                Tradition on a Plate
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#6B5040" }}>
                <p>
                  Sivakami's Iyarkai Suvai — which means “Nature's Taste” in Tamil — was born from a real, everyday experience.
                </p>
                <p>
                  Like many modern families, we found it difficult to balance work, home, and the responsibility of giving our children nutritious food. Limited time made daily preparation of healthy meals challenging. At the same time, convincing children to eat healthy was never easy.
                </p>
                <p>
                  This led us to create food products that could blend nutrition effortlessly into everyday meals — so children and adults could consume healthy ingredients without resistance. Our aim is to help families include wholesome nutrition naturally in their daily lives. Every product reflects care, tradition, and conscious living.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="rounded-3xl p-10 text-center relative overflow-hidden min-h-[380px] flex flex-col items-center justify-center"
                style={{ background: "linear-gradient(145deg, #6B3E2E, #8B5E52)" }}
              >
                <div className="text-7xl mb-6">🌶️🍃🫙</div>
                <p
                  className="text-2xl font-black text-white leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;Our products help<br />families eat well,<br />every single day.&rdquo;
                </p>
                <p className="text-sm mt-4" style={{ color: "rgba(212,163,115,0.8)" }}>— Sivakami's Iyarkai Suvai</p>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: "#D4A373" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#EDD9C0" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="font-black leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}
            >
              How It All Began
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ backgroundColor: "rgba(107,62,46,0.2)" }} />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-8 pl-16"
                >
                  <div
                    className="absolute left-3.5 top-1 w-5 h-5 rounded-full border-2 border-white"
                    style={{ backgroundColor: "#6B3E2E" }}
                  />
                  <div
                    className="flex-1 p-6 rounded-2xl"
                    style={{ backgroundColor: "#fff", boxShadow: "0 2px 16px rgba(107,62,46,0.07)", border: "1px solid rgba(212,163,115,0.2)" }}
                  >
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#D4A373" }}>
                      {item.year}
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#2C1A0E" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B5040" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5E9DC" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="font-black leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}
            >
              Our Promise
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: "#fff", boxShadow: "0 4px 20px rgba(107,62,46,0.08)", border: "1px solid rgba(212,163,115,0.2)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#F5E9DC", color: "#6B3E2E" }}
                >
                  {v.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#2C1A0E" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B5040" }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#6B3E2E", color: "#F5E9DC" }}
            >
              Shop Our Products <HiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
