import React, { useState, useEffect } from "react";

//to be used when combinedStream is used cause it sends apiCall parameter with itself when
//ws.open is being used
const apiCall = {
  method: "SUBSCRIBE",
  params: ["btcusdt@aggTrade", "btcusdt@depth"],
  id: 1,
};
const streamName = {
  combinedStream: "wss://stream.binance.com:9443/stream",
  miniTicker: "wss://stream.binance.com:9443/ws/!miniTicker@arr",
  singlebookTicker: "wss://stream.binance.com:9443/ws/btcusdt@bookTicker",
  allbookTicker: "wss://stream.binance.com:9443/ws/!bookTicker",
};
function Binance() {
  const [bids, setBids] = useState([0]);
  //   var bids;
  console.log(streamName.stream);

  useEffect(() => {
    const ws = new WebSocket(streamName.singlebookTicker);
    console.log(JSON.stringify(apiCall));

    //only use when websocket connection is using streamName.combinedStream
    // as it catches .open and sends apiCall parametes
    // ws.onopen = (event) => {
    //   ws.send(JSON.stringify(apiCall));
    // };
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      console.log(event.stream);
      try {
        if (json.event === "data") {
          setBids(json.data.bids.slice(0, 5));
        }
      } catch (err) {
        console.log(err);
      }
    };
    //clean up function
    return () => ws.close();
  }, []);
  const firstBids = bids.map((item, index) => (
    <div key={index}>
      <p> {item}</p>
    </div>
  ));

  return (
    <div>
      some useDebugValue(value) afd<p>askjdfh</p>
    </div>
  );
}

export default Binance;
