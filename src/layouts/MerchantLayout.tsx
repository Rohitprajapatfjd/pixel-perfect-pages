import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/merchant/layouts/AppSidebar";

const MerchantLayout = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <AppSidebar />
      <main className="ml-[250px] flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MerchantLayout;
