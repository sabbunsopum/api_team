import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./components/Today";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Today />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
