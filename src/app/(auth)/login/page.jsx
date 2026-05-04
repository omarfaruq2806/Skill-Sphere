"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LogIn = () => {
  const handleLogIn = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
    });

    if(data){
      toast.success(`Welcome back`);
      console.log(data)
    }
    if(error){
      toast.error(error.message);
    }
    
  };

  const socialsignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      remember: false,
    });
  };

  return (
    <div className="flex items-center justify-center py-5 md:py-10">
      <form
        onSubmit={handleLogIn}
        className="border p-4 rounded-2xl border-gray-200 shadow-md "
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Log In</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="shadow  border border-gray-300 rounded w-full py-2 px-3 text-gray-700   "
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight "
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="font-bold py-2 px-4 rounded border border-purple-600 text-purple-500 w-full "
        >
          Log In
        </button>
        <p className="text-center mt-4 flex gap-2 border-b border-gray-200 pb-2">
          Don't have an account ?
          <Link href={"/signup"}>
            <span className="text-purple-500">Sign Up</span>
          </Link>
        </p>
        <button onClick={socialsignIn} className="font-bold mt-4 py-2 px-4 rounded border border-purple-600 text-purple-500 w-full flex justify-center gap-2 items-center">
          <FaGoogle />
          Log In With Google
        </button>
      </form>
    </div>
  );
};

export default LogIn;
