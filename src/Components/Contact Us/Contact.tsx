'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import { TypeAnimation } from 'react-type-animation';

export default function Contact() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Contact Section with Animation */}
      <div className="p-6 md:p-16">
        <div
          className="bg-gray-200 py-8 px-4 rounded-lg mb-12 text-center shadow-md"
          data-aos="fade-up"
        >
          <TypeAnimation
            sequence={['Contact Us', 1500, '']}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Contact Info */}
          <div data-aos="fade-right" className="space-y-6">
            <h3 className="text-blue-600 font-semibold text-lg mb-2">Need any help?</h3>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in touch with us</h2>

            <div className="flex items-start space-x-4 group transition-all duration-300">
              <div className="bg-blue-600 p-4 rounded text-white text-4xl transform group-hover:scale-110 transition">
                🏠
              </div>
              <div>
                <p className="font-bold text-gray-800">ADDRESS:</p>
                <p className="text-gray-700">123 Street 12, A -12/3 New Delhi, India</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group transition-all duration-300">
              <div className="bg-blue-600 p-4 rounded text-white text-4xl transform group-hover:scale-110 transition">
                ✉️
              </div>
              <div>
                <p className="font-bold text-gray-800">EMAIL ADDRESS:</p>
                <a
                  href="mailto:info@jobsportal.com"
                  className="text-blue-600 hover:underline transition"
                >
                  info@jobsportal.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 group transition-all duration-300">
              <div className="bg-blue-600 p-4 rounded text-white text-4xl transform group-hover:scale-110 transition">
                📞
              </div>
              <div>
                <p className="font-bold text-gray-800">PHONE:</p>
                <a
                  href="tel:+91121234568"
                  className="text-blue-600 hover:underline transition"
                >
                  +91 12 1234568
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="-ml-5 md:-ml-60" data-aos="fade-left">
            <h3 className="text-blue-600 font-semibold text-lg mb-2">Send us email</h3>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Feel free to write</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 border rounded w-full text-gray-800 focus:ring-2 focus:ring-blue-300 transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border rounded w-full text-gray-800 focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="p-3 border rounded w-full text-gray-800 focus:ring-2 focus:ring-blue-300 transition"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-3 border rounded w-full text-gray-800 focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                className="p-3 border rounded w-full text-gray-800 focus:ring-2 focus:ring-blue-300 transition"
              ></textarea>

              <div className="mt-4">
                <label htmlFor="captcha" className="text-gray-700 flex items-center gap-2">
                  <input type="checkbox" id="captcha" className="accent-blue-600" />
                  I'm not a robot
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transform hover:scale-105 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Half-Screen Map Section */}
      <div className="w-full h-[50vh]" data-aos="zoom-in">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/search/123+Street+12,+A+-12%2F3%0D%0ANew+Delhi,+India/@21.068007,82.752529,6338209m/data=!3m1!1e3?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
