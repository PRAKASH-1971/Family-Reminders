import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Dates from "./Dates";
import Editpage from "./EditPage";
import Health from "./Health";
import Home from "./Home";
import Homepage from "./Homepage";
import Kids from "./Kids";
import Mobile from "./Mobile";
import Signup from "./Signup";
import Trip from "./Trip";
import Vehicle from "./Vehicle";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={  <Stack direction="row"> 
        <Sidebar />
        <Homepage />
        </Stack> } />
      <Route path="/task/:id"
        element={ <Stack direction="row">
            <Sidebar />
            <Editpage />
          </Stack> } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Dates" element={<Dates />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/Health" element={<Health />} />
      <Route path="/Mobile" element={<Mobile />} />
      <Route path="/Vehicle" element={<Vehicle />} />
      <Route path="/Trip" element={<Trip />} />
    </Routes>
  );
};

export default MainRoutes;
