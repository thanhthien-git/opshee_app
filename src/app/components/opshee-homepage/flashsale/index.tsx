"use client";

import { Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import "./styles.scss";
import { RoundedCarousel } from "../../common/round-carousel";
import FlashSaleCard from "./components/product_flashsale_card";
import { RightOutlined } from "@ant-design/icons";
import useScreen from "@/hooks/useScreen";
import { useCallback, useEffect, useState } from "react";

const products = [
  {
    title: "Product 1",
    image: "https://via.placeholder.com/300",
    price: "₫232.000",
    sales: 14,
    discount: -7,
  },
  {
    title: "Product 2",
    image: "https://via.placeholder.com/300",
    price: "₫155.000",
    sales: 19,
    discount: -26,
  },
  {
    title: "Product 3",
    image: "https://via.placeholder.com/300",
    price: "₫126.700",
    sales: 10,
    discount: -56,
  },
  {
    title: "Product 4",
    image: "https://via.placeholder.com/300",
    price: "₫313.650",
    sales: 28,
    discount: -37,
  },
  {
    title: "Product 5",
    image: "https://via.placeholder.com/300",
    price: "₫138.000",
    sales: 12,
    discount: -57,
  },
  {
    title: "Product 6",
    image: "https://via.placeholder.com/300",
    price: "₫150.000",
    sales: 5,
    discount: -56,
  },
];

export default function OpsheeFlashSale() {
  const screenSize = useScreen();
  const [slide, setSlide] = useState(5);

  const handleScreenChange = useCallback(() => {
    switch (true) {
      case screenSize <= 768: {
        setSlide(2);
        break;
      }
      case screenSize > 768 && screenSize < 1024: {
        setSlide(3);
        break;
      }
      default: {
        setSlide(5);
      }
    }
  }, [screenSize]);

  useEffect(() => {
    handleScreenChange();
  }, []);

  return (
    <section className="opshee-flashsale">
      <Card
        title={
          <Row justify="space-between" align="middle">
            <Title level={4} className="opshee-flashsale-title">
              ⚡FLASH SALE
            </Title>
            <Title level={5} className="opshee-flashsale-title">
              Xem tất cả <RightOutlined />
            </Title>
          </Row>
        }
      >
        <RoundedCarousel
          infinite={false}
          slidesToShow={slide}
          arrows
          dots={false}
        >
          {products.map((product, index) => (
            <Row justify="space-between" style={{ width: "100%" }}>
              <Col span={24}>
                <FlashSaleCard />
              </Col>
            </Row>
          ))}
        </RoundedCarousel>
      </Card>
    </section>
  );
}
