import React from "react";
import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-600 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
        <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
          <span className="text-blue-900">Zamaan</span>
          <span className="text-slate-400">Properties</span>
        </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-xl flex items-center">
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-900" />
        </form>
        <ul className="flex gap-4">
            <Link to="/">
            <li className="hidden sm:inline text-black font-bold hover:underline">
                HOME
            </li>
            </Link>
            <Link to="/about">
            <li className="hidden sm:inline text-black font-bold hover:underline">
                ABOUT
            </li>
            </Link>
            <Link to="/sign-in"><li className=" text-black font-bold hover:underline">
                LOGIN
            </li></Link>
        </ul>
      </div>
    </header>
  );
}
