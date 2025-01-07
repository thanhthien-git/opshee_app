import "./styles.scss";
import dynamic from "next/dynamic";
import OpsheeBanner from "@/app/components/opshee-homepage/banner";
import Title from "antd/es/typography/Title";

const DynamicFlashSale = dynamic(
  () => import("@/app/components/opshee-homepage/flashsale"),
  {}
);

const DynamicRecommend = dynamic(
  () => import("@/app/components/opshee-homepage/recommend-product"),
  {}
);

export default function Home() {
  return (
    <div className="opshee-main">
      <OpsheeBanner />
      <DynamicFlashSale />
      <div className="opshee-recommend-for-you">
        <div className="recommend-wrapper">
          <Title className="recommend-title" level={4}>
            Gợi ý hôm nay
          </Title>
        </div>
        <DynamicRecommend />
      </div>
    </div>
  );
}
