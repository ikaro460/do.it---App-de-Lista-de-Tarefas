import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup/indes";

function RoutesComponent() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default RoutesComponent;
