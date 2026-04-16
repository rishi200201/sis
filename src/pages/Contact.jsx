import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";

const WHATSAPP = "919840929841";
const EMAIL = "sivakami@example.com";
const PHONE = "+91 98409 29841";
const ADDRESS = "Chennai, Tamil Nadu, India";

const PROJECT_TYPES = [
  "Classic Gun Powder",
  "Multi Seed Health Podi",
  "Idli Podi",
  "Curry Leaf Podi",
  "Mixed Combo",
  "Other / Custom",
];

function buildMsg({ name, email, product, qty, message }) {
  return encodeURIComponent(
    `Hi Sivakami! 👋\n\n` +
    `*Name:* ${name}\n*Email:* ${email}\n*Product Interest:* ${product}\n*Quantity:* ${qty}\n` +
    `*Message:*\n${message}\n\nLooking forward to hearing from you!`
  );
}

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", product: "", qty: "1", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your full name";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email";
    if (!form.product) e.product = "Please select a product";
    if (!form.message.trim()) e.message = "Please add a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(`https://wa.me/${WHATSAPP}?text=${buildMsg(form)}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    setForm({ name: "", email: "", product: "", qty: "1", message: "" });
  };

  const inputBase = "w-full rounded-xl px-4 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2";
  const inputStyle = { backgroundColor: "#F5E9DC", border: "1.5px solid rgba(107,62,46,0.2)", color: "#2C1A0E" };

  const Err = ({ k }) =>
    errors[k] ? (
      <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
        <span>⚠</span> {errors[k]}
      </p>
    ) : null;

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
            <div className="text-5xl mb-6">📞</div>
            <h1
              className="font-black text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
              Ready to order or have questions? We're just a message away. We reply within minutes!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[380px_1fr] gap-10">

            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              {/* Contact details card */}
              <div
                className="p-7 rounded-2xl"
                style={{ backgroundColor: "#fff", boxShadow: "0 4px 24px rgba(107,62,46,0.08)", border: "1px solid rgba(212,163,115,0.2)" }}
              >
                <h2 className="font-bold text-lg mb-6" style={{ color: "#2C1A0E" }}>Contact Details</h2>
                <div className="space-y-5">
                  {[
                    { icon: <HiLocationMarker className="w-5 h-5" />, label: "Address", value: ADDRESS, href: null },
                    { icon: <HiPhone className="w-5 h-5" />, label: "Phone", value: PHONE, href: `tel:${PHONE}` },
                    { icon: <HiMail className="w-5 h-5" />, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                    { icon: <HiClock className="w-5 h-5" />, label: "Hours", value: "Mon – Sat · 9 AM – 7 PM", href: null },
                  ].map(({ icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#F5E9DC", color: "#6B3E2E" }}
                      >
                        {icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "#D4A373" }}>{label}</div>
                        {href ? (
                          <a href={href} className="text-sm font-medium hover:underline" style={{ color: "#2C1A0E" }}>{value}</a>
                        ) : (
                          <div className="text-sm font-medium" style={{ color: "#2C1A0E" }}>{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp direct CTA */}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-2xl transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
              >
                <FaWhatsapp className="w-8 h-8 text-white flex-shrink-0" />
                <div>
                  <div className="text-white font-bold text-base">Order on WhatsApp</div>
                  <div className="text-white/80 text-xs">We reply within minutes</div>
                </div>
              </a>

              {/* Map placeholder */}
              <div
                className="rounded-2xl overflow-hidden h-48 flex items-center justify-center text-center p-6"
                style={{ backgroundColor: "#EDD9C0", border: "1px solid rgba(212,163,115,0.3)" }}
              >
                <div>
                  <div className="text-4xl mb-2">📍</div>
                  <div className="text-sm font-semibold" style={{ color: "#6B3E2E" }}>Chennai, Tamil Nadu</div>
                  <div className="text-xs mt-1" style={{ color: "#9CA3AF" }}>Serving across India</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "#fff", boxShadow: "0 4px 24px rgba(107,62,46,0.08)", border: "1px solid rgba(212,163,115,0.2)" }}
              >
                <h2 className="font-bold text-xl mb-2" style={{ color: "#2C1A0E" }}>Send us a Message</h2>
                <p className="text-sm mb-8" style={{ color: "#6B5040" }}>
                  Fill out the form and we'll open WhatsApp with your details pre-filled — simple and fast!
                </p>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl text-sm font-semibold"
                    style={{ backgroundColor: "#F0FFF4", border: "1px solid #86efac", color: "#166534" }}
                  >
                    ✅ WhatsApp opened! We'll respond shortly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#6B5040" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={inputBase}
                        style={{ ...inputStyle, borderColor: errors.name ? "#ef4444" : "rgba(107,62,46,0.2)" }}
                      />
                      <Err k="name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#6B5040" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={inputBase}
                        style={{ ...inputStyle, borderColor: errors.email ? "#ef4444" : "rgba(107,62,46,0.2)" }}
                      />
                      <Err k="email" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#6B5040" }}>
                        Product Interest *
                      </label>
                      <select
                        value={form.product}
                        onChange={(e) => handleChange("product", e.target.value)}
                        className={inputBase}
                        style={{ ...inputStyle, borderColor: errors.product ? "#ef4444" : "rgba(107,62,46,0.2)" }}
                      >
                        <option value="">Select a product</option>
                        {PROJECT_TYPES.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      <Err k="product" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#6B5040" }}>
                        Quantity (jars)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        placeholder="1"
                        value={form.qty}
                        onChange={(e) => handleChange("qty", e.target.value)}
                        className={inputBase}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#6B5040" }}>
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your order, delivery address, or any questions..."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={inputBase + " resize-none"}
                      style={{ ...inputStyle, borderColor: errors.message ? "#ef4444" : "rgba(107,62,46,0.2)" }}
                    />
                    <Err k="message" />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                    style={{ backgroundColor: "#25D366", color: "#fff" }}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
