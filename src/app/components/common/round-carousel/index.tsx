"use client";
import { Carousel } from "antd";
import { CarouselProps } from "antd/es/carousel";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "./custom-arrow";

export const RoundedCarousel = styled((props: CarouselProps) => (
  <Carousel
    {...props}
    arrows
    prevArrow={<LeftArrow />}
    nextArrow={<RightArrow />}
    dots={false}
  />
))`
  .slick-list {
    height: 100%;
    border-radius: 8px;
  }

  .slick-list:hover {
    cursor: pointer;
  }

  .slick-slider {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .slick-slide {
    height: 100%;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;
