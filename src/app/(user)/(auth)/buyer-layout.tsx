import { Footer, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import logo from "../../../../public/logo.png";
import "./styles.scss";
import { Image } from "antd";

export default function BuyerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header className="opshee-buyer">
        <div className="opshee-buyer-logo">
          <Image src={logo.src} width={150} preview={false} />
          <Title level={2}>Đăng nhập</Title>
        </div>
      </Header>
      <div className="opshee-buyer-form">{children}</div>
    </div>
  );
}
