import React from "react";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section
      className="whyus-main-wrapper w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(247,251,255,0.5) 0%, rgba(222,181,255,1) 50%, rgba(247,251,255,0.5) 100%)",
      }}
    >
      <div className="whyus-inner max-w-8xl m-auto grid md:grid-cols-2 justify-between gap-4 px-4 md:px-0 py-10 md:py-16">
        {/*
         ** Why Us Left Section
         */}
        <div className="whyus-left">
          <h3 className="text-xl font-extrabold uppercase py-4 text-[#727272]">
            Why us
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight capitalize md:leading-tight">
            24/7 towing services is what we do
          </h2>
          <p className="text-xl font-medium py-4 w-4/5 text-slate-500">
            We are a well-equipped towing service available to help with towing
            a car 24/7 we provide a fast, affordable, friendly, and reliable car
            towing service.
          </p>

          <div className="whyus-detail flex gap-4">
            <span className="rounded-full flex items-center justify-center bg-primary-color p-2 w-8 h-8 sm:w-11  sm:h-11 border border-black">
              <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25502 9.3766C2.9624 9.05597 2.5526 8.86143 2.11457 8.8352C1.67654 8.80896 1.24564 8.95316 0.915386 9.23648C0.585136 9.51981 0.382193 9.91939 0.350609 10.3485C0.319025 10.7776 0.461349 11.2016 0.746689 11.5285L6.58002 18.0643C6.73296 18.2357 6.92076 18.3739 7.13137 18.47C7.34199 18.5661 7.57077 18.6179 7.80303 18.6222C8.03529 18.6265 8.26591 18.5832 8.48008 18.495C8.69425 18.4068 8.88725 18.2757 9.04669 18.11L23.2134 3.40453C23.5168 3.08926 23.6801 2.66874 23.6673 2.23545C23.6545 1.80217 23.4666 1.39162 23.145 1.09413C22.8234 0.796634 22.3945 0.636562 21.9525 0.649125C21.5106 0.661688 21.0918 0.845858 20.7884 1.16112L7.88002 14.5595L3.25502 9.3766Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="content">
              <h3 className="text-2xl font-extrabold">
                We can tow any vehicle
              </h3>
              <p className="text-lg font-medium py-2 w-4/5 text-slate-500">
                We operate new, clean and professional towing vehicles and
                equipment.
              </p>
            </div>
          </div>
          <div className="whyus-detail flex gap-4 pt-4">
            <span className="rounded-full flex items-center justify-center bg-primary-color p-2 w-8 h-8 sm:w-11  sm:h-11 border border-black">
              <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25502 9.3766C2.9624 9.05597 2.5526 8.86143 2.11457 8.8352C1.67654 8.80896 1.24564 8.95316 0.915386 9.23648C0.585136 9.51981 0.382193 9.91939 0.350609 10.3485C0.319025 10.7776 0.461349 11.2016 0.746689 11.5285L6.58002 18.0643C6.73296 18.2357 6.92076 18.3739 7.13137 18.47C7.34199 18.5661 7.57077 18.6179 7.80303 18.6222C8.03529 18.6265 8.26591 18.5832 8.48008 18.495C8.69425 18.4068 8.88725 18.2757 9.04669 18.11L23.2134 3.40453C23.5168 3.08926 23.6801 2.66874 23.6673 2.23545C23.6545 1.80217 23.4666 1.39162 23.145 1.09413C22.8234 0.796634 22.3945 0.636562 21.9525 0.649125C21.5106 0.661688 21.0918 0.845858 20.7884 1.16112L7.88002 14.5595L3.25502 9.3766Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="content">
              <h3 className="text-2xl font-extrabold">
                Fast, safe and affordable
              </h3>
              <p className="text-lg font-medium py-2 w-4/5 text-slate-500">
                We provide a fast, affordable, friendly, and reliable car towing
                service.
              </p>
            </div>
          </div>
        </div>

        {/*
         ** Why Us Right Section
         */}
        <div className="whyus-right">
          <div className="img">
            <Image
              src={"/whyus-img.svg"}
              height={400}
              width={500}
              alt="Why Us Img"
              className="float-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
