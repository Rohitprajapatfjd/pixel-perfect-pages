import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import AdminLayout from "@/layouts/AdminLayout";
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
            {/* Website Routes */}
            <Route element={<WebsiteLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/strategies" element={<Strategies />} />
              <Route path="/education" element={<Education />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              <Route path="/basket" element={<Basket />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
             <Route path="/admin/ticket" element={<TicketSection />} />

            <Route path="*" element={<NotFound />} />
          </Routes>

        </TicketProvider>
      </AuthProvider>

    </BrowserRouter>
  </TooltipProvider>
</QueryClientProvider>
);

export default App;
