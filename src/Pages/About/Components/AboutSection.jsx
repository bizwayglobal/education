import React from "react";
import aboutimg from "../../../assets/img/abt.jpg";
import vision from "../../../assets/img/abt2.jpg";

const features = [
  "100+ Skill-Based Programs",
  "100% Practical Training",
  "Job-Guaranteed Courses",
  "Internship-to-Job Pathway",
  "Online & Offline Learning",
  "Academic & Professional Courses",
];

const beliefs = [
  {
    icon: "📚",
    title: "Knowledge + Skill",
    description: "Real success comes when knowledge meets practical skill.",
  },
  {
    icon: "🎯",
    title: "Real Opportunities",
    description: "Education should open doors, not just give certificates.",
  },
  {
    icon: "🌟",
    title: "Unleash Potential",
    description:
      "Every learner can grow into a leader, innovator, or entrepreneur.",
  },
];

const missionPoints = [
  {
    icon: "🎓",
    title: "Deliver Academic & Skill-Based Education",
    description:
      "From school tuition to professional diplomas and degrees, we merge traditional learning with hands-on training.",
  },
  {
    icon: "🚀",
    title: "Enable Entrepreneurship & Career Growth",
    description:
      "Through our Learn → Intern → Work → Grow system, students turn into confident professionals and future leaders.",
  },
  {
    icon: "💡",
    title: "Empower Society with Innovation",
    description:
      "We create self-reliant, creative youth who drive progress, reduce unemployment, and build a stronger workforce.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="container-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-grid">
            {/* Image Section */}
            <div className="hero-image-wrapper">
              <div className="image-container">
                <div className="image-overlay"></div>
                <img
                  src={aboutimg}
                  alt="IQUE Education Hub"
                  className="hero-image"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="hero-content">
              <div
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(135deg, #4B86C8 0%, #5b9bd5 100%)",
                  color: "white",
                  padding: "8px 24px",
                  borderRadius: "50px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  boxShadow: "0 4px 12px rgba(75, 134, 200, 0.3)",
                }}
              >
                About Us
              </div>
              <h1 className="main-title">IQUE Education Hub</h1>
              <h2 className="subtitle">Skilversity</h2>

              <div className="intro-text">
                <p className="highlight-text">
                  Degrees, diplomas, and certificates… yet no real job?
                </p>
                <p>
                  The issue isn't education, it's the lack of{" "}
                  <strong>real-world skills</strong>. Today's world moves fast.
                  Employers look for people who can perform, innovate, and
                  adapt.
                </p>
                <p>
                  That's why{" "}
                  <strong className="brand-name">IQUE Education Hub</strong>{" "}
                  built the <strong>Skilversity model</strong> — a new-age
                  university of skills designed to connect{" "}
                  <strong>talent → opportunity</strong>. Every learner grows
                  through our pathway:
                  <span className="pathway-text">
                    Student → Intern → Teacher → Mentor → Manager → CEO
                  </span>
                  .
                </p>
              </div>

              {/* Features Grid */}
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div className="feature-item" key={index}>
                    <svg
                      className="check-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="section-card vision-card">
          <div className="card-grid">
            <div className="card-image-wrapper">
              <img src={vision} alt="Vision" className="card-image" />
            </div>
            <div className="card-content">
              <span className="badge">Our Vision</span>
              <h3 className="card-title">
                Building a Globally Skilled, Future-Ready Generation
              </h3>
              <p>
                Academic degrees alone are not enough. The world now values
                practical skill, creativity, and adaptability.
                <strong className="brand-name"> IQUE Education Hub</strong>{" "}
                exists to
                <strong>
                  {" "}
                  bridge the gap between classroom learning and real-world work
                </strong>
                .
              </p>
              <div className="highlight-box">
                <div className="highlight-icon">🌍</div>
                <div>
                  <strong>Global Skilversity Model:</strong> Brings world-class
                  skill training to local learners, empowering students, job
                  seekers, and professionals to grow in both local industries
                  and global markets.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <span className="badge centered">Our Mission</span>
          <div className="mission-grid">
            {missionPoints.map((point, index) => (
              <div className="mission-card" key={index}>
                <div className="mission-icon">{point.icon}</div>
                <h4 className="mission-title">{point.title}</h4>
                <p className="mission-description">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Society Impact Section */}
        <div className="impact-section">
          <span className="badge centered white">
            For Society & This Generation
          </span>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-icon">✓</div>
              <h5>Reduces Unemployment</h5>
              <p>
                Equips learners with job-ready skills and placement
                opportunities.
              </p>
            </div>
            <div className="impact-item">
              <div className="impact-icon">✓</div>
              <h5>Empowers Communities</h5>
              <p>
                Delivers affordable, inclusive education to underprivileged
                learners.
              </p>
            </div>
            <div className="impact-item">
              <div className="impact-icon">✓</div>
              <h5>Builds the Future Workforce</h5>
              <p>
                Creates innovative, independent youth for both local and global
                industries.
              </p>
            </div>
          </div>
        </div>

        {/* Core Beliefs Section */}
        <div className="beliefs-section">
          <span className="badge centered">What We Believe</span>
          <div className="beliefs-grid">
            {beliefs.map((belief, index) => (
              <div className="belief-card" key={index}>
                <div className="belief-icon">{belief.icon}</div>
                <h4 className="belief-title">{belief.title}</h4>
                <p className="belief-description">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Flow Section */}
        <div className="career-section">
          <h3 className="career-title">Career & Placement Flow</h3>
          <p className="career-subtitle">
            Your Journey from Learning to Leadership
          </p>
          <div className="career-flow">
            {["Learn", "Intern", "Work", "Grow"].map((step, index) => (
              <React.Fragment key={index}>
                <div className="career-step">{step}</div>
                {index < 3 && <div className="career-arrow">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          padding: 3rem clamp(1rem, 5vw, 3rem);
          min-height: 100vh;
        }

        .container-content {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        /* Section Title */
        .section-title {
          position: relative;
          display: inline-block;
          text-transform: uppercase;
        }

        .section-title::before {
          position: absolute;
          content: "";
          width: calc(100% + 80px);
          height: 2px;
          top: 4px;
          left: -40px;
          background: #4B86C8;
          z-index: -1;
        }

        .section-title::after {
          position: absolute;
          content: "";
          width: calc(100% + 120px);
          height: 2px;
          bottom: 5px;
          left: -60px;
          background: #4B86C8;
          z-index: -1;
        }

        .section-title.text-start::before {
          width: calc(100% + 40px);
          left: 0;
        }

        .section-title.text-start::after {
          width: calc(100% + 60px);
          left: 0;
        }

        /* Badge */
        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #4B86C8 0%, #5b9bd5 100%);
          color: white;
          padding: clamp(0.4rem, 1vw, 0.5rem) clamp(1rem, 2vw, 1.5rem);
          border-radius: 50px;
          font-size: clamp(0.75rem, 1.5vw, 0.875rem);
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 1rem;
          box-shadow: 0 4px 12px rgba(75, 134, 200, 0.3);
        }

        .badge.centered {
          display: block;
          text-align: center;
          margin: 0 auto 2rem;
          width: fit-content;
        }

        .badge.white {
          background: white;
          color: #233968;
        }

        /* Hero Section */
        .hero-section {
          margin-bottom: clamp(2rem, 5vw, 4rem);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3rem);
          align-items: center;
        }

        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
        }

        .image-container {
          position: relative;
          border-radius: clamp(16px, 3vw, 24px);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(75, 134, 200, 0.25);
          transition: transform 0.6s ease;
        }

        @media (min-width: 768px) {
          .image-container {
            transform: perspective(1000px) rotateY(-5deg);
          }
          
          .image-container:hover {
            transform: perspective(1000px) rotateY(0deg) scale(1.02);
          }
        }

        .hero-image {
          width: 100%;
          height: clamp(250px, 50vw, 500px);
          object-fit: cover;
          display: block;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(75, 134, 200, 0.1) 0%, rgba(35, 57, 104, 0.1) 100%);
          z-index: 1;
        }

        .hero-content {
          padding: clamp(0.5rem, 2vw, 1rem);
        }

        .main-title {
          font-size: clamp(1.75rem, 5vw, 2.75rem);
          font-weight: 750;
          color: #233968;
          line-height: 1.2;
          margin-bottom: 0.5rem;
         background: linear-gradient(135deg, #000000 0%, #222222 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: clamp(1.25rem, 3.5vw, 1.75rem);
          font-weight: 700;
          color: #4B86C8;
          margin-bottom: 1.5rem;
        }

        .intro-text {
          margin-bottom: 2rem;
        }

        .intro-text p {
          margin-bottom: 1rem;
          line-height: 1.7;
          color: #475569;
          font-size: clamp(0.9rem, 2vw, 1rem);
        }

        .highlight-text {
          font-size: clamp(1rem, 2.2vw, 1.125rem);
          font-weight: 700;
          color: #233968;
        }

        .brand-name {
          color: #233968;
        }

        .pathway-text {
          color: #4B86C8;
          background: linear-gradient(135deg, #e8f1f8 0%, #d1e5f4 100%);
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          display: inline-block;
          margin-top: 0.5rem;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 480px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: clamp(0.75rem, 1.5vw, 1rem);
          background: white;
          border-radius: 12px;
          border: 2px solid #e8f1f8;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          border-color: #4B86C8;
          transform: translateX(5px);
          box-shadow: 0 4px 12px rgba(75, 134, 200, 0.15);
        }

        .check-icon {
          width: 24px;
          height: 24px;
          color: #4B86C8;
          flex-shrink: 0;
        }

        .feature-item span {
          font-size: clamp(0.85rem, 1.8vw, 0.95rem);
          color: #233968;
          font-weight: 500;
        }

        /* Section Cards */
        .section-card {
          background: white;
          border-radius: clamp(16px, 3vw, 24px);
          padding: clamp(1.5rem, 4vw, 3rem);
          margin-bottom: clamp(2rem, 4vw, 3rem);
          box-shadow: 0 10px 40px rgba(75, 134, 200, 0.12);
          border: 1px solid rgba(75, 134, 200, 0.1);
          transition: all 0.4s ease;
        }

        .section-card:hover {
          box-shadow: 0 20px 60px rgba(75, 134, 200, 0.2);
          transform: translateY(-5px);
        }

        .card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.5rem, 3vw, 3rem);
          align-items: center;
        }

        @media (min-width: 768px) {
          .card-grid {
            grid-template-columns: 2fr 3fr;
          }
        }

        .card-image {
          width: 100%;
          height: clamp(200px, 40vw, 320px);
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .card-title {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          font-weight: 700;
          color: black;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        .card-content p {
          color: #475569;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: clamp(0.9rem, 2vw, 1rem);
        }

        .highlight-box {
          display: flex;
          gap: 1rem;
          background: linear-gradient(135deg, #e8f1f8 0%, #d1e5f4 100%);
          padding: clamp(1rem, 2.5vw, 1.5rem);
          border-radius: 16px;
          border-left: 4px solid #4B86C8;
          align-items: flex-start;
          flex-direction: column;
          text-align: center;
        }

        @media (min-width: 640px) {
          .highlight-box {
            flex-direction: row;
            text-align: left;
          }
        }

        .highlight-icon {
          font-size: clamp(2rem, 4vw, 2.5rem);
          flex-shrink: 0;
        }

        .highlight-box strong {
          color: #233968;
        }

        /* Mission Section */
        .mission-section {
          margin-bottom: clamp(2rem, 4vw, 3rem);
        }

        .mission-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.5rem, 3vw, 2rem);
        }

        @media (min-width: 640px) {
          .mission-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .mission-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .mission-card {
          background: white;
          padding: clamp(2rem, 3vw, 2.5rem) clamp(1.5rem, 2.5vw, 2rem);
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(75, 134, 200, 0.1);
          border: 2px solid transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .mission-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(75, 134, 200, 0.05) 0%, rgba(35, 57, 104, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .mission-card:hover {
          transform: translateY(-10px);
          border-color: #4B86C8;
          box-shadow: 0 20px 50px rgba(75, 134, 200, 0.25);
        }

        .mission-card:hover::before {
          opacity: 1;
        }

        .mission-icon {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1.25rem;
          position: relative;
          z-index: 1;
        }

        .mission-title {
          font-size: clamp(1rem, 2vw, 1.125rem);
          font-weight: 700;
          color: #233968;
          margin-bottom: 1rem;
          line-height: 1.4;
          position: relative;
          z-index: 1;
        }

        .mission-description {
          font-size: clamp(0.875rem, 1.8vw, 0.95rem);
          color: #64748b;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        /* Impact Section */
        .impact-section {
          background: linear-gradient(135deg, #233968 0%, #4B86C8 100%);
          padding: clamp(2rem, 4vw, 3rem);
          border-radius: clamp(16px, 3vw, 24px);
          margin-bottom: clamp(2rem, 4vw, 3rem);
          box-shadow: 0 20px 60px rgba(75, 134, 200, 0.4);
        }

        .impact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.5rem, 3vw, 2rem);
          margin-top: 2rem;
        }

        @media (min-width: 640px) {
          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .impact-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .impact-item {
          text-align: center;
          padding: clamp(1.5rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .impact-item:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .impact-icon {
          font-size: clamp(2rem, 4vw, 2.5rem);
          color: #FFD700;
          margin-bottom: 1rem;
        }

        .impact-item h5 {
          font-size: clamp(1rem, 2vw, 1.125rem);
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }

        .impact-item p {
          font-size: clamp(0.85rem, 1.6vw, 0.9rem);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }

        /* Beliefs Section */
        .beliefs-section {
          margin-bottom: clamp(2rem, 4vw, 3rem);
        }

        .beliefs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.5rem, 3vw, 2rem);
        }

        @media (min-width: 640px) {
          .beliefs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .beliefs-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .belief-card {
          background: white;
          padding: clamp(2rem, 3vw, 2.5rem) clamp(1.5rem, 2.5vw, 2rem);
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border: 2px solid #f1f5f9;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .belief-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #4B86C8;
          box-shadow: 0 20px 50px rgba(75, 134, 200, 0.25);
        }

        .belief-icon {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1.25rem;
        }

        .belief-title {
          font-size: clamp(1.1rem, 2.2vw, 1.25rem);
          font-weight: 700;
          color: #233968;
          margin-bottom: 1rem;
        }

        .belief-description {
          font-size: clamp(0.875rem, 1.8vw, 0.95rem);
          color: #64748b;
          line-height: 1.6;
        }

        /* Career Section */
        .career-section {
          background: linear-gradient(135deg, #233968 0%, #1e3a8a 50%, #4B86C8 100%);
          padding: clamp(2rem, 4vw, 3rem);
          border-radius: clamp(16px, 3vw, 24px);
          text-align: center;
          box-shadow: 0 20px 60px rgba(75, 134, 200, 0.4);
          position: relative;
          overflow: hidden;
        }

        .career-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
        }

        .career-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 800;
          color: #FFD700;
          margin-bottom: 0.75rem;
          position: relative;
          z-index: 1;
        }

        .career-subtitle {
          font-size: clamp(1rem, 2vw, 1.125rem);
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 1;
        }

        .career-flow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: clamp(1rem, 2vw, 1.5rem);
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .career-step {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: clamp(1rem, 2vw, 1.25rem) clamp(1.5rem, 3vw, 2.5rem);
          border-radius: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          font-weight: 700;
          font-size: clamp(1rem, 2.2vw, 1.25rem);
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .career-step:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.1);
          border-color: #FFD700;
        }

        .career-arrow {
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: #FFD700;
          font-weight: bold;
        }

        @media (max-width: 640px) {
          .career-flow {
            flex-direction: column;
          }

          .career-arrow {
            transform: rotate(90deg);
          }

          .career-step {
            width: 100%;
            max-width: 280px;
          }
        }

        /* Additional fine-tuning for very small screens */
        @media (max-width: 360px) {
          .about-container {
            padding: 2rem 0.75rem;
          }
          
          .section-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
