"use client";
import UserUpdateModal from "@/components/UserUpdateModal";
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";

const page = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  console.log(user);
  return (
    <div>
      {isPending ? (<div className="h-screen flex justify-center items-center"><span className="loading loading-spinner loading-xl text-purple-500 "></span></div>) : <div className="mt-4 shadow rounded-2xl flex flex-col justify-center items-center p-4 border border-purple-200 md:py-10 max-w-96 mx-auto ">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <div className="rounded-full overflow-hidden">
            <Image
              src={user?.image || "/default.jpg"}
              alt={user?.name}
              width={400}
              height={400}
              className="rounded-2xl"
              referrerPolicy="no-referrer"
            ></Image>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Name : {user?.name}</h1>
            <p className="text-lg">Email : {user?.email}</p>
            <UserUpdateModal></UserUpdateModal>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default page;
