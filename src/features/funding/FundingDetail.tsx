import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MdPlayArrow } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaLink } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CloseBtn } from "components/html-elements/Buttons";
import { Span } from "styles/global-styeld";
import ProgressBar from "components/html-elements/ProgressBar";

const TYPES = ["Info", "FAQ", "Notice", "Opinion", "Bakers"];

const IMAGES = [
    "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/photos/vinyl-record-with-blank-cover-picture-id469724807?b=1&k=20&m=469724807&s=170667a&w=0&h=at5xQ_EWU2ObgkBuN-4Y6TLB75AevTm-6-Nu6b5VCZ0=",
    "https://media.istockphoto.com/photos/the-mockup-template-with-the-new-vinyl-disc-on-color-surface-music-picture-id1203512641?b=1&k=20&m=1203512641&s=170667a&w=0&h=Jn4lrq3WBst0fx6toGkaAYU0qZVQYXpmITk67fuqMkc=",
    "https://media.istockphoto.com/photos/record-vinyl-picture-id518783136?b=1&k=20&m=518783136&s=170667a&w=0&h=S8WZAo79IcGa2Ufb7JBsccoycKuSk8m2aBRE93NXck8="
];

const TAGS = ["음악", "공연"];

const FundingDetail = ({ onClick }:any ) => {
    const [type, setType] = useState(0);
    const [image, setImage] = useState(0);

    return <>
        <FundTop img={IMAGES[image]} fHeight={380} cHeight={50}>
            <div className="play-wrapper">
                <div>
                    <MdPlayArrow />
                </div>
            </div>
            <div className="fw-top">
                <CloseBtn onClick={onClick} />
            </div>
            <div className="fw-content-group">
                <div className="type">
                    <Span>Funding</Span>
                </div>
                <div className="title">
                    <Span>XXX의 신곡 펀딩</Span>
                </div>
                <div className="prod-tags">
                    <Span>{TAGS.join("  |  ")}</Span>
                </div>
                <div className="prod-do-funding">
                  <div className="f-cur-info">
                    <div>
                      <Span className="f-val">$250</Span>
                      <Span className="unit-type">USD</Span>
                    </div>
                    <div>
                      <Span className="f-val">100</Span>
                      <Span className="unit-type">Bakers</Span>
                    </div>
                  </div>

                  <div className="prod-progress-bar">
                    <ProgressBar wPercent={100} position={0.5} />
                  </div>

                  <div className="f-cur-info">
                    <div>
                      <Span className="f-val">50%</Span>
                      <Span className="unit-type">of $500 Goal</Span>
                    </div>
                    <div>
                      <Span className="f-val">2</Span>
                      <Span className="unit-type">days left</Span>
                    </div>
                  </div>

                  <div className="like-funding">
                    <div className="like-it">
                      <AiFillStar />   
                    </div>
                    <div className="do-funding"><Span>펀딩하기</Span></div>
                  </div>
                  <div className="social-funding">
                    <div className="social-group">
                      <FaFacebookSquare />
                      <FaTwitter />
                      <FaLink />
                    </div>
                  </div>
                </div>
            </div>
        </FundTop>
        <FundMain>
            <div className="thumbnail-wrapper">
                {IMAGES.map((el, idx) => (
                    <ThumbNailItems 
                        key={idx}
                        src={el}
                        active={image === idx}
                        onClick={() => setImage(idx)}
                        />
                ))}
            </div>
            <Tabs>
                <div className="tab-items">
                    {TYPES.map((el, idx) => (
                        <TabItem 
                            key={idx}
                            active={type === idx}
                            onClick={() => setType(idx)}>
                            <div>
                                <Span>{el}</Span>
                            </div>
                        </TabItem>
                    ))}
                </div>
            </Tabs>
            <FundContent>
            {TYPES.map((el, idx) => (
                <TypeContent key={idx} show={type === idx}>
                    <Span>{el}</Span>
                </TypeContent>        
            ))}
            </FundContent>
        </FundMain>
    </>
}

const Spin = keyframes`
  100% { 
    transform: rotate(360deg); 
  }
`;

const ThumbNailItems = styled.img<{ active: boolean}>`
    width: 100px;
    height: 70px;
    object-fit: cover;
    margin: 0px 5px;
    opacity: ${props => props.active ? 1 : 0.5};
    transition: opacity .3s;

    &:hover {
        opacity: 1;
    }
`;

const FadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const FundMain = styled.div`
    .thumbnail-wrapper {
        padding: 20px 0px 15px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const FundContent = styled.div`
    padding: 10px;
    height: 250px;
    max-height: 500px;
    background-color: ${(props) => props.theme.colors.bk};
