import { Route } from "react-router-dom";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import Home from "@/pages/website/Home";
import Strategies from "@/pages/website/Strategies";

const WebsiteRoutes = () => (
  <Route element={<WebsiteLayout />}>
    <Route index element={<Home />} />
    <Route path="strategies" element={<Strategies />} />
  </Route>
);

export default WebsiteRoutes;
