import React from "react";
import { Card, Col, Row, Statistic, Tag } from "antd";
import {
  UserOutlined,
  LikeOutlined,
  ShareAltOutlined,
  EyeOutlined,
} from "@ant-design/icons";

const SocialMediaAnalytics: React.FC = () => {
  const data = [
    {
      title: "تعداد کلیک",
      value: 120394,
      icon: <UserOutlined />,
      percentage: 75,
    },
    {
      title: "تعداد لایک ها",
      value: 89320,
      icon: <LikeOutlined />,
      percentage: 35,
    },
    {
      title: "تعداد اشتراک گذاری ها",
      value: 5674,
      icon: <ShareAltOutlined />,
      percentage: 2,
    },
    {
      title: "تعداد بازدید کنندگان",
      value: 154678,
      icon: <EyeOutlined />,
      percentage: 80,
    },
  ];

  const getTagColor = (percentage: number) => {
    if (percentage < 20) return "red";
    if (percentage < 50) return "orange";
    return "green";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        تجزیه و تحلیل سایت
      </h2>
      <Row gutter={[16, 16]}>
        {data.map((item, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              hoverable
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <Statistic
                title={item.title}
                value={item.value}
                prefix={item.icon}
                style={{ marginBottom: "16px" }}
              />
              <div style={{ display: "flex", alignItems: "center" }}>
                <Tag
                  color={getTagColor(item.percentage)}
                  style={{ fontSize: "14px" }}
                >
                  {item.percentage}%
                </Tag>
                <span
                  style={{ marginLeft: "8px", fontSize: "14px", color: "#888" }}
                >
                  نسبت به ماه گذشته
                </span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SocialMediaAnalytics;
