import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/reviews";

const Reviews = () => {
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

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
              <FaStar className="w-10 h-10" style={{ color: "#D4A373" }} />
            </div>
            <h1
              className="font-black text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontFamily: "'Playfair Display', serif" }}
            >
              Customer Reviews
            </h1>
            <p className="text-lg mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              Real stories from real families who love our homemade podis.
            </p>
            {/* Rating summary */}
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
              style={{ backgroundColor: "rgba(212,163,115,0.2)", border: "1px solid rgba(212,163,115,0.3)" }}
            >
              <div className="text-4xl font-black text-white">{avgRating}</div>
              <div className="text-left">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" style={{ color: "#D4A373" }} />
                  ))}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {reviews.length} verified reviews
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Reviews Grid ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Leave a review CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#EDD9C0" }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(107,62,46,0.1)" }}>
              <FaQuoteLeft className="w-7 h-7" style={{ color: "#6B3E2E" }} />
            </div>
            <h2
              className="font-black mb-3"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}
            >
              Loved Our Podis?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#6B5040" }}>
              Share your experience with us on WhatsApp and let us know which podi is your favourite!
            </p>
            <a
              href="https://wa.me/919840929841?text=Hi%20Sivakami!%20I'd%20like%20to%20share%20my%20feedback%20about%20your%20podis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#6B3E2E", color: "#F5E9DC" }}
            >
              Share Your Feedback
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
