"use client";
import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    // console.log(name,email, photo);
    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email, // required
      password: password, // required
      image: photo,
      // callbackURL: "https://example.com/callback",
    });
    if (error) {
      alert(error.message);
    }
    if (data) {
      alert("Sign Up Successfully");
      console.log(data);
    }
  };
  const socialsignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center py-5 md:py-10">
        <form
          onSubmit={handleSignUp}
          className="border p-4 rounded-2xl border-gray-200 shadow-md max-w-md"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="shadow  border border-gray-300 rounded w-full py-2 px-3 text-gray-700   "
              placeholder="Enter your name"
            />
          </div>
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
            <label className="block text-gray-700 font-bold mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="photo"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight "
              placeholder="Enter your image URL"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
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
            Register Now
          </button>
          
        <p className="text-center mt-4 flex gap-2 border-b border-gray-200 pb-2">
          Don't have an account ?
          <Link href={"/login"}>
            <span className="text-purple-500">Log In</span>
          </Link>
        </p>
        <button onClick={socialsignIn} className="font-bold mt-4 py-2 px-4 rounded border border-purple-600 text-purple-500 w-full flex justify-center gap-2 items-center">
          <FaGoogle />
          Log In With Google
        </button>
        </form>
        
      </div>
    </div>
  );
};

export default SignUp;
