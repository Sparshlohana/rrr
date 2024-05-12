"use client";

import React from "react";
import "../login/login.css";
import { LoginImage } from "@/components/Icons";
import Link from "next/link";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  const responseMessage = (response) => {
    console.log("Google authentication successful:", response);

    if (response && response.profileObj) {
      const userInfo = response.profileObj;
      console.log(userInfo);
    }
  };

  const errorMessage = (error) => {
    console.error("Google authentication error:", error);
  };
  return (
    <GoogleOAuthProvider>
      <section className="flex items-center w-full flex-col sm:flex-row">
        <div className="img flex items-center h-[100dvh]  ">
          <LoginImage className="sm:h-[400px] md:h-[500px] " />
        </div>

        <div className="flex justify-center items-start flex-col w-1/2">
          <div className="flex justify-center h-[80vh] items-center flex-col gap-3">
            <h2 className="font-bold flex justify-start w-full text-4xl mb-3">
              Create Account
            </h2>

            <form className="flex flex-col gap-3">
              <div className="flex justify-center gap-3 items-center">
                <input
                  className="h-[30px] py-5 px-2 rounded-3xl shadow-md outline-none"
                  required
                  type="text"
                  minLength="4"
                  maxLength="8"
                  placeholder="First Name"
                />
                <input
                  className="h-[30px] py-5 px-2 rounded-3xl shadow-md outline-none"
                  required
                  type="text"
                  minLength="4"
                  maxLength="8"
                  placeholder="Last Name"
                />
              </div>

              <input
                className="h-[30px] py-5 px-2 rounded-3xl shadow-md outline-none"
                required
                type="email"
                placeholder="Email Address"
              />
              <input
                className="h-[30px] py-5 px-2 rounded-3xl shadow-md outline-none"
                required
                type="password"
                minLength="8"
                placeholder="Password"
              />

              <div className="flex justify-center items-center">
                <button className="bg-[#5356ff] rounded-[30px] font-semibold text-md py-2 text-white w-full">
                  Create Account
                </button>
              </div>

              <div className="flex justify-center items-center text-base">
                <span>Already have an account?</span>
                <Link className="login-text ml-1" href={"/"}>
                  login
                </Link>
              </div>
              <div className="flex -mt-4 justify-center items-center gap-4">
                <div>
                  <span>
                    <hr className="h-px w-36 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  </span>
                </div>
                <div>
                  <span>OR</span>
                </div>
                <div>
                  <span>
                    <hr className="h-px w-36 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  </span>
                </div>
              </div>
              <div>
                <GoogleLogin
                  shape="circle"
                  theme="filled_blue"
                  size="medium"
                  type="standard"
                  onSuccess={responseMessage}
                  onError={errorMessage}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </GoogleOAuthProvider>

  );
};

export default Login;
