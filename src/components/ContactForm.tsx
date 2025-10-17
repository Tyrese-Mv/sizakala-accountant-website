import { useState, type FormEvent } from 'react';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  schoolName: string;
  enrollment: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    enrollment: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission - in production, replace with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        enrollment: '',
        service: '',
        message: '',
      });

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const getEstimatedPrice = () => {
    if (formData.service === 'audit') return 'R 2,500';
    if (formData.service === 'bookkeeping' && formData.enrollment) {
      const enrollment = parseInt(formData.enrollment);
      if (enrollment < 200) return 'R 150/month';
      if (enrollment < 400) return 'R 300/month';
      if (enrollment < 600) return 'R 400/month';
      return 'R 500/month';
    }
    return null;
  };

  const estimatedPrice = getEstimatedPrice();

  return (
    <div className="contact-form-wrapper">
      <h2>Send Us a Message</h2>
      <p>Fill out the form below and we'll get back to you within 24 hours.</p>

      {status === 'success' && (
        <div className="alert alert-success">
          Thank you! Your message has been sent successfully. We'll be in touch soon.
        </div>
      )}

      {status === 'error' && (
        <div className="alert alert-error">
          Oops! Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="067 034 3472"
            />
          </div>

          <div className="form-group">
            <label htmlFor="schoolName">School Name *</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              required
              placeholder="ABC Primary School"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="service">Service Needed *</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Service --</option>
              <option value="audit">Audit Services (R 2,500)</option>
              <option value="bookkeeping">Bookkeeping Services</option>
              <option value="both">Both Services</option>
              <option value="consultation">Just Consultation</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="enrollment">School Enrollment (Number of Learners)</label>
            <input
              type="number"
              id="enrollment"
              name="enrollment"
              value={formData.enrollment}
              onChange={handleChange}
              placeholder="e.g., 350"
              min="1"
            />
          </div>
        </div>

        {estimatedPrice && (
          <div className="price-estimate">
            <strong>Estimated Price:</strong> {estimatedPrice}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us more about your needs..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
