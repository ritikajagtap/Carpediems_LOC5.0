import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const CreateStaticCoupon = () => {
  return (
    <div>
        <div className="bg-slate-900 p-4 sm:ml-64" style={{paddingLeft: "100px"}}>       
    <div className="px-50 mt-10 w-full p-10 pt-6 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
       
      <form>

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Static Discount Voucher</h5>



        <div className="relative z-0 mb-6">
            <input type="text" id="tvalue" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>              
            <label htmlFor="tvalue" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Target Value (i.e. Total Shopping Amount)</label>

        </div>

        <div className="relative z-0 mb-6">
            <input type="text" id="dvalue" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>  
            <label htmlFor="dvalue" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Discount Value (e.g 10% off)</label>
            
          </div>


        <div className="relative z-0 mb-6">
          <input type="text" id="damount" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>  
          <label htmlFor="damount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Discount Amount</label>
          
        </div>
    
        
        <div className="mb-6">
          <label htmlFor="expdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiration Date</label>  
          <input type="date" id="expdate" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>  
                    
       </div>

       <div className="mb-6">
        <label htmlFor="usagelimit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usage Limit</label>
        <input type="number" id="usagelimit" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>
      
      </div>


       <div className="flex items-start mb-6">
         <div className="flex items-center h-5">
            <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
         </div>
         <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">By clicking the deploy button, I confirm that I have read and agree to the terms stated above.</label>
        </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Deploy vouchers</button>
      </form>     
    </div>
 </div>  
    </div>
  )
}

export default CreateStaticCoupon