import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiChartBar, HiBookOpen } from 'react-icons/hi';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive accounting solutions tailored for public schools
          </motion.p>
        </div>
      </section>

      {/* Audit Services */}
      <section className="service-section" id="audit">
        <div className="container">
          <motion.div
            className="service-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="service-icon-large">
              <HiChartBar />
            </div>
            <h2>Audit Services</h2>
            <p className="service-price">From R 2,500</p>
          </motion.div>

          <div className="service-details">
            <motion.div
              className="service-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                We offer comprehensive audit services to public schools, non-profit
                organisations, and private companies with affordable tiered pricing
                tailored to your organisation's size and complexity. Our audits
                ensure compliance with relevant regulations and provide stakeholders
                with confidence in your financial statements.
              </p>
            </motion.div>

            <motion.div
              className="audit-categories"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="category-title">Public Schools</h3>
              <p className="category-intro">
                Audits conducted in accordance with Section 43 of the South African
                Schools Act No. 84 of 1996, including free training for school staff.
              </p>
              <div className="pricing-grid">
                <motion.div
                  className="pricing-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3>Small Schools</h3>
                  <p className="price">R 2,500</p>
                  <p className="school-size">Less than 200 learners</p>
                </motion.div>

                <motion.div
                  className="pricing-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3>Medium Schools</h3>
                  <p className="price">R 3,500</p>
                  <p className="school-size">200-399 learners</p>
                </motion.div>

                <motion.div
                  className="pricing-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3>Large Schools</h3>
                  <p className="price">R 4,500</p>
                  <p className="school-size">400-599 learners</p>
                </motion.div>

                <motion.div
                  className="pricing-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3>Extra Large Schools</h3>
                  <p className="price">R 5,500</p>
                  <p className="school-size">600+ learners</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="audit-categories"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="category-title">Non-Profit organisations (NPOs)</h3>
              <p className="category-intro">
                Independent examinations and audits for NPO compliance, donor
                reporting, and regulatory requirements.
              </p>
              <div className="pricing-grid">
                {[
                  { title: 'Small NPOs', price: 'R 2,500', size: 'Revenue less than R500k', delay: 0.1 },
                  { title: 'Medium NPOs', price: 'R 4,000', size: 'Revenue R500k - R2m', delay: 0.2 },
                  { title: 'Large NPOs', price: 'R 6,000', size: 'Revenue R2m - R5m', delay: 0.3 },
                  { title: 'Very Large NPOs', price: 'R 8,500', size: 'Revenue above R5m', delay: 0.4 },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="pricing-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: card.delay }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h3>{card.title}</h3>
                    <p className="price">{card.price}</p>
                    <p className="school-size">{card.size}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="audit-categories"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="category-title">Private Companies</h3>
              <p className="category-intro">
                Financial statement audits and independent reviews for small to
                medium enterprises ensuring compliance and accuracy.
              </p>
              <div className="pricing-grid">
                {[
                  { title: 'Small Companies', price: 'R 3,500', size: 'Turnover less than R1m', delay: 0.1 },
                  { title: 'Medium Companies', price: 'R 5,500', size: 'Turnover R1m - R5m', delay: 0.2 },
                  { title: 'Large Companies', price: 'R 8,000', size: 'Turnover R5m - R10m', delay: 0.3 },
                  { title: 'Very Large Companies', price: 'R 12,000', size: 'Turnover above R10m', delay: 0.4 },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="pricing-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: card.delay }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h3>{card.title}</h3>
                    <p className="price">{card.price}</p>
                    <p className="school-size">{card.size}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="service-features-grid">
              <div className="feature-box">
                <h3>What's Included</h3>
                <ul>
                  <li>Complete financial statement audit</li>
                  <li>Audit completed within 5 days of collecting records</li>
                  <li>We collect accounting records from your school</li>
                  <li>Free training on accurate record-keeping</li>
                  <li>All audit templates and checklists provided</li>
                </ul>
              </div>

              <div className="feature-box">
                <h3>Free Training Included</h3>
                <ul>
                  <li>Budgeting process</li>
                  {/* <li>Recording of receipts and payments</li> */}
                  <li>Travel and reimbursement costs</li>
                  <li>Petty cash management</li>
                  <li>Procurement process (Section 21 schools)</li>
                  <li>Asset register and inventory listing</li>
                  <li>Stores records</li>
                </ul>
              </div>
            </div>

            <div className="training-info">
              <h3>Training Details</h3>
              <p>
                Training is provided to the finance officer and other staff members
                who are involved in finances of the school. Training sessions are 1-2
                hours and conducted at your school. The session date will be agreed
                upon with your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bookkeeping Services */}
      <section className="service-section alt" id="bookkeeping">
        <div className="container">
          <div className="service-header">
            <div className="service-icon-large">
              <HiBookOpen />
            </div>
            <h2>Bookkeeping Services</h2>
            <p className="service-price">From R 150/month</p>
          </div>

          <div className="service-details">
            <div className="service-description">
              <p>
                If you are missing submission deadlines due to handling other
                important tasks of running the school, Sizakala Accountants are here
                to take care of your monthly and quarterly bookkeeping.
              </p>
            </div>

            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Small Schools</h3>
                <p className="price">R 150<span>/month</span></p>
                <p className="school-size">Less than 200 learners</p>
              </div>

              <div className="pricing-card">
                <h3>Medium Schools</h3>
                <p className="price">R 300<span>/month</span></p>
                <p className="school-size">200+ learners</p>
              </div>

              <div className="pricing-card">
                <h3>Large Schools</h3>
                <p className="price">R 400<span>/month</span></p>
                <p className="school-size">400+ learners</p>
              </div>

              <div className="pricing-card">
                <h3>Extra Large Schools</h3>
                <p className="price">R 500<span>/month</span></p>
                <p className="school-size">600+ learners</p>
              </div>
            </div>

            <div className="service-features-grid">
              <div className="feature-box">
                <h3>Services Provided</h3>
                <ul>
                  <li>Monthly and quarterly cash receipts journal</li>
                  <li>Monthly and quarterly cash payment journal</li>
                  <li>Monthly and quarterly bank reconciliation</li>
                  <li>Payment advices</li>
                </ul>
              </div>

              <div className="feature-box">
                <h3>Requirements</h3>
                <ul>
                  <li>Bank statements for the month or quarter</li>
                  <li>Invoices for the month or quarter</li>
                </ul>
              </div>
            </div>

            <div className="benefits-info">
              <h3>Benefits</h3>
              <ul>
                <li>
                  Avoid delays which can cause the school not to receive funds on
                  time
                </li>
                <li>Affordable fees structured for each school based on its dynamics</li>
                <li>Meet all submission deadlines consistently</li>
                <li>Focus on running your school while we handle the books</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today to discuss which services best fit your school's needs
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

export default Services;
