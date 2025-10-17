import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>Sizakala Business Services Provider</h3>
            <p>Trading as Sizakala Accountants</p>
            <p>Reg: 2022/863368/07</p>
            <p className="credentials">Business Accountants in Practice (BAP)</p>
          </div>

          <div className="footer-col">
            <h4>Contact Information</h4>
            <p>526 Durban Club Place</p>
            <p>303 Anton Lembede Street</p>
            <p>Durban, 4001</p>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <p>
              Phone: <a href="tel:0670343472">067 034 3472</a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:sizakalabsp@gmail.com">sizakalabsp@gmail.com</a>
            </p>
            <p>
              WhatsApp:{' '}
              <a
                href="https://wa.me/27670343472"
                target="_blank"
                rel="noopener noreferrer"
              >
                067 034 3472
              </a>
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Sizakala Business Services Provider
            (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
