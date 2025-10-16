import React, { useState } from "react";
import logo from '../../../assets/img/logo-white.png'

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    window.location.href = "https://wa.me/919544243435";
  };

  return (
    <footer className="bg-dark text-light mt-5 pt-5">
      {/* Main Footer Content */}
      <div className="container py-4 py-md-5">
        <div className="row g-4 g-md-5">
          {/* Brand Section */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="mb-3">
              <img 
                src={logo}
                alt="IQ Edu Logo" 
                className="img-fluid"
                style={{ 
                  maxWidth: '160px',
                  height: 'auto',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
            <p className="mb-4 pe-lg-3" style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              Empowering minds through quality education and innovative learning experiences.
            </p>
            <div className="d-flex gap-2 flex-wrap">
              <a
                href="https://twitter.com"
                className="btn btn-outline-light btn-social rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: '42px', 
                  height: '42px',
                  transition: 'all 0.3s ease',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1CZV6RxUTk/"
                className="btn btn-outline-light btn-social rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: '42px', 
                  height: '42px',
                  transition: 'all 0.3s ease',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://youtube.com/@iqueeducationhub?si=mdaZh4PpAwDOOZa3"
                className="btn btn-outline-light btn-social rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: '42px', 
                  height: '42px',
                  transition: 'all 0.3s ease',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/iq.education.hub?igsh=MXR0MGRtdjdydWRsNw=="
                className="btn btn-outline-light btn-social rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: '42px', 
                  height: '42px',
                  transition: 'all 0.3s ease',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="text-white mb-3 mb-md-4 fw-semibold">Quick Links</h4>
            <div className="d-flex flex-column gap-2">
              <a
                href="/about"
                className="text-light text-decoration-none d-inline-flex align-items-center py-1"
                style={{ 
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '8px'}
                onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '0'}
              >
                <i className="fas fa-angle-right me-2"></i>About Us
              </a>
              <a
                href="/contact"
                className="text-light text-decoration-none d-inline-flex align-items-center py-1"
                style={{ 
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '8px'}
                onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '0'}
              >
                <i className="fas fa-angle-right me-2"></i>Contact Us
              </a>
              <a
                href="/"
                className="text-light text-decoration-none d-inline-flex align-items-center py-1"
                style={{ 
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '8px'}
                onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '0'}
              >
                <i className="fas fa-angle-right me-2"></i>Privacy Policy
              </a>
              <a
                href="/"
                className="text-light text-decoration-none d-inline-flex align-items-center py-1"
                style={{ 
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '8px'}
                onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '0'}
              >
                <i className="fas fa-angle-right me-2"></i>Terms & Conditions
              </a>
              <a
                href="/"
                className="text-light text-decoration-none d-inline-flex align-items-center py-1"
                style={{ 
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '8px'}
                onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '0'}
              >
                <i className="fas fa-angle-right me-2"></i>FAQs & Help
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="text-white mb-3 mb-md-4 fw-semibold">Contact</h4>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-start">
                <i className="fa fa-map-marker-alt me-3 mt-1" style={{ fontSize: '1rem' }}></i>
                <span style={{ fontSize: '0.95rem' }}>ANAPPARAKKAL SHOPPING COMPLEX, 
ELETTIL VATTOLI  673572 CALICUT, KERALA, INDIA</span>
              </div>
              <div className="d-flex align-items-start">
                <i className="fa fa-phone-alt me-3 mt-1" style={{ fontSize: '1rem' }}></i>
                <a 
                  href="tel:+919544243435" 
                  className="text-light text-decoration-none"
                  style={{ 
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0d6efd'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  +91 9544243435
                </a>
              </div>
              <div className="d-flex align-items-start">
                <i className="fa fa-envelope me-3 mt-1" style={{ fontSize: '1rem' }}></i>
                <a 
                  href="mailto:iqacademyedu@gmail.com" 
                  className="text-light text-decoration-none"
                  style={{ 
                    fontSize: '0.95rem',
                    wordBreak: 'break-word',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0d6efd'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  ique.eduhub@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="text-white mb-3 mb-md-4 fw-semibold">Connect with Us</h4>
            <p className="mb-3" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              Stay connected with us for updates and support.
            </p>
            <div className="position-relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control border-0 w-100 py-3 ps-4 pe-5 rounded"
                placeholder="Your email"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontSize: '0.9rem'
                }}
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2 rounded fw-semibold"
                style={{ fontSize: '0.85rem',color:"white",backgroundColor:"#4B86C8" }}
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-fluid px-3 px-md-4">
        <div className="container">
          <div className="border-top pt-3 pt-md-4 pb-3">
            <div className="row g-3">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                  &copy; {new Date().getFullYear()} <span className="fw-semibold">IQ Education Hub</span>, All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                  Developed By <span className="fw-semibold">Aione Spark TechHive LLP</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;