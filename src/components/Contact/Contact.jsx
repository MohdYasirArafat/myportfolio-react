// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9uyua07",     // replace with your actual EmailJS service ID
        "template_eetlw7g",    // replace with your template ID
        form.current,
        "jDxTt8ZKzBhB4hvtl"      // replace with your public API key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccess(true);
          setError(false);
          form.current.reset(); // optional: reset the form after success
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSuccess(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition"
          >
            Send Message
          </button>
          {success && <p className="text-green-500">Message sent successfully!</p>}
          {error && <p className="text-red-500">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
