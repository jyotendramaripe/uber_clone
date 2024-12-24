import React, { useState } from "react";
import { Link } from "react-router-dom";

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CaptainData, setCaptainData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault(); // this helps to prevent the default behaviour of the form as it will refresh the page.
    setCaptainData({ email: email, password: password });
    console.log(CaptainData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-md mb-2">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded border px-4 py-2 w-full text-lg placeholder:text-sm"
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
            className="bg-[#eeeeee] mb-7 rounded border px-4 py-2 w-full text-lg placeholder:text-sm"
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
          Join Our Fleet?{" "}
          <Link className="text-blue-700" to="/captain-signup">
          Register as a Captain
          </Link>
        </p>
      </div>
      <div className="">
        <Link
          to="/login"
          className="flex items-center justify-center mb-5 bg-orange-400 text-white w-full rounded px-4 py-2 font-semibold"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
