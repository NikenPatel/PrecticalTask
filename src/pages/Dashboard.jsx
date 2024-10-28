import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import User from "./User";
import Product from "./Product";
import Header from "../components/Navbar";
import ProtectedRoute from "../route/ProtectedRoute";
import Cart from "./Cart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <Header />
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/user" element={<User />} />
            <Route path="/" element={<h3>Welcome to the Dashboard</h3>} />
            <Route path="/product" element={<Product />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