`;

const TypeContent =  styled.div<{show: boolean}>`
    display: ${props => props.show ? "inline" : "none"};
    opacity: ${props => props.show ? 1 : 0};
    animation: ${FadeIn} .5s;
    span {
        color: ${(props) => props.theme.colors.font};
    }
`;

const Tabs = styled.div`
  .tab-items {
    height: 37px;
    display: flex;
  }

  span {
    font-size: ${(props) => props.theme.fonts.size.sm}px;
  }
`;

const TabItem = styled.div<{ active: boolean }>`
  color: ${(props) => props.theme.colors.font};
  line-height: 35px;

  div {
    padding-right: 20px;
    padding-left: 20px;
    text-align: center;
    transition: color .3s, background-color .3s;
    ${(props: any) => {
        if (props.active) {
            return css`
                background-color: ${(props) => props.theme.colors.bk};
                border-bottom: solid 1px ${(props) => props.theme.colors.bk};
            `;
        } 
    }}
  }

  span {
    text-transform: uppercase;
    transition: color .3s;
    ${(props: any) => {
      if (props.active) {
        return css`
          color: ${(props) => props.theme.colors.main2};
        `;
        }
    }}
  }

  span:hover {
    color: ${(props) => props.theme.colors.main2};
  }
`;

const FundTop = styled.div<{ fHeight: number, cHeight: number, img: string }>`
  position: relative;
  width: 100%;
  height: ${props => props.fHeight}px;
  ${(props: any) => {
    const img = props.img;
    return css`
      background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3) 30%,
          rgba(0, 0, 0, 0.4) 70%,
          rgba(0, 0, 0, 0.5) 100%
        ),
        url(${img});
      background-size: cover;
    `;
  }}

  .fw-top {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    line-height: ${props => props.cHeight}px;
  }

  .fw-content-group {
    position: relative;
    height: ${props => props.fHeight - props.cHeight}px;

    span {
      color: ${(props) => props.theme.colors.font};
    }
  }

  .fw-content-group .type {
    position: absolute;
    top: 57%;
    left: 5%;
    font-size: ${(props) => props.theme.fonts.size.sm}px;
    border: solid 1px;
    border-color: ${(props) => props.theme.colors.main3};
    border-radius: 3px;
    padding: 5px 8px;
    text-transform: uppercase;
    span {
        color: ${(props) => props.theme.colors.main3};
    }
  }

  .fw-content-group .title {
    position: absolute;
    top: 71%;
    left: 5%;
    font-size: ${(props) => props.theme.fonts.size.h3}px;
  }

  .prod-tags {
    display: flex;
    position: absolute;
    top: 87%;
    left: 5%;

    span {
        color: ${(props) => props.theme.colors.font};
        font-size: ${(props) => props.theme.fonts.size.sm}px;
    }
  }

  .prod-do-funding {
    position: absolute;
    top: 47%;
    right: 5%;
  }

  .f-cur-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;

    .f-val {
      color: ${(props) => props.theme.colors.font};
      font-size: ${(props) => props.theme.fonts.size.xs}px;
      font-weight: ${(props) => props.theme.fonts.weight.bold};
    }

    .unit-type {
      margin-left: 5px;
    }

    span {
      color: ${(props) => props.theme.colors.font};
      font-size: ${(props) => props.theme.fonts.size.xs}px;
    }
  }
  
  .like-funding {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }

  .like-it {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: inherit;
    margin-right: 1px;
    background-color: white;

    svg {
      width: 20px;
      height: 20px;
      color: ${(props) => props.theme.colors.grey1};
      margin: 0px;
    }
  }

  .like-it:hover {
    svg {
      animation: ${Spin} 1000ms infinite linear;
      color: ${(props) => props.theme.colors.main4};
    }
  }

  .do-funding {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: inherit;
    background-color: white;
    transition: background-color .3s;
    span {
        color: ${(props) => props.theme.colors.main2};
    }
  }

  .do-funding:hover {
    background-color: ${(props) => props.theme.colors.main2};
    span {
        color: white;
    }
  }

  .social-funding {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 5px;

    svg {
        width: 15px;
        height: 15px;
        color: white;
    }   
    
    svg:hover {
        color: ${(props) => props.theme.colors.main2};
    }

    .social-group {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
          margin-left: 10px;
      }
    }
  }
  
  .prod-progress-bar {
    padding: 10px auto;
  }

  .prod-progress-bar .progress-wrapper {
    div {
      top: -10px;
      right: 0%;
    }
  }

  .play-wrapper {
    width: inherit;
    position: absolute;
    top: 45%;
    transform: translate(50%, 50%);
    z-index: 1;

    div {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.5);
    }

    svg {
      color: ${(props) => props.theme.colors.font};
      width: 40px;
      height: 40px;
      transition: color .3s;
    }

    svg:hover {
      color: ${(props) => props.theme.colors.main2};
    }
  }
`;

export default FundingDetail;