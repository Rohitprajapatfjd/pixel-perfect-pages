import { Route } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";

const AdminRoutes = () => (
  <Route path="admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
  </Route>
);

export default AdminRoutes;
