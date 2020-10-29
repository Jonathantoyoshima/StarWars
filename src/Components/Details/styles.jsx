import styled from "styled-components";
import { breakpoints } from "Styles/global";
export const DetailsRoot = styled.div`
  border: 1px solid white;
  padding: 16px;
  position: relative;
    width: 70%;
  @media ${breakpoints.sm} {
    width: 100%;
  }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 8px;
`;

export const Table = styled.table`
  position: relative;
  max-width: 100%;
  border: 1px solid white;
  box-sizing: "border-box";
  table-layout: fixed;
`;

export const Tr = styled.tr`
  min-height: 24px;
`;

export const Td = styled.td`
  border: 1px solid white;
  min-height: 24px;
  padding: 8px;
  word-break: ${(props) => (props.label ? "inherit" : "break-word")};
`;
