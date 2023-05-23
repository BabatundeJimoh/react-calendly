import React from "react";
import { Routes, Route } from "react-router-dom";
import Individual from "./Firstpage/Individual";
import Teams from "./Firstpage/Teams";
import Enterprice from "./Firstpage/Enterprice";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Individual />} />
      <Route path="teams" element={<Teams />} />
      <Route path="enterprice" element={<Enterprice />} />
    </Routes>
  );
};

export default Routing;
