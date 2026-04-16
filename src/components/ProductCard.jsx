import { motion } from "framer-motion";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const WHATSAPP = "919840929841";

const ProductCard = ({ product, index = 0 }) => {
  const handleOrder = () => {
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(product.whatsappMsg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 4px 24px rgba(107,62,46,0.10)",
        border: "1px solid rgba(212,163,115,0.2)",
      }}
    >
      {/* Badge */}
      {product.badge && (
        <div
          className="absolute top-3 right-3 z-10 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
          style={{ backgroundColor: "#D4A373", color: "#2C1A0E" }}
        >
          <HiSparkles className="w-3 h-3" />
          {product.badge}
        </div>
      )}

      {/* Image / Gradient Area */}
      <div
        className={`relative h-48 flex items-center justify-center bg-gradient-to-br ${product.gradient} overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 0%, transparent 60%)"
        }} />
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <motion.span
            className="text-6xl select-none relative z-10 drop-shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {product.emoji}
          </motion.span>
        )}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "linear-gradient(to top, rgba(255,255,255,1), transparent)"
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-lg leading-tight" style={{ color: "#2C1A0E" }}>
            {product.name}
          </h3>
          <div className="flex items-center gap-0.5 flex-shrink-0">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-3 h-3" style={{ color: "#D4A373" }} />
            ))}
          </div>
        </div>

        <p className="text-xs font-semibold mb-3" style={{ color: "#D4A373" }}>
          {product.tagline} · {product.weight}
        </p>

        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#6B5040" }}>
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(212,163,115,0.2)" }}>
          <div>
            <span className="text-2xl font-black" style={{ color: "#6B3E2E" }}>
              {product.price}
            </span>
            <span className="text-xs ml-1" style={{ color: "#9CA3AF" }}>/ {product.weight}</span>
          </div>
          <button
            onClick={handleOrder}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-md"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            <FaWhatsapp className="w-4 h-4" />
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
