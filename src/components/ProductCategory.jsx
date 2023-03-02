import React from "react";

const ProductCategory = (props) => {
  const { category, items } = props;

  return (
    <tbody>
      <tr>
        <td>{category}</td>
      </tr>
      {items.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductCategory;
