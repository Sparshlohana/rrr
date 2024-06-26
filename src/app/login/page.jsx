"use client";

import React from "react";
import "../login/login.css";
import {
  FacebookIcon,
  LoginImage,
  SignInWithGoogleIcon,
} from "@/components/Icons";
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
          <LoginImage className="sm:h-[400px] md:h-[600px] " />
        </div>

        <div class="flex justify-center items-start flex-col w-1/2">
          <div class="flex justify-center h-[80vh] items-center flex-col gap-3">
            <h2 class="font-bold flex  w-full text-4xl pl-12 mb-3">
              Create Account
            </h2>

            <form class="flex flex-col gap-3">
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
                type="password"
                minLength="8"
                placeholder="Password"
              />

              <div class="flex justify-center items-center">
                <button class="bg-[#5356ff] rounded-[30px] font-semibold text-md py-2 text-white w-full">
                  Create Account
                </button>
              </div>

              <div class="flex justify-center items-center text-base">
                <span>Already have an account?</span>
                <Link href={"/register"} class="login-text ml-1">
                  login
                </Link>
              </div>
              <div class="flex -mt-4 justify-center items-center gap-4">
                <div>
                  <span>
                    <hr class="h-px w-36 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  </span>
                </div>
                <div>
                  <span>OR</span>
                </div>
                <div>
                  <span>
                    <hr class="h-px w-36 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  </span>
                </div>
              </div>
              {/* <div>
                <GoogleLogin shape="circle" theme="filled_blue" size="medium" type="standard"
                  onSuccess={responseMessage} onError={errorMessage} />
              </div> */}
            </form>
            <div class="flex gap-2 items-center ">
              <button class="w-[200px] py-2 flex justify-center items-center gap-2 bg-white  shadow-md rounded-full ">
                <SignInWithGoogleIcon />
                <span class="">Continue with Google</span>
              </button>
              <button class="w-[220px] py-2 flex justify-center items-center gap-2 bg-white  shadow-md rounded-full ">
                <FacebookIcon />
                <span>Continue with Facebook</span>
              </button>
            </div>
            <h2 class="h-2 text-xs">
              By signing up, you agree to the{" "}
              <span class="font-bold underline text-gray-800 font-mona-sans">
                Terms of Service
              </span>{" "}
              {`and acknowledge
              you've read our`}{" "}
              <span class="font-bold underline text-gray-800 font-mona-sans">
                Privacy Policy.
              </span>{" "}
            </h2>
          </div>
        </div>
      </section>
    </GoogleOAuthProvider>
  );
};

export default Login;
