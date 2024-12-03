"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaBezierCurve, FaInfoCircle, FaPhone } from "react-icons/fa";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "About", icon: <FaInfoCircle />, href: "/about" },
    { name: "Features", icon: <FaBezierCurve />, href: "/specialities" },
    { name: "Contact", icon: <FaPhone />, href: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold">Certify Yourself</div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleNavbar}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="sm:hidden bg-gray-900"
        >
          <div className="flex flex-col space-y-4 p-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="flex items-center justify-start ">
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
