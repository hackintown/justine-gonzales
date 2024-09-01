"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    project: "",
    firstName: "",
    lastName: "",
    phone: "",
    cityCountry: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.firstName || !formData.phone || !formData.email) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!termsAccepted) {
      setErrorMessage("You must agree to the terms and conditions.");
      return;
    }

    if (form.current) {
      emailjs
        .sendForm("service_s5580dy", "template_y6aoavu", form.current, {
          publicKey: "LErNgH3JyfVeNPXvH",
        })
        .then(
          () => {
            setSuccessMessage("Your inquiry has been sent successfully!");
            setFormData({
              project: "",
              firstName: "",
              lastName: "",
              phone: "",
              cityCountry: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setErrorMessage(
              "Failed to send your inquiry. Please try again later."
            );
          }
        );
    } else {
      console.error("Form element is null");
    }
  };
  return (
    <footer>
      <div className="bg-[#0d1210] text-white py-8 px-4">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:text-left w-full">
            <Image
              src="/images/header-logo.webp" // Consider using WebP format
              width={280} // Adjusted to the max required width
              height={280} // Adjusted to the max required height
              alt="footer-logo"
              priority
              className="max-w-[250px] lg:max-w-[280px] w-full h-auto mb-4"
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
                  src="/images/icon-call.webp"
                  width={500}
                  height={500}
                  alt="Phone"
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" aria-label="WhatsApp">
                <Image
                  src="/images/icon-whatsapp.webp"
                  alt="WhatsApp"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" aria-label="Email">
                <Image
                  src="/images/icon-email.webp"
                  alt="Email"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Image
                  src="/images/icon-fb.webp"
                  alt="Facebook"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Image
                  src="/images/icon-insta.webp"
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
            <form
              id="inquiry-form"
              className="flex flex-col"
              ref={form}
              onSubmit={handleSubmit}
            >
              <label className="sr-only" htmlFor="project">
                Select Project
              </label>
              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="bg-[#344630] text-white p-2 rounded placeholder-white font-light"
              >
                <option>Select Project</option>
                <option value="Residential Lots">Residential Lots</option>
                <option value="Condominiums">Condominiums</option>
                <option value="Office">Office</option>
                <option value="Leisure">Leisure</option>
              </select>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-[#848685] text-white p-2 rounded placeholder-white font-light"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-[#848685] text-white p-2 rounded placeholder-white font-light"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#848685] text-white p-2 rounded placeholder-white font-light"
                />
                <input
                  type="text"
                  name="cityCountry"
                  placeholder="City/Country"
                  value={formData.cityCountry}
                  onChange={handleChange}
                  className="bg-[#848685] text-white p-2 rounded placeholder-white font-light"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#848685] text-white p-2 mt-4 rounded placeholder-white font-light"
              />
              <textarea
                placeholder="Type your message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#848685] text-white p-2 mt-4 rounded placeholder-white font-light"
              />
              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
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
            {successMessage && (
              <p className="text-green-500 mt-4">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container w-full py-4">
          <Image
            src="/images/ayalaland-logo.webp"
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
