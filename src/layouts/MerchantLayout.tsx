import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/merchant/layouts/AppSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-secondary">
      <AppSidebar/>
      <div
        className={cn(
          "flex flex-col transition-all duration-300",
          sidebarCollapsed ? "ml-[68px]" : "ml-[250px]"
        )}
      >
        <AdminTopbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
