import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function RoutesComponent() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutesComponent;
