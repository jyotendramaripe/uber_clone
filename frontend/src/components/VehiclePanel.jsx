import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line "></i>
      </h5>
      <h1 className="text-xl font-semibold mb-2">Choose A Vehicle</h1>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex  items-center justify-between w-full border-2 p-3 active:border-black  rounded-xl mb-2"
      >
        <img
          className=" h-10"
          src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.45</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex  items-center justify-between w-full border-2 p-3 active:border-black  rounded-xl mb-2"
      >
        <img
          className=" h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹124.65</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex  items-center justify-between w-full border-2 p-3 active:border-black  rounded-xl mb-2"
      >
        <img
          className=" h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" ml-1 w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹84.15</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
