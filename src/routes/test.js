import React, { useEffect } from "react";
import { priceMapper } from "../db";
// const unsub = {
//   method: "UNSUBSCRIBE",
//   params: ["bookTicker"],
//   id: 1,
// };

const coinPair = "btcusdt";
const streamName = () => ({
  combinedStream: "wss://stream.binance.com:9443/stream",
  miniTicker: "wss://stream.binance.com:9443/ws/!miniTicker@arr",
  singlebookTicker: `wss://stream.binance.com:9443/ws/${coinPair}@bookTicker`,
  allbookTicker: "wss://stream.binance.com:9443/ws/!bookTicker",
});
function Test() {
  //   const [bids, setBids] = useState([0]);
  console.log(streamName("btcusdt").allbookTicker);
  const ws = new WebSocket(streamName().singlebookTicker);
  //  ws.onopen = (event) => {
  //   ws.send(JSON.stringify(apiCall));
  // };
  const closeConnection = () => {
    console.log("insde clsoeConnection");
    // ws.send(JSON.stringify(unsub));
  };
  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    console.log("json", json);
  };
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
      <button onClick={closeConnection}>close</button>
      {/* {pricePraser} */}
    </div>
  );
}

export default Test;
