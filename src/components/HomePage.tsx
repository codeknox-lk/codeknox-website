import React from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Innovative Software Solutions for the
              <span className="highlight"> Digital Age</span>
            </h1>
            <p className="hero-subtitle">
              We build cutting-edge software solutions that drive business
              growth, enhance user experiences, and transform ideas into
              powerful digital products.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">View Our Work</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-animation">
              <div className="code-line">const innovation = {`{`}</div>
              <div className="code-line indent">
                technology: "cutting-edge",
              </div>
              <div className="code-line indent">quality: "exceptional",</div>
              <div className="code-line indent">results: "transformative"</div>
              <div className="code-line">{`}`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>
              Comprehensive software development solutions tailored to your
              needs
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Web Development</h3>
              <p>
                Modern, responsive websites and web applications built with the
                latest technologies.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>
                Native and cross-platform mobile applications for iOS and
                Android platforms.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>API Development</h3>
              <p>
                Robust and scalable APIs that power your applications and
                integrations.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Custom Software</h3>
              <p>
                Tailored software solutions designed specifically for your
                business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose CODEKNOX?</h2>
              <p>
                We are passionate about creating exceptional software that not
                only meets your requirements but exceeds your expectations. Our
                team combines technical expertise with creative problem-solving
                to deliver innovative solutions.
              </p>
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">🎯</span>
                  <span>Expert Team</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🚀</span>
                  <span>Fast Delivery</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🛡️</span>
                  <span>Quality Assured</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help bring your ideas to life</p>
            <button className="btn-primary">Contact Us Today</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
