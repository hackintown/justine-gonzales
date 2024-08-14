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
    <nav className="relative text-white px-4 py-5 max-w-[90%] mb-8 mx-auto rounded-3xl overflow-hidden">
      {/* Background Image */}
      <div>
        <Image
          src="/images/home-header-bg.png"
          alt="home-header-bg"
          layout="fill"
          quality={100}
          priority={true}
          className="rounded-3xl w-full h-full"
        />
      </div>

      {/* Navbar Content */}
      <div className="relative flex justify-between items-center max-w-7xl mx-auto z-10">
        <div className="text-lg font-bold">
          <Link href="/" className="max-w-[120px] w-full block">
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
          <Link href="/" className="hover:text-secondary">
            HOME
          </Link>
          <Link href="/" className="hover:text-secondary">
            RESIDENTIAL LOTS
          </Link>
          <Link href="/" className="hover:text-secondary">
            CONDOMINIUMS
          </Link>
          <Link href="/" className="hover:text-secondary">
            OFFICE
          </Link>
          <Link href="/" className="hover:text-secondary">
            LEISURE
          </Link>
          <Link href="/" className="hover:text-secondary">
            CONTACT
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <Link href="/" className="hover:text-secondary mx-2">
            CONTACT
          </Link>
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center mt-4 space-y-4">
            <Link href="/" className="hover:text-secondary">
              HOME
            </Link>
            <Link href="/" className="hover:text-secondary">
              RESIDENTIAL LOTS
            </Link>
            <Link href="/" className="hover:text-secondary">
              CONDOMINIUMS
            </Link>
            <Link href="/" className="hover:text-secondary">
              OFFICE
            </Link>
            <Link href="/" className="hover:text-secondary">
              LEISURE
            </Link>
            <Link href="/" className="hover:text-secondary">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
