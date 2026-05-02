"use client";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";

const page = () => {
  const { data, isPending } = useSession();
  console.log(data);
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <div>
          {/* <Image src={data?.user?.image} width={200} height={200}></Image> */}
        </div>
        <h1>{data?.user?.name}</h1>
        <h1>{data?.user?.email}</h1>
      </div>
    </div>
  );
};

export default page;
