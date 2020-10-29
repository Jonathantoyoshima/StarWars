import styled from "styled-components";
import { breakpoints } from "Styles/global";
export const ListRoot = styled.div`
  position: relative;
  padding: 16px;
    width: 30%;
  @media ${breakpoints.sm} {
    width: 100%;
  }
`;

export const ButtonList = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  height: 50px;
  width: 100%;
  font-size: 1.1rem;
  :hover {
    color: var(--black);
    background: var(--primary);
  }
`;

export const NextButton = styled.button`
  padding: 8px;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  :hover {
    color: var(--primary);
  }
`;
export const NavigationList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
