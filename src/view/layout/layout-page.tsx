import React, { ReactNode, useState } from "react";
import "./style/defult.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Customers from "../../components/customer/customer.tsx";
import Orders from "../../components/new-order/NewOrder.tsx";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import HeaderComponent from "./header.tsx";
import SidebarComponent from "./sidebar.tsx";

interface ScaffoldProps {
  children?: ReactNode;
}

const Scaffold: React.FC<ScaffoldProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const menuItems = [
    { key: "1", icon: <UserOutlined />, label: "داشبورد", path: "/" },
    {
      key: "2",
      icon: <LaptopOutlined />,
      label: "ثبت سفارشات",
      path: "/orders",
    },
    {
      key: "3",
      icon: <NotificationOutlined />,
      label: "مشتریان",
      path: "/customers",
    },
  ];

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    console.log(`Switch to ${checked ? "Dark Mode" : "Light Mode"}`);
  };

  return (
    <div className={`layout ${darkMode ? "dark-mode" : ""}`}>
      <HeaderComponent
        collapsed={collapsed}
        darkMode={darkMode}
        setCollapsed={setCollapsed}
        toggleDarkMode={toggleDarkMode}
      />
      <div className="container">
        <SidebarComponent
          collapsed={collapsed}
          darkMode={darkMode}
          menuItems={menuItems}
        />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Scaffold;
