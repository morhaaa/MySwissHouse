import React from "react";
import Image from "next/legacy/image";
import Intro from "../public/intro1.png";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Autocomplete } from "./Autocomplete";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const [arrow, updateState] = useState("");

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

  const newFilter = Autocomplete.filter((item) => {
    const searchWord = searchInput.toLowerCase();
    const cities = item.toLowerCase();
    return searchWord && cities.startsWith(searchWord) && cities !== searchWord;
  });

  const handler = (e) => {
    const newWord = e.target.value;
    setSearchInput(newWord);
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
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:-[600px] ">
      <Image src={Intro} layout="fill" objectFit="cover" alt="intro" />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 6,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="font-semibold text-white text-lg md:text-3xl absolute top-1/4 text-center w-full "
      >
        {" "}
        DISCOVER YOUR NEXT PROPRIETY IN SWITZERLAND{" "}
      </motion.p>
      <div className="absolute w-full flex justify-center  -bottom-10">
        <div className="hover:shadow-2xl transform transition duration-300 ease-out shadow-md border-4 border-gray-300  rounded-2xl justify-between h-12 md:h-14 lg:h-16  bg-white inline-flex w-[350px] sm:w-[600px] lg:w-[900px]">
          <input
            value={searchInput}
            onChange={handler}
            className="px-2 placeholder-gray-400 bg-transparent outline-none md:px-4  text-sm  md:text-lg font-semibold rounded-3x w-full"
            type="text"
            placeholder="Type any city in Switzerland"
            onKeyUp={handleKeyPress}
          />
          <button
            onClick={search}
            className="hover:scale-105 transform transition duration-300 ease-out bg-black px-6 text-slate-100 m-1  text-sm  md:text-lg  rounded-2xl cursor-pointer "
          >
            Search
          </button>
          <div
            className={
              newFilter.length == 0
                ? "hidden"
                : "absolute bg-white border-2 border-gray-300 flex flex-col z-50 w-full top-10 md:top-12 lg:top-14 rounded-2xl p-2"
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
      </div>
    </div>
  );
};

export default Banner;
