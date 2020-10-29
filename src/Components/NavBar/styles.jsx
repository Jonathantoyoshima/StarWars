import styled from "styled-components";
import {breakpoints} from "Styles/global";
export const NavBarRoot = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  @media ${breakpoints.sm} {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  min-height: 60px;
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 14px;
  flex: 1;
  cursor: pointer;
  text-transform: uppercase;

  @media ${breakpoints.sm} {
    :not(:last-child) {
      border-bottom: 1px solid white;
    }
  }

  :hover {
    color: var(--primary);
  }
`;
