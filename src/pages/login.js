import Login from "@/components/login";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex">
      <div className="bg-beige w-full h-screen flex justify-center items-center ">
        <Login />
      </div>
      <div className="bg-blue-grey w-full h-screen flex justify-center items-center">
        <div className="flex justify-center items-center h-full">
          <Image
            src="/images/character.png"
            alt="Character Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
