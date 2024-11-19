import React, { ReactNode, useState } from "react"; 
import "./style/defult.css"; 
import {Divider,Breadcrumb,Layout } from "antd";
import {
  LaptopOutlined, 
  NotificationOutlined, 
  UserOutlined
} from "@ant-design/icons"; 
import HeaderComponent from "./header.tsx"; 
import SidebarComponent from "./sidebar.tsx"; 
const {Content } = Layout;

interface ScaffoldProps {
  children?: ReactNode;
}

const Scaffold: React.FC<ScaffoldProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false); 
  const [darkMode, setDarkMode] = useState(false); 

  const menuItems = [
    { key: "1", icon: <UserOutlined />, label: "داشبورد" },
    { key: "2", icon: <LaptopOutlined />, label: "ثبت سفارشات" },
    { key: "3", icon: <NotificationOutlined />, label: "مشتریان" },
  ];

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    console.log(`Switch to ${checked ? "Dark Mode" : "Light Mode"}`);
  };

  return (
    <div className={`layout ${darkMode ? 'dark-mode' : ''}`}>
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
        <main className="main">{props.children}</main>
      </div>
      <Content className="content">
          <div className="content-container">
            <h2>داشبورد</h2>
            <Breadcrumb
              className="breadcrumb"
              items={[{ title: "خانه" }, { title: "داشبورد" }]}
            />
          </div>
          <Divider  className="divider" orientation="left">
            داشبورد پیش‌فرض
          </Divider>
        </Content>
    </div>
    
  );
};

export default Scaffold;
