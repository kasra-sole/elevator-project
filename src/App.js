import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Customers from "./components/customer/customer.tsx";
import Orders from "./components/new-order/NewOrder.tsx";
import Scaffold from "./view/layout/layout-page.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Scaffold />} path="/">
          <Route path="orders" element={<Orders />} />
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
