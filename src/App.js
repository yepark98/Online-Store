import React from "react";
import { RecoilRoot } from "recoil";

import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  return (
    <RecoilRoot>
      <FilterableProductTable />
    </RecoilRoot>
  );
}

export default App;
