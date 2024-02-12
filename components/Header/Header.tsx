"use client";
import Link from "next/link";
import React, { useState } from "react";

const MainHeader = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="flex items-center justify-center w-full h-16 md:h-20 lg:h-[5rem] bg-body/80 -mb-[1px] fixed top-0 left-0 z-50 shadow-lg px-6 md:px-10 lg:px-14 backdrop-blur-md">
      <nav className="flex items-center justify-between w-full">
        <div className="relativew-14 h-14 cursor-pointer ">
          <span className="font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-500 inline-block text-transparent bg-clip-text text-xl">
            Secure U
          </span>
        </div>
        <div className="flex space-x-5">
          <ul className="flex space-x-5">
            <li className="text-sm uppercase hover:border-b">
              <div className="text-base hover:text-blue">
                <Link href="/">Why Use Us</Link>
              </div>
            </li>
            <li className="text-sm uppercase hover:border-b">
              <div className="text-base hover:text-blue">
                <Link href="#features" scroll={false}>Features</Link>
              </div>
            </li>
            <li className="text-sm uppercase hover:border-b">
              <div className="text-base hover:text-blue">
                <Link href="/#contactus">Contact Us</Link>
              </div>
            </li>
            <li className="text-sm uppercase hover:border-b">
              <div className="text-base hover:text-blue">
                <Link href="/login">Login</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
