import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import List from "./pages/List";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Booking1 from "./pages/Booking1";
import Booking2 from "./pages/Booking2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id/booking1" element={<Booking1 />} />
        <Route path="/:id/booking2" element={<Booking2 />} />
      </Routes>
    </Router>
  );
}

export default App;
