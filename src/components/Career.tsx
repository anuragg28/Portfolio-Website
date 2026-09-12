import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My Achievements <span>&</span>
          <br /> Leadership
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Runner Up (2x)</h4>
                <h5>WIE Ignite (IGDTU) & <br/>Avensis Hackformers (Microsoft)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Awarded 1st Runner Up at both WIE Ignite Hackathon 2025 (IGDTU, Delhi) and Avensis Hackformers Hackathon 2025 (Microsoft, Gurugram) for architecting and shipping functional AI and real-time applications under high pressure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Startup Pitch Award (3rd)</h4>
                <h5>InnoventX Startup Pitch (JSS STEP, Noida)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Secured 3rd place at InnoventX Startup Pitch 2026, presenting production-grade system architecture, real-time collaboration workflows, and scalable AI integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Team </h4>
                <h5>Microsoft Mobile Innovation Lab (JSSATE)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Collaborating with a cross-functional team to design and build scalable web applications. Contributing across full-stack development, UI/UX, and system design while solving production challenges to optimize app stability and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
