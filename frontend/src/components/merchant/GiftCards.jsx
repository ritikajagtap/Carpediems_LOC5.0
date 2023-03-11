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
            method: 'get',
            url: `${host}/api/giftcards/viewallgiftcards`,
            headers: {
                'auth-token': localStorage.getItem("token"),
            },
        })
        .then((response) => {
            const cards = response.data.data.giftCards;
            setGiftCards(cards);
            console.log(giftCards);
            // console.log(giftCards);
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
                <button onClick={() => navigate('/new-gift-card')} className="flex mx-auto mt-28 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    New gift card
                </button>
                <div className="mx-auto text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eligendi?</div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                            My Gift Coupons
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {/* loop over gift cards */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GiftCards;
