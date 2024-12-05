import { Layout as AntLayout, Image } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "./global.scss";
import "./layout.scss";
import React from "react";
import HeaderSearchBar from "./components/opshee-header-search";
interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ title, children }: Readonly<LayoutProps>) {
  return (
    <html>
      <head>
        <title>Opshee</title>
      </head>
      <body>
        <AntLayout className="main">
          <Header className="main-header">
            <HeaderSearchBar />
          </Header>
          <Content className="main-content">{children}</Content>
          <Footer className="main-footer">{new Date().toDateString()}</Footer>
        </AntLayout>
      </body>
    </html>
  );
}
