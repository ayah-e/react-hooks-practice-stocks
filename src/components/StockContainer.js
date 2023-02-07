import React, {useEffect} from "react";
import Stock from "./Stock";

function StockContainer() {
useEffect(() => {
 fetch ("http://localhost:3001/stocks")
  .then (res => res.json())
  .then (data => console.log(data))
}, [])

  return (
    <div>
      <h2>Stocks</h2>
      <Stock />
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
