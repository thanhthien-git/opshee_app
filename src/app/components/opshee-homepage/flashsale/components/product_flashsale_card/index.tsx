"use-client";
import { Card, Image, Progress } from "antd";
import Meta from "antd/es/card/Meta";
import "./styles.scss";

export default function FlashSaleCard() {
  const strokeColor =
    "linear-gradient(90deg, var(--primary-color), var(--secondary-color))";
  return (
    <Card
      className="opshee-flashsale-card"
      cover={
        <div className="opshee-flashsale-wrapper">
          <span>🔥10%</span>
          <Image
            preview={false}
            src="https://www.placeholder.com/150x150"
            width={"100%"}
            height={"100%"}
          />
        </div>
      }
    >
      <Meta title="Product price" className="opshee-flashsale-price" />
      <div className="opshee-flashsale-bar">
        <Progress
          percent={100}
          status="active"
          showInfo={false}
          strokeColor={strokeColor}
          size={{ height: 16 }}
        />
      </div>
    </Card>
  );
}
