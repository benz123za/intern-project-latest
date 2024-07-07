import React from "react";

const CustomCard = ({ image, detail, title }) => {
  return (
    <div>
      <div style={{ width: "auto", height: "525px" }}>
        <div className="bg-white border-solid border-2 border-grey/200 w-full h-full flex justify-center rounded-md">
          <div className="bg-silver w-96 h-56 m-4">
            <img
              className="object-cover w-full h-full"
              src={image}
              alt="Background Image"
            />
            <div>{title}</div>
            <div>{detail}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
