"use client";
import { authClient, signOut } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLogin } from "react-icons/ci";

const User = () => {
  const userdata = authClient.useSession();
  const user = userdata.data?.user;
  const signout =async ()=>{
   await authClient.signOut();
  }
  return (
    <div>
      {!user && (
        <div>
          <ul className="flex gap-3">
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
                <button className="flex items-center gap-2 btn text-purple-500 border-purple-500">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {user && (
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring-2 ring-offset-2">
              {/* <Image
                src={user?.image || '/default.jpg'}
                width={200}
                height={200}
                alt={user?.name || "user"}
                refererPolicy="no-referrer"
              /> */}
            </div>
          </div>
          <span>{user?.name}</span>
          <button onClick={signout} className="btn text-purple-500 border-purple-500">Logout</button>
        </div>
      )}
    </div>
  );
};

export default User;
