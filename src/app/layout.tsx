import { Footer } from "antd/es/layout/layout";
import OpsheeFooter from "./components/opshee-footer";
import "./styles/global.scss";
import "./styles/layout.scss";
import AntdRegistry from "@ant-design/nextjs-registry/es/AntdRegistry";
interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <head>
        <title>Opshee</title>
      </head>
      <body>
        <AntdRegistry>
          {children}
          <Footer className="main-footer">
            <OpsheeFooter />
          </Footer>
        </AntdRegistry>
      </body>
    </html>
  );
}
