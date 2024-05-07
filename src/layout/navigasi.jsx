import React, { useState } from "react";
import jakartaLogo from "../assets/img/+Jakarta_Logo.svg";
import './nav.css';

function Navigation () {
  return (
    <div className="flex justify-center">
      <div className="bg-transparent object-center w-8/12">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={jakartaLogo} className="h-16" alt="Flowbite Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-5 text-abang transition ease-in-out hover:-translate-y-1 hover:scale-105 md:hover:bg-betawi md:hover:rounded-2xl md:hover:p-1 font-bold md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-5 text-abang transition ease-in-out hover:-translate-y-1 hover:scale-105 md:hover:bg-betawi md:hover:rounded-2xl md:hover:p-1 font-bold md:p-0 ">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-5 text-abang transition ease-in-out hover:-translate-y-1 hover:scale-105 md:hover:bg-betawi md:hover:rounded-2xl md:hover:p-1 font-bold md:p-0 ">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-5 text-abang transition ease-in-out hover:-translate-y-1 hover:scale-105 md:hover:bg-betawi md:hover:rounded-2xl md:hover:p-1 font-bold md:p-0 ">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-5 text-abang transition ease-in-out hover:-translate-y-1 hover:scale-105 md:hover:bg-betawi md:hover:rounded-2xl md:hover:p-1 font-bold md:p-0 ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="hidden md:block">
    //     {/* Desktop navigation menu */}
    //     <div className="flex justify-center navbar text-white">
    //       <div className="fixed bottom-16 z-50 bg-white bg-opacity-70 py-2 px-6 rounded-full">
    //         <div className="flex w-auto item-center gap-5">
    //           <button className="flex item-center gap-3">
    //             <p className="text-3xl">DKI JAKARTA</p>
    //           </button>
    //           <div className="flex gap-5 text-md">
    //             <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105">
    //               <a href="/">Home</a>
    //             </button>
    //             <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105">
    //               <a href="/">About Us</a>
    //             </button>
    //             <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105">
    //               <a href="/">Culinary</a>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="block md:hidden">
    //     {/* Mobile navigation menu */}
    //     <div className="fixed z-50 p-4 flex flex-col text-white bg-opacity-70 w-full">
    //       <button onClick={toggleNav} className="self-end">
    //         {nav ? (
    //           <svg
    //             stroke="currentColor"
    //             fill="currentColor"
    //             strokeWidth="0"
    //             viewBox="0 0 352 512"
    //             className="text-2xl"
    //             height="1em"
    //             width="1em"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M242.72 256l100.74-100.74c9.33-9.33 9.33-24.48 0-33.81l-22.63-22.63c-9.33-9.33-24.48-9.33-33.81 0L186.28 199.56 85.54 98.82c-9.33-9.33-24.48-9.33-33.81 0l-22.63 22.63c-9.33 9.33-9.33 24.48 0 33.81L130.83 256 29.09 356.74c-9.33 9.33-9.33 24.48 0 33.81l22.63 22.63c9.33 9.33 24.48 9.33 33.81 0L186.28 312.44l100.74 100.74c9.33 9.33 24.48 9.33 33.81 0l22.63-22.63c9.33-9.33 9.33-24.48 0-33.81L242.72 256z"
    //             />
    //           </svg>
    //         ) : (
    //           <svg
    //             stroke="currentColor"
    //             fill="currentColor"
    //             strokeWidth="0"
    //             viewBox="0 0 448 512"
    //             className="text-2xl"
    //             height="1em"
    //             width="1em"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    //             />
    //           </svg>
    //         )}
    //       </button>
    //       <ul
    //         className={`font-semibold text-opacity-100 md:flex md:item-center md:static absolute bg-white bg-opacity-50 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${nav ? "block" : "hidden"}`}
    //       >
    //         <li className="mt-3 transition ease-in-out hover:-translate-y-1 hover:scale-105">
    //           <a href="/">HOME</a>
    //         </li>
    //         <li className="mt-3 transition ease-in-out hover:-translate-y-1 hover:scale-105">
    //           <a href="/">ABOUT US</a>
    //         </li>
    //         <li className="mt-3 transition ease-in-out hover:-translate-y-1 hover:scale-105">
    //           <a href="/">CULINARY</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navigation;