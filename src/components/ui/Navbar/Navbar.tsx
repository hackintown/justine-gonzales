"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative w-full text-white px-4 py-4 mb-8 mx-auto rounded-xl bg-gradient-navbar shadow-lg">
      {/* Navbar Content */}
      <div className="relative flex justify-between items-center max-w-7xl mx-auto z-10">
        <div className="text-lg font-bold">
          <Link href="/" className="max-w-[100px] w-full block">
            <Image
              src="/images/header-logo.png"
              width={150}
              height={150}
              alt="header-logo"
              className="w-full h-auto"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
          >
            HOME
          </Link>
          <Link
            href="/ayalaland"
            className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
          >
            RESIDENTIAL LOTS
          </Link>
          <Link
            href="/ayalaland"
            className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
          >
            CONDOMINIUMS
          </Link>
          <Link
            href="/"
            className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
          >
            OFFICE
          </Link>
          <Link
            href="/"
            className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
          >
            LEISURE
          </Link>
          <Link
            href="/"
            className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
          >
            CONTACT
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <Link
            href="/"
            className="text-sm font-medium mx-2  hover:text-gray-300 transition-colors duration-200"
          >
            CONTACT
          </Link>
          <button onClick={toggleMenu}>
            <FaBars className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gradient-navbar transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <FaTimes className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="flex flex-col items-center mt-10 space-y-6">
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <Link
            href="/ayalaland"
            className="text-lg font-medium hover:text-gray-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            RESIDENTIAL LOTS
          </Link>
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            CONDOMINIUMS
          </Link>
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            OFFICE
          </Link>
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            LEISURE
          </Link>
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
