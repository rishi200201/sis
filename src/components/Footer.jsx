import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const WHATSAPP = "919840929841";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2C1A0E" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#D4A373" }}>
                <img
                  src="/images/logo.jpeg"
                  alt="Sivakami Iyarkai Suvai logo"
                  className="w-10 h-10 rounded-lg object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-xl text-white">Sivakami</div>
                <div className="text-sm font-medium" style={{ color: "#D4A373" }}>Iyarkai Suvai</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Crafting authentic homemade spice podis with pure ingredients and traditional recipes passed down through generations. Every jar carries the warmth of home.
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
                <span>Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <HiPhone className="w-4 h-4 flex-shrink-0" style={{ color: "#D4A373" }} />
                <a href="tel:+919840929841" className="hover:text-white transition-colors">+91 98409 29841</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <HiMail className="w-4 h-4 flex-shrink-0" style={{ color: "#D4A373" }} />
                <a href="mailto:sivakami@example.com" className="hover:text-white transition-colors">sivakami@example.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Sivakami Iyarkai Suvai. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Made with ❤️ for pure, homemade taste</p>
          <p className="text-white/30 text-xs">Developed by Rishi Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
