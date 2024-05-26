"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const url = usePathname();

  return (
    <>
      {
        url !== '/login' && <footer
          className="py-20 w-full bg-cover bg-no-repeat min-h-80"
          style={{ backgroundImage: "url('/footer-bg.png')" }}
        >
          <div className="footer-inner-wrapper max-w-8xl m-auto grid sm:grid-cols-2 md:grid-cols-6 justify-between gap-8 md:gap-24 px-4 pt-28">
            {/*
         ** footer-about Start
         */}
            <div className="footer-about md:col-span-2">
              <h4 className="text-white font-black text-3xl">RRR</h4>
              <div className="flex items-center py-4 gap-2">
                <span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 13.7297C13.723 13.7297 15.1199 12.3329 15.1199 10.6097C15.1199 8.88662 13.723 7.48975 11.9999 7.48975C10.2768 7.48975 8.87988 8.88662 8.87988 10.6097C8.87988 12.3329 10.2768 13.7297 11.9999 13.7297Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                    <path
                      d="M3.61971 8.78981C5.58971 0.129807 18.4197 0.139807 20.3797 8.79981C21.5297 13.8798 18.3697 18.1798 15.5997 20.8398C13.5897 22.7798 10.4097 22.7798 8.38971 20.8398C5.62971 18.1798 2.46971 13.8698 3.61971 8.78981Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
                <p className="text-white font-medium">
                  Prestige Fintech, Gujarat International Finance Tec-City, Gujarat
                  - 382355
                </p>
              </div>
              <div className="flex items-center py-4 gap-2">
                <span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.97 19.1298C21.97 19.4898 21.89 19.8598 21.72 20.2198C21.55 20.5798 21.33 20.9198 21.04 21.2398C20.55 21.7798 20.01 22.1698 19.4 22.4198C18.8 22.6698 18.15 22.7998 17.45 22.7998C16.43 22.7998 15.34 22.5598 14.19 22.0698C13.04 21.5798 11.89 20.9198 10.75 20.0898C9.6 19.2498 8.51 18.3198 7.47 17.2898C6.44 16.2498 5.51 15.1598 4.68 14.0198C3.86 12.8798 3.2 11.7398 2.72 10.6098C2.24 9.46981 2 8.3798 2 7.3398C2 6.6598 2.12 6.0098 2.36 5.4098C2.6 4.7998 2.98 4.2398 3.51 3.7398C4.15 3.1098 4.85 2.7998 5.59 2.7998C5.87 2.7998 6.15 2.8598 6.4 2.9798C6.66 3.0998 6.89 3.2798 7.07 3.5398L9.39 6.8098C9.57 7.0598 9.7 7.2898 9.79 7.5098C9.88 7.7198 9.93 7.9298 9.93 8.1198C9.93 8.3598 9.86 8.5998 9.72 8.8298C9.59 9.0598 9.4 9.2998 9.16 9.5398L8.4 10.3298C8.29 10.4398 8.24 10.5698 8.24 10.7298C8.24 10.8098 8.25 10.8798 8.27 10.9598C8.3 11.0398 8.33 11.0998 8.35 11.1598C8.53 11.4898 8.84 11.9198 9.28 12.4398C9.73 12.9598 10.21 13.4898 10.73 14.0198C11.27 14.5498 11.79 15.0398 12.32 15.4898C12.84 15.9298 13.27 16.2298 13.61 16.4098C13.66 16.4298 13.72 16.4598 13.79 16.4898C13.87 16.5198 13.95 16.5298 14.04 16.5298C14.21 16.5298 14.34 16.4698 14.45 16.3598L15.21 15.6098C15.46 15.3598 15.7 15.1698 15.93 15.0498C16.16 14.9098 16.39 14.8398 16.64 14.8398C16.83 14.8398 17.03 14.8798 17.25 14.9698C17.47 15.0598 17.7 15.1898 17.95 15.3598L21.26 17.7098C21.52 17.8898 21.7 18.0998 21.81 18.3498C21.91 18.5998 21.97 18.8498 21.97 19.1298Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                </span>
                <p className="text-white font-medium">+603 4784 273 12</p>
              </div>
              <div className="flex items-center py-4 gap-2">
                <span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21.2998H7C4 21.2998 2 19.7998 2 16.2998V9.2998C2 5.7998 4 4.2998 7 4.2998H17C20 4.2998 22 5.7998 22 9.2998V16.2998C22 19.7998 20 21.2998 17 21.2998Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 9.7998L13.87 12.2998C12.84 13.1198 11.15 13.1198 10.12 12.2998L7 9.7998"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-white font-medium">rapidroadresq@gmail.com</p>
              </div>
            </div>
            {/* footer-about End */}

            {/*
         ** Our Product Start
         */}
            <div className="our-product md:col-start-3">
              <h4 className="text-white text-xl pb-6 font-extrabold">
                Our Product
              </h4>
              <ul>
                <li className="text-white py-1 font-medium">Career</li>
                <li className="text-white py-1 font-medium">Car</li>
                <li className="text-white py-1 font-medium">Packages</li>
                <li className="text-white py-1 font-medium">Features</li>
                <li className="text-white py-1 font-medium">Priceline</li>
              </ul>
            </div>
            {/* Our-Product End */}

            {/*
         ** Resourses Start
         */}
            <div className="footer-resourses md:col-start-4">
              <h4 className="text-white text-xl pb-6 font-extrabold">Resources</h4>
              <ul>
                <li className="text-white py-1 font-medium">Download</li>
                <li className="text-white py-1 font-medium">Help Centre</li>
                <li className="text-white py-1 font-medium">Guides</li>
                <li className="text-white py-1 font-medium">Partner Network</li>
                <li className="text-white py-1 font-medium">Cruises</li>
                <li className="text-white py-1 font-medium">Developer</li>
              </ul>
            </div>
            {/* Resourses End */}

            {/*
         ** About Start
         */}
            <div className="footer-about md:col-start-5">
              <h4 className="text-white text-xl pb-6 font-extrabold">About RRR</h4>
              <ul>
                <li className="text-white py-1 font-medium">Why choose us</li>
                <li className="text-white py-1 font-medium">Our Story</li>
                <li className="text-white py-1 font-medium">Investor Relations</li>
                <li className="text-white py-1 font-medium">Press Center</li>
                <li className="text-white py-1 font-medium">Advertise</li>
              </ul>
            </div>
            {/* About End */}

            {/*
         ** Follow Us Start
         */}
            <div className="footer-about md:col-start-6">
              <h4 className="text-white text-xl pb-6 font-extrabold">Follow Us</h4>
              <ul className="flex items-center gap-4">
                <li className="text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 10.0998V12.9998H16.6C16.8 12.9998 16.9 13.1998 16.9 13.3998L16.5 15.2998C16.5 15.3998 16.3 15.4998 16.2 15.4998H14V22.7998H11V15.5998H9.3C9.1 15.5998 9 15.4998 9 15.2998V13.3998C9 13.1998 9.1 13.0998 9.3 13.0998H11V9.7998C11 8.0998 12.3 6.7998 14 6.7998H16.7C16.9 6.7998 17 6.8998 17 7.0998V9.4998C17 9.6998 16.9 9.7998 16.7 9.7998H14.3C14.1 9.7998 14 9.8998 14 10.0998Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15 22.7998H9C4 22.7998 2 20.7998 2 15.7998V9.7998C2 4.7998 4 2.7998 9 2.7998H15C20 2.7998 22 4.7998 22 9.7998V15.7998C22 20.7998 20 22.7998 15 22.7998Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
                <li className="text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22.7998H15C20 22.7998 22 20.7998 22 15.7998V9.7998C22 4.7998 20 2.7998 15 2.7998H9C4 2.7998 2 4.7998 2 9.7998V15.7998C2 20.7998 4 22.7998 9 22.7998Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 16.2998C13.933 16.2998 15.5 14.7328 15.5 12.7998C15.5 10.8668 13.933 9.2998 12 9.2998C10.067 9.2998 8.5 10.8668 8.5 12.7998C8.5 14.7328 10.067 16.2998 12 16.2998Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.6361 7.7998H17.6477"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
                <li className="text-white">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 20.7998H7C4 20.7998 2 18.7998 2 15.7998V9.7998C2 6.7998 4 4.7998 7 4.7998H17C20 4.7998 22 6.7998 22 9.7998V15.7998C22 18.7998 20 20.7998 17 20.7998Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.4001 10.2999L13.9001 11.7999C14.8001 12.3999 14.8001 13.2999 13.9001 13.8999L11.4001 15.3999C10.4001 15.9999 9.6001 15.4999 9.6001 14.3999V11.3999C9.6001 10.0999 10.4001 9.69986 11.4001 10.2999Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            {/* Follow Us End */}
          </div>
        </footer>
      }
    </>
  );
};

export default Footer;
