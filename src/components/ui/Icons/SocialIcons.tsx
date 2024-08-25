import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-3 py-2 px-2 rounded-md">
      <Link href="https://www.facebook.com/alpjustine" passHref>
        <Image
          src="/images/icon-fb.png"
          width={28}
          height={28}
          alt="Facebook"
          className="text-white"
        />
      </Link>
      <Link href="https://www.instagram.com" passHref>
        <Image
          src="/images/icon-insta.png"
          width={28}
          height={28}
          alt="Instagram"
          className="text-white"
        />
      </Link>
      <Link href="mailto:gonzales.justine@ayalalandpremier.com" passHref>
        <Image
          src="/images/icon-email.png"
          width={28}
          height={28}
          alt="Email"
          className="text-white"
        />
      </Link>
      <Link href="https://wa.me/639171775588" passHref>
        <Image
          src="/images/icon-whatsapp.png"
          width={28}
          height={28}
          alt="WhatsApp"
          className="text-white"
        />
      </Link>
      <Link href="tel:+639171775588" passHref>
        <Image
          src="/images/icon-call.png"
          width={28}
          height={28}
          alt="Call"
          className="text-white"
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
