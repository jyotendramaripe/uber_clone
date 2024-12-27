import React from "react";

const LocationSearchPanel = (props) => {
  // console.log(props);
  const locations = [
    "bobbili fort",
    "bobbili guesthouse",
    "bobbili bus-station",
    "bobbili rly-station",
  ];
  return (
    <div>
      {locations.map((location, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h2>{location}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
