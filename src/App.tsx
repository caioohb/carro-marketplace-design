
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import VehicleDetails from "./pages/VehicleDetails";
import Favorites from "./pages/Favorites";
import Appointments from "./pages/Appointments";
import SellCar from "./pages/SellCar";
import NotFound from "./pages/NotFound";
import ScheduleVehicleEvaluation from "./pages/ScheduleVehicleEvaluation"
import Profile from "./pages/Profile";
import SimulateFinancing from "./pages/SimulateFinancing";
import MyInterests from "./pages/MyInterests";
import MySales from "./pages/MySales";
import MyPurchases from "./pages/MyPurchases";
import AdminSales from "@/pages/AdminSales";
import AdminSalesDashboard from "@/pages/AdminSalesDashboard";
import AdminVehicles from "@/pages/AdminVehicles";
import Login from "./pages/Login";
import Register from "./pages/Register";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/vehicles" element={<Index />} />
            <Route path="/vehicle/:id" element={<VehicleDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/sell" element={<SellCar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/simulate-financing" element={<SimulateFinancing />} />
            <Route path="/interests" element={<MyInterests />} />
            <Route path="/my-sales" element={<MySales />} />
            <Route path="/my-purchases" element={<MyPurchases />} />
            <Route path="/admin/sales" element={<AdminSales />} />
            <Route path="/admin/sales-dashboard" element={<AdminSalesDashboard />} />
            <Route path="/admin/vehicles" element={<AdminVehicles />} />
            <Route path="/schedule-evaluation" element={<ScheduleVehicleEvaluation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
