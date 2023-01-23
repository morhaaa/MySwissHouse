import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Maps from "../components/Maps";
import { useRouter } from "next/router";
import InfoCard from "../components/InfoCard";
import "mapbox-gl/dist/mapbox-gl.css";
import OtherStays from "../components/OtherStays";
import Filters from "../components/Filters";
import { useEffect, useState } from "react";
import { Houses } from "../components/Houses";

function Search() {
  const router = useRouter();
  const [type, SetType] = useState([]);
  const [houses, setHouses] = useState([]);
  const [otherHouses, setOtherHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState(10);
  const [rangePrice, setRangePrice] = useState(1000000);
  const [meters, setMeters] = useState(200000);
  const [sort, setSort] = useState("");
  const [isOpen, setIsOpen] = useState({});

  /* set filter */
  const setRoomsValues = (value) => {
    setRooms(value);
  };

  const setMetersValues = (value) => {
    setMeters(value);
  };

  const setValueSort = (value) => {
    setSort(value.toLocaleString("en-US"));
  };

  const setValuePrice = (value) => {
    setRangePrice(value);
  };

  const setValueOpen = (value) => {
    setIsOpen(value);
  };
  /* apply the filters */

  useEffect(() => {
    setIsLoading(true);
    /* search by location */

    if (router.query.location) {
      SetType([]);
      const location = router.query.location;
      const queryLocation = location.toLowerCase();

      if (sort == "asc") {
        Houses.sort((a, b) => a.price - b.price);
      }
      if (sort == "desc") {
        Houses.sort((a, b) => b.price - a.price);
      }
      setHouses(
        Houses.filter((item) => {
          if (
            queryLocation == item.location.toLowerCase() &&
            rooms >= item.rooms &&
            rangePrice >= item.price &&
            meters >= item.meter
          ) {
            return [item];
          }
        })
      );

      setOtherHouses(
        Houses.filter((item) => {
          if (queryLocation !== item.location.toLowerCase()) {
            return [item];
          }
        })
      );
    }

    {
      /* search by Type */
    }
    if (router.query.type) {
      const type = router.query.type;
      SetType(type);

      setHouses(
        Houses.filter((item) => {
          if (
            type == item.type &&
            rooms >= item.rooms &&
            rangePrice >= item.price &&
            meters >= item.meter
          ) {
            return [item];
          }
        })
      );

      setOtherHouses(
        Houses.filter((item) => {
          if (type !== item.type) {
            return [item];
          }
        })
      );
    }
    setIsLoading(false);
  }, [router, rooms, meters, sort, rangePrice]);

  return (
    <div>
      <Header />
      <main>
        <section className="">
          <div className="lg:flex w-full lg:h-screen ">
            <div className="lg:basis-1/2  overflow-y-scroll">
              <InfoCard houses={houses} type={type} setOpen={setValueOpen} />
              <div className="text-3xl font-semibold py-6 border-t-4 pl-4">
                Other Stays in Switzerland
              </div>
              <OtherStays otherHouses={otherHouses} setOpen={setValueOpen} />
            </div>
            <Filters
              rooms={rooms}
              setRoom={setRoomsValues}
              meters={meters}
              setMeters={setMetersValues}
              setSort={setValueSort}
              price={rangePrice}
              setPrice={setValuePrice}
            />
            {isLoading ? (
              <p>await</p>
            ) : (
              <Maps
                houses={houses}
                type={type}
                otherHouses={otherHouses}
                isOpen={isOpen}
              />
            )}
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default Search;
