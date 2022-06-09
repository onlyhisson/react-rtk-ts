import styled from "styled-components";
import { Span } from "styles/global-styeld";
import routes from "routes";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-body">
        <div className="footer-col">
          <a href={routes.home}>
            <Span>Intro</Span>
          </a>
          <a href={routes.home}>
            <Span>About</Span>
          </a>
        </div>
        <div className="footer-col">
          <a href={routes.home}>
            <Span>고객지원</Span>
          </a>
          <a href={routes.home}>
            <Span>공지사항</Span>
          </a>
          <a href={routes.home}>
            <Span>1:1 문의</Span>
          </a>
        </div>
        <div className="footer-col">
          <a href={routes.home}>
            <Span>이용약관</Span>
          </a>
          <a href={routes.home}>
            <Span>파트너</Span>
          </a>
          <a href={routes.home}>
            <Span>보증기관</Span>
          </a>
        </div>
        <div className="footer-col">
          <a href={routes.home}>
            <Span>help@fundstoa.com</Span>
          </a>
          <a href={routes.home}>
            <Span>hello@fundstoa.com</Span>
          </a>
          <a href={routes.home}>
            <Span>biz@fundstoa.com</Span>
          </a>
          <a href={routes.home}>
            <Span>notice@fundstoa.com</Span>
          </a>
          <a href={routes.home}>
            <Span>support@fundstoa.com</Span>
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bk};
  font-size: ${(props) => props.theme.fonts.size.lg}px;

  span {
    color: ${(props) => props.theme.colors.font};
  }

  a {
    padding: 5px 0;
    text-decoration: none;
  }

  .footer-body {
    max-width: 1200px;
    padding: 0 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer-col {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
`;
