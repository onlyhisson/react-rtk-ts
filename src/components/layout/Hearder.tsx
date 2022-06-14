import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "routes";
import { RowDiv, ColDiv, Span } from "styles/global-styeld";
import { MdLanguage } from "react-icons/md";
import { useHover } from "hooks/useHover";

const LANGUAGES = ["kor", "eng"];

const LanguageBox = () => {

  const [lang, setLang] = useState(0);

  return <SelectBox className="sel-box">
    <LangWrapper>
      <ColDiv>
        <LangItem top={7}>
          <MdLanguage /> <Span>{LANGUAGES[lang]}</Span>
        </LangItem>
        {LANGUAGES.map((el, idx) => 
          <LangItem 
            key={idx}
            top={7 + 30 * (idx + 1)} 
            className="l-item"
            onClick={() => setLang(idx)}
          >
            <Span>{el}</Span>
          </LangItem>
        )}
      </ColDiv>
    </LangWrapper>
  </SelectBox>
}

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-s header-l">
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/logo/logo_wh.png`}
          alt="logo"
        />
        <Link to={routes.news}>
          <Span>뉴스 / 공지</Span>
        </Link>
        <Link to={routes.posts}>
          <Span>펀딩하기</Span>
        </Link>
        <Link to={routes.addPost}>
          <Span>NFT</Span>
        </Link>
      </div>
      <div className="header-s header-r">
        <LanguageBox/>
        <Span>로그인</Span>
      </div>
    </HeaderWrapper>
  );
};

const SelectBox = styled(RowDiv)`
  position: relative;

  svg {
    color: ${props => props.theme.colors.grey1};
  }

  .l-item:hover {
    span {
      color: ${props => props.theme.colors.main3};
    }
  }
`;

const LangItem = styled.div<{ top: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${props => props.top}px;
  right: 10px;

  span {
    margin-left: 8px !important;
    text-transform: uppercase;
  }
`;

const LangWrapper = styled(RowDiv)`
  position: absolute;
  top: -19px;
  padding: 3px;
  padding-right: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.colors.grey1};
  border-radius: 3px;
  height: 30px;
  width: 72px;
  overflow: hidden;

  transition: height .5s;

  &:hover {
    height: 90px;
  }
`;


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
  background-color: rgba(0, 0, 0, 0.5);
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
