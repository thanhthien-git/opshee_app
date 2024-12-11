import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

const CustomArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #ff8300;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.1s ease-in-out;
  z-index: 1;

  &:hover {
    transform: translateY(-50%) scale(1.5);
    font-size: 15px;
  }
`;

export const LeftArrow = (props: any) => (
  <CustomArrow
    onClick={props.onClick}
    style={{ left: "-16px" }}
    className="carousel-arrow"
  >
    <LeftOutlined />
  </CustomArrow>
);

export const RightArrow = (props: any) => (
  <CustomArrow
    style={{ right: "-16px" }}
    onClick={props.onClick}
    className="carousel-arrow"
  >
    <RightOutlined />
  </CustomArrow>
);
