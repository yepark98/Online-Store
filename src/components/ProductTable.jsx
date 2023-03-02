import React from "react";

import ProductCategory from "./ProductCategory";

const ProductTable = (props) => {
  const { products } = props;

  const result = products.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    } else {
      return {
        ...acc,
        [cur.category]: [cur],
      };
    }
  }, {});

  const keys = Object.keys(result);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      {keys.map((key, index) => (
        <ProductCategory key={index} category={key} items={result[key]} />
      ))}
    </table>
  );
};

export default ProductTable;
