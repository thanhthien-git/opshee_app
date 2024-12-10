import { Badge, Button, Divider, Image, Input } from "antd";
import logo from "../../../../public/logo.png";
import "./styles.scss";
import Link from "next/link";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export default function HeaderSearchBar() {
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
          <div>
            <Link className="quickbar-login" href={"/login"}>
              Đăng nhập
            </Link>
            <Divider type="vertical" style={{ backgroundColor: "white" }} />
            <Link className="quickbar-login" href={"/register"}>
              Đăng ký
            </Link>
          </div>
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
      </div>
    </div>
  );
}
