import { Col, Image, Row } from "antd";
import { StyledCarousel } from "../../carousel";
import "./styles.scss";

export default function OpsheeBanner() {
  return (
    <section className="opshee-banner-wrapper">
      <Row style={{ height: "100%" }} justify={"space-between"} gutter={10}>
        <Col span={18} style={{ height: "100%" }}>
          <StyledCarousel
            autoplaySpeed={1500}
            pauseOnHover
            arrows
            autoplay
            draggable
            adaptiveHeight
          >
            <Image
              src="https://placehold.co/800x300"
              preview={false}
              height={"100%"}
              width={"100%"}
            />
            <Image
              src="https://placehold.co/800x300"
              preview={false}
              height={"100%"}
              width={"100%"}
            />
            <Image
              src="https://placehold.co/800x300"
              preview={false}
              height={"100%"}
              width={"100%"}
            />
            <Image
              src="https://placehold.co/800x300"
              preview={false}
              height={"100%"}
              width={"100%"}
            />
          </StyledCarousel>
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Row style={{ height: "50%" }}>
            <Image
              src="https://placehold.co/800x300"
              preview={false}
              className="opshee-banner-wrapper-image"
              height={"100%"}
              width={"100%"}
            />
          </Row>

          <Row style={{ height: "50%" }}>
            <Image
              src="https://placehold.co/800x300"
              preview={false}
              className="opshee-banner-wrapper-image"
              height={"100%"}
              width={"100%"}
            />
          </Row>
        </Col>
      </Row>
    </section>
  );
}
