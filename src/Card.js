import React from 'react'

const Card = ({info}) => {
    
  return (
    <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-full" style={{backgroundColor:`${info.color}`}}>
    <div class="mb-2 flex justify-between">
      <h1 class="text-gray-700 text-xl font-bold">{info.heading}</h1>

    </div>
    <div class="flex justify-between">
      <p class="text-gray-700 text-justify">{info.text}</p>
     
    </div>
    <hr class="my-4" />
    <div class="flex justify-start gap-x-1 items-center">
      <p class="text-lg line-through">{info.price}</p>
        <p class="mb-1 text-3xl font-bold text-orange-900">{info.discounted}</p>
      <div class="">
        <p class="text-sm text-gray-700">including GST</p>
      </div>
    </div>
   <div className="flex justify-between items-center">
   <button class="mt-6 w-2/3 rounded-md bg-white py-1.5 font-medium text-black-500 hover:bg-black-900">Book Now</button>
  <div>
    <img src= {info.url} alt="" />
  </div>
   </div>
  </div>

  )
}

export default Card