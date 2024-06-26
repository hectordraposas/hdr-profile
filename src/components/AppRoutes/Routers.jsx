import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import FaqPage from "../../pages/FaqPage";
const Routers = ({ setScrollBehavior, scroll }) => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />}></Route>
      <Route
        path="/home"
        element={
          <HomePage setScrollBehavior={setScrollBehavior} scroll={scroll} />
        }
      ></Route>
      <Route path="/faq" element={<FaqPage />}></Route>
    </Routes>
  );
};

export default Routers;
