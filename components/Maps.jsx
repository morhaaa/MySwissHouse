import Map, { Marker, Popup, NavigationControl } from "react-map-gl";
import { useState, useEffect } from "react";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";
import { Houses } from "./Houses";

const Maps = ({ houses, type, otherHouses, isOpen }) => {
  const [showPopup, setShowPopup] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const coordinate = houses.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));

  const center = getCenter(coordinate);

  const [viewport, setViewport] = useState(() => {
    if (type == "Apartment" || type == "Villa" || type == "Loft") {
      return { latitude: 47, longitude: 8.6, zoom: 6.5 };
    } else {
      return center == false
        ? { latitude: 47, longitude: 8.6, zoom: 6.5 }
        : {
            latitude: center.latitude,
            longitude: center.longitude,
            zoom: 11,
          };
    }
  });

  useEffect(() => {
    setIsLoading(true);
    setViewport(() => {
      if (type == "Apartment" || type == "Villa" || type == "Loft") {
        return { latitude: 47, longitude: 8.6, zoom: 6.5 };
      } else {
        return center == false
          ? { latitude: 47, longitude: 8.6, zoom: 6.5 }
          : {
              latitude: center.latitude,
              longitude: center.longitude,
              zoom: 11,
            };
      }
    });
    setIsLoading(false);
  }, [houses]);

  return isLoading ? (
    ""
  ) : (
    <div className="hidden lg:inline basis-1/2 border-l-4">
      <Map
        mapStyle="mapbox://styles/mrhanmi/clbly8xyq002z15nsbn5agml3"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        style={{ width: "100%", height: "100%" }}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        <NavigationControl position="top-left" />

        {Houses.map((item, index) => (
          <div key={index}>
            <Marker longitude={item.long} latitude={item.lat}>
              <p
                className="cursor-pointer text-4xl hover:scale-125"
                onClick={() => setShowPopup(item.long)}
                anchor="bottom"
              >
                📍
              </p>
            </Marker>

            {(isOpen == item.long || showPopup == item.long) && (
              <Popup
                key={item.long}
                latitude={item.lat}
                longitude={item.long}
                closeButton={true}
                closeOnClick={false}
                maxWidth="1000"
              >
                <div className="flex flex-col">
                  <Image
                    src={item.img}
                    alt="House"
                    width={140}
                    height={10}
                    className="rounded-lg"
                  />
                  <p className="text-md">{item.title}</p>
                  <p className="font-semibold">
                    {" "}
                    CHF {item.price.toLocaleString("en-US")}.-
                  </p>
                </div>
              </Popup>
            )}
          </div>
        ))}
      </Map>
      /
    </div>
  );
};

export default Maps;
