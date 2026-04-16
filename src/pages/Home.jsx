import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import {
  HiArrowRight, HiSparkles, HiHeart, HiShieldCheck,
} from "react-icons/hi";
import { GiMortar } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import ProductCard from "../components/ProductCard";
import { products } from "../data/projects";

const WHATSAPP = "919840929841";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const whyItems = [
  {
    icon: <HiHeart className="w-7 h-7" />,
    title: "Made with Love",
    desc: "Every batch is prepared by hand with the care and patience of a home kitchen.",
  },
  {
    icon: <HiShieldCheck className="w-7 h-7" />,
    title: "Pure Ingredients",
    desc: "No preservatives, no artificial colours. Just nature's finest spices and grains.",
  },
  {
    icon: <GiMortar className="w-7 h-7" />,
    title: "Traditional Recipes",
    desc: "Ancestral recipes perfected over generations, bringing authentic flavour to your table.",
  },
  {
    icon: <MdDeliveryDining className="w-7 h-7" />,
    title: "Fresh Delivery",
    desc: "Freshly prepared and delivered to your doorstep — flavour sealed at its peak.",
  },
];

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-16"
        style={{
          background: "linear-gradient(135deg, #6B3E2E 0%, #4A2518 40%, #3A1A10 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#D4A373", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#D4A373", filter: "blur(60px)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left */}
            <div>
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
                style={{ backgroundColor: "rgba(212,163,115,0.2)", border: "1px solid rgba(212,163,115,0.4)", color: "#D4A373" }}
              >
                <HiSparkles className="w-4 h-4" />
                100% Natural · Homemade · Traditional
              </motion.div>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="font-black leading-tight text-white mb-4"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontFamily: "'Playfair Display', serif" }}
              >
                Taste the Tradition of{" "}
                <span style={{ color: "#D4A373" }}>Sivakami</span>{" "}
                Iyarkai Suvai
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-lg leading-relaxed mb-8 max-w-lg"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Authentic homemade spice podis crafted with pure ingredients and love. From our kitchen to your table — bringing the true flavours of Tamil Nadu.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: "#D4A373", color: "#2C1A0E" }}
                >
                  Shop Now
                  <HiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
                  style={{
                    border: "2px solid rgba(212,163,115,0.5)",
                    color: "#D4A373",
                  }}
                >
                  Contact Us
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: "#25D366", color: "#fff" }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Order via WhatsApp
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-8 mt-12 pt-8"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                {[
                  { num: "4+", label: "Signature Podis" },
                  { num: "500+", label: "Happy Families" },
                  { num: "100%", label: "Natural & Pure" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-black" style={{ color: "#D4A373" }}>{num}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — decorative jar card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div
                className="relative w-full max-w-sm aspect-square rounded-3xl flex flex-col items-center justify-center gap-4 overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, rgba(212,163,115,0.15), rgba(212,163,115,0.05))",
                  border: "1px solid rgba(212,163,115,0.25)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src="/images/product.jpeg"
                    alt="Sivakami Iyarkai Suvai products"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div
                  className="absolute inset-x-0 bottom-0 h-28"
                  style={{ background: "linear-gradient(to top, rgba(44,26,14,0.9), transparent)" }}
                />
                <div className="text-center relative z-10 mt-auto pb-4">
                  <div className="text-xl font-black text-white">Freshly Prepared</div>
                  <div className="text-sm mt-1" style={{ color: "#D4A373" }}>Every batch made with love</div>
                </div>
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: "#D4A373", color: "#2C1A0E" }}
                >
                  <HiSparkles className="w-3 h-3" /> No Preservatives
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  🌿 Pure Ingredients
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 30C1200 70 960 10 720 40C480 70 240 10 0 30L0 80Z" fill="#F5E9DC" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5E9DC" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="rounded-3xl p-10 flex flex-col items-center justify-center gap-4 min-h-[320px] relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #6B3E2E, #8B5E52)",
                }}
              >
                <div className="text-8xl">🌶️🫙🍃</div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white font-playfair">Pure. Natural. Homemade.</div>
                  <div className="text-sm mt-2 text-white/70">Traditional Tamil Nadu flavours</div>
                </div>
                <div
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20"
                  style={{ backgroundColor: "#D4A373" }}
                />
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: "#D4A373" }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6B3E2E" }}>
                  Our Story
                </span>
              </div>
              <h2
                className="font-black mb-4 leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}
              >
                Cooking from the Heart of Tamil Nadu
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#6B5040" }}>
                Sivakami Iyarkai Suvai was born from a simple belief — that the best food comes from clean ingredients and patient hands. Every spice we use is carefully sourced, every recipe perfected over years.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6B5040" }}>
                Our podis carry no artificial additives — just the pure, wholesome taste of tradition that you can feel in every bite.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-bold text-sm transition-all duration-200 hover:gap-3"
                style={{ color: "#6B3E2E" }}
              >
                Read Our Story <HiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#EDD9C0" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#D4A373" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6B3E2E" }}>
                Our Products
              </span>
              <div className="h-px w-8" style={{ backgroundColor: "#D4A373" }} />
            </div>
            <h2
              className="font-black leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}
            >
              Featured Spice Podis
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#6B5040" }}>
              Handcrafted in small batches to ensure maximum freshness and flavour in every jar.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#6B3E2E", color: "#F5E9DC" }}
            >
              View All Products
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5E9DC" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#D4A373" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6B3E2E" }}>
                Why Us
              </span>
              <div className="h-px w-8" style={{ backgroundColor: "#D4A373" }} />
            </div>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose Sivakami?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center p-6 rounded-2xl"
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 20px rgba(107,62,46,0.08)",
                  border: "1px solid rgba(212,163,115,0.2)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#F5E9DC", color: "#6B3E2E" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#2C1A0E" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B5040" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #6B3E2E 0%, #4A2518 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-5xl mb-6">🌶️</div>
            <h2
              className="font-black text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Experience Authentic Flavour?
            </h2>
            <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              Order your favourite podis today and get them delivered fresh to your doorstep.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#D4A373", color: "#2C1A0E" }}
              >
                Explore Products
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                <FaWhatsapp className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS PREVIEW ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5E9DC" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#D4A373" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6B3E2E" }}>
                Testimonials
              </span>
              <div className="h-px w-8" style={{ backgroundColor: "#D4A373" }} />
            </div>
            <h2 className="font-black leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}>
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" style={{ color: "#D4A373" }} />
              ))}
              <span className="ml-2 text-sm font-semibold" style={{ color: "#6B3E2E" }}>5.0 · 500+ Happy Families</span>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: "Priya L.", location: "Chennai", text: "The Idli Podi is absolutely divine! Reminds me of my grandmother's recipe.", avatar: "P" },
              { name: "Karthik R.", location: "Coimbatore", text: "Both the Gun Powder and Multi Seed Podi are exceptional quality!", avatar: "K" },
              { name: "Meenakshi S.", location: "Madurai", text: "The Curry Leaf Podi fragrance is heavenly. So authentic!", avatar: "M" },
            ].map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#fff", boxShadow: "0 4px 20px rgba(107,62,46,0.08)", border: "1px solid rgba(212,163,115,0.2)" }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <FaStar key={j} className="w-4 h-4" style={{ color: "#D4A373" }} />)}
                </div>
                <p className="text-sm italic mb-4" style={{ color: "#4A3B2E" }}>&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: "#6B3E2E" }}>{r.avatar}</div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#2C1A0E" }}>{r.name}</div>
                    <div className="text-xs" style={{ color: "#9CA3AF" }}>{r.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 font-bold text-sm transition-all hover:gap-3"
              style={{ color: "#6B3E2E" }}
            >
              Read All Reviews <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
