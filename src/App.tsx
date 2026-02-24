import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import AdminLayout from "@/layouts/AdminLayout";
import MerchantLayout from "@/layouts/MerchantLayout";
import Home from "@/pages/website/Home";
import Strategies from "@/pages/website/Strategies";
import Education from "@/pages/website/Education";
import Blog from "@/pages/website/Blog";
import Services from "@/pages/website/Services";
import Basket from "@/pages/website/Basket";
import NotFound from "@/pages/website/NotFound";
import Dashboard from "@/pages/admin/Dashboard";
import TicketSection from "./pages/admin/Ticket";
import { TicketProvider } from "./context/TicketContext";
import { AuthProvider } from "./context/AuthContext";
import RoleAuthPage from "@/pages/auth/RoleAuthPage";
import ProtectedRoute from "@/routes/ProtectedRoute";
import MerchantDashboard from "@/components/merchant/Dashboard";
import StockTips from "@/components/merchant/StockTips";
import AlgoService from "@/components/merchant/AlgoService";
import BasketSystem from "@/components/merchant/BasketSystem";
import MerchantServices from "@/components/merchant/Services";
import Cart from "@/components/merchant/Cart";
import ServiceCalendar from "@/components/merchant/ServiceCalendar";
import Profile from "@/components/merchant/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <TicketProvider>
            <Routes>
              <Route element={<WebsiteLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/strategies" element={<Strategies />} />
                <Route path="/education" element={<Education />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/services" element={<Services />} />
                <Route path="/basket" element={<Basket />} />
              </Route>

              <Route path="/login" element={<RoleAuthPage />} />

              <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="ticket" element={<TicketSection />} />
                </Route>
              </Route>

              <Route element={<ProtectedRoute allowedRoles={["merchant"]} />}>
                <Route path="/merchant" element={<MerchantLayout />}>
                  <Route index element={<MerchantDashboard />} />
                  <Route path="stock-tips" element={<StockTips />} />
                  <Route path="algo-service" element={<AlgoService />} />
                  <Route path="baskets" element={<BasketSystem />} />
                  <Route path="services" element={<MerchantServices />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="calendar" element={<ServiceCalendar />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </TicketProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
