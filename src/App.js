import React from "react";
import { Route, Routes } from "react-router-dom";

import Stap1 from "../pages/Stap1";
import Stap2 from "../pages/Stap2";

function App() {
  return (
    <div className="App-intro">
      <Routes>
        <Route path="/Stap1" element={<Stap1 />} />
        <Route path="/Stap2" element={<Stap2 />} />
      </Routes>
    </div>
  );
}
export default App;
