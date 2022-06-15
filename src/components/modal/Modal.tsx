import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const Modal = (props: any) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { show } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <ModalWrapper className={'modal'} active={show}>
      {show ? (
        <section>
          <main>{props.children}</main>
        </section>
      ) : null}
    </ModalWrapper>
  );
};


const ModalSlow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`

const ModalBgSlow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const ModalWrapper = styled.div<{ active: boolean}>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);

  ${(props: any) => {
    if(props.active) {
      return css`
        display: flex;
        align-items: center;
        animation: ${ModalBgSlow} 0.3s;
      `
    }
  }}

  button {
    outline: none;
    cursor: pointer;
    border: 0;
  }

  section {
    width: 90%;
    min-width: 450px;
    max-width: 900px;
    margin: 0 auto;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.theme5};
    animation: ${ModalSlow} 0.3s;
    overflow: hidden;
  }
`;

export default Modal;