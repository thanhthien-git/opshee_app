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
  .slick-slider {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .slick-slide {
    height: 100%; /* Ensure each slide takes full height */
  }

  .slick-slide img {
    height: 100% !important; /* Ensure the images cover the full height of the slide */
    object-fit: cover; /* Make the images fill the container, cropping if necessary */
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
`;
