"use client";
import React, { useState, useEffect } from "react";
import { Card, Layout } from "antd";
// import "./style/ongoingPage.css"; // Add custom CSS if needed

const { Content } = Layout;

interface Project {
  name: string;
  owner: string;
  priority: string;
  location: string;
}

const projects: Project[] = [
  { name: "Quis Tortor Id", owner: "Lyon Spreag", priority: "Medium", location: "Brotas" },
  { name: "Luctus Nec Ullamcorper", owner: "Anna Smith", priority: "High", location: "New York" },
  { name: "Integer Lacinia", owner: "John Doe", priority: "Low", location: "Paris" },
  { name: "Vulputate Magna", owner: "Emma Watson", priority: "Critical", location: "London" },
];

const OngoingProjects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const currentProject = projects[currentProjectIndex];

  return (
    <Card bordered className="ongoing-projects-card">
      <h3>پروژه‌های در حال انجام</h3>
      <ul>
        <li>
          <strong>نام پروژه:</strong> {currentProject.name}
        </li>
        <li>
          <strong>مالک:</strong> {currentProject.owner}
        </li>
        <li>
          <strong>اولویت:</strong> {currentProject.priority}
        </li>
        <li>
          <strong>مکان:</strong> {currentProject.location}
        </li>
      </ul>
      <button className="view-all-button">مشاهده همه</button>
    </Card>
  );
};

const OngoingPage: React.FC = () => {
  return (
    <Layout className="ongoing-page-layout">
      <Content>
        <OngoingProjects projects={projects} />
      </Content>
    </Layout>
  );
};

export default OngoingPage;
