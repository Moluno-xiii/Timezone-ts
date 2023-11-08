import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ConvertTime from "./components/ConvertTime";
import CurrentTime from "./components/CurrentTime/CurrentTime ";
import CalculateTime from "./components/CalculateTime";
import PageNotFound from "./components/PageNotFound";
import AvailableZones from "./components/AvailableZones";
import Coordinates from "./components/CurrentTime/Coordinates";
import IpAddress from "./components/CurrentTime/IpAddress";
import AutomaticTimeZone from "./components/CurrentTime/AutomaticTimeZone";
import './App.css'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/conversion" element={<ConvertTime />} />
        {/* <Route path="/current time" element={<CurrentTime />} >
          <Route path="coordinates" element={<Coordinates />} />
        <Route /> */}
        <Route path="/current time" element= {<CurrentTime />}>
          <Route path="coordinates" element={<Coordinates />} />
          <Route path="ip address" element={<IpAddress isLoading = {isLoading} setIsLoading = {setIsLoading}/>} />
          <Route path="automatically" element={<AutomaticTimeZone />} />
        </Route>
      
        <Route path="/calculate" element={<CalculateTime />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/Available zones" element={<AvailableZones />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
