import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-2 bg-gray-500 py-2 px-1 rounded-md">
      <FaFacebookF className="text-white h-6 w-6" />
      <FaInstagram className="text-white h-6 w-6" />
      <FaEnvelope className="text-white h-6 w-6" />
      <FaWhatsapp className="text-white h-6 w-6" />
      <FaPhone className="text-white h-6 w-6" />
    </div>
  );
};

export default SocialIcons;
