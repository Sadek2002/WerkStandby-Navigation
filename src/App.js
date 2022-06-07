import React from "react";
import { Route, Routes } from "react-router-dom";

import Stap1 from "../pages/Stap1";
import Stap2 from "../pages/Stap2";
import Stap3 from "../pages/Stap3";
import Stap4 from "../pages/Stap4";
import Stap5 from "../pages/Stap5";
import Stap6 from "../pages/Stap6";
import Stap7 from "../pages/Stap7";
import Stap8 from "../pages/Stap8";
import Upload from "../pages/Upload";

function App() {
  return (
    <div className="App-intro">
      <Routes>
        <Route path="/Stap1" element={<Stap1 />} />
        <Route path="/Stap2" element={<Stap2 />} />
        <Route path="/Stap3" element={<Stap3 />} />
        <Route path="/Stap4" element={<Stap4 />} />
        <Route path="/Stap5" element={<Stap5 />} />
        <Route path="/Stap6" element={<Stap6 />} />
        <Route path="/Stap7" element={<Stap7 />} />
        <Route path="/Stap8" element={<Stap8 />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </div>
  );
}
export default App;
