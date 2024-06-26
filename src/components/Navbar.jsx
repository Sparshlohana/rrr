import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed top-0 left-0 right-0 bottom-auto w-full h-[90px] max-w-[1290px] px-2 sm:px-0 m-auto">
      <div className="flex items-center">
        <h1 className="font-black text-3xl cursor-default">
          <Link href={"/"}>RRR</Link>
        </h1>
      </div>
      <ul className="font-bold hidden md:flex gap-8 p-4 text-lg ml-16">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/service"}>Our Service</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link href={"/about"}>About Us</Link>
        </li>
        <li>
          <Link href={"/pricing"}>Pricing</Link>
        </li>
      </ul>
      <div className="hidden md:flex items-center">
        <button className="px-3 py-1.5 bg-blue-600 font-bold rounded-full text-white">
          Call 24/7: 7874712018
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <img
          src="/hamburger-menu.svg"
          alt="hamburger menu"
          className="w-8 h-8"
        />
      </div>
    </nav>
  );
};

export default Navbar;
