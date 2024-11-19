import React, { useState } from "react";
import "./style/defult.css";
import {
  MessageOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  Button,
  Divider,
  Input,
  Space,
  Switch,
  Avatar,
} from "antd";

const { Header, Content, Sider } = Layout;

const Dashboard: React.FC = () => {
  // مدیریت وضعیت‌ها
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "داشبورد",
    },
    {
      key: "2",
      icon: <LaptopOutlined />,
      label: "ثبت سفارشات",
    },
    {
      key: "3",
      icon: <NotificationOutlined />,
      label: "مشتریان",
    },
  ];

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    console.log(`Switch to ${checked ? "Dark Mode" : "Light Mode"}`);
  };

  return (
    <Layout className={`rtl-layout ${darkMode ? "dark-mode" : "light-mode"}`}>
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
          items={menuItems} 
        />
      </Sider>
      <Layout className="main-layout">
        <Header
          style={{
            padding: 0,
            background: darkMode ? "#1d1d1d" : "#ffffff",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)} 
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Space align="center">
            <Input.Search
              placeholder="جستجو کنید"
              style={{
                width: 400,
                marginTop: 15,
                background: darkMode ? "#2b2b2b" : "#ffffff",
                color: darkMode ? "#fff" : "#000",
              }}
            />
            <div className="icons">
              <AppstoreOutlined />
              <MessageOutlined />
              <Switch checked={darkMode} onChange={toggleDarkMode} />
              <Avatar shape="square" icon={<UserOutlined />} />
            </div>
          </Space>
        </Header>
        <Content className="content">
          <div className="content-container">
            <h2>داشبورد</h2>
            <Breadcrumb
              className="breadcrumb"
              items={[{ title: "خانه" }, { title: "داشبورد" }]}
            />
          </div>
          <Divider className="divider" orientation="left">
            داشبورد پیش‌فرض
          </Divider>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
