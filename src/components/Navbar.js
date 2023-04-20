import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container-xxl w-full px-4 md:px-8 flex items-center justify-between mt-4 bg-slate-50" style={{position:"fixed", top:"-17px", zIndex:5}}>
      <div className="flex items-center gap-3">
        <em>
          <h1 className="text-3xl md:text-5xl font-bold text-pink-500">JRN</h1>
        </em>
        <div className="">
          <h6 className="text-pink-500">JOBREADYNOW.AI</h6>
          <p className="text-sm">BOOST YOUR SKILLS</p>
        </div>
      </div>
      <button className="block md:hidden">
        <svg
          className="w-6 h-6 text-gray-500 hover:text-gray-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5h18a1 1 0 010 2H3a1 1 0 110-2zm0 7h18a1 1 0 110 2H3a1 1 0 110-2zm0 7h18a1 1 0 010 2H3a1 1 0 110-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="hidden md:flex md:gap-10 items-center">
        <ul className="flex gap-10 items-center">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link>Features</Link>
          </li>
          <li>
            <Link>Pricing</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Industry Mentor</Link>
          </li>
        </ul>
        <ul className="flex gap-10 items-center">
          <li className="bg-blue-600 text-white rounded-xl px-7">
            <Link>Login</Link>
          </li>
          <li className="bg-slate-400 rounded-xl px-4">
            <Link className="text-center sm:text">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
