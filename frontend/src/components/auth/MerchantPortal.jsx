import React from "react";
import { Link } from "react-router-dom";

const MerchantPortal = () => {
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">
                            PROMO-ENGINE
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
                            Welcome to the Merchant Portal
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="md:w-1/4"></div>
                        <div className="p-4 md:w-1/4">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-lg title-font font-medium">
                                        New Merchant
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Are you a merchant and not registered on PromoEngine yet? Join today to boost your business!
                                    </p>
                                    <Link to={`/register`} className="mt-3 text-blue-400 inline-flex items-center">
                                        Register
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle
                                                cx="12"
                                                cy="7"
                                                r="4"
                                            ></circle>
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-lg title-font font-medium">
                                        Existing Merchant
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Create coupons, gift cards, vouchers for your bussiness to grow and make an impact!
                                    </p>
                                    <Link to={`/login`} className="mt-3 text-blue-400 inline-flex items-center">
                                        Login
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MerchantPortal;
