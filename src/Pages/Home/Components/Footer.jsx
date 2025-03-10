import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Quick Link</h4>
            <a className="btn btn-link" href="/about">
              About Us
            </a>
            <a className="btn btn-link" href="/contact">
              Contact Us
            </a>
            <a className="btn btn-link" href="/">
              Privacy Policy
            </a>
            <a className="btn btn-link" href="/">
              Terms & Condition
            </a>
            <a className="btn btn-link" href="/">
              FAQs & Help
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>Kozhikode
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+91 9544243435
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>iqacademyedu@gmail.com
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social"
                href="https://twitter.com"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.facebook.com/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.youtube.com/"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.instagram.com/iq.education.hub?igsh=MXR0MGRtdjdydWRsNw=="
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Connect with Us</h4>
            <p>Stay connected with us for updates and support.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
                onClick={() =>
                  (window.location.href = "https://wa.me/919544243435")
                }
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                onClick={() =>
                  (window.location.href = "https://wa.me/919544243435")
                }
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <p className=" ">IQ Edu ,All Right Reserved.</p>
              Developed By <p className=" ">Aione Spark Technologies</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
