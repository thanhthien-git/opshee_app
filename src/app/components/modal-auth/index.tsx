import { Modal, ModalProps, Tabs } from "antd";
import LoginTab from "./modal-login";
import "./styles.scss";
import RegisterTab from "./modal-register";
import useScreen from "@/hooks/useScreen";
import { useCallback, useEffect, useState } from "react";
import TabPane from "antd/es/tabs/TabPane";

interface IModalProps extends ModalProps {
  setClose: () => void;
}

export default function ModalAuth({
  setClose,
  ...props
}: Readonly<IModalProps>) {
  const screen = useScreen();
  const [modalWidth, setModalWidth] = useState("50%");
  const [activeKey, setActiveKey] = useState("1");
  const contentHeight = [70, 60];

  const handleTabChange = useCallback((key: string) => {
    setActiveKey(key);
  }, []);

  const initialWidth = useCallback(() => {
    setModalWidth(() => {
      return screen <= 738 ? "80%" : "50%";
    });
  }, [screen]);

  const handleChangeHeight = useCallback(() => {
    const element = document.querySelector(".ant-modal-content") as HTMLElement;
    if (element) {
      element.style.height =
        activeKey === "1" ? `${contentHeight[0]}vh` : `${contentHeight[1]}vh`;
    }
  }, [activeKey]);

  useEffect(() => {
    handleChangeHeight();
  }, [handleChangeHeight]);

  useEffect(() => {
    initialWidth();
  }, [initialWidth]);

  return (
    <Modal
      {...props}
      centered
      width={modalWidth}
      footer={null}
      className="styled-modal"
    >
      <Tabs
        defaultActiveKey="1"
        activeKey={activeKey}
        className="styled-tabs"
        onChange={handleTabChange}
      >
        <TabPane tab="Đăng nhập" key="1" className="login-tab">
          <LoginTab setClose={setClose} />
        </TabPane>
        <TabPane tab="Đăng ký" key="2" className="register-tab">
          <RegisterTab />
        </TabPane>
      </Tabs>
    </Modal>
  );
}
