import { Button, Card } from "flowbite-react";
import React from "react";
import Searchbar from "../components/searchbar";
import CustomCard from "../components/custom-card";
import Image from "next/image";

const Page = () => {
  const cardData = [
    {
      title:
        "Sony WH-1000XM5 Wireless Buy in installments with Flowbite Wallet",
      detail:
        "This generation has some improvements, including a longer continuous battery life.",
      image:
        "https://cdn.discordapp.com/attachments/1247770579335909418/1258340373692944477/Image.png?ex=6687b04b&is=66865ecb&hm=932fccf010ec1e17272c0f8d65d5b9f924aadb860e3cb9a62fe80083419f1a5b&",
    },
    // {
    //   title: "Canon EOS R7 Mirrorless Camera with 18-150mm Lens",
    //   detail:
    //     "This generation has some improvements, including a longer continuous battery life.",
    //   image:
    //     "https://www.zoomcamera.net/wp-content/uploads/2022/06/Canon-EOS-R7-Mirrorless-Camera-with-18-150mm-Lens-1.jpg",
    // },
    // {
    //   title: "Canon EOS R7 Mirrorless Camera with 18-150mm Lens",
    //   detail:
    //     "This generation has some improvements, including a longer continuous battery life.",
    //   image:
    //     "https://www.zoomcamera.net/wp-content/uploads/2022/06/Canon-EOS-R7-Mirrorless-Camera-with-18-150mm-Lens-1.jpg",
    // },
    // {
    //   title: "Canon EOS R7 Mirrorless Camera with 18-150mm Lens",
    //   detail:
    //     "This generation has some improvements, including a longer continuous battery life.",
    //   image:
    //     "https://www.zoomcamera.net/wp-content/uploads/2022/06/Canon-EOS-R7-Mirrorless-Camera-with-18-150mm-Lens-1.jpg",
    // },
  ];
  return (
    <>
      <div className="bg-white w-full h-20 item-center flex justify-center">
        <div className="bg-white w-full h-20 flex items-center justify-left">
          <div className="bg-white flex gap-4 items-center justify-center h-9 whitespace-nowrap">
            <Button className="w-full h-full text-black bg-transparent border-none hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700">
              Home
            </Button>
            <Button className="w-full h-full text-black bg-transparent border-none hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700">
              Review
            </Button>
            <Button className="w-full h-full text-black bg-transparent border-none hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700">
              My Review
            </Button>
          </div>
        </div>
        <div className="bg-white w-full flex items-center justify-center text-xl">
          Affiliate
        </div>
        <div className="bg-white w-full flex items-center justify-center">
          <Searchbar />
        </div>
      </div>

      <div className="relative inset-0">
        <img
          className="object-cover w-full h-full"
          src="/images/watch.png"
          alt="Background Image"
        />
        <div className="absolute inset-0 flex items-end ">
          <div className="text-white my-72 mx-64">
            <Button
              type="submit"
              className="w-96 text-white bg-blue-grey border-none hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
            >
              Show More
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white w-full flex items-center justify-center text-5xl	py-32">
        Beauty Inspired
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-6">
          {cardData.map((card, index) => (
            <CustomCard
              key={index}
              title={card.title}
              detail={card.detail}
              image={card.image}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="relative inset-0">
          <Image
            src="/images/character.png"
            alt="Character Image"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 flex items-end ">
            <div className="text-white my-72 mx-64">
              <Button
                type="submit"
                className="w-96 text-white bg-blue-grey border-none hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
              >
                Show More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative inset-0">
            <img
              className="object-cover w-full h-full"
              src={
                "https://cdn.discordapp.com/attachments/1247770579335909418/1258354003314475090/Card-1.png?ex=6687bcfd&is=66866b7d&hm=792d506f70f4459187f8153f6a143a143a6b23bcc0beab6649957bca93d88a15&"
              }
              alt="Background Image"
            />
            <div className="absolute inset-0 flex items-end ">
              <div className="text-white my-72 mx-64">
                <Button
                  type="submit"
                  className="w-96 text-white bg-blue-grey border-none hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
                >
                  Show More
                </Button>
              </div>
            </div>
          </div>
          <div className="relative inset-0">
            <Image
              src="/images/watch1.png"
              alt="Character Image"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 flex items-end ">
              <div className="text-white  justify-center flex">
                <Button
                  type="submit"
                  className="w-96 text-white bg-blue-grey border-none hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
                >
                  Show More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
