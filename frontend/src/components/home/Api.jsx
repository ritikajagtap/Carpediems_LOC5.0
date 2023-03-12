import React from "react";

const Api = () => {
    return (
        <div>
            <div className="bg-slate-900 p-4 sm:mx-auto">
              <div className="text-center my-4"> 
                <h3 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Third party APIs for clients
                </h3>
                <h5 className="mb-2 mt-2 text-xl font-normal tracking-tight text-gray-900 dark:text-white">
                    {" "}
                    We have created APIs that merchants can take advantage of,
                    understand their users and make intelligent business
                    decisions. Merchants can customize their coupons, they also
                    have the option of making their coupons static or dynamic.
                    Merchants will be able to create giftcards and vouchers to
                    increase their profits.
                </h5>
                </div>

                <div className="px-50 mt-20 w-full p-10 mx-auto pt-6 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Verify GiftCard
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-white">
                        This endpoint is used to verify the validity of a gift
                        card code.
                    </p>
                    <p className="font-bold text-gray-700 dark:text-white">
                        URL: `127.0.0.1/5000/api/publicapi/verifygiftcard/:code`
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white">
                        Method: GET
                    </p>
                </div>

                <div className="px-50 mt-10 w-full p-10 mx-auto pt-6 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Redeem a GiftCard
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-white">
                        This endpoint is used to redeem a gift card.
                    </p>
                    <p className="font-bold text-gray-700 dark:text-white">
                        {" "}
                        URL: `127.0.0.1/5000/api/publicapi/reedemgiftcard/:code`
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white ">
                        Method: PATCH
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white ">
                        Body: In body,we have to send amount for which user
                        wants to shop.{" "}
                    </p>
                </div>

                <div className="px-50 mt-10 w-full p-10 mx-auto pt-6 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                        Verify Static Coupon
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-white">
                        This endpoint is used to verify the validity of a static
                        coupon code.
                    </p>
                    <p className="font-bold text-gray-700 dark:text-white">
                        URL:
                        `127.0.0.1/5000/api/publicapi/verifystaticcoupon/:code`
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white">
                        Method: GET
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white">
                        Body: In body, we have to send total amount of user's
                        shopping.{" "}
                    </p>
                </div>

                <div className="px-50 mt-10 w-full p-10 mx-auto pt-6 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                        Redeem Static Coupon
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-white">
                        This endpoint is used to redeem a static coupon code.
                    </p>
                    <p className="font-bold text-gray-700 dark:text-white">
                        URL:
                        `127.0.0.1/5000/api/publicapi/redeemstaticcoupon/:code`
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white">
                        Method: PATCH
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white">
                        Body: In body, we have to send total amount of user's
                        shopping.{" "}
                    </p>
                </div>

                <div className="px-50 mt-10 w-full p-10 mx-auto pt-6 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                        Verify Dynamic Coupon
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-white">
                        This endpoint is used to verify the validity of a
                        dynamic coupon code.
                    </p>
                    <p className="font-bold text-gray-700 dark:text-white">
                        URL:
                        `127.0.0.1/5000/api/publicapi/verifydynamiccoupon/:code`
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white">
                        Method: GET
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white">
                        Body: In body, we have to send total amount of user's
                        shopping.{" "}
                    </p>
                </div>

                <div className="px-50 mt-10 w-full p-10 mx-auto pt-6 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                        Redeem Dynamic Coupon
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-white">
                        This endpoint is used to redeem a dynamic coupon code.
                    </p>
                    <p className="font-bold text-gray-700 dark:text-white">
                        URL:
                        `127.0.0.1/5000/api/publicapi/redeemdynamiccoupon/:code`
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white">
                        Method: PATCH
                    </p>
                    <p className="font-normal text-gray-700 dark:text-white">
                        Body: In body, we have to send total amount of user's
                        shopping.{" "}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center rounded bg-slate-900  h-28 "></div>
            <div className="flex items-center justify-center rounded bg-slate-900  h-28"></div>
            <div className="flex items-center justify-center rounded bg-slate-900  h-28"></div>
        </div>
    );
};

export default Api;
