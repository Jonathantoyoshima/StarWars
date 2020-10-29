import React from "react";
import { Tr, Td } from "./styles";
const TableRow = ({ item, value }) => {
  return (
    <Tr>
      <Td label={true}>{item}</Td>
      <Td>{value}</Td>
    </Tr>
  );
};

export default TableRow;
