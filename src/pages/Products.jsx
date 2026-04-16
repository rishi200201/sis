import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { products } from "../data/projects";

const FILTERS = ["All", "Best Seller", "Health Pick", "Classic", "Signature"];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const visible =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.badge === activeFilter);

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
            <div className="text-5xl mb-6">🌶️</div>
            <h1
              className="font-black text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontFamily: "'Playfair Display', serif" }}
            >
              Our Spice Podis
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
              Each podi is crafted fresh, in small batches, with pure ingredients and traditional recipes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  activeFilter === f
                    ? { backgroundColor: "#6B3E2E", color: "#F5E9DC" }
                    : { backgroundColor: "#fff", color: "#6B3E2E", border: "1px solid rgba(107,62,46,0.25)" }
                }
              >
                {f}
              </button>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visible.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {visible.length === 0 && (
            <div className="text-center py-20 text-gray-400">No products found.</div>
          )}
        </div>
      </section>

      {/* ── Order Info Banner ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#EDD9C0" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 sm:p-12 text-center"
            style={{ backgroundColor: "#fff", boxShadow: "0 8px 40px rgba(107,62,46,0.1)", border: "1px solid rgba(212,163,115,0.3)" }}
          >
            <div className="text-5xl mb-4">📦</div>
            <h2
              className="font-black mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}
            >
              How to Order
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-8 text-left">
              {[
                { step: "1", title: "Pick Your Podi", desc: "Browse our range and click \"Order Now\" on your favourite product." },
                { step: "2", title: "WhatsApp Us", desc: "You'll be redirected to WhatsApp with a pre-filled message. Just send it!" },
                { step: "3", title: "Receive Fresh", desc: "We confirm, prepare fresh, and deliver to your doorstep." },
              ].map((s) => (
                <div key={s.step} className="flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white"
                    style={{ backgroundColor: "#6B3E2E" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-bold" style={{ color: "#2C1A0E" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B5040" }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/919840929841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-2xl font-bold transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <FaWhatsapp className="w-5 h-5" />
              Start Your Order
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Products;
