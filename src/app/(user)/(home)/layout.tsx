import { Layout as AntLayout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import "@/app/styles/layout.scss";
import HeaderSearchBar from "@/app/components/opshee-header-search";

interface LayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: Readonly<LayoutProps>) {
  return (
    <AntLayout className="main">
      <Header className="main-header">
        <HeaderSearchBar />
      </Header>
      <Content className="main-content">{children}</Content>
    </AntLayout>
  );
}
