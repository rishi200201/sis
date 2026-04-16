import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

const WHATSAPP = "919840929841";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-lg"
            : "shadow-none"
        }`}
        style={{ backgroundColor: "#6B3E2E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "#D4A373" }}
              >
                <img
                  src="/images/logo.jpeg"
                  alt="Sivakami Iyarkai Suvai logo"
                  className="w-9 h-9 rounded-lg object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-sm leading-none">Sivakami</div>
                <div className="text-[10px] font-medium leading-none mt-0.5" style={{ color: "#D4A373" }}>
                  Iyarkai Suvai
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive ? "text-white" : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                        style={{ backgroundColor: "#D4A373" }}
                      />
                    )}
                  </Link>
                );
              })}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#D4A373", color: "#2C1A0E" }}
              >
                Order Now
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-16"
            style={{ backgroundColor: "#6B3E2E" }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-2 px-6">
              {NAV_LINKS.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="w-full"
                  >
                    <Link
                      to={link.path}
                      className={`block text-center py-4 text-2xl font-bold rounded-2xl transition-all duration-200 ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                      style={isActive ? { backgroundColor: "rgba(212,163,115,0.2)" } : {}}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center py-4 rounded-2xl text-xl font-bold transition-all duration-200"
                style={{ backgroundColor: "#D4A373", color: "#2C1A0E" }}
              >
                Order via WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
