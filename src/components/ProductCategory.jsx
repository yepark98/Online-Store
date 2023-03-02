import React from "react";
import { useRecoilState } from "recoil";

import { stockState } from "./../atoms";

const ProductCategory = (props) => {
  const { category, items } = props;
  const [inStockOnly, setinStockOnly] = useRecoilState(stockState);

  const filterStock = inStockOnly
    ? items.filter((item) => item.stocked === inStockOnly)
    : items;

  return (
    <tbody>
      <tr>
        <td>{category}</td>
      </tr>
      {filterStock.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductCategory;
