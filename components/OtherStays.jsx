import Image from "next/legacy/image";
import { CgHeart } from "react-icons/cg";
import { BiBath } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";

const OtherStays = ({ otherHouses, setOpen }) => {
  return (
    <div>
      {" "}
      {otherHouses.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setOpen(item.long);
          }}
        >
          <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className=" relative h-28 w-36 md:h-52 md:w-80 flex-shrink-0">
              <Image
                src={item.img}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>

            <div className="flex flex-col flex-grow pl-5">
              <div className="flex justify-between">
                <div className="flex gap-2 md:gap-3">
                  <div className="flex  items-center md:gap-2">
                    <GrLocation /> <p>{item.location}</p>
                  </div>

                  <div className="flex items-center md:gap-2">
                    <BiBed />
                    <p>{item.rooms}</p>
                  </div>

                  <div className="flex  items-center md:gap-2">
                    <BiBath /> <p>{item.bath}</p>
                  </div>

                  <div className="hidden md:inline">
                    {" "}
                    <p>{item.meter}m²</p>
                  </div>
                </div>
                <CgHeart size={20} className="cursor-pointer" />
              </div>

              <h4 className="text-xl border-b py-2 mr-6">{item.title}</h4>

              <div>
                <p className="pt-2 text-sm text-gray-500 ">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-end items-end pt-5">
                <p className="text-lg lg:text-2xl font-semibold pb-2">
                  CHF {item.price.toLocaleString("en-US")}.-
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherStays;
