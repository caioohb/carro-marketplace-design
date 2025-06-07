import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import PublicLayout from "@/components/layouts/PublicLayout";
import { PrivateLayout } from "@/components/layouts/PrivateLayout";
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
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <Routes>
              {/* Páginas públicas */}
              <Route path="/" element={
                <PublicLayout>
                  <Landing />
                </PublicLayout>
              } />
              <Route path="/vehicles" element={
                <PublicLayout>
                  <Index />
                </PublicLayout>
              } />
              <Route path="/login" element={
                <PublicLayout>
                  <Login />
                </PublicLayout>
              } />
              <Route path="/register" element={
                <PublicLayout>
                  <Register />
                </PublicLayout>
              } />
              <Route path="/schedule-evaluation" element={
                <PublicLayout>
                  <ScheduleVehicleEvaluation />
                </PublicLayout>
              } />
              <Route path="/vehicle/:id" element={
                <PublicLayout>
                  <VehicleDetails />
                </PublicLayout>
              } />
              <Route path="/simulate-financing" element={
                <PublicLayout>
                  <SimulateFinancing />
                </PublicLayout>
              } />
              
              {/* Páginas privadas */}
              <Route path="/favorites" element={
                <PrivateLayout>
                  <Favorites />
                </PrivateLayout>
              } />
              <Route path="/appointments" element={
                <PrivateLayout>
                  <Appointments />
                </PrivateLayout>
              } />
              <Route path="/sell" element={
                <PrivateLayout>
                  <SellCar />
                </PrivateLayout>
              } />
              <Route path="/profile" element={
                <PrivateLayout>
                  <Profile />
                </PrivateLayout>
              } />
              <Route path="/interests" element={
                <PrivateLayout>
                  <MyInterests />
                </PrivateLayout>
              } />
              <Route path="/my-sales" element={
                <PrivateLayout>
                  <MySales />
                </PrivateLayout>
              } />
              <Route path="/my-purchases" element={
                <PrivateLayout>
                  <MyPurchases />
                </PrivateLayout>
              } />
              <Route path="/admin/sales" element={
                <PrivateLayout>
                  <AdminSales />
                </PrivateLayout>
              } />
              <Route path="/admin/sales-dashboard" element={
                <PrivateLayout>
                  <AdminSalesDashboard />
                </PrivateLayout>
              } />
              <Route path="/admin/vehicles" element={
                <PrivateLayout>
                  <AdminVehicles />
                </PrivateLayout>
              } />
              
              {/* Página de erro */}
              <Route path="*" element={
                <PublicLayout>
                  <NotFound />
                </PublicLayout>
              } />
            </Routes>
          </Router>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
