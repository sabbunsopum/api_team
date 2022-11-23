import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainConts from "./components/MainConts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
