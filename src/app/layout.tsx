import { Layout as AntLayout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "../app/styles/global.scss";
import "../app/styles/layout.scss";
import React from "react";
import HeaderSearchBar from "./components/opshee-header-search";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<LayoutProps>) {
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
