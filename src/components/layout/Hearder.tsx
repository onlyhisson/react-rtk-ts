import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "routes";
import { Span } from "styles/global-styeld";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-s header-l">
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/logo/logo_wh.png`}
          alt="logo"
        />
        <Link to={routes.home}>
          <Span>뉴스/공지</Span>
        </Link>
        <Link to={routes.posts}>
          <Span>펀딩하기</Span>
        </Link>
        <Link to={routes.addPost}>
          <Span>NFT</Span>
        </Link>
      </div>
      <div className="header-s header-r">
        <Span>언어변경</Span>
        <Span>로그인</Span>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  width: -webkit-fill-available;
  padding: 0 3.5rem;
  height: ${(props) => props.theme.size.dHeader}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: ${(props) => props.theme.fonts.size.lg}px;

  span {
    color: ${(props) => props.theme.colors.font};
  }

  a {
    text-decoration: none;
  }

  .header-s {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-l {
    img {
      margin-right: 50px;
      height: 40px;
    }

    a {
      margin-right: 25px;
    }
  }

  .header-r {
    span {
      margin-left: 55px;
    }
  }
`;
