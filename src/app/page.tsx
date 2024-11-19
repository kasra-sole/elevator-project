import React from "react";
import { Layout } from "antd";
import Dashoard from "../view/layout/defultpage.tsx";

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Dashoard>
        
      </Dashoard>
      {/* Add other content here */}
     
    </Layout>
  );
};

export default App;
