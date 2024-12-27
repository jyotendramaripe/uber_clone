import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from 'axios';

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')

  const {captain, setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault(); // this helps to prevent the default behaviour of the form as it will refresh the page.
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16  mb-5"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-md mb-2">What's your Name?</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-base placeholder:text-base"
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="first name"
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-base placeholder:text-base"
              required
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="last name"
            />
          </div>
          <h3 className="text-lg font-md mb-2">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded border px-4 py-2 w-full text-base placeholder:text-base"
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="example@gmail.com"
          />
          <h3 className="text-lg font-md mb-2">Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded border px-4 py-2 w-full text-base placeholder:text-base"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password "
          />
          <h3 className="text-lg font-md mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-2">
          <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
            </div>
            <div className="flex gap-4 mb-5">
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-md placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className="bg-black mb-3 text-white w-full rounded px-4 py-2 font-semibold">
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have an Account?{" "}
          <Link className="text-blue-700" to="/captain-login">
            Login here
          </Link>
        </p>
      </div>
      <div className="text-[10px] leading-tight">
      <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
      Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  );
};

export default CaptainSignUp;
