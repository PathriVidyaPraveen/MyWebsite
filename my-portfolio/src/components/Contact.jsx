// src/components/Contact.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = ({ data }) => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS environment variables are not configured.');
      setStatus('error');
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
      });
  };

  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl text-center">
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2 inline-block px-4">Get In Touch</h2>
      <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
        Feel free to connect with me! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-4">
        {/* Hidden field so the EmailJS template always has a recipient, independent of user input */}
        <input type="hidden" name="to_email" value={data.email} />

        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1">
            Name <span className="text-gray-500">(optional)</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="from_name"
            className="w-full bg-primary-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="from_email"
            required
            className="w-full bg-primary-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="w-full bg-primary-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
          />
        </div>

        <div className="text-center pt-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-accent-blue hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>
        </div>

        {status === 'success' && (
          <p className="text-center text-green-400 pt-2">Message sent! I'll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-400 pt-2">
            Something went wrong sending your message. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
