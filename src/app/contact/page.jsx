import WhyUs from "@/components/WhyUs";
import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      id: "1",
      name: "ADDRESS",
      url: "/location.png",
      subText: "25566 Hc 1, Ahmedabad, Gujarat, INDIA - 382350",
    },
    { id: "2", name: "PHONE", url: "/phone.png", subText: "+91 88668 87799" },
    {
      id: "3",
      name: "EMAIL",
      url: "/email.png",
      subText: "rapidroadresQ@gmail.com",
    },
  ];

  return (
    <>
      <section>
        {/*
         ** Feature Image Start
         */}
        <div className="feature-img bg-contact-gradient bg-cover bg-center h-[515px] relative">
          <div className="services-headings w-full md:w-auto absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center leading-relaxed px-4">
            <h1 className="text-7xl md:text-8xl font-black w-full text-white mb-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-white">
              {`Don't worry, we've got you covered! Our reliable roadside assistance service is just a call away, ready to help you get back on the road swiftly and safely.`}
            </p>
          </div>
        </div>
        {/* Feature Image End */}

        {/* Contect Info and Message Seaction */}

        <div
          style={{
            background: "linear-gradient(180deg, #b6b7ff 0%, #f7fbff 100%)",
          }}
          className="h-[800px] flex flex-wrap"
        >
          <div className="flex  max-w-7xl h-[700px]  w-full  m-auto justify-between items-center">
            {/* Contact Info  */}

            <div className="flex flex-wrap gap-9 w-1/2 flex-col">
              {contactInfo.map((contact) => {
                return (
                  <div className="flex gap-3 items-center" key={contact.id}>
                    <div>
                      <img
                        className="h-9"
                        src={contact.url}
                        alt="Location Image"
                      />
                    </div>
                    <div>
                      <p className="text-[#838383] text-sm font-semibold">
                        {contact.name}
                      </p>
                      <h2 className="text-base font-semibold">
                        {contact.subText}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Message Form */}

            <div>
              <form class="flex flex-col flex-wrap gap-3">
                <h2 className="font-bold text-black text-lg">
                  Let’s connect constellations
                </h2>
                <p className="font-medium text-xs">
                  Let's align our constellations! Reach out and let the magic of
                  collaboration <br /> illuminate our skies.
                </p>
                <div class="flex justify-center gap-3 items-center">
                  <input
                    class="h-[30px] py-5 px-2 rounded-3xl shadow-md outline-none"
                    required
                    type="text"
                    minLength="4"
                    maxLength="8"
                    placeholder="First Name"
                  />
                  <input
                    class="h-[30px] py-5 px-2 rounded-3xl shadow-md outline-none"
                    required
                    type="text"
                    minLength="4"
                    maxLength="8"
                    placeholder="Last Name"
                  />
                </div>
                <input
                  class="h-[30px] py-5 px-2 rounded-3xl shadow-md outline-none"
                  required
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  class="h-[30px] py-5 px-2 rounded-3xl shadow-md outline-none"
                  required
                  type="tel"
                  minLength="11"
                  placeholder="Phone Number"
                />
                <textarea
                  class="h-[70px] py-5 px-2 rounded-3xl shadow-md outline-none"
                  required
                  type="text"
                  placeholder="Messege"
                />

                <div class="flex justify-center items-center">
                  <button class="bg-[#5356ff] rounded-[30px] font-semibold text-md py-2 text-white w-full">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
    </>
  );
};

export default Contact;
