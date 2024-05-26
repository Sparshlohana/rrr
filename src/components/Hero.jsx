import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="home-bg flex justify-center relative" >
        <div className="w-1/2 flex justify-center items-center ">
          <Image src={"/homeIcon.png"} height={500} width={600} alt="Home Img" className=" object-cover h-[600px]" />
        </div>
        <div className="w-1/2 flex  flex-col justify-center gap-10 pr-7">
          <h2 className="uppercase text-[#5356FF] font-extrabold text-2xl">
            emergency road service provider
          </h2>
          <h1 className="text-8xl font-black tracking-tight">
            Need Instant Roadside Help?
          </h1>
          <p className="text-2xl font-medium leading-relaxed tracking-tight">
            {
              "Don't worry, we've got you covered! Our reliable roadside assistance service is just a call away, ready to help you get back on the road swiftly and safely."
            }
          </p>
          <div className="flex gap-5">
            <button class="bg-[#5356ff] shadow-md rounded-full px-4 py-2 text-white font-semibold cursor-pointer">Call Us Now</button>
            <button class="bg-gray-100 border border-gray-800 rounded-full px-5 font-semibold cursor-pointer">Learn More</button>
          </div>
        </div>
        <svg className="absolute -z-10 -bottom-10" viewBox="0 0 1440 998" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5" filter="url(#filter0_b_2540_3350)">
            <path d="M0 935V0L1440 1.00015V935C1440 935 1076.5 794.079 720 935C363.5 1075.92 0 935 0 935Z" fill="url(#paint0_linear_2540_3350)" />
          </g>
          <defs>
            <filter id="filter0_b_2540_3350" x="-4" y="-4" width="1448" height="1005.63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2540_3350" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2540_3350" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_2540_3350" x1="750.945" y1="1.00015" x2="750.945" y2="1019.15" gradientUnits="userSpaceOnUse">
              <stop offset="0.347166" stop-color="#F7FBFF" />
              <stop offset="0.80465" stop-color="#5356FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Hero;
