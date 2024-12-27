import React from "react";

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehicleFound(false);
          // props.setConfirmRidePanel(false);
          // props.setVehiclePanelOpen(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line "></i>
      </h5>
      <h1 className="text-lg font-semibold mb-2">Looking For Driver</h1>
      <div className="flex gap-2  items-center justify-between flex-col w-full border-2 p-3 rounded-xl mb-2">
        <img
          className="h-30"
          src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className=" text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-md font-medium">56/11A</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="ri-map-pin-5-fill"></i>
            <div>
              <h3 className="text-md font-medium">56/11A</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 ">
            <i className="ri-wallet-3-fill"></i>
            <div>
              <h3 className="text-md font-medium">₹193.45</h3>
              <p className="text-sm text-gray-500">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
