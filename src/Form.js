import React from 'react'
import test from "./Diagnosistesting.json";
import data from "../src/Option.json"
const Form = () => {
  return (
    <form>
    <div className="space-y-12">


        <div className="border-b border-gray-900/10 pb-8">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Please fill in your details</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                <div className="sm:col-span-full">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-cyan-700">
                        Name
                    </label>
                    <div className="mt-2 outline-none">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>

                <div className="sm:col-span-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6  text-cyan-700">
                        Contact Number
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="number"
                            type="number"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            autoComplete="number"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />

                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-cyan-700">
                        Pincode
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="pincode"
                            id="pincode"
                            autoComplete="street-address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-cyan-700">
            CHOOSE PACKAGE

            </label>
            <div className="mt-2">
                <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                 {
                    data.diagnosis_states.map((item,id)=>{
                        return(
                             <option key={id} value={item.value}>{item.text}</option>
                        )
                    })

                 }
                </select>
            </div>
        </div>
        <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-cyan-700">
            CHOOSE TEST

            </label>
            <div className="mt-2">
                <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {
               test.diagnosis_test.map((item,id)=>{
                        return(
                             <option key={id} value={item.value}>{item.text}</option>
                        )
                    })
                }
                </select>
            </div>
        </div>
         <div className="sm:col-span-full content-center">
         <label htmlFor="accept">
           <input type="checkbox" name="" id="accept" />
          <strong> I agree to Netmeds Terms and Conditions.</strong>
           </label>
         </div>
            </div>
        </div>
    </div>
    <div className="flex flex-row gap-x-20 ">
        <button type="reset" className="text-sm font-semibold leading-6 text-gray-900 flex-1 ">
            Reset
        </button>
        <button
            type="submit"
            className="rounded-md bg-cyan-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
       flex-1
            focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
           
        >
            Book Now
        </button>
    </div>
  

    
</form>
  )
}

export default Form;