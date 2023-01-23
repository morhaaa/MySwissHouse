import { useState } from "react";
import { useRouter } from "next/router";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();
  return (
    <header className=" flex justify-between z-50 top-0 sticky bg-gray-200 border-2 w-full p-1">
      <div
        onClick={() => router.push("/")}
        className="basis-1/3 text-md md:text-2xl pt-4 md:p-2 font-bold text-gray-700 cursor-pointer"
      >
        My
        <i className="text-red-700 font-extrabold">Swiss</i>House
      </div>

      <div className="inline-flex items-center justify-end basis-1/3 hover:drop-shadow-2xl">
        <div className="inline-flex pr-2  lg:pr-4 items-end cursor-pointer">
          <div className="hidden md:inline  pr-1 text-sm text-gray-600 font-semibold">
            Sell your House
          </div>{" "}
          {/** HOUSE SVG*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="hidden md:inline w-6 text-gray-500"
          >
            <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
            <path
              fillRule="evenodd"
              d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
              clipRule="evenodd"
            />{" "}
          </svg>
        </div>

        <div className="relative">
          <div
            onClick={() => setOpen(!isOpen)}
            className="inline-flex rounded-full border-2 border-gray-500 cursor-pointer md:mx-2 hover:scale-105 transition duration-200 ease-out active:scale-95"
          >
            <Hamburger toggled={isOpen} size={20} />
            {/** USER SVG*/}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 cursor-pointer mt-2 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isOpen && (
            <div className="absolute bg-gray-100 border-4 border-gray-300 rounded-2xl shadow-xl flex flex-col w-[200px] -left-28">
              <div className="flex flex-col p-4 border-b-2 ">
                <p className="font-bold text-gray-600 pb-1 cursor-pointer">
                  Sign up
                </p>
                <p className="text-gray-600 cursor-pointer">Login</p>
              </div>
              <div className="flex flex-col p-4 border-b-2">
                <p className="text-gray-600 cursor-pointer pb-1">Our Agents</p>
                <p className="text-gray-600 cursor-pointer pb-1">Help</p>
                <p className="text-gray-600 cursor-pointer">Contact</p>{" "}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
