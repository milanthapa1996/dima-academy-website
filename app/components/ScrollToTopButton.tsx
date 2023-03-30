"use client"
import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    if (scrollHeight > windowHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
    title="Scroll To Top"
      className={`fixed bottom-4 right-4 z-50 rounded-full p-2 text-white bg-green-700 focus:outline-none ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <HiOutlineArrowNarrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
