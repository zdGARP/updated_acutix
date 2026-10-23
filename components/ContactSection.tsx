'use client';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendForm } from '../lib/sendForm';
import { FaCalendarAlt } from 'react-icons/fa';
import styles from './ContactSection.module.css';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  helpType: '',
  additionalInfo: ''
};

const purposes = [
  { value: 'web', label: 'Website Development' },
  { value: 'software', label: 'Software Solutions' },
  { value: 'tech_meetup', label: 'Request a Tech Meetup' },
  { value: 'industrial_visit', label: 'Industrial Visit (for Students)' },
  { value: 'internship', label: 'Internship Opportunity' }
];

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    toast.info('Submitting...', { autoClose: false, toastId: 'submitting' });
    const result = await sendForm({ ...form, to: process.env.EMAIL_RECEIVER });
    toast.dismiss('submitting');
    setSubmitting(false);
    if (result.success) {
      setForm(initialForm);
      toast.success('Thank you! Your message has been sent.');
    } else {
      toast.error(result.error || 'Failed to send. Please try again.');
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Let&apos;s talk</p>
          <h1>Contact Acutix</h1>
          <p>
            Have a project idea, a partnership proposal, or just a few questions? We&apos;d love to hear from you!
            Whether you&apos;re a business seeking digital solutions or an individual looking for opportunities, our
            team is here to help. Fill out the form below, and we&apos;ll get back to you promptly.
          </p>
        </header>

        <div className={styles.formCard}>
          <div className={styles.formHeading}>
            <span className={styles.formIcon} aria-hidden="true">
              <FaCalendarAlt />
            </span>
            <div>
              <h2>Let us know your purpose</h2>
              <p>Share a few details and we&apos;ll be in touch.</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldsGrid}>
              <label className={styles.field}>
                <span>First Name</span>
                <input
                  required
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </label>
              <label className={styles.field}>
                <span>Last Name</span>
                <input
                  required
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </label>
              <label className={styles.field}>
                <span>Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label className={styles.field}>
                <span>Phone</span>
                <input
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
              <label className={`${styles.field} ${styles.fullWidth}`}>
                <span>Purpose</span>
                <select name="helpType" required value={form.helpType} onChange={handleChange}>
                  <option value="" disabled>
                    Select your purpose
                  </option>
                  {purposes.map((purpose) => (
                    <option key={purpose.value} value={purpose.value}>
                      {purpose.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className={`${styles.field} ${styles.fullWidth}`}>
                <span>Additional Information</span>
                <textarea
                  name="additionalInfo"
                  placeholder="Additional message"
                  rows={5}
                  value={form.additionalInfo}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button className={styles.submitButton} type="submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Form'}
            </button>
            <ToastContainer position="bottom-right" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
