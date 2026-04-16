import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiChat } from "react-icons/hi";

const WHATSAPP = "919840929841";
const DEFAULT_MSG = "Hi Sivakami! I'd like to know more about your homemade spice podis. 😊";

const WhatsAppFloat = () => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(DEFAULT_MSG)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-2 px-4 py-3 rounded-2xl text-sm font-medium shadow-lg max-w-[200px]"
            style={{ backgroundColor: "#2C1A0E", color: "#F5E9DC" }}
          >
            <div className="font-semibold mb-0.5">Chat with us!</div>
            <div className="text-xs opacity-70">We reply within minutes</div>
            <div
              className="absolute right-[-6px] bottom-4 w-3 h-3 rotate-45"
              style={{ backgroundColor: "#2C1A0E" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
        style={{
          backgroundColor: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;
