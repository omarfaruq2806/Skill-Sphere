"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children }) => {
const pathname = usePathname();
const isActive = pathname === href;
  return (
    <div>
      <Link href={href} className={`text-lg ${isActive && "text-purple-600 border-b-2" }`}>{children}</Link>
    </div>
  );
};

export default Navlink;
