import { Layout as AntLayout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import HeaderSearchBar from "../../components/opshee-header-search";
import "@/app/styles/layout.scss";

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
