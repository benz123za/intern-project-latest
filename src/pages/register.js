import React from "react";
import Register from "../components/register";

const Page = () => {
  return (
    <div className="flex">
      <div className="bg-beige w-full h-screen flex justify-center items-center ">
        <Register />
      </div>
      <div className="bg-blue-grey w-full h-screen flex justify-center items-center">
        <div className="flex justify-center items-center h-full">
          <img
            className="object-contain h-full"
            src="https://cdn.discordapp.com/attachments/1224566958159040552/1250367366412501045/Editing_body_text-amico.png?ex=66865e5a&is=66850cda&hm=608d0e0364774bcb88ee27023a5b832dedc808815df451526b2ffe0de6ec65c4&"
            alt="Amico"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
