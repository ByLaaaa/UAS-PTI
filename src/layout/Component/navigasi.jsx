import React, { useState } from "react";
import jakartaLogo from "../../assets/img/jcul.svg";
import './nav.css';
import { useNavigate } from "react-router-dom";

function Navigation () {
  const navigate = useNavigate()

  return (
    <div className="flex md:justify-center">
      <div className="bg-transparent object-center w-full md:w-8/12">
        <div className="w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={jakartaLogo} className="h-16" alt="+Jakarta Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-end text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a onClick={() => navigate('/')} className="font-jakarta block py-2 px-5 rounded-2xl hover:scale-105 md:hover:bg-betawi md:hover:rounded-2xl font-bold md:p-0 md:p-2" aria-current="page">Home</a>
              </li>
              <li>
                <a onClick={() => navigate('/culinary')} className="font-jakarta block py-2 px-5 rounded-2xl hover:scale-105 md:hover:bg-betawi md:hover:rounded-2xl font-bold md:p-0 md:p-2 ">Culinary</a>
              </li>
              <li>
                <a onClick={() => navigate('/recipes')} className="font-jakarta block py-2 px-5 rounded-2xl hover:scale-105 md:hover:bg-betawi md:hover:rounded-2xl font-bold md:p-0 md:p-2 ">Recipes</a>
              </li>
              <li>
                <a onClick={() => navigate('/devS')} className="font-jakarta block py-2 px-5 rounded-2xl hover:scale-105 md:hover:bg-betawi md:hover:rounded-2xl font-bold md:p-0 md:p-2 ">About DevS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;