import { Button, ButtonProps } from "antd";
import "./styles.scss";

interface IStyledButton extends ButtonProps {
  children?: React.ReactNode;
}

export default function StyledButton({
  children,
  ...props
}: Readonly<IStyledButton>) {
  return (
    <Button {...props} className="button-styled">
      {children}
    </Button>
  );
}
