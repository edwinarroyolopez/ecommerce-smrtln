import React from "react";
import { TableContainer, Table, Th, Td } from "ecommerce-smrtln-ui";

interface Product {
  name: string;
  quantity: number;
  thumbnail?: string;
}

interface ProductsSoldTableProps {
  products: Product[];
}

const ProductsSoldTable: React.FC<ProductsSoldTableProps> = ({ products }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th align="left"></Th>
            <Th>Producto</Th>
            <Th align="center">N° Vendidos</Th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? products.map((product, index) => (
            <tr key={index}>
              <Td align="left">
                {product.thumbnail ? (
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                ) : (
                  "Sin imagen"
                )}
              </Td>
              <Td>{product.name}</Td>
              <Td align="center">{product.quantity}</Td>
            </tr>
          )) : ("No se han vendido productos aún")}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductsSoldTable;