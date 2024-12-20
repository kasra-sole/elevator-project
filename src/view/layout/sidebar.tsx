"use client"
import React from "react";
import { Menu, Layout } from "antd";
import "./style/defult.css"
import { Link } from "react-router-dom";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
const { Header, Content, Sider } = Layout;
const SidebarComponent: React.FC<{ collapsed: boolean; darkMode: boolean; menuItems: Array<any> }> = ({ collapsed, darkMode, menuItems }) => {
 
  return (
    <Sider
    trigger={null}
    collapsible
    collapsed={collapsed}
    width={200}
    className="sider"
    style={{
      background: darkMode ? "#001529" : "#ffffff", 
    }}
  >
    <div className="brand">
      <h2>برند</h2>
    </div>
    <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu"
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link> 
          </Menu.Item>
        ))}
      </Menu>
  </Sider>
  );
};

export default SidebarComponent;
