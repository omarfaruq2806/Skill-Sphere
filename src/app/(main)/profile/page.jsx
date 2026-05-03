"use client";
import UserUpdateModal from "@/components/UserUpdateModal";
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";

const page = () => {
  const userdata = authClient.useSession();
  const user = userdata.data?.user;
  console.log(user);
  return (
    <div className="mt-4 shadow rounded-2xl flex flex-col justify-center items-center p-4 border border-gray-200 md:py-10 max-w-96 mx-auto">
      <h1 className="text-3xl font-bold">Profile</h1>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <div >
          <Image
            src={user?.image}
            alt={user?.name}
            width={350}
            height={350}
            className="rounded-2xl"
            referrerPolicy="no-referrer"
          ></Image>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{user?.name}</h1>
          <p className="text-lg">{user?.email}</p>
          <UserUpdateModal></UserUpdateModal>
        </div>
      </div>
    </div>
  );
};

export default page;
