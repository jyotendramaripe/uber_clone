import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();// this helps to prevent the default behaviour of the form as it will refresh the page.
    setUserData({ email:email, password:password });
    // console.log(UserData);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mt-3 mb-8"
          src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png"
          alt=""
        />
        <form onSubmit={(e) => {submitHandler(e)}}> 
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
          New Here?{" "}
          <Link className="text-blue-700" to="/signup">
            Create New Account
          </Link>
        </p>
      </div>
      <div className="">
        <Link to='/captain-login' className="flex items-center justify-center mb-5 bg-green-600 text-white w-full rounded px-4 py-2 font-semibold">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
