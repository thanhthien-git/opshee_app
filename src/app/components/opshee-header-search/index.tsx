"use client";
import { Badge, Button, Divider, Image, Input } from "antd";
import logo from "../../../../public/logo.png";
import "./styles.scss";
import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useCallback, useState } from "react";
import ModalAuth from "../modal-auth";
import useScreen from "@/hooks/useScreen";

export default function HeaderSearchBar() {
  const screen = useScreen();
  const mobileSize = 768;
  const isMobile = typeof window !== "undefined" && screen <= mobileSize;

  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="opshee-header">
      <div className="opshee-header-quickbar">
        <div className="quickbar-option">
          <Button type="link" style={{ color: "white" }}>
            Kênh người bán
          </Button>
          <Divider type="vertical" style={{ backgroundColor: "white" }} />
          <Button type="link" style={{ color: "white" }}>
            Hỗ trợ 24/7
          </Button>
        </div>
        <div className="quickbar-user">
          {/* <div className="quickbar-user-notification">
            <Button
              type="link"
              icon={
                <Badge count={5} size="small">
                  <BellOutlined style={{ fontSize: 20, color: "white" }} />
                </Badge>
              }
            />
          </div>
          <div className="quickbar-user-info">
            <Avatar
              src={<UserOutlined style={{ color: "black" }} />}
              className="quickbar-user-info-avatar"
            />
            Opshee ADMIN
          </div> */}
        </div>
      </div>
      <div className="opshee-header-search">
        <div className="opshee-header-search-logo">
          <Image src={logo.src} preview={false} width={150} />
        </div>
        <div className="opshee-header-search-bar">
          <Input
            placeholder="Bạn ơi, hôm nay mua gì đấy"
            className="opshee-search-input"
            suffix={<SearchOutlined className="opshee-search-input-icon" />}
          />
        </div>
        <div className="opshee-header-search-cart">
          <Button
            className="opshee-cart-button"
            type="link"
            icon={
              <Badge count={5} className="opshee-cart-count">
                <ShoppingCartOutlined
                  style={{ fontSize: 30, color: "white" }}
                />
              </Badge>
            }
          ></Button>
        </div>
        <div className="opshee-header-search-login">
          <Button onClick={handleOpenModal}>
            {isMobile ? <LoginOutlined /> : "Đăng nhập"}
          </Button>
        </div>
      </div>
      <ModalAuth open={open} onCancel={handleCloseModal} setClose={handleCloseModal}/>
    </div>
  );
}
