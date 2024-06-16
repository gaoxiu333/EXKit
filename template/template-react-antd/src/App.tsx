import React from "react";

import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = new Array(2).fill(null).map((_, index) => {
  const key = String(index + 1);

  return {
    key: `page${key}`,
    label: `Page ${key}`,
  };
});

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Header style={{ display: "flex", alignItems: "center", color: "#fff" }}>
        LOGO
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["page1"]}
            defaultOpenKeys={["page1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
            onSelect={({ key }) => navigate(`/${key}`)}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
