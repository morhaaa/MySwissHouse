import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { Houses } from "../components/Houses";

const Filters = ({
  rooms,
  setRoom,
  meters,
  setMeters,
  setSort,
  price,
  setPrice,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const roomsValue = [
    { value: 2, displayedValue: 2 },
    { value: 3, displayedValue: 3 },
    { value: 4, displayedValue: 4 },
    { value: 100, displayedValue: "5+" },
  ];

  const metersValue = [
    { value: 70, displayedValue: 70 },
    { value: 90, displayedValue: 90 },
    { value: 150, displayedValue: 150 },
    { value: 20000, displayedValue: "200+" },
  ];

  /*check only one rooms value for time*/
  const [checkedRoomState, setCheckedRoomState] = useState(
    new Array(roomsValue.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedRoomState.map((item, index) =>
      index === position ? (item == true ? false : true) : (item = false)
    );
    setCheckedRoomState(updatedCheckedState);
  };

  /*check only one meters value for time*/
  const [checkedMetersState, setCheckedMetersState] = useState(
    new Array(metersValue.length).fill(false)
  );
  const handleMetersOnChange = (position) => {
    const updatedMetersState = checkedMetersState.map((item, index) =>
      index === position ? (item == true ? false : true) : (item = false)
    );
    setCheckedMetersState(updatedMetersState);
  };

  return (
    <div className="absolute right-4 top-24 md:top-20 z-40 ">
      {" "}
      <div className="border-2 border-gray-300 drop-shadow-xl py-1 lg:py-3 bg-gray-200 rounded-2xl ">
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="text-gray-600 px-2 md:px-6 flex gap-1 items-center opacity-1 cursor-pointer hover:text-gray-900"
          >
            {" "}
            <h2 className="font-bold text-md md:text-lg">Filters</h2>
            <RiArrowDownSFill size={20} />
          </div>
        )}
        {isOpen && (
          <div className="relative flex flex-col justify-center py-5 px-8 gap-10  w-[350px] ">
            <h2
              className="absolute font-bold top-0 right-2 py-1 px-3 rounded-full cursor-pointer hover:bg-gray-400"
              onClick={() => setIsOpen(false)}
            >
              x
            </h2>

            <div className="flex gap-20">
              <div>
                {" "}
                <p className="font-bold text-lg">Rooms</p>
                {roomsValue.map((item, id) => (
                  <div key={id} className="py-1">
                    <input
                      type="checkbox"
                      id={item.value}
                      value={id}
                      checked={checkedRoomState[id]}
                      onChange={() => {
                        setRoom(rooms == item.value ? 100 : item.value);
                        handleOnChange(id);
                      }}
                      className="cursor-pointer  mr-1"
                    />
                    <label htmlFor={id}>{item.displayedValue}</label>
                  </div>
                ))}
              </div>

              <div>
                {" "}
                <p className="font-bold text-lg">Meters</p>
                {metersValue.map((item, id) => (
                  <div key={id} className="py-1">
                    <input
                      type="checkbox"
                      id={item.value}
                      value={id}
                      checked={checkedMetersState[id]}
                      onChange={() => {
                        setMeters(meters == item.value ? 20000 : item.value);
                        handleMetersOnChange(id);
                      }}
                      className="cursor-pointer  mr-1"
                    />
                    <label htmlFor={id}>{item.displayedValue} m²</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {" "}
              <p className="font-bold text-lg">Range Price</p>
              <div className="flex items-center">
                <span>0 chf</span>
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  onChange={(e) => setPrice(e.target.value)}
                  className="cursor-pointer"
                />
                <span> {price}.- chf</span>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-xl">Sort By</h2>

              <div>
                <input
                  type="radio"
                  id="asc"
                  value="asc"
                  name="price"
                  onChange={() => setSort("asc")}
                  className="cursor-pointer  mr-1"
                />
                <label>Price: Low-high</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="desc"
                  value="desc"
                  name="price"
                  onChange={() => setSort("desc")}
                  className="cursor-pointer  mr-1"
                />
                <label>Price: High-Low</label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
