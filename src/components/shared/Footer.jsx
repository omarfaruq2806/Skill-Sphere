import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4 ">
        {/* Logo */}
        <div className="">
          <h2 className="text-2xl font-bold text-purple-500">SkillSphere</h2>
          <p className="mt-3 text-sm text-gray-400">
            Upgrade your skills with top courses in development, design, and
            marketing.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: support@skillsphere.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-slate-300 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-purple-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-purple-500">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-purple-500">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2 mb-4">
            <li>
              <Link href="/terms" className="hover:text-purple-500">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-purple-500">
                Privacy Policy
              </Link>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-purple-500">
              <CiFacebook />
            </a>
            <a href="#" className="hover:text-purple-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-purple-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-purple-500"><FaSquareXTwitter />
</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © 2023 SkillSphere. All rights reserved.
      </div>
    </footer>
  );
}
