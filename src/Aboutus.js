import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const AboutUs = () => {
    const [showResult1, setShowResult1] = useState(true)
    const [showResult2, setShowResult2] = useState(true)
    const [showResult3, setShowResult3] = useState(true)
    return (
        <>
          <Navbar />
          <div>
            <div className="flex min-h-full flex-col justify-center px-16 py-10 lgx-24 text-justify">
              {/* <h1 className="mb-4 flex text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                About Us
                <img
                src="./png/logo-no-background.png"
                alt="Hwealth Medico Banner"
                className="ml-4 w-1/2"
              />
              </h1> */}
              <img
                src="./png/logo-white.png"
                alt="Hwealth Medico Banner"
                className="mb-6 size-3/4 m-auto"
                />
              <p>
              Welcome to Hwealth Medico, your trusted online pharmacy for all your health and wellness needs. We strive to provide a seamless and convenient healthcare experience to our valued customers. Forget the hassle of traditional pharmacies; Hwealth Medico is here to revolutionize the way you approach healthcare.
                Established in 2016, Hwealth Medico stands as a pioneer in the digital pharmacy landscape. We have rapidly grown to become the go-to destination for over 50 million customers seeking reliable and accessible pharmaceutical services.
              </p>
              <img
                src="./png/Partners.jpg"
                alt="Hwealth Medico Partners"
                className="size-3/4 m-auto my-5 bg-blend-overlay"
              />
              <p>
                Our strategic partnerships with leading pharmaceutical manufacturers, healthcare providers, and wellness brands enable us to bring you a wide range of high-quality products. From prescription medications to over-the-counter essentials, Hwealth Medico is your one-stop solution for all your healthcare needs.
              </p>
              <img
                src="./png/About3.jpg"
                alt="Hwealth Medico Pharma Partners"
                className="my-4 size-2/3 m-auto my-5 bg-blend-overlay"
              />
              <p>
                Recognized for our commitment to excellence, Hwealth Medico has received prestigious awards. Our telemedicine services, developed in collaboration with renowned healthcare institutions, were honored with the Golden Peacock Innovative Product award. We are also proud winners in the Healthcare and Wellness category, as recognized by industry experts.
              </p>
              <p>
                At Hwealth Medico, we are not just a team; we are a diverse family of over 400 individuals. From pharmaceutical experts to technology enthusiasts, our team is dedicated to making healthcare accessible and enjoyable for you.
              </p>
              <p>
                Backed by esteemed investors such as major healthcare funds, research institutions, and prominent individuals in the healthcare industry, we continue to push the boundaries of what is possible in the realm of online pharmacy.
                Now that you know us a little better, explore our website, discover our extensive range of products, and embark on a journey towards a healthier and happier you with Hwealth Medico.
              </p>
              <br />
              <div>

              </div>
              <h2 className="text-2xl font-bold dark:text-white text-center my-11">
                Frequently Asked Questions about Hwealth Medico
              </h2>
              <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                onClick={()=>{
                    setShowResult1(!showResult1)
                }}
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>Is Hwealth Medico a licensed online pharmacy?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
              <div hidden={showResult1} class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-700 dark:text-gray-400">
                  Yes, Hwealth Medico is a fully licensed online pharmacy. We are authorized by the appropriate regulatory authorities to provide a wide range of pharmaceutical products and services. Our commitment to quality and safety ensures that you can trust us with your healthcare needs.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                onClick={()=>{
                    setShowResult2(!showResult2)
                }}
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>How can I place an order on Hwealth Medico?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-2" aria-labelledby="accordion-collapse-heading-2">
              <div hidden={showResult2} class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-700 dark:text-gray-400">
                  Placing an order on Hwealth Medico is simple and convenient. Visit our website, browse through our extensive catalog, and add the desired products to your cart. Follow the easy checkout process, provide the necessary information, and complete your order. Our user-friendly interface ensures a seamless ordering experience.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                onClick={()=>{
                    setShowResult3(!showResult3)
                }}
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>What payment methods are accepted on Hwealth Medico?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-3" aria-labelledby="accordion-collapse-heading-3">
              <div hidden={showResult3} class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-700 dark:text-gray-400">
                  We accept various payment methods to ensure a convenient shopping experience. Hwealth Medico supports payments through credit cards, debit cards, net banking, and other secure online payment options. Rest assured, your payment details are handled with the utmost security and privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>)
};

export default AboutUs;
