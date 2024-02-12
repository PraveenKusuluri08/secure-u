"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { log } from "console";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToogleTheme=()=>{
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null;
  }
  
  return (
    <button
      className={` bg-slate-200 dark:bg-[#212933] `}
      onClick={()=>handleToogleTheme()}
    >
      {theme === "light" ? <CiLight/>:<MdLightMode/>}
    </button>
  );
};

export default ThemeSwitcher;
