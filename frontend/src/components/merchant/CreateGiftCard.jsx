import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const CreateGiftCard = () => {

    const [gift, setGift] = useState({
        name: "",
        count: 1,
        amount: 0,
        expiration: Date.now(),
    });

    const onChange = (event) => {
        setGift({ ...gift, [event.target.name]: event.target.value });
    };

    let navigate = useNavigate();

    const host = "http://localhost:5000";

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(gift);
        const json = await axios({
            method: 'post',
            url: `${host}/api/giftcards/creategiftcard`,
            data: gift,
            headers: {
                'auth-token': localStorage.getItem("token"),
            },
        })
        .then((response) => {
            navigate('/giftcards')
        })
        .catch((err) => {
            console.log(err);
        });
    }

  return (
    <div>
        <div className="bg-slate-900 mb-8 p-4 sm:ml-64" style={{paddingLeft: "100px"}}>       
    <div className="px-50 mt-10 w-full p-10 pt-6 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
       
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6">
            <input type="text" id="name" name='name' onChange={onChange} placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />  
            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Giftcard Name</label>
          

        </div>
        <div className="relative z-0 mb-6">
          <input type="number" id="amount" name='amount' onChange={onChange} placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />  
          <label htmlFor="amount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
          
        </div>
        
        <div className="relative z-0 mb-6">
        <input type="number" id="count" name='count' onChange={onChange} placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />  
          <label htmlFor="count" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Count</label>
          
          </div>
        <div className="relative z-0 mb-6">
          <input type="date" id="expiration" name='expiration' onChange={onChange} placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />  
          <label htmlFor="expiration" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expiration Date</label>  
          
          
       </div>
       <div className="flex items-start mb-6">
         <div className="flex items-center h-5">
            <input id="terms" type="checkbox" name='terms' value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
         </div>
         <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">By clicking the deploy button, I confirm that I have read and agree to the terms stated above.</label>
        </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Deploy giftcards</button>
      </form>
    </div>
    </div>
</div>
  )
}

export default CreateGiftCard;