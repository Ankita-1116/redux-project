import React from "react";
import { Layout } from "antd";
import Header from "../components/Header";
const { Footer, Sider, Content } = Layout;

export const LayoutWrapper = (props: any) => {
  return (
    <Layout>
      <Header
        params={{
          titleName: props.title,
          rootPage: props.rootPage,
          logOutIcon: false,
        }}
      />
      <Content>{props.children}</Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};
