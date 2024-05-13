import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="home-bg flex justify-center" >
      <div className="w-1/2 flex justify-center items-center">
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
    </div>
  );
};

export default Hero;
