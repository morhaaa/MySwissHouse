import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import SecondPart from "../components/SecondPart";
import SmallCard from "../components/SmallCard";
import { useInView } from "react-intersection-observer";
import Image from "next/legacy/image";
import Image1 from "../public/Investors/img1.png";
import Image2 from "../public/Investors/img2.png";
import Image3 from "../public/Investors/img3.png";
import Image4 from "../public/Investors/img4.png";

export default function Home({}) {
  const { ref: ref1, inView: view1 } = useInView({
    threshold: 0.03,
  });

  return (
    <div>
      {view1 == true ? <Header1 /> : <Header />}
      <div ref={ref1}>
        <Banner />
      </div>
      <div className="border-b-4 mx-10 md:mx-20">
        <div className="w-full text-center md:mt-20 mt-16 text-gray-600 text-lg md:text-2xl lg:text-4xl font-bold">
          THE FIRST <i className="text-red-700">SWISS</i> REAL ESTATE
        </div>
        <div className="flex justify-center items-center md:gap-28 gap-8 w-full my-7 md:my-14">
          <div className="w-[60px] sm:w-[140px]">
            <Image src={Image1} objectFit="contain" />{" "}
          </div>{" "}
          <div className="w-[60px] sm:w-[140px]">
            <Image src={Image2} objectFit="contain" />{" "}
          </div>{" "}
          <div className="w-[60px] sm:w-[140px]">
            <Image src={Image3} objectFit="contain" />{" "}
          </div>
          <div className="w-[60px] sm:w-[140px]">
            <Image src={Image4} objectFit="contain" />{" "}
          </div>
        </div>
      </div>
      <main className="w-full px-8 mt-4 md:mt-24 md:px-10  ">
        <h1 className="my-2 md:my-4 text-lg md:text-4xl font-semibold text-slate-600 text-center">
          Choose your style
        </h1>
        <SmallCard />

        <SecondPart />
      </main>
      <Footer />
    </div>
  );
}
