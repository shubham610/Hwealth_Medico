import React, { useState } from 'react'
import  "./contact.css"
import Navbar from './Navbar';
import Footer from './Footer';
const Contact = () => {
    const [display1, setdisplay1] = useState(true);
    const [display2, setdisplay2] = useState(true);
  return (
  <>
  <Navbar/>
    <div class="isolate smy-32 lgx-8">
    <img class="mx-auto mt-6" src="https://cdni.iconscout.com/illustration/premium/thumb/customer-service-center-3483612-2912013.png" alt="Help Desk" />

    <div class="mx-auto mt-6 max-w-2xl text-center">
      <h2 class="color-dark font-bold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
    </div>
    <form action="#" method="POST" class="mx-auto mt-6 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div class="mt-2.5">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
          <div class="mt-2.5">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
       
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input  type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
          <div class="relative mt-2.5">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
            </div>
            <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-4.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
        
      </div>
      <div>
        <button type="submit" class="bgcolor-dark w-full mt-4 rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visibleutline focus-visibleutline-2 focus-visibleutline-offset-2 focus-visibleutline-cyan-600">Let's talk</button>
      </div>
    </form>
  </div>

  <div class="div-main div-main2">
    <div className="style3">
        <button  type="button" class="style1" onClick={()=>{setdisplay1(!display1)}}>ORDER RELATED QUERIES</button>
        <svg class="-mr-1 h-7 w-7 text-gay-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
    </div>
    <div class="style2" hidden={display1}>
        <ul class="list-disc">
            <li>Email: HwealthMedico&#64;gmail.com</li>
            <li>Call: 1800 266 2256 (toll-free)</li>
        </ul>
    </div>
    <hr />
    <br/> 
    </div>

  <div class="div-main">
    <div class="style3" >
        <button type="button" onClick={()=>{setdisplay2(!display2)}} class="style1" >LAB TESTS RELATED QUERIES</button>
        <svg class="-mr-1 h-7 w-7 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
    </div>
    <div class="style2" hidden={display2}>
        <ul class="list-disc">
            <li><a href="mailto:hritikchoudhary101@gmail.com">hritikchoudhary101@gmail.com</a></li>
            <li>Call: 1800 266 2256 (toll-free)</li>
        </ul>
    </div>
    <hr />
    <br/> 
  </div>
  <Footer/>
  </>
  )
}

export default Contact