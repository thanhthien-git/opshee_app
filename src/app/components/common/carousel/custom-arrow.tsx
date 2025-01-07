import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

const CustomArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 50px;
  color: #ff8300;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &:hover {
    background-color: #ff8300;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeftArrow = (props: any) => (
  <CustomArrow onClick={props.onClick}>
    <LeftOutlined />
  </CustomArrow>
);

export const RightArrow = (props: any) => (
  <CustomArrow style={{ right: "0px" }} onClick={props.onClick}>
    <RightOutlined />
  </CustomArrow>
);
