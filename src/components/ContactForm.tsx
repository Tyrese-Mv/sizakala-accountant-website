import { useState, type FormEvent } from 'react';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  organisationType: string;
  organisationName: string;
  enrollment: string;
  revenue: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organisationType: '',
    organisationName: '',
    enrollment: '',
    revenue: '',
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
        organisationType: '',
        organisationName: '',
        enrollment: '',
        revenue: '',
        service: '',
        message: '',
      });

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const getEstimatedPrice = () => {
    const orgType = formData.organisationType;

    // Helper function to calculate audit price based on organisation type
    const getAuditPrice = () => {
      if (orgType === 'school') {
        if (!formData.enrollment) return null;
        const enrollment = parseInt(formData.enrollment);
        if (enrollment < 200) return 'R 2,500';
        if (enrollment < 400) return 'R 3,500';
        if (enrollment < 600) return 'R 4,500';
        return 'R 5,500';
      }

      if (orgType === 'npo') {
        if (!formData.revenue) return null;
        const revenue = parseInt(formData.revenue);
        if (revenue < 500000) return 'R 2,500';
        if (revenue < 2000000) return 'R 4,000';
        if (revenue < 5000000) return 'R 6,000';
        return 'R 8,500';
      }

      if (orgType === 'company') {
        if (!formData.revenue) return null;
        const turnover = parseInt(formData.revenue);
        if (turnover < 1000000) return 'R 3,500';
        if (turnover < 5000000) return 'R 5,500';
        if (turnover < 10000000) return 'R 8,000';
        return 'R 12,000';
      }

      return null;
    };

    // Helper function to calculate bookkeeping price (schools only for now)
    const getBookkeepingPrice = () => {
      if (orgType === 'school') {
        if (!formData.enrollment) return null;
        const enrollment = parseInt(formData.enrollment);
        if (enrollment < 200) return 'R 150/month';
        if (enrollment < 400) return 'R 300/month';
        if (enrollment < 600) return 'R 400/month';
        return 'R 500/month';
      }
      return null;
    };

    if (formData.service === 'audit') {
      return getAuditPrice();
    }

    if (formData.service === 'bookkeeping') {
      return getBookkeepingPrice();
    }

    if (formData.service === 'both') {
      const auditPrice = getAuditPrice();
      const bookkeepingPrice = getBookkeepingPrice();

      if (auditPrice && bookkeepingPrice) {
        return `Audit: ${auditPrice} + Bookkeeping: ${bookkeepingPrice}`;
      }

      if (auditPrice) return `Audit: ${auditPrice}`;
      if (bookkeepingPrice) return `Bookkeeping: ${bookkeepingPrice}`;
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
            <label htmlFor="organisationType">organisation Type *</label>
            <select
              id="organisationType"
              name="organisationType"
              value={formData.organisationType}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Type --</option>
              <option value="school">Public School</option>
              <option value="npo">Non-Profit organisation</option>
              <option value="company">Private Company</option>
              <option value="individual">Individual</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="organisationName">
              {formData.organisationType === 'school' ? 'School Name' :
               formData.organisationType === 'npo' ? 'NPO Name' :
               formData.organisationType === 'company' ? 'Company Name' :
               formData.organisationType === 'individual' ? 'Full Name' :
               'organisation/Name'} *
            </label>
            <input
              type="text"
              id="organisationName"
              name="organisationName"
              value={formData.organisationName}
              onChange={handleChange}
              required
              placeholder={
                formData.organisationType === 'school' ? 'ABC Primary School' :
                formData.organisationType === 'npo' ? 'Community Development NPO' :
                formData.organisationType === 'company' ? 'ABC (Pty) Ltd' :
                'Your name or organisation'
              }
            />
          </div>

          {formData.organisationType === 'school' && (
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
          )}

          {(formData.organisationType === 'npo' || formData.organisationType === 'company') && (
            <div className="form-group">
              <label htmlFor="revenue">
                Annual {formData.organisationType === 'npo' ? 'Revenue' : 'Turnover'} (R)
              </label>
              <input
                type="number"
                id="revenue"
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                placeholder={
                  formData.organisationType === 'npo' ? 'e.g., 750000' : 'e.g., 2500000'
                }
                min="1"
              />
            </div>
          )}
        </div>

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
            <option value="audit">Audit Services (From R 2,500)</option>
            <option value="bookkeeping">Bookkeeping Services (From R 150/month - Schools)</option>
            <option value="both">Both Services</option>
            <option value="consultation">Just Consultation</option>
          </select>
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
