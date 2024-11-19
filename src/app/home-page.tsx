import React from "react";
import { Layout } from "antd";
import Scaffold from "../view/layout/layout-page.tsx";
import Ali from "../components/dashboard.tsx";
// import Sidebar from "../view/layout/sidebar.tsx";
import Dashboard from "../components/dashboard.tsx";

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Scaffold>
      </Scaffold>
    </Layout>
    
  );
};

export default App;
