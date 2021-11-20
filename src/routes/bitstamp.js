import React, { useState, useEffect } from "react";

const apiCall = {
  event: "bts:subscribe",
  data: { channel: "order_book_btcusd" },
};

function Bitstamp() {
  const [bids, setBids] = useState([0]);
  useEffect(() => {
    const ws = new WebSocket("wss://ws.bitstamp.net");
    ws.onopen = (event) => {
      ws.send(JSON.stringify(apiCall));
    };
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
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

  return <div>{firstBids}</div>;
}

export default Bitstamp;
