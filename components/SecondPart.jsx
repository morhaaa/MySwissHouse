import { CgSwiss } from "react-icons/cg";
import { CgDollar } from "react-icons/cg";
import { CgUser } from "react-icons/cg";
import { CgRemove } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";
import { motion } from "framer-motion";
import { useState } from "react";
import outro from "../public/outro.png";
import Image from "next/image";

const SecondPart = () => {
  const cards = [
    {
      icon: <CgDollar size={20} />,
      title: "Best Price",
      paragraph: "We offer best prices on the market",
      arrow: <TiArrowSortedDown size={16} />,
    },
    {
      icon: <CgSwiss size={20} />,
      title: "Made in Swiss",
      paragraph: "We are the first real estate group in Switzerland",
      arrow: <TiArrowSortedDown size={16} />,
    },
    {
      icon: <CgUser size={20} className="text-slate-600" />,
      title: "1:1",
      paragraph: "We guarantee always an agent dedicated only to you ",
      arrow: <TiArrowSortedDown size={16} />,
    },
    {
      icon: <CgRemove size={18} />,
      title: "Unstable Prices",
      paragraph:
        "We guarantee no price change due to various unexpected cost that may come.",
      arrow: <TiArrowSortedDown size={16} />,
    },
  ];

  const [isOpen, setIsOpen] = useState(new Array(cards.length).fill(false));

  const handleOnChange = (position) => {
    const updatedState = isOpen.map((item, index) =>
      index === position ? (item == true ? false : true) : (item = false)
    );
    setIsOpen(updatedState);
  };

  return (
    <div className="w-full lg:px-24 lg:my-28">
      <div className="lg:flex justify-center my-12 bg-gray-100 rounded-3xl md:h-[580px]">
        <div className="hidden lg:inline relative lg:basis-1/2 ">
          {" "}
          <Image
            src={outro}
            alt="outro"
            className="absolute rounded-bl-3xl bottom-0 h-[620px] w-[570px]"
          />
        </div>
        <div className=" lg:basis-1/2 h-full  md:pr-4 flex flex-col p-6 md:pt-14">
          <h1 className="text-lg sm:text-2xl font-bold  text-slate-600 pb-2 pl-2">
            Why Choose Us?
          </h1>
          <p className="text-sm sm:text-lg  text-slate-500 pb-2 pl-2 ">
            We always provide the best service to each of our costumers in
            finding their dream propriety in Switzerland.{" "}
          </p>
          <div className="flex flex-col">
            {cards.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => handleOnChange(index)}
                animate={isOpen[index] ? "open" : "closed"}
                layout
                className="bg-stone-100 rounded-2xl m-2 p-2 md:p-3 lg:p-4 flex flex-col  text-slate-600 border-solid border-2 hover:shadow-lg cursor-pointer "
              >
                <motion.div
                  layout="position"
                  className="flex items-center justify-between w-full"
                >
                  <motion.div className="flex items-center">
                    {item.icon}
                    <p className="font-semibold text-md md:text-lg pl-2 ">
                      {" "}
                      {item.title}{" "}
                    </p>
                  </motion.div>
                  <motion.div
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.1 }}
                    style={{ originY: 0.55 }}
                  >
                    {item.arrow}
                  </motion.div>
                </motion.div>
                <motion.div>
                  {isOpen[index] && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 1 }}
                      className="p-1 md:p-2 text-sm"
                    >
                      {item.paragraph}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SecondPart;
