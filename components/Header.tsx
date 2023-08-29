'use client'

import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex ">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>

          {/* <Avatar name="Kristian Ivanov"/> */}
          <p>Kristian Ivanov</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
