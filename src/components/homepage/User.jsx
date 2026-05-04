"use client";
import { authClient, signOut } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLogin } from "react-icons/ci";

const User = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  const signout = async () => {
    await authClient.signOut();
  };
  return (
    <div>
      {isPending ? (
        <div className=" flex justify-center items-center"><span className="loading loading-spinner loading-xl text-purple-500 flex justify-center"></span></div>
      ) : user ? (
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={user?.image || "/default.jpg"}
              width={32}
              height={32}
              alt={user?.name || "user"}
            />
          </div>

          <span>Welcome, {user?.name}</span>

          <button
            onClick={signout}
            className="btn text-purple-500 border-purple-500"
          >
            Logout
          </button>
        </div>
      ) : (
        <ul className="flex flex-col items-center md:flex-row gap-3">
          <li>
            <Link href="/login">
              <button className="flex items-center gap-2 btn text-purple-500 border-purple-500">
                <CiLogin />
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <button className="btn text-purple-500 border-purple-500">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default User;
