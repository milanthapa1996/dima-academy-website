"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const menuList = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Notes", href: "/notes" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="py-3 sticky top-0 left-0 z-50 bg-green-700 px-5">
      <ul className="hidden lg:flex items-center">
        <div className={`mr-4 ${isSticky ? "block" : "hidden"}`}>
          <Image
            className="rounded-md"
            src="/images/dima_minimal_logo.jpg"
            alt="dima logo"
            width={50}
            height={50}
          />
        </div>
        {menuList.map((item) => (
          <li
            key={item.name}
          >
            <Link
              href={item.href}
              className="pr-4 text-white text-sm font-medium hover:underline underline-offset-4"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
