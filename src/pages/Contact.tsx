import { HiMail, HiPhone, HiChatAlt2, HiChartBar, HiBookOpen } from 'react-icons/hi';
import { useSEO } from '../hooks/useSEO';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  useSEO({
    title: 'Contact Sizakala Accountants - Get Your Free Quote | Durban',
    description: 'Contact Sizakala Accountants for school audit, bookkeeping, and funding assistance services. Located at 526 Durban Club Place. Call 067 034 3472 or email sizakalabsp@gmail.com.',
    keywords: 'contact Sizakala Accountants, Durban accountants, school audit quote, bookkeeping services contact, 526 Durban Club Place',
    canonical: 'https://sizakalabsp.com/contact'
  });

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">
            Get in touch to discuss how we can help your school
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Methods */}
            <div className="contact-methods">
              <h2>Get In Touch</h2>
              <p>
                We'd love to hear from you. Choose your preferred method of contact
                below:
              </p>

              <div className="contact-cards">
                <a href="mailto:sizakalabsp@gmail.com" className="contact-card">
                  <div className="contact-icon">
                    <HiMail />
                  </div>
                  <h3>Email Us</h3>
                  <p>sizakalabsp@gmail.com</p>
                  <span className="contact-action">Send Email →</span>
                </a>

                <a
                  href="https://wa.me/27670343472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-icon">
                    <HiChatAlt2 />
                  </div>
                  <h3>WhatsApp</h3>
                  <p>067 034 3472</p>
                  <span className="contact-action">Chat on WhatsApp →</span>
                </a>

                <a href="tel:0670343472" className="contact-card">
                  <div className="contact-icon">
                    <HiPhone />
                  </div>
                  <h3>Call Us</h3>
                  <p>067 034 3472</p>
                  <span className="contact-action">Make a Call →</span>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Our Office</h2>

              <div className="info-box">
                <h3>Address</h3>
                <p>526 Durban Club Place</p>
                <p>303 Anton Lembede Street</p>
                <p>Durban, 4001</p>
                <p>South Africa</p>
              </div>

              <div className="info-box">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: By Appointment</p>
                <p>Sunday: Closed</p>
              </div>

              <div className="info-box">
                <h3>Company Information</h3>
                <p>Sizakala Business Services Provider (Pty) Ltd</p>
                <p>Trading as Sizakala Accountants</p>
                <p>Registration: 2022/863368/07</p>
                <p className="designation">Chartered Business Accountant in Practice (CBAP) SA</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2>Find Us</h2>
            <p>Visit our office in the heart of Durban's business district</p>
            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=526+Durban+Club+Place,+303+Anton+Lembede+Street,+Durban,+4001,+South+Africa&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sizakala Accountants Office Location - 526 Durban Club Place, 303 Anton Lembede Street, Durban"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-section">
            <ContactForm />
          </div>

          {/* Service Selection */}
          <div className="service-selection">
            <h2>Interested in Our Services?</h2>
            <p>
              When you contact us, please let us know which service you're interested
              in:
            </p>
            <div className="service-options">
              <div className="service-option">
                <h3>
                  <HiChartBar style={{ display: 'inline', marginRight: '0.5rem' }} />
                  Audit Services
                </h3>
                <p>Financial statement audits for public schools</p>
                <p className="service-price">From R 2,000</p>
              </div>
              <div className="service-option">
                <h3>
                  <HiBookOpen style={{ display: 'inline', marginRight: '0.5rem' }} />
                  Bookkeeping Services
                </h3>
                <p>Monthly/quarterly bookkeeping and financial records management</p>
                <p className="service-price">From R 150/month</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
