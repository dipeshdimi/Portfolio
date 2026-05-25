import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import { Analytics } from "@vercel/analytics/next"

const AllRoutes = () => {
  return (
    <div>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
