import {  Col, Row } from "antd";
import "./styles.scss";
import { IProductCard } from "@/interfaces/product.interface";
import ProductCard from "../../common/product-card";

const products: IProductCard[] = [
  {
    _id: "1",
    isMall: true,
    isKind: false,
    maxPrice: 120,
    minPrice: 100,
    productTitle: "Product 1",
    totalSold: 200,
    productImgUrl: "https://via.placeholder.com/150",
  },
  {
    _id: "2",
    isMall: false,
    isKind: true,
    maxPrice: 80,
    minPrice: 60,
    productTitle: "Product 2",
    productImgUrl: "https://via.placeholder.com/150",
    totalSold: 150,
  },
  {
    _id: "3",
    isMall: true,
    isKind: true,
    maxPrice: 200,
    minPrice: 150,
    productImgUrl: "https://via.placeholder.com/150",
    productTitle: "Product 3",
    totalSold: 300,
  },
  {
    _id: "4",
    isMall: false,
    isKind: false,
    maxPrice: 50,
    minPrice: 40,
    productTitle: "Product 4",
    productImgUrl: "https://via.placeholder.com/150",
    totalSold: 500,
  },
  {
    _id: "5",
    isMall: true,
    isKind: false,
    maxPrice: 180,
    minPrice: 140,
    productImgUrl: "https://via.placeholder.com/150",
    productTitle: "Product 5",
    totalSold: 180,
  },
  {
    _id: "6",
    isMall: true,
    isKind: false,
    maxPrice: 180,
    minPrice: 140,
    productImgUrl: "https://via.placeholder.com/150",
    productTitle: "Product 6",
    totalSold: 180,
  },
  {
    _id: "7",
    isMall: true,
    isKind: false,
    maxPrice: 180,
    minPrice: 140,
    productImgUrl: "https://via.placeholder.com/150",
    productTitle: "Product 7",
    totalSold: 180,
  },
  {
    _id: "8",
    isMall: true,
    isKind: false,
    maxPrice: 180,
    minPrice: 140,
    productImgUrl: "https://via.placeholder.com/150",
    productTitle: "Product 8",
    totalSold: 180,
  },
];

export default function OpsheeRecommendProduct() {
  return (
    <section className="opshee-recommend-today">
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col xs={12} sm={12} md={8} lg={4} xl={4} key={product._id}>
            <ProductCard product={product}/>
          </Col>
        ))}
      </Row>
    </section>
  );
}
