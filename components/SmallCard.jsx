import Image from "next/legacy/image";
import Luxury from "../public/luxury.jpg";
import City from "../public/city.jpg";
import Loft from "../public/loft.jpg";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

const houses = [
  { src: City, title: "Apartment" },
  { src: Luxury, title: "Villa" },
  { src: Loft, title: "Loft" },
  ,
];

const SmallCard = () => {
  const router = useRouter();

  const { ref: ref1, inView: view1 } = useInView({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref1}
      className="my-5 overflow-x-scroll md:space-x-6  flex md:justify-center rounded-3xl"
    >
      {houses.map((item, index) => (
        <div
          onClick={() =>
            router.push({
              pathname: "/search",
              query: {
                type: `${item.title}`,
              },
            })
          }
          key={index}
          className="hover:scale-105 transform transition duration-300 ease-out px-4 pt-6"
        >
          <div className="relative z-30 h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[330px] ">
            {" "}
            <Image
              src={item.src}
              alt="mountain"
              layout="fill"
              className="rounded-2xl cursor-pointer"
            />
          </div>
          <p className=" text-slate-500 text-lg font-medium text-center py-2">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SmallCard;
