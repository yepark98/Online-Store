import React from "react";
import { useRecoilState } from "recoil";

import { stockState, textState } from "./../atoms";

const SearchBar = () => {
  const [text, setText] = useRecoilState(textState);
  const [inStockOnly, setinStockOnly] = useRecoilState(stockState);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeInStockOnly = (e) => {
    setinStockOnly(e.target.checked);
  };

  return (
    <section>
      <input
        type="text"
        name="text"
        placeholder="Search..."
        value={text}
        onChange={handleChangeText}
      />
      <div>
        <input
          type="checkbox"
          name="stock"
          id="stock"
          checked={inStockOnly}
          onChange={handleChangeInStockOnly}
        />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </section>
  );
};

export default SearchBar;
