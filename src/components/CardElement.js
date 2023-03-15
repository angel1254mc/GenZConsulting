import React from "react";
import { animated as a } from "react-spring";

const CardElement = ({ header, link, image, trail }) => {
  return (
    <a.div
      style={{
        background:
          `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(144, 72, 226, 0.65) 100%),  url(${link})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ...trail}}
      
     
      className="card-bg flex flex-col justify-between rounded-md gap-y-4 w-[170px] xl:w-[200px] min-h-[210px] xl:min-h-[240px] py-10 px-4 bg-violet-400"
    >
      <h3 className="leading-1 m-0 text-base xl:text-lg font-bold text-white w-4/5">
        {header}
      </h3>
      <div className="w-full mb-4 flex">
        <button type="button" className="read-more-button bg-teal-500 text-white xl:text-lg px-4 py-1 rounded-md">
          Read More
        </button>
      </div>
    </a.div>
  );
};

export default CardElement;
