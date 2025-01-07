import { IProductCard } from "@/interfaces/product.interface";
import { Card, Col, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Text from "antd/es/typography/Text";
import "./styles.scss";
import Title from "antd/es/typography/Title";

interface IProps {
  product: IProductCard;
}
export default function ProductCard({ product }: Readonly<IProps>) {
  return (
    <Card
      className="opshee-product-card"
      hoverable
      cover={
        <Image
          className="opshee-product-card-image"
          alt={product.productTitle}
          src={product.productImgUrl}
          preview={false}
        />
      }
    >
      <Meta
        className="opshee-product-card-meta"
        description={
          <div className="opshee-product-card-footer">
            <Col span={24}>
              <Row className="opshee-product-card-name">
                <Title level={5}>{product.productTitle}</Title>
              </Row>
              <Row justify={"space-between"} align={"middle"}>
                <Text className="opshee-product-card-footer-price">
                  {product.minPrice}
                </Text>
                <Text className="opshee-product-card-sold">
                  Đã bán {product.totalSold}
                </Text>
              </Row>
            </Col>
          </div>
        }
      />
    </Card>
  );
}
