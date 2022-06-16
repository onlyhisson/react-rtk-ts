import { BsXLg } from "react-icons/bs";
import styled from "styled-components";

export const CloseBtn = ({ onClick }: any) => {
    return <CloseDiv onClick={onClick}>
        <BsXLg/>
      </CloseDiv>
}

const CloseDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29px;
  height: 29px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.bk};

  &:hover {
    background-color: white;
    svg {
      color: ${(props) => props.theme.colors.theme1};;
    }
  }

  svg {
    width: 15px;
    height: 15px;
    color: ${(props) => props.theme.colors.grey1};
  }
`;
