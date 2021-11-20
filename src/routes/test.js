import React, { useState, useEffect } from "react";
import { priceMapper } from "../db";
const symbols = {
  miniTicker: "wss://stream.binance.com:9443/ws/!miniTicker@arr",
  bookTicker: "wss://stream.binance.com:9443/ws/btcusdt@bookTicker",
};
function Test() {
  const [bids, setBids] = useState([0]);
  console.log(symbols.miniTicker);
  //   const ws = new WebSocket(
  //     "wss://stream.binance.com:9443/ws/btcusdt@miniTicker"
  //   );
  //   ws.onmessage = function (event) {
  //     const json = JSON.parse(event.data);
  //     console.log(event.stream);
  //     try {
  //       if (json.event === "data") {
  //         setBids(json.data.bids.slice(0, 5));
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   const pricePraser = priceMapper.map((item, index) => (
  //     <div key={item}>{item.e}</div>
  //   ));
  return (
    <div>
      <p>hello</p>
      {/* {pricePraser} */}
    </div>
  );
}

export default Test;
