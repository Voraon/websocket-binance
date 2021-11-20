import React, { useState, useEffect } from "react";
import PriceTable from "../component/PriceTable";

//to be used when combinedStream is used cause it sends apiCall parameter with itself when
//ws.open is being used
const apiCall = {
  method: "SUBSCRIBE",
  params: ["btcusdt@aggTrade", "btcusdt@depth"],
  id: 1,
};
const coinPair = "btcusdt";
const streamName = () => ({
  combinedStream: "wss://stream.binance.com:9443/stream",
  miniTicker: "wss://stream.binance.com:9443/ws/!miniTicker@arr",
  singlebookTicker: `wss://stream.binance.com:9443/ws/${coinPair}@bookTicker`,
  allbookTicker: "wss://stream.binance.com:9443/ws/!bookTicker",
});
function Binance() {
  // const [bids, setBids] = useState([0]);
  var orderBook;

  useEffect(() => {
    const ws = new WebSocket(streamName().miniTicker);
    console.log(JSON.stringify(apiCall));

    //only use when websocket connection is using streamName.combinedStream
    // as it catches .open and sends apiCall parametes
    // ws.onopen = (event) => {
    //   ws.send(JSON.stringify(apiCall));
    // };
    ws.onmessage = function (event) {
      // console.log({ event });
      const json = JSON.parse(event.data);
      console.log("json data", json);
      // console.log(event.data);
      try {
        // console.log(event.data);
        orderBook = json;
        // if (json.event === "data") {
        //   console.log("inside ifstatement");
        //   setBids(json.data.bids.slice(0, 5));
        // }
      } catch (err) {
        console.log(err);
      }
    };
    //clean up function
    return () => ws.close();
  }, []);
  // const firstBids = bids.map((item, index) => (
  //   <div key={index}>
  //     <p> {item}</p>
  //   </div>
  // ));

  return (
    <div>
      BITCOIN
      {/* {bids.slice(0, 40).map((item, index) => (
        <div key={index}>
          <p>{item.o}</p>
        </div>
      ))} */}
      <PriceTable orderBook={orderBook} />
    </div>
  );
}

export default Binance;
