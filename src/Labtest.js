import React from 'react'
import DiagnosisForm from './Form'
import paths from "./Fullckeckup.json"
import Form from './Form'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'
import cardval from "./Card.json"
const Labtest = () => {
    return (

       <> 
       <Navbar/>
       <div className="container mx-auto">
       <div className="flex flex-col md:flex-row gap-x-4 p-10 bg-cyan-100 ">
           <div className=" basis-8/12	">
               <img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1705087267_400_off_banner.jpg" alt="Image of Discount" />
           </div>
           <div className=" basis-1/3 bg-white p-4">
               <h2 className="text-center text-2xl font-bold mb-2" >Full Body Checkup</h2>
               <Form />
           </div>

       </div>

       <div className="popular-test mt-8 bg-slate-100 p-10 z-10">
           <h1 className="text-2xl font-bold">Popular test</h1>
           <p class="best-prices">and many more tests and packages <span className="text-xl opacity-50 ">@THE BEST PRICES</span></p>
           <div className="grid grid-cols-1 sm:grid-cols-4 mt-5 overflow-hidden gap-6 ml-8">
               {
                   paths.paths.map((item, id) => {
                       return (
                           <div >
                               <img
                                   className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                   src={item.source}
                                   alt=""
                               />
                               &nbsp;&nbsp;
                               {item.text}
                           </div>
                       )
                   })
               }


           </div>
       </div>

       <div className="pricecard">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 overflow-hidden gap-6 ml-8">
    {
       cardval.cardval.map((i)=>{
        return(
         <Card info={i}/>
                
        )
       })
    }
       
       </div>
       </div>
   </div>

   <Footer/>
       </>
    )
}

export default Labtest