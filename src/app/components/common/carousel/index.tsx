"use client";
import { Carousel } from "antd";
import { CarouselProps } from "antd/es/carousel";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "./custom-arrow";

export const StyledCarousel = styled((props: CarouselProps) => (
  <Carousel
    {...props}
    arrows
    prevArrow={<LeftArrow />}
    nextArrow={<RightArrow />}
  />
))`
  .slick-list {
    height: 100%;
    border-radius: 8px;
  }

  .slick-track {
    height: 100%;
  }
  .slick-slider {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .slick-slide {
    height: 100%;
  }

  .slick-slide img {
    height: 100% !important;
    object-fit: cover;
    width: 100% !important;
  }

  .slick-arrow {
    color: #ff8300;
    height: 50px;
    display: flex;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .slick-dots .slick-active button {
    background-color: #ff8300 !important;
    opacity: 1 !important;
  }

  .ant-carousel css-dev-only-do-not-override-1wwf28x {
    height: 100%;
  }
`;
