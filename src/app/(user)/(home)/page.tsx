import OpsheeFlashSale from "@/app/components/opshee-homepage/flashsale";
import OpsheeBanner from "@/app/components/opshee-homepage/banner";
import "./styles.scss";

export default function Home() {
  return (
    <div className="opshee-main">
      <OpsheeBanner />
      <OpsheeFlashSale />
    </div>
  );
}
