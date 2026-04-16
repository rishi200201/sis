import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const ReviewCard = ({ review, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col p-6 rounded-2xl"
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 4px 24px rgba(107,62,46,0.08)",
        border: "1px solid rgba(212,163,115,0.2)",
      }}
    >
      {/* Quote icon */}
      <FiMessageSquare
        className="absolute top-5 right-5 w-8 h-8 opacity-10"
        style={{ color: "#6B3E2E" }}
      />

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar key={i} className="w-4 h-4" style={{ color: "#D4A373" }} />
        ))}
        {[...Array(5 - review.rating)].map((_, i) => (
          <FaStar key={`e-${i}`} className="w-4 h-4 opacity-20" style={{ color: "#D4A373" }} />
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm leading-relaxed flex-1 mb-5 italic" style={{ color: "#4A3B2E" }}>
        &ldquo;{review.review}&rdquo;
      </p>

      {/* Product tag */}
      <div
        className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
        style={{ backgroundColor: "#F5E9DC", color: "#6B3E2E" }}
      >
        <span>★</span>
        {review.product}
      </div>

      {/* Reviewer */}
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: "1px solid rgba(212,163,115,0.2)" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: "#6B3E2E" }}
        >
          {review.avatar}
        </div>
        <div>
          <div className="font-semibold text-sm" style={{ color: "#2C1A0E" }}>{review.name}</div>
          <div className="text-xs" style={{ color: "#9CA3AF" }}>
            {review.location} · {review.date}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
