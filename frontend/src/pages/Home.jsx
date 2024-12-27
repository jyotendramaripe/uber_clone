import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
// remixicon/fonts/remixicon.css is the css file for the icons installed using npm i remixicon --save and then imported in the file

const Home = () => {
  const [pickup, setPickup] = React.useState("");
  const [dropoff, setDropoff] = React.useState("");

  const [panelOpen, setPanelOpen] = React.useState(false);
  // panelOpen is a state variable to control the opening and closing of the panel on the home page to search for locations whne the user clicks on the input field to enter the pickup and dropoff locations
  const panelRef = useRef(null);
  // panelRef is a reference to the panel div element to animate the opening and closing of the panel
  const panelCloseRef = useRef(null);
  // panelCloseRef is a reference to the close icon on the panel to animate the opening and closing of the panel

  const [vehiclePanelOpen, setVehiclePanelOpen] = React.useState(false);
  // vehiclePanelOpen is a state variable to control the opening and closing of the vehicle panel on the home page to display the available vehicles when the user clicks on the location search panel.
  const vehiclePanelRef = useRef(null);
  // vehiclePanelRef is a reference to the vehicle panel div element to animate the opening and closing of the vehicle panel

  const [confirmRidePanel, setConfirmRidePanel] = React.useState(false);
  const confirmRidePanelRef = useRef(null);
  // confirmRidePanelRef is a reference to the confirm ride panel div element to animate the opening and closing of the confirm ride panel

  const [vehicleFound, setVehicleFound] = React.useState(false);
  // vehicleFound is a state variable to control the opening and closing of the vehicle panel on the home page to display the looking for driver panel when the user clicks on the confirm button in the vehicle panel.
  const vehicleFoundRef = useRef(null);
  // vehicleFoundRef is a reference to the looking for driver panel div element to animate the opening and closing of the looking for driver panel

  const [waitingForDriver, setWaitingForDriver] = React.useState(false);
  // waitingForDriver is a state variable to control the opening and closing of the waiting for driver panel on the home page to display driver details after the driver has been found in the looking for driver panel.
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  //useGSAP below is a custom hook that takes a callback function and an array of dependencies as arguments and runs the callback function whenever the dependencies change. It is used to animate the opening and closing of the panel on the home page to search for locations when the user clicks on the input field to enter the pickup and dropoff locations.
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "75%",
          padding: "24",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen, panelCloseRef]
  );
  //useGSAP below is a custom hook that takes a callback function and an array of dependencies as arguments and runs the callback function whenever the dependencies change. It is used to animate the opening and closing of the vehicle panel on the home page to display the available vehicles when the user clicks on the location search panel.
  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
          // translateY(0) moves the vehicle panel to the top of the screen
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
          //
        });
      }
    },
    [vehiclePanelOpen]
  );

  // useGSAP below is a custom hook that takes a callback function and an array of dependencies as arguments and runs the callback function whenever the dependencies change. It is used to animate the opening and closing of the confirm ride panel on the home page to confirm the ride when the user clicks on the book button in the vehicle panel.
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  // useGSAP below is a custom hook that takes a callback function and an array of dependencies as arguments and runs the callback function whenever the dependencies change. It is used to animate the opening and closing of the looking for driver panel on the home page to display the looking for driver panel when the user clicks on the confirm button in the vehicle panel.
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  // useGSAP below is a custom hook that takes a callback function and an array of dependencies as arguments and runs the callback function whenever the dependencies change. It is used to animate the opening and closing of the waiting for driver panel on the home page to display driver details after the driver has been found in the looking for driver panel.
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end absolute top-0 w-full h-screen">
        <div className="h-[30%] bg-white p-5 relative">
          <h5
            className="absolute opacity-0 right-5 top-5 text-2xl"
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
          >
            <i className="ri-arrow-down-wide-line "></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-8 bg-gray-700 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-5 w-full"
              value={pickup}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
              type="text"
              placeholder="Add a Pickup location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-5 w-full"
              value={dropoff}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDropoff(e.target.value)}
              type="text"
              placeholder="Dropoff location"
            />
            {/* <button>Search</button> */}
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
        {/* yy we are sending the vehiclePanel state variable and the setVehiclePanel function as props to the LocationSearchPanel component to control the opening and closing of the vehicle panel on the home page to display the available vehicles when the user clicks on the location search panel. */}
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full pt-12"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full pt-12"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full pt-12"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full  z-10 bottom-0  bg-white px-3 py-6 pt-12"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} setVehicleFound={setVehicleFound} />
      </div>
    </div>
  );
};

export default Home;
