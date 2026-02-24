import { Route } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import TicketSection from "@/pages/admin/Ticket";

const AdminRoutes = () => (
  <Route path="admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="ticket" element={<TicketSection />} />
  </Route>
);

export default AdminRoutes;
