import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { Layout, Menu, Dropdown, Button } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./App.css";
import About from "./views/about";
import AntForm from "./components/AntForm";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation()
  console.log('🎋', location.pathname);
  
  const history = useHistory()
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => history.replace("/about")}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Router>
      {location.pathname === "/login" && (
        <Switch>
          <Route path="/login">
            <AntForm />
          </Route>
        </Switch>
      )}
      {location.pathname !== "/login" && (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              defaultSelectedKeys={[location.pathname]}
              forceSubMenuRender={true}
              mode="inline"
            >
              <Menu.Item key="/" icon={<PieChartOutlined />}>
                <Link to="/" replace>Home</Link>
              </Menu.Item>
              <Menu.Item key="/about" icon={<DesktopOutlined />}>
                <Link to="/about" replace>About</Link>
              </Menu.Item>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ paddingRight: "1rem", textAlign: "right" }}
            >
              <Dropdown.Button
                overlay={menu}
                placement="bottomCenter"
                icon={<UserOutlined />}
              >
                John Doe
              </Dropdown.Button>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/">Hello Home</Route>
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      )}
    </Router>
  );
}

export default App;
