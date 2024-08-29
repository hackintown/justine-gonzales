import Image from "next/image";
import Link from "next/link";
import React from "react";
import iconInsta from "../../../../public/images/icon-insta.webp";
import iconEmail from "../../../../public/images/icon-email.webp";
import iconWhatsaap from "../../../../public/images/icon-whatsapp.webp";
import iconCall from "../../../../public/images/icon-call.webp";

const SocialIcons: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-3 py-2 px-2 rounded-md">
      <Link href="https://web.facebook.com/profile.php?id=61563007072598" passHref>
        <Image
          src="/images/icon-fb.webp"
          width={28}
          height={28}
          alt="Facebook"
          className="text-white"
        />
      </Link>
      <Link href=" https://www.instagram.com/ayalalandluxuryhomes" passHref>
        <Image
          src={iconInsta}
          width={28}
          height={28}
          alt="Instagram"
          className="text-white"
        />
      </Link>
      <Link href="mailto:gonzales.justine@ayalalandpremier.com" passHref>
        <Image
          src={iconEmail}
          width={28}
          height={28}
          alt="Email"
          className="text-white"
        />
      </Link>
      <Link href="https://wa.me/639171775588" passHref>
        <Image
          src={iconWhatsaap}
          width={28}
          height={28}
          alt="WhatsApp"
          className="text-white"
        />
      </Link>
      <Link href="tel:+639171775588" passHref>
        <Image
          src={iconCall}
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
