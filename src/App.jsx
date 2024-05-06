import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInFroms from "./_auth/froms/SignInFroms";
import SignUp from "./_auth/froms/SignUp";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";

const App = () => {
  return (
    <div className=" flex h-screen">
      <BrowserRouter>
        <Routes>
          {/* Public  */}
          <Route element={<AuthLayout />}>
            <Route path="/sign/in" element={<SignInFroms />} />
            <Route path="/sign/up" element={<SignUp />} />
          </Route>
          {/* ! private */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
