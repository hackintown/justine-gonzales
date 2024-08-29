"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <nav className="relative w-full text-white px-4 py-4 mb-8 mx-auto rounded-xl bg-black bg-opacity-80 shadow-lg">
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
            className="text-xs lg:text-sm font-medium hover:text-gray-300 transition-colors duration-200"
          >
            HOME
          </Link>
          <div className="relative group">
            <Link
              href="/anvaya"
              className="text-xs lg:text-sm font-medium hover:text-gray-300 transition-colors duration-200 flex items-center gap-x-1"
            >
              RESIDENTIAL LOTS
              <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-black bg-opacity-80 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100 origin-top">
              <Link
                href="/#residential-lot-1"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-t-lg"
              >
                Ayala Greenfield Estates
              </Link>
              <Link
                href="/#residential-lot-2"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-t-lg"
              >
                Arcilo
              </Link>
              <Link
                href="/#residential-lot-3"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-b-lg"
              >
                Ciela Aera Heights
              </Link>
              <Link
                href="/#residential-lot-4"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-b-lg"
              >
                Lanewood Hills
              </Link>
              <Link
                href="/#residential-lot-5"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-b-lg"
              >
                Miravera Altaraza
              </Link>
              <Link
                href="/#residential-lot-6"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-b-lg"
              >
                The Courtyards, Vermosa
              </Link>
            </div>
          </div>

          <div className="relative group">
            <Link
              href="/anvaya"
              className="text-xs lg:text-sm font-medium hover:text-gray-300 transition-colors duration-200 flex items-center gap-x-1"
            >
              CONDOMINIUMS
              <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-black bg-opacity-80 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100 origin-top">
              <Link
                href="/#residential-condo-1"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-t-lg"
              >
                Arbor Lanes
              </Link>
              <Link
                href="/#residential-condo-2"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-b-lg"
              >
                Gardencourt Residences
              </Link>
              <Link
                href="/#residential-condo-4"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-b-lg"
              >
                Parklinks North Tower
              </Link>
              <Link
                href="/#residential-condo-6"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-b-lg"
              >
                The Residences at Azuela Cove
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link
              href="/"
              className="text-xs lg:text-sm font-medium hover:text-gray-300 transition-colors duration-200 flex items-center gap-x-2"
            >
              OFFICE
              <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-black bg-opacity-80 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100 origin-top">
              <Link
                href="/#office-space-1"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-t-lg"
              >
                One Vertis Plaza
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link
              href="/"
              className="text-xs lg:text-sm font-medium hover:text-gray-300 transition-colors duration-200 flex items-center gap-x-2"
            >
              LEISURE
              <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-black bg-opacity-80 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100 origin-top">
              <Link
                href="/#leisure-rec-1"
                className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-t-lg"
              >
                Anvaya Cove
              </Link>
            </div>
          </div>

          <Link
            href="/#inquiry-form"
            className="text-xs lg:text-sm font-medium hover:text-gray-300 transition-colors duration-200"
          >
            CONTACT
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <Link
            href="/#inquiry-form"
            className="text-sm font-medium mx-2 hover:text-gray-300 transition-colors duration-200"
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
        className={`md:hidden fixed top-0 left-0 w-full h-screen z-50 bg-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-end px-4 py-2">
          <button onClick={toggleMenu}>
            <FaTimes className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="flex flex-col px-8 mt-10 space-y-5">
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <div className="w-full">
            <button
              onClick={() => toggleSubmenu("residentialLots")}
              className="w-full flex items-center gap-x-2 text-lg font-medium hover:text-gray-300 transition-colors duration-200 py-2"
            >
              RESIDENTIAL LOTS
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  expandedMenu === "residentialLots" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMenu === "residentialLots" && (
              <div className="flex flex-col space-y-2 pl-4 mt-2">
                <Link
                  href="/#residential-lot-1"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Ayala Greenfield Estate
                </Link>
                <Link
                  href="/#residential-lot-2"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Arcilo
                </Link>
                <Link
                  href="/#residential-lot-3"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Ciela Aera Heights
                </Link>
                <Link
                  href="/#residential-lot-4"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Lanewood Hills
                </Link>
                <Link
                  href="/#residential-lot-5"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Miravera Altaraza
                </Link>
                <Link
                  href="/#residential-condo-6"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  The Courtyards, Vermosa
                </Link>
              </div>
            )}
          </div>

          <div className="w-full">
            <button
              onClick={() => toggleSubmenu("condominium")}
              className="w-full flex items-center gap-x-2 text-lg font-medium hover:text-gray-300 transition-colors duration-200 py-2"
            >
              CONDOMINIUMS
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  expandedMenu === "condominium" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMenu === "condominium" && (
              <div className="flex flex-col space-y-2 pl-4 mt-2">
                <Link
                  href="/#residential-condo-1"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Arbor Lanes
                </Link>
                <Link
                  href="/#residential-condo-2"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Gardencourt Residences
                </Link>
                <Link
                  href="/#residential-condo-4"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Parklinks North Tower
                </Link>
                <Link
                  href="/#residential-condo-6"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  The Residences at Azuela Cove
                </Link>
              </div>
            )}
          </div>
          <div className="w-full">
            <button
              onClick={() => toggleSubmenu("office")}
              className="w-full flex items-center gap-x-2 text-lg font-medium hover:text-gray-300 transition-colors duration-200  py-2"
            >
              OFFICE
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  expandedMenu === "office" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMenu === "office" && (
              <div className="flex flex-col space-y-2 pl-4 mt-2">
                <Link
                  href="/#office-space-1"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  One Vertis Plaza
                </Link>
              </div>
            )}
          </div>

          <div className="w-full">
            <button
              onClick={() => toggleSubmenu("leisure")}
              className="w-full flex items-center gap-x-2 text-lg font-medium hover:text-gray-300 transition-colors duration-200  py-2"
            >
              LEISURE
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  expandedMenu === "leisure" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMenu === "leisure" && (
              <div className="flex flex-col space-y-2 pl-4 mt-2">
                <Link
                  href="/#leisure-rec-1"
                  className="text-sm hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Anvaya Cove
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/#inquiry-form"
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
