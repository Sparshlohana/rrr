import React from 'react'
import "../login/login.css"
import { LoginImage } from '@/components/Icons'
import Link from 'next/link';

const Login = () => {
    return (
        <section className='flex justify-center items-center w-full flex-col sm:flex-row'>
            <div className='img flex  items-center h-[100dvh]'>
                <LoginImage />
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
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
