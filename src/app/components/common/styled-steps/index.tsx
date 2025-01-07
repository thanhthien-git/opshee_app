import { Steps, StepsProps } from "antd";
import "./styles.scss"

interface IStyledSteps extends StepsProps {}

export default function StyledSteps({ ...props }: Readonly<IStyledSteps>) {
  return <Steps className="styled-steps" {...props} />;
}
