import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`;

const Th = styled.th<{ align?: string; width?: string }>`
  padding: 12px;
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  background-color: #f4f4f4;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td<{ align?: string; width?: string }>`
  padding: 12px;
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  border-bottom: 1px solid #ddd;
`;

export { TableContainer, Table, Th, Td };