import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const GiftCards = () => {
    const host = "http://localhost:5000";

    let navigate = useNavigate();

    const [giftCards, setGiftCards] = useState([]);

    const getGiftCards = async () => {
        // API call
        const response = await axios({
            method: "get",
            url: `${host}/api/giftcards/viewallgiftcards`,
            headers: {
                "auth-token": localStorage.getItem("token"),
            },
        })
            .then((response) => {
                const cards = response.data.data.giftCards;
                setGiftCards(cards);
                // console.log(giftCards);
                console.log(response.data.data.giftCards);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getGiftCards();
        } else {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <section className="text-gray-400 body-font bg-gray-900">
                <button
                    onClick={() => navigate("/new-gift-card")}
                    className="flex mx-auto mt-28 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                    New gift card
                </button>
                <div className="mx-auto text-center mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, eligendi?
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                            My Gift Cards
                        </h1>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mt-8 mb-8">
                        {/* loop over gift cards */}
                        {giftCards.map((giftCard) => (
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-5">
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
                                    <h2 className="text-white text-3xl title-font font-medium">
                                        {giftCard.name}
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    {/* content here */}
                                    <ul role="list" class="space-y-5 my-7">
                                        <li class="flex space-x-3">
                                            <svg
                                                aria-hidden="true"
                                                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Check icon</title>
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                                Code: {giftCard.code}
                                            </span>
                                        </li>
                                        <li class="flex space-x-3">
                                            <svg
                                                aria-hidden="true"
                                                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Check icon</title>
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                                Amount: {giftCard.ammount}
                                            </span>
                                        </li>
                                        <li class="flex space-x-3">
                                            <svg
                                                aria-hidden="true"
                                                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Check icon</title>
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                                Expiration Date: {giftCard.expiration}
                                            </span>
                                        </li>
                                        <li class="flex space-x-3">
                                            <svg
                                                aria-hidden="true"
                                                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Check icon</title>
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                                Redeemed: {!giftCard.redeemed? 'No': 'Yes'}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GiftCards;
