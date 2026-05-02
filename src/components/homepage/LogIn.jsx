import Link from "next/link";
import React from "react";
import { CiLogin } from "react-icons/ci";

const LogIn = () => {
  return (
    <Link
      href="/login"
      className="flex items-center text-purple-600 gap-2 font-medium text-xl"
    >
      Log In <CiLogin className="text-2xl" />
    </Link>
  );
};

export default LogIn;
