import React from "react";
import { useRecoilState } from "recoil";

import ProductCategory from "./ProductCategory";
import { textState } from "./../atoms";

const ProductTable = (props) => {
  const { products } = props;
  const [text, setText] = useRecoilState(textState);

  const filterText = products.filter((product) => product.name === text);
  const filterSearchText = filterText.length > 0 ? filterText : products;

  const result = filterSearchText.reduce((acc, cur) => {
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
