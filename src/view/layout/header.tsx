"use client"
import React, { useState } from "react";
import "./style/defult.css"
import { Input, Space, Button, Avatar, Switch, Layout } from "antd";
import { AppstoreOutlined, MessageOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const HeaderComponent: React.FC<{ collapsed: boolean; setCollapsed: React.Dispatch<React.SetStateAction<boolean>>; darkMode: boolean; toggleDarkMode: (checked: boolean) => void; }> = ({ collapsed, setCollapsed, darkMode, toggleDarkMode }) => {
  return (
    <Header
      style={{
        width:1535,
        paddingRight:195 ,
        // padding:0 ,
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
          <a href="https://example.com/app" target="_blank" rel="noopener noreferrer">
            <AppstoreOutlined style={{ fontSize: 24, color: darkMode ? "#fff" : "#000", margin: "0 10px" }} />
          </a>
          <a href="https://example.com/message" target="_blank" rel="noopener noreferrer">
            <MessageOutlined style={{ fontSize: 24, color: darkMode ? "#fff" : "#000", margin: "0 10px" }} />
          </a>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <Avatar shape="square" icon={<UserOutlined />} />
        </div>
      </Space>
    </Header>
  );
};

export default HeaderComponent;
