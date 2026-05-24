"use client";

import React from "react";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
  BookOpen,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-blue-600 p-2 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold">
                Study<span className="text-blue-500">Room</span>
              </h2>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              Find and book quiet, comfortable study rooms anytime.
              Share your own study space and earn with our platform.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">

              <Link
                href="#"
                className="bg-slate-800 hover:bg-blue-600 transition p-3 rounded-full"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="bg-slate-800 hover:bg-sky-500 transition p-3 rounded-full"
              >
                <FaTwitter size={18} />
              </Link>

              <Link
                href="#"
                className="bg-slate-800 hover:bg-pink-500 transition p-3 rounded-full"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="#"
                className="bg-slate-800 hover:bg-blue-500 transition p-3 rounded-full"
              >
                <FaLinkedinIn size={18} />
              </Link>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/rooms"
                  className="hover:text-blue-500 transition"
                >
                  Explore Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-blue-500 transition"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-500 transition"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/faq" className="hover:text-blue-500 transition">
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-500 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-500 transition"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/support"
                  className="hover:text-blue-500 transition"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-slate-400 text-sm">

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <p>support@studyroom.com</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} StudyRoom.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-slate-400">
            <Link
              href="/privacy"
              className="hover:text-blue-500 transition"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="hover:text-blue-500 transition"
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="hover:text-blue-500 transition"
            >
              Cookies
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;