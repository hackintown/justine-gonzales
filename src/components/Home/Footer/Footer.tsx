import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-[#0d1210] text-white py-8 px-4">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:text-left w-full">
            <Image
              src="/images/header-logo.png" // Consider using WebP format
              width={280} // Adjusted to the max required width
              height={280} // Adjusted to the max required height
              alt="footer-logo"
              priority
              className="max-w-[250px] lg:max-w-[280px] w-full mb-4"
              sizes="(max-width: 1024px) 250px, 280px" // Serve smaller size for smaller screens
            />
            <p className="mt-2 text-center font-light text-sm">
              18F Tower One & Exchange Plaza
              <br />
              Ayala Triangle, Ayala Avenue,
              <br />
              Makati City
            </p>
            <div className="flex justify-center mt-4 space-x-4">
              {/* Replace with actual icons */}
              <Link href="#" aria-label="Phone">
                <Image
                  src="/images/icon-call.png"
                  width={500}
                  height={500}
                  alt="Phone"
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" aria-label="WhatsApp">
                <Image
                  src="/images/icon-whatsapp.png"
                  alt="WhatsApp"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" aria-label="Email">
                <Image
                  src="/images/icon-email.png"
                  alt="Email"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Image
                  src="/images/icon-fb.png"
                  alt="Facebook"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Image
                  src="/images/icon-insta.png"
                  alt="Instagram"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:ml-8 max-w-xl w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Which project are you interested in?
            </h2>
            <form id="inquiry-form" className="flex flex-col">
              <label className="sr-only" htmlFor="project">
                Select Project
              </label>
              <select
                id="project"
                className="bg-[#344630] text-white p-2 rounded placeholder-white font-light"
              >
                <option>Select Project</option>
                <option>Select Project</option>
                <option>Select Project</option>
                <option>Select Project</option>
              </select>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#848685] text-white p-2 rounded placeholder-white font-light"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#848685] text-white p-2 rounded placeholder-white font-light"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-[#848685] text-white p-2 rounded placeholder-white font-light"
                />
                <input
                  type="text"
                  placeholder="City/Country"
                  className="bg-[#848685] text-white p-2 rounded placeholder-white font-light"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#848685] text-white p-2 mt-4 rounded placeholder-white font-light"
              />
              <textarea
                placeholder="Type your message here..."
                className="bg-[#848685] text-white p-2 mt-4 rounded placeholder-white font-light"
              />
              <div className="mt-4 flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#344630] text-white p-2 rounded mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container w-full py-4">
          <Image
            src="/images/ayalaland-logo.png"
            width={500}
            height={500}
            quality={75} // Reduced quality for optimization
            loading="lazy"
            alt="footer-logo"
            className="max-w-[200px] w-full mx-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
