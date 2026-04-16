import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiPhone, HiLocationMarker } from "react-icons/hi";

const WHATSAPP = "919840929841";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2C1A0E" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0" style={{ backgroundColor: "#F5E9DC" }}>
                <img
                  src="/images/logo-full.jpeg"
                  alt="Sivakami's Iyarkai Suvai"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-xl text-white">Sivakami's</div>
                <div className="text-sm font-medium" style={{ color: "#D4A373" }}>Iyarkai Suvai</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Homemade food products crafted with care, purity, and purpose. Making healthy eating simple, tasty, and practical for children and adults — rooted in Indian culinary tradition.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "#25D366" }}
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/sivakami_iyarkai.suvai?igsh=MTN0MTEyNTl4OHh5Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "#D4A373" }}
              >
                <FaInstagram className="w-5 h-5" style={{ color: "#2C1A0E" }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "#6B3E2E" }}
              >
                <FaFacebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase" style={{ color: "#D4A373" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Products", path: "/products" },
                { name: "Reviews", path: "/reviews" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full transition-all duration-200 group-hover:w-2" style={{ backgroundColor: "#D4A373" }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase" style={{ color: "#D4A373" }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <HiLocationMarker className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#D4A373" }} />
                <span>No 190, 164th Street, 6th Block,<br />Muthamizh Nagar, Kodungaiyur,<br />Chennai – 600118</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <HiPhone className="w-4 h-4 flex-shrink-0" style={{ color: "#D4A373" }} />
                <a href="tel:+919840929841" className="hover:text-white transition-colors">+91 98409 29841</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Sivakami's Iyarkai Suvai. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Where Tradition Meets Health</p>
          <p className="text-white/30 text-xs">Developed by Rishi Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
