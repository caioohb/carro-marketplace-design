
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { Layout } from "@/components/Layout";
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
              {/* Páginas públicas sem sidebar */}
              <Route path="/" element={
                <Layout showSidebar={false}>
                  <Landing />
                </Layout>
              } />
              <Route path="/vehicles" element={
                <Layout showSidebar={false}>
                  <Index />
                </Layout>
              } />
              <Route path="/login" element={
                <Layout showSidebar={false}>
                  <Login />
                </Layout>
              } />
              <Route path="/register" element={
                <Layout showSidebar={false}>
                  <Register />
                </Layout>
              } />
              
              {/* Páginas que podem ter sidebar se autenticado */}
              <Route path="/schedule-evaluation" element={
                <Layout>
                  <ScheduleVehicleEvaluation />
                </Layout>
              } />
              <Route path="/vehicle/:id" element={
                <Layout>
                  <VehicleDetails />
                </Layout>
              } />
              <Route path="/favorites" element={
                <Layout>
                  <Favorites />
                </Layout>
              } />
              <Route path="/appointments" element={
                <Layout>
                  <Appointments />
                </Layout>
              } />
              <Route path="/sell" element={
                <Layout>
                  <SellCar />
                </Layout>
              } />
              <Route path="/profile" element={
                <Layout>
                  <Profile />
                </Layout>
              } />
              <Route path="/simulate-financing" element={
                <Layout>
                  <SimulateFinancing />
                </Layout>
              } />
              <Route path="/interests" element={
                <Layout>
                  <MyInterests />
                </Layout>
              } />
              <Route path="/my-sales" element={
                <Layout>
                  <MySales />
                </Layout>
              } />
              <Route path="/my-purchases" element={
                <Layout>
                  <MyPurchases />
                </Layout>
              } />
              <Route path="/admin/sales" element={
                <Layout>
                  <AdminSales />
                </Layout>
              } />
              <Route path="/admin/sales-dashboard" element={
                <Layout>
                  <AdminSalesDashboard />
                </Layout>
              } />
              <Route path="/admin/vehicles" element={
                <Layout>
                  <AdminVehicles />
                </Layout>
              } />
              
              {/* Página de erro */}
              <Route path="*" element={
                <Layout showSidebar={false}>
                  <NotFound />
                </Layout>
              } />
            </Routes>
          </Router>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
