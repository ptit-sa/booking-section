import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./pages/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking1 from "./pages/Booking1";
import Booking2 from "./pages/Booking2";
import Pay from "./pages/Pay";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "./features/booking/orderSlice";
function App() {
  const dispatch = useDispatch();
  const orderId = useSelector((state) => state.order.id);
  const [ currentPath ] = useState(window.location.pathname);
  console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ currentPath", currentPath);
  useEffect(
    () => {
      if (!orderId && currentPath !== "/") {
        dispatch(setId(currentPath.split("/")[1]));
      }
      console.log("orderId is:", orderId);
    },
    [ orderId, currentPath, dispatch ]
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id/booking1" element={<Booking1 />} />
        <Route path="/:id/booking2" element={<Booking2 />} />
        <Route path="/:id/pay" element={<Pay />} />
      </Routes>
    </Router>
  );
}

export default App;
