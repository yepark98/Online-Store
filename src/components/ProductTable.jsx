import React from "react";
import ProductCategory from "./ProductCategory";

const ProductTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <ProductCategory />
    </table>
  );
};

export default ProductTable;
