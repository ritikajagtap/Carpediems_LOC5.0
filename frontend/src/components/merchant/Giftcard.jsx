import React from "react";

const Giftcard = (props) => {
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <h2 className="text-lg text-white font-medium title-font mb-2">
                    Shooting Stars
                </h2>
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
                            Code:
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
                            Discount Value:
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
                            Discount Amount:
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
                            Expiration Date:{" "}
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
                            Usage Limit:{" "}
                        </span>
                    </li>
                </ul>
                <button
                    type="button"
                    class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Giftcard;
