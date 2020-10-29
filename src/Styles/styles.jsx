import styled from "styled-components";
import { breakpoints } from "Styles/global";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
`;

export const Main = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  @media ${breakpoints.sm} {
    flex-direction: column;
  }
`;
