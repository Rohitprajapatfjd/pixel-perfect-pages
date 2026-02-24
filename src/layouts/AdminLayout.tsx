import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      setMobileSidebarOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-secondary">
      {isMobile && mobileSidebarOpen && (
        <button
          aria-label="Close menu overlay"
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-20 bg-black/40"
        />
      )}

      <div
        className={cn(
          "fixed left-0 top-0 z-30 transition-transform duration-300",
          isMobile && !mobileSidebarOpen && "-translate-x-full"
        )}
      >
        <AdminSidebar
          collapsed={!isMobile && sidebarCollapsed}
          onToggle={() =>
            isMobile
              ? setMobileSidebarOpen(false)
              : setSidebarCollapsed((prev) => !prev)
          }
          isMobile={isMobile}
        />
      </div>

      <div
        className={cn(
          "flex min-h-screen flex-col transition-all duration-300",
          !isMobile && (sidebarCollapsed ? "ml-[68px]" : "ml-[250px]")
        )}
      >
        <AdminTopbar onMenuClick={() => setMobileSidebarOpen((prev) => !prev)} showMenuButton={isMobile} />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
