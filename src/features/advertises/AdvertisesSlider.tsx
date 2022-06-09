import React from "react";
import Slider from "react-slick";
import styled, { css, keyframes } from "styled-components";
import { useAppSelector } from "app/hooks";
import { IAdvertisement } from "./interfaces/advertisement.interface";
import { selectAdvertises } from "./advertisesSlice";
import { Span } from "styles/global-styeld";

/* imoprt css */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickDivAnimation = keyframes`
  from {
    background-size: 120% auto;
    
  }
  to {
    background-size: 100% auto;
  }
`;

const SlickDiv = styled.div<{ img: string }>`
  width: 50%;
  height: 600px;
  box-sizing: border-box;
  ${(props: any) => {
    const img = props.img;
    return css`
      background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.1) 30%,
          rgba(0, 0, 0, 0.2) 70%,
          rgba(0, 0, 0, 0.5) 100%
        ),
        url(${img});
      background-size: cover;
    `;
  }}

  animation-duration: 10s;
  animation-timing-function: ease-in;
  animation-name: ${SlickDivAnimation};
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SlickTitle = styled.h3`
  position: absolute;
  left: 20%;
  top: 66%;
  margin: 0 auto;
  font-size: 20px;
  color: white;
  font-size: 45px;
  font-weight: 100;
  font-family: "NotoSansKR-Light";
`;

const SlickText = styled.h3`
  position: absolute;
  left: 20%;
  top: 77%;
  margin: 0 auto;
  color: white;
  font-size: 37px;
  font-weight: 600;
  font-family: "NotoSansKR-Light";
`;

const SlickBottom = styled.h3`
  position: absolute;
  left: 20%;
  top: 65%;
  margin: 0 auto;
  font-size: 20px;
  color: white;
  font-size: 30px;
  font-weight: 100;
  font-family: "NotoSansKR-Light";
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }

  .slick-track {
    overflow-x: hidden;
  }
`;

const AdvertisesSlider = () => {
  const advertises = useAppSelector(selectAdvertises);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  const renderedAdvertises = advertises.map((item: IAdvertisement) => (
    <SlickDiv img={item.img} key={item.id}>
      <SlickTitle>
        <Span>{item.title}</Span>
      </SlickTitle>
      <SlickText>
        <Span>{item.subTitle}</Span>
      </SlickText>
    </SlickDiv>
  ));

  return (
    <div className="SlickComponent">
      <StyledSlider {...settings}>{renderedAdvertises}</StyledSlider>
    </div>
  );
};

export default AdvertisesSlider;
