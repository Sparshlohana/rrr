import React from "react";
import serviceData from "./servicesData";

const ServiceCard = ({ service }) => {
  return (
    <div className="card sm:min-h-96 md:min-h-full place-self-stretch bg-white shadow-boxShadow rounded-lg p-6">
      <img
        src={service.url}
        alt={service.title}
        className="w-20 h-20 object-cover"
      />
      <h3 className="font-bold text-xl sm:text-4xl md:text-2xl py-4">
        {service.title}
      </h3>
      <p className="font-medium leading-7 text-base sm:text-3xl md:text-base tracking-tight text-slate-500">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
