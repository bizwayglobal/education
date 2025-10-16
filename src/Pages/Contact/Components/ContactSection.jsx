import React from 'react';

const Contact = () => {
    const whatsappMessage = () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        const whatsappUrl = `https://wa.me/919544243435?text=Hello, my name is ${name}. My email is ${email}. Subject: ${subject}. Message: ${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <div style={{ 
          display: "inline-block", 
          background: "linear-gradient(135deg, #4B86C8 0%, #5b9bd5 100%)",
          color: "white",
          padding: "8px 24px",
          borderRadius: "50px",
          fontSize: "0.875rem",
          fontWeight: "600",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          marginBottom: "1rem",
          boxShadow: "0 4px 12px rgba(75, 134, 200, 0.3)"
        }}>
          Contact Us
        </div>
                    <h1 className="mb-5" style={{ color: '#233968' }}>We're Here to Help!</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h5 style={{ color: '#233968' }}>Reach Out to Us</h5>
                        <p className="mb-4">
                            Have a question or need assistance? Feel free to contact us anytime. We're happy to help and will get back to you as soon as possible.
                        </p>
                        <div className="d-flex align-items-center mb-3">
                            <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "50px", height: "50px", backgroundColor: '#4B86C8', borderRadius: '8px' }}>
                                <i className="fa fa-map-marker-alt text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h6 style={{ color: '#233968' }}>IQUE EDUCATION HUB SKILVERSITY</h6>
                                <p className="mb-0">Calicut, Kerala</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "50px", height: "50px", backgroundColor: '#4B86C8', borderRadius: '8px' }}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h6 style={{ color: '#233968' }}>Call Us</h6>
                                <p className="mb-0">+91 9544243435</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "50px", height: "50px", backgroundColor: '#4B86C8', borderRadius: '8px' }}>
                                <i className="fa fa-envelope-open text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h6 style={{ color: '#233968' }}>Email</h6>
                                <p className="mb-0">ique.eduhub@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <iframe
                            className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.385529689762!2d75.78258417487216!3d11.258753048942225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b1d6b4eb2f3%3A0x51e995a931b625e5!2sCalicut%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
                            frameBorder="0"
                            style={{ minHeight: "300px", border: "3px solid #4B86C8", boxShadow: '0 4px 6px rgba(75, 134, 200, 0.15)' }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            title="Google Maps"
                        ></iframe>
                    </div>
                    <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                        <form onSubmit={(e) => { e.preventDefault(); whatsappMessage(); }}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="name" 
                                            placeholder="Your Name" 
                                            onClick={() => window.open("https://wa.me/919544243435", "_blank")}
                                            style={{ borderColor: '#4B86C8' }}
                                        />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email" 
                                            placeholder="Your Email" 
                                            onClick={() => window.open("https://wa.me/919544243435", "_blank")}
                                            style={{ borderColor: '#4B86C8' }}
                                        />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="subject" 
                                            placeholder="Subject" 
                                            onClick={() => window.open("https://wa.me/919544243435", "_blank")}
                                            style={{ borderColor: '#4B86C8' }}
                                        />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea 
                                            className="form-control" 
                                            placeholder="Leave a message here" 
                                            id="message" 
                                            style={{ height: "150px", borderColor: '#4B86C8' }} 
                                            onClick={() => window.open("https://wa.me/919544243435", "_blank")}
                                        ></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button 
                                        className="btn w-100 py-3 text-white" 
                                        type="submit"
                                        style={{ 
                                            backgroundColor: '#4B86C8',
                                            border: 'none',
                                            transition: 'all 0.3s ease',
                                            fontWeight: '600',
                                            borderRadius: '8px'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#233968';
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 4px 12px rgba(75, 134, 200, 0.3)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#4B86C8';
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    >
                                        Send via WhatsApp
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .form-control:focus {
                    border-color: #4B86C8;
                    box-shadow: 0 0 0 0.2rem rgba(75, 134, 200, 0.25);
                }
            `}</style>
        </div>
    );
}

export default Contact;