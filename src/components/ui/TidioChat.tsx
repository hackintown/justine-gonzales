"use client";

import { useEffect } from "react";

const TidioChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = process.env.NEXT_PUBLIC_TIDIO_URL || ""; // Load the Tidio script from the environment variable
    script.async = true;
    script.defer = true;
    document.body.appendChild(script); // Append the script to the body

    // Cleanup script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI, as this is just for loading the script
};

export default TidioChat;
