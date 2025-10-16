import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Iqlogo from '../../../assets/img/logo png.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/courses", label: "Courses" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: scrolled ? "8px" : "0",
          left: scrolled ? "16px" : "0",
          right: scrolled ? "16px" : "0",
          zIndex: 1000,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderRadius: scrolled ? "16px" : "0",
        }}
      >
        <div
          style={{
            background: scrolled 
              ? "rgba(255, 255, 255, 0.85)" 
              : "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: scrolled 
              ? "0 8px 32px rgba(0, 0, 0, 0.08)" 
              : "0 2px 12px rgba(0, 0, 0, 0.04)",
            borderRadius: scrolled ? "16px" : "0",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "64px",
              }}
            >
              {/* Logo */}
              <Link
                to="/"
                className="logo-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  position: "relative",
                  zIndex: 10,
                  outline: "none",
                }}
              >
                <div className="logo-wrapper">
                  <img
                    src={Iqlogo}
                    alt="IQ Learning"
                    style={{
                      marginTop:"20px",
                      height: "100px",
                      width: "auto",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      zIndex: 2,
                    }}
                  />
                  <div className="logo-glow" />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div
                className="desktop-nav"
                style={{
                  display: "none",
                  alignItems: "center",
                  gap: "32px",
                  marginLeft: "auto",
                  marginRight: "32px",
                }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="nav-link-item"
                    style={{
                      position: "relative",
                      padding: "8px 4px",
                      fontSize: "17px",
                      fontWeight: "500",
                      color: "#1f2937",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      outline: "none",
                      border: "none",
                      background: "transparent",
                    }}
                    data-active={location.pathname === link.path}
                  >
                    {link.label}
                    <span className="nav-link-underline" />
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div
                className="desktop-cta"
                style={{
                  display: "none",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://wa.me/919544243435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 28px",
                    background: "linear-gradient(135deg, #4B86C8 0%, #233968 100%)",
                    color: "white",
                    fontSize: "17px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    textDecoration: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 20px rgba(75, 134, 200, 0.4)",
                    position: "relative",
                    overflow: "hidden",
                    outline: "none",
                  }}
                >
                  <span className="cta-shine" />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span style={{ position: "relative", zIndex: 1 }}>Join Now</span>
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="mobile-toggle"
                style={{
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  border: "none",
                  background: isOpen ? "#f3f4f6" : "transparent",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <span
                    style={{
                      display: "block",
                      width: "20px",
                      height: "2px",
                      background: "#4B86C8",
                      borderRadius: "2px",
                      transition: "all 0.3s ease",
                      transform: isOpen ? "rotate(45deg) translateY(7px)" : "none",
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "20px",
                      height: "2px",
                      background: "#1f2937",
                      borderRadius: "2px",
                      transition: "all 0.3s ease",
                      opacity: isOpen ? "0" : "1",
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "20px",
                      height: "2px",
                      background: "#1f2937",
                      borderRadius: "2px",
                      transition: "all 0.3s ease",
                      transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none",
                    }}
                  />
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className="mobile-menu"
              style={{
                display: "none",
                maxHeight: isOpen ? "500px" : "0",
                opacity: isOpen ? "1" : "0",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                background: "white",
              }}
            >
              <div style={{ padding: "16px 0 24px" }}>
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link"
                    style={{
                      display: "block",
                      padding: "14px 16px",
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#374151",
                      textDecoration: "none",
                      borderRadius: "12px",
                      marginBottom: "6px",
                      background: "white",
                      transition: "all 0.3s ease",
                      transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                      opacity: isOpen ? "1" : "0",
                      transitionDelay: isOpen ? `${idx * 0.05}s` : "0s",
                      outline: "none",
                      border: "none",
                    }}
                    data-active={location.pathname === link.path}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/919544243435"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "16px",
                    padding: "14px 24px",
                    background: "linear-gradient(135deg, #4B86C8 0%, #233968 100%)",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "600",
                    textDecoration: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(75, 134, 200, 0.4)",
                    transition: "all 0.3s ease",
                    transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                    opacity: isOpen ? "1" : "0",
                    transitionDelay: isOpen ? "0.2s" : "0s",
                    outline: "none",
                    border: "none",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919544243435"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 999,
          outline: "none",
        }}
      >
        <div style={{ position: "relative" }}>
          <div className="whatsapp-pulse" />
          <div
            className="whatsapp-btn"
            style={{
              position: "relative",
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(37, 211, 102, 0.4)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div
            className="whatsapp-tooltip"
            style={{
              position: "absolute",
              right: "calc(100% + 16px)",
              top: "50%",
              transform: "translateY(-50%) translateX(10px)",
              padding: "10px 18px",
              background: "#1f2937",
              color: "white",
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "10px",
              whiteSpace: "nowrap",
              opacity: "0",
              pointerEvents: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            Need help? Chat with us!
            <div
              style={{
                position: "absolute",
                right: "-6px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "0",
                height: "0",
                borderStyle: "solid",
                borderWidth: "6px 0 6px 6px",
                borderColor: "transparent transparent transparent #1f2937",
              }}
            />
          </div>
        </div>
      </a>

      <style>{`
        /* Remove all focus outlines and borders */
        *, *:focus, *:active {
          outline: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        
        a, button, input, select, textarea {
          outline: none !important;
        }

        a:focus, button:focus, a:active, button:active {
          outline: none !important;
          box-shadow: none !important;
        }

        /* Logo animations */
        .logo-wrapper {
          position: relative;
          display: inline-block;
        }

        .logo-glow {
          position: absolute;
          inset: -8px;
          background: radial-gradient(circle, rgba(75, 134, 200, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
          animation: logo-pulse 3s ease-in-out infinite;
        }

        @keyframes logo-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }

        .logo-link:hover .logo-glow {
          opacity: 1;
          animation: logo-pulse 1.5s ease-in-out infinite;
        }

        .logo-link:hover img {
          transform: scale(1.08) rotate(2deg);
          filter: drop-shadow(0 4px 12px rgba(75, 134, 200, 0.5));
        }

        /* Nav links gradient text on hover and active */
        .nav-link-item {
          background: transparent !important;
        }

        .nav-link-item:hover,
        .nav-link-item[data-active="true"] {
          background: linear-gradient(135deg, #4B86C8 0%, #233968 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }

        .nav-link-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #4B86C8 0%, #233968 100%);
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link-item:hover .nav-link-underline,
        .nav-link-item[data-active="true"] .nav-link-underline {
          width: 100%;
        }

        /* Mobile nav links */
        .mobile-nav-link:hover,
        .mobile-nav-link[data-active="true"] {
          background: white !important;
          background: linear-gradient(135deg, #4B86C8 0%, #233968 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }

        /* CTA button shine effect */
        .cta-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .cta-btn:hover .cta-shine {
          left: 100%;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(75, 134, 200, 0.6) !important;
          background: linear-gradient(135deg, #3a6ba8 0%, #1a2b4f 100%) !important;
        }

        .cta-btn:active {
          transform: translateY(-1px);
        }

        /* Mobile toggle hover */
        .mobile-toggle:hover {
          background: rgba(75, 134, 200, 0.1) !important;
        }

        /* WhatsApp animations */
        .whatsapp-pulse {
          position: absolute;
          inset: -2px;
          background: #25D366;
          border-radius: 50%;
          animation: pulse-effect 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          opacity: 0.6;
        }

        @keyframes pulse-effect {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        .whatsapp-btn:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 40px rgba(37, 211, 102, 0.6) !important;
        }

        .whatsapp-float:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        .whatsapp-float:hover .whatsapp-pulse {
          animation: pulse-effect 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Responsive */
        @media (min-width: 1024px) {
          .desktop-nav,
          .desktop-cta {
            display: flex !important;
          }
        }

        @media (max-width: 1023px) {
          .mobile-toggle,
          .mobile-menu {
            display: block !important;
          }
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 20px !important;
            right: 20px !important;
          }
          .whatsapp-btn {
            width: 56px !important;
            height: 56px !important;
          }
          .whatsapp-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;