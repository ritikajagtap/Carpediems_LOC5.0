import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  axios  from 'axios';

const Login = () => {

    const [creds, setCreds] = useState({
        email: "",
        password: "",
    });

    let navigate = useNavigate();

    const host = "http://localhost:5000";

    const onChange = (event) => {
        setCreds({ ...creds, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const json = await axios({
            method: 'post',
            url: `${host}/api/auth/signup`,
            data: creds
        })
        .then((resposne) => {
            localStorage.setItem('token', resposne.token);
            navigate('/dashboard');
        })
        .catch((err) => {
            console.log(err);
            setCreds({password: ""});
        });
    }

    return (
        <>
            <div className="flex flex-col text-center w-full mt-20">
                <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">
                    PROMO-ENGINE
                </h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
                    Sign in
                </h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="m-auto md:m-10 md:p-10 md:w-1/2">
                    <form>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="email"
                                name="email"
                                onChange={onChange}
                                id="email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                for="email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-10 group">
                            <input
                                type="password"
                                name="password"
                                onChange={onChange}
                                id="password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                for="password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
                        </div>

                        {/* <div className="relative z-0 w-full mb-6 group text-gray-400">
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                            />
                            {` `} Remember me
                        </div> */}
                        <button
                            type="submit"
                            onSubmit={handleSubmit}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="hidden md:block md:m-10 md:p-10 md:w-1/2">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://dummyimage.com/720x600"
                    />
                </div>
            </div>
        </>
    );
};

export default Login;
