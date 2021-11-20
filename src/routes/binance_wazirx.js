import React from "react";
import PriceTable from "../component/PriceTable";
import { transferableCoin } from "../utils/TransferableCoins";
function BinanceWazirx() {
  return (
    <div>
      {/* Create a table with all theese values and plug price table component in binance and wazirx */}
      {/* Create a list of transfferable coins  */}
      <PriceTable />
      {/* {transferableCoin.map((item, index) => (
        <div key={item}>
          <p>{item.s}</p>
        </div>
      ))} */}
      {/* <p>PAIR NAME</p>
      <p>BINANCE</p>
      <p>WAZIRX</p> */}
    </div>
  );
}

export default BinanceWazirx;
