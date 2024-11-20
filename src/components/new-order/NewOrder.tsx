import React from "react";
import { Layout, Row, Col, Divider, Breadcrumb } from "antd";
import Table from "./Table.tsx";
import Calendar from "./Calendar.tsx";
import Social from "./Social.tsx";
import Card from "./Card.tsx";
import "./style/NewOrder.css";

const { Content } = Layout;

const Order: React.FC = () => {
  return (
    <Layout className="container">
      <Content>
        <div>
          <h2>ثبت سفارشات</h2>
          <Breadcrumb items={[{ title: "خانه" }, { title: "ثبت سفارشات" }]} />
        </div>
        <Divider orientation="left">ثبت سفارشات</Divider>

        <Social></Social>

        <Row>
          <Col span={12}>
            <Calendar />
          </Col>
          <Col span={12}>
            <Card />
          </Col>
        </Row>

        <Table></Table>
      </Content>
    </Layout>
  );
};

export default Order;
