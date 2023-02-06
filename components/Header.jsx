import { useRouter } from "next/router";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Autocomplete } from "./Autocomplete";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  const newFilter = Autocomplete.filter((item) => {
    const searchWord = searchInput.toLowerCase();
    const cities = item.toLowerCase();
    return searchWord && cities.startsWith(searchWord) && cities !== searchWord;
  });

  const handler = (e) => {
    const newWord = e.target.value;
    setSearchInput(newWord);
  };

  const search = () => {
    if (searchInput !== "") {
      router.push({
        pathname: "/search",
        query: {
          location: searchInput,
        },
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchInput !== "") {
      router.push({
        pathname: "/search",
        query: {
          location: searchInput,
        },
      });
    }
  };
  return (
    <header className="flex  items-center px-2  py-2 z-50 top-0 sticky bg-gray-200 border-gray-200  border-2 rounded-b-xl w-full  ">
      <div
        onClick={() => router.push("/")}
        className="hidden sm:inline basis-1/3 text-md md:text-2xl  md:p-2 font-bold text-gray-700 cursor-pointer"
      >
        My
        <i className="text-red-700 font-extrabold">Swiss</i>House
      </div>
      <div
        onClick={() => router.push("/")}
        className="sm:hidden basis-1/6 text-center  text-md  font-bold text-gray-700 cursor-pointer"
      >
        M<p className="text-red-700 font-extrabold m-0 inline-block">S</p>H
      </div>

      <div className=" px-6  relative flex flex-col w-[350px]  md:w-[400px] lg:w-[600px] ">
        <div className="inline-flex bg-white border-2 border-gray-300 rounded-full p-1 hover:drop-shadow-2xl transform transition duration-100 ease-out">
          <input
            value={searchInput}
            onChange={handler}
            className="flex-grow px-2 placeholder-gray-400 bg-transparent outline-none md:px-4 text-sm md:text-lg"
            type="text"
            placeholder="Search your next house"
            onKeyUp={handleKeyPress}
          />
          {/** SEARCH SVG*/}
          <svg
            onClick={search}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white hidden md:inline bg-black rounded-full p-2 h-7 w-7 md:h-8 md:w-8 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className={
            newFilter.length == 0
              ? "hidden"
              : "absolute bg-white border-2 border-gray-300 flex flex-col z-52 top-9 md:top-11 text-sm md:text-lg rounded-3xl p-2 pl-4 text-slate-700  w-[95%]"
          }
        >
          {newFilter.map((item, index) => (
            <div
              className="hover:bg-slate-100"
              onClick={() => {
                setSearchInput(item);
              }}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="inline-flex items-center justify-end basis-1/3 hover:drop-shadow-2xl">
        <div className="md:inline-flex pr-1  lg:pr-4   items-end cursor-pointer">
          <div className="hidden lg:inline pr-1 text-sm text-gray-600 font-semibold">
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

        <div className="relative basis-1/6 ">
          <div
            onClick={() => setOpen(!isOpen)}
            className="inline-flex rounded-full border-2 border-gray-500 cursor-pointer   md:mx-2 hover:scale-105 transition duration-200 ease-out active:scale-95"
          >
            <Hamburger toggled={isOpen} size={20} />
            {/** MENU SVG*/}
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
