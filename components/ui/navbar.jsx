"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaInfoCircle, FaUserAlt, FaPhone } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: "Home", icon: <FaHome />, href: "/" },
        { name: "About", icon: <FaInfoCircle />, href: "/about" },
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
                        <a
                            key={index}
                            href={item.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition"
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="sm:hidden bg-gray-800"
                >
                    <div className="flex flex-col space-y-4 p-4">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
