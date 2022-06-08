import styled, { createGlobalStyle } from "styled-components";
import PretendardVariable from "./fonts/PretendardVariable.woff2";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
`;

export default createGlobalStyle`
    @font-face {
      font-family: 'Pretendard';
      src: url(${PretendardVariable}) format('woff2');
      font-weight: 100~900;
      font-style: normal;
    }
`;
