import { Link } from 'react-router-dom';
import { HiChartBar, HiBookOpen, HiCheckCircle } from 'react-icons/hi';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">Registered with CIBA since 2015</div>
            <h1>Professional Accounting Services You Can Trust</h1>
            <p className="hero-subtitle">
              Specialized financial solutions for schools, non-profit organisations,
              and private companies across South Africa
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <span className="feature-icon">✓</span>
                <span>CIBA Certified</span>
              </div>
              <div className="hero-feature">
                <span className="feature-icon">✓</span>
                <span>Affordable Pricing</span>
              </div>
              <div className="hero-feature">
                <span className="feature-icon">✓</span>
                <span>Expert Team</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary btn-large">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <HiChartBar />
              </div>
              <h3>Audit Services</h3>
              <p>
                Comprehensive financial statement audits for schools, NPOs, and
                private companies with tiered pricing based on your organisation's
                size and complexity.
              </p>
              <ul className="service-features">
                <li>From R 2,500 (tiered pricing)</li>
                <li>Schools, NPOs & Companies</li>
                <li>Compliance & regulatory audits</li>
                <li>Professional & reliable service</li>
              </ul>
              <Link to="/services#audit" className="btn btn-outline">
                Learn More
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <HiBookOpen />
              </div>
              <h3>Bookkeeping Services</h3>
              <p>
                Monthly and quarterly bookkeeping services to help you meet
                submission deadlines and maintain accurate financial records.
              </p>
              <ul className="service-features">
                <li>From R 150/month</li>
                <li>Tiered pricing by school size</li>
                <li>Cash receipts & payments journals</li>
                <li>Bank reconciliations</li>
              </ul>
              <Link to="/services#bookkeeping" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Sizakala?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <HiCheckCircle />
              </div>
              <h3>Registered & Qualified</h3>
              <p>
                Registered with the Chartered Institute for Business Accountants
                (CIBA) with Business Accountants in Practice (BAP) designation
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <HiCheckCircle />
              </div>
              <h3>Specialized Expertise</h3>
              <p>
                We focus exclusively on public schools, understanding your unique
                financial management requirements
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <HiCheckCircle />
              </div>
              <h3>Affordable Pricing</h3>
              <p>
                Reasonable fees structured to fit your school's budget, with tiered
                pricing based on enrollment
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <HiCheckCircle />
              </div>
              <h3>Free Training</h3>
              <p>
                Complimentary training on financial compliance and record-keeping
                with our audit services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Improve Your School's Financial Management?</h2>
          <p>
            Contact us today to discuss how we can help your school maintain sound
            financial health
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <a href="tel:0670343472" className="btn btn-secondary">
              Call: 067 034 3472
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
