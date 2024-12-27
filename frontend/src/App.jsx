import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import Captainlogin from "./pages/Captainlogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainSignUp from "./pages/CaptainSignUp";
import Start from "./pages/Start";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
         {/* yy wrap the Home component with the UserProtectWrapper component so that the Home component will be protected and only the authenticated users will be able to access the Home component. */}
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
         <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>

        } />
        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        } />
      </Routes>
    </div>
  );
};

export default App;
