import Image from "next/image";
import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 bg-gray-500 py-2 px-2 rounded-md">
      <Image
        src="/images/icon-fb.png"
        width={500}
        height={500}
        alt="social-icon"
        className="text-white w-[28px]"
      />
      <Image
        src="/images/icon-insta.png"
        width={500}
        height={500}
        alt="social-icon"
        className="text-white w-[28px]"
      />
      <Image
        src="/images/icon-email.png"
        width={500}
        height={500}
        alt="social-icon"
        className="text-white w-[28px]"
      />
      <Image
        src="/images/icon-whatsapp.png"
        width={500}
        height={500}
        alt="social-icon"
        className="text-white w-[28px]"
      />
      <Image
        src="/images/icon-call.png"
        width={500}
        height={500}
        alt="social-icon"
        className="text-white w-[28px]"
      />
    </div>
  );
};

export default SocialIcons;
