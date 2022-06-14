import React from "react";
import { useAppSelector } from "hooks";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "routes";
import { Container } from "styles/global-styeld";

export const Home = () => {
  return (
    <section>
      <Container>
        <Title>Home</Title>
      </Container>
    </section>
  );
};

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
`;
