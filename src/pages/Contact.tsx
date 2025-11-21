// src/pages/Contact.tsx
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import SEO from '../components/SEO';

export default function Contact() {
  // Use environment variable for Formspree ID (keeps it secure)
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  // ✅ FIXED: Call hook at top level, BEFORE any conditional returns
  // This follows React's Rules of Hooks - hooks must be called in the same order every render
  const [state, handleSubmit] = useForm(formspreeId || 'dummy-id');

  // Error handling for missing environment variable
  // Now safe to return early because all hooks have been called
  if (!formspreeId) {
    // Log missing environment variable (only in development)
    if (import.meta.env.DEV) {
      console.warn('VITE_FORMSPREE_ID environment variable is not set');
    }
    return (
      <>
        <SEO
          title="Contact - Gavin Zhang"
          description="Get in touch with Gavin Zhang for software engineering opportunities, collaborations, or coffee chats."
          keywords="contact, get in touch, software engineer contact, collaboration, hire software engineer"
        />
        <div className="min-h-screen flex items-center justify-center pt-20 pb-32">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-6">Contact Form Unavailable</h1>
          <p className="text-xl text-gray-700 mb-8">
            The contact form is temporarily unavailable. Please reach out directly:
          </p>
          <a
            href="mailto:gwxzhang@bu.edu"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Send Email Directly
          </a>
        </div>
        </div>
      </>
    );
  }

  if (state.succeeded) {
    return (
      <>
        <SEO
          title="Thank You - Gavin Zhang"
          description="Thank you for reaching out! I'll get back to you soon."
        />
        <div className="min-h-screen flex items-center justify-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center max-w-2xl"
        >
          <h1 className="text-4xl font-bold mb-6">Thanks for reaching out!</h1>
          <p className="text-xl text-gray-700">
            I've received your message and will get back to you soon.
          </p>
        </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact - Gavin Zhang"
        description="Get in touch with Gavin Zhang for software engineering opportunities, collaborations, or coffee chats."
        keywords="contact, get in touch, software engineer contact, collaboration, hire software engineer"
      />
      <div className="min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities. 
            Feel free to send me a message.
          </p>
        </motion.div>
        
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-md border-2 border-transparent"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text" 
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-2">
              Your Email
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-600 mt-2"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-600 mt-2"
            />
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
      </div>
    </>
  );
}