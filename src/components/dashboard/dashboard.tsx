// Dashboard.tsx
"use client";
import React from "react";
import "./style/Dashboard.css";
import { Divider, Breadcrumb, Layout, Card, Row, Col } from "antd";
import OngoingProjects from "./OngoingProjects.tsx";
import TaskTable from "./tasktable.tsx";

const { Content } = Layout;

const Dashboard: React.FC = () => {
  return (
    <div className="header-page">
      <Content className="title">
        <div className="page-conteiner">
          <h2>داشبورد</h2>
          <Breadcrumb
            className="breadcrumb"
            items={[{ title: "خانه" }, { title: "داشبورد" }]}
          />
        </div>
        <Divider className="divider" orientation="left">
          داشبورد پیش‌فرض
        </Divider>

        <div className="cart_layout">
          <Row gutter={[16, 16]} className="dashboard-layout">
            <Col xs={24} sm={24} lg={13} className="start-card-container">
              <Card bordered className="start-card">
                <h3>شما 2 پروژه برای اتمام این هفته دارید</h3>
                <p>
                  شما 68% از هدف ماهانه خود را تکمیل کرده‌اید. به تلاش ادامه
                  دهید!
                </p>
                <button className="start-button">شروع کنید</button>
              </Card>
            </Col>

            <Col xs={24} sm={24} lg={6} className="info-cards-container">
              <Card bordered className="info-card">
                <p>10+ پروژه فعال</p>
                <p>هدف شما: 12 پروژه</p>
              </Card>
              <Card bordered className="info-card">
                <p>60+ تسک در حال انجام</p>
                <p>هدف شما: 75 تسک</p>
              </Card>
            </Col>
            <Col xs={24} sm={24} lg={5} className="ongoing-projects-container">
              <OngoingProjects />
            </Col>
          </Row>
        </div>
        <div className="table">
          <TaskTable />
        </div>
      </Content>
    </div>
  );
};

export default Dashboard;
