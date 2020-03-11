import * as React from "react";
import { Layout, Menu, Avatar } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import BrandLogo from "./components/BrandLogo";
import { auth } from "./firebase/index";

const AppLayout: React.FunctionComponent<
  React.ReactNode & RouteComponentProps
> = ({ children, history }) => {
  const logout = () => {
    auth.signOut().then(() => history.push("/login"));
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider collapsible collapsed={true} theme={"light"}>
        <Menu mode={"inline"}>
          <Menu.Item onClick={() => history.push("/")}>
            <BrandLogo />
          </Menu.Item>
          <Menu.Item>
            <UnorderedListOutlined />
          </Menu.Item>
        </Menu>
        <AvatarItem onClick={logout}>
          <Avatar src={auth.currentUser.photoURL} />
        </AvatarItem>
      </Layout.Sider>
      <Layout>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(AppLayout);

const AvatarItem = styled.div`
  position: absolute;
  bottom: 80px;
  width: 100%;
  padding: 0 1rem !important;
  text-align: center;
`;
