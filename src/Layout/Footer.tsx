import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#f8fbff] text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Contact Us", "Post a Job", "FAQs", "About Us", "Terms Of Use"].map((item, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-blue-600">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Jobs by Functional Area */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Jobs By Functional Area</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Database Administration (DBA)",
              "Information Technology",
              "Health Care Provider",
              "Bank Operation",
              "Electronics Technician",
              "Advertising",
              "Creative Design",
              "Advertisement",
              "Software & Web Development",
              "Accountant"
            ].map((item, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-blue-600">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Jobs by Industry */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Jobs By Industry</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Electronics", "Banking/Financial Services", "Courier/Logistics", "AutoMobile",
              "Manufacturing", "Information Technology", "Fashion", "Education/Training",
              "Health & Fitness", "Travel/Tourism/Transportation"
            ].map((item, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-blue-600">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <div className="flex items-start space-x-3 text-sm mb-2">
            <MapPin className="w-5 h-5 mt-1 text-blue-600" />
            <p>123 Street 12, A -12/3 New Delhi, India</p>
          </div>
          <div className="flex items-center space-x-3 text-sm mb-4">
            <Mail className="w-5 h-5 text-blue-600" />
            <p>info@jobsportal.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            <Link href="#"><FaFacebookF className="text-2xl hover:text-blue-600" /></Link>
            <Link href="#"><FaXTwitter className="text-2xl hover:text-blue-600" /></Link>
            <Link href="#"><FaInstagram className="text-2xl hover:text-blue-600" /></Link>
            <Link href="#"><FaLinkedinIn className="text-2xl hover:text-blue-600" /></Link>
            <Link href="#"><FaYoutube className="text-2xl hover:text-blue-600" /></Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-12 pt-6 border-t">
        <p>Copyright © 2025 JOBS PORTAL. All Rights Reserved. Design by: <Link href="#" className="text-blue-600">Chatbot Solutions</Link></p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <img src="/paypal.png" alt="PayPal" className="h-5" />
          <img src="/stripe.png" alt="Stripe" className="h-5" />
        </div>
      </div>
    </footer>
  );
}
