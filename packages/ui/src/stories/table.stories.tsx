import type { Meta, StoryObj } from "@storybook/react";
import { TableContainer, Table, Th, Td } from "../components/table";

const meta: Meta<typeof TableContainer> = {
  title: "Components/Table",
  component: TableContainer,
  argTypes: {
    
  },
};

export default meta;

type Story = StoryObj<typeof TableContainer>;

export const DefaultTable: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Nombre</Th>
            <Th align="center">Edad</Th>
            <Th align="right">Ciudad</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Juan Pérez</Td>
            <Td align="center">28</Td>
            <Td align="right">Ciudad de México</Td>
          </tr>
          <tr>
            <Td>María García</Td>
            <Td align="center">34</Td>
            <Td align="right">Guadalajara</Td>
          </tr>
          <tr>
            <Td>Carlos López</Td>
            <Td align="center">22</Td>
            <Td align="right">Monterrey</Td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  ),
};

export const CustomWidthTable: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th width="50%">Nombre</Th>
            <Th width="25%" align="center">Edad</Th>
            <Th width="25%" align="right">Ciudad</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td width="50%">Juan Pérez</Td>
            <Td width="25%" align="center">28</Td>
            <Td width="25%" align="right">Ciudad de México</Td>
          </tr>
          <tr>
            <Td width="50%">María García</Td>
            <Td width="25%" align="center">34</Td>
            <Td width="25%" align="right">Guadalajara</Td>
          </tr>
          <tr>
            <Td width="50%">Carlos López</Td>
            <Td width="25%" align="center">22</Td>
            <Td width="25%" align="right">Monterrey</Td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  ),
};