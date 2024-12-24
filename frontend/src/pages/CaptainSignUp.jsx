import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [CaptainData, setCaptainData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault(); // this helps to prevent the default behaviour of the form as it will refresh the page.
    setCaptainData({
      fullName: { firstName: firstName, lastName: lastName },
      email: email,
      password: password,
    });
    console.log(CaptainData);
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
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
          <button className="bg-black mb-3 text-white w-full rounded px-4 py-2 font-semibold">
            Login
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
        <p>
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignUp;
