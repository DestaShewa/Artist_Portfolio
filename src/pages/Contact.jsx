// src/pages/Contact.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa"; // Importing icons

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Replace this with your actual Formspree endpoint
  const formspreeEndpoint = "https://formspree.io/f/YOUR_UNIQUE_ID";

  const onSubmit = (data, e) => {
    // The default form submission is handled by the action attribute
    // This function can be used for additional logic after submission if needed
    console.log("Form submitted!", data);
    e.target.reset(); // Reset form fields after submission
  };

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">Get In Touch</h1>
        <p className="text-lg text-gray-600 mt-2">
          Have a question or a commission request? Send a message.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="w-full md:w-2/3 p-8 bg-white rounded-lg shadow-lg">
          <form
            action={formspreeEndpoint}
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                {...register("message", { required: "Message is required" })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h3>
            <p className="mt-4 text-gray-700">
              For inquiries and commissions, please use the form or email me
              directly.
            </p>
            <p className="mt-4 font-semibold text-gray-800">
              <a
                href="mailto:artist@example.com"
                className="hover:text-blue-600"
              >
                destashewa67@gmail.com
              </a>
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://x.com/desta6757"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61578217797539"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com/des_ami17/"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
