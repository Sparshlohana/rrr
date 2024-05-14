import React from "react";
import serviceData from "./servicesData";
import ServiceCard from "./ServiceCard";
import WhyUs from "@/components/WhyUs";

const Service = () => {
  return (
    <>
      <section>
        {/*
         ** Feature Image Start
         */}
        <div className="feature-img bg-service-gradient-radial bg-cover bg-center h-[515px] relative">
          <div className="services-headings w-full md:w-auto absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center leading-relaxed px-4">
            <h1 className="text-7xl md:text-8xl font-black w-full text-white mb-4 tracking-tight">
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-white">
              {`Don't worry, we've got you covered! Our reliable roadside
              assistance service is just a call away, ready to help you get back
              on the road swiftly and safely.`}
            </p>
          </div>
        </div>
        {/* Feature Image End */}

        {/*
         ** Services Start
         */}
        <div className="services-wrapper max-w-8xl mx-auto py-16 px-4">
          <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight">
            Breakdown Assistance
          </h2>
          <div className="breakdown-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pt-8">
            {serviceData.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl pt-12 tracking-tight">
            Repair and Service
          </h2>
          <div className="breakdown-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pt-8">
            {serviceData.slice(6, 12).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl pt-12 tracking-tight">
            Detailing Services
          </h2>
          <div className="breakdown-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pt-8">
            {serviceData.slice(12, 18).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
        {/* Services End */}
      </section>
      <WhyUs />
    </>
  );
};

export default Service;
