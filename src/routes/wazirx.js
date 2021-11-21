import React, { useEffect, useState } from "react";
import { WAZIRX_URL } from "../utils/constants";
import PriceTable from "../component/PriceTable";

const socketRequest = () => ({
  tradeStream: { event: "subscribe", streams: ["btcinr@trades"] },
  marketStream: { event: "subscribe", streams: ["!ticker@arr"] },
  depthStream: { event: "subscribe", streams: ["btcinr@depth"] },
});

function Wazirx() {
  const [bids, setBids] = useState([0]);
  useEffect(() => {
    const ws = new WebSocket(WAZIRX_URL);
    ws.onopen = (event) => {
      ws.send(JSON.stringify(socketRequest().marketStream));
    };
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      try {
        if (json.stream === "!ticker@arr") {
          setBids(json.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    //clean up function
    return () => ws.close();
  }, []);
  const rows1 = bids?.map((item, index) => ({
    id: index,
    E: item.E,
    T: item.T,
    U: item.U,
    a: item.a,
    b: item.b,
    c: item.c,
    h: item.h,
    l: item.l,
    o: item.o,
    q: item.q,
    s: item.s,
    u: item.u,
  }));
  console.log(rows1);

  return (
    <div>
      <PriceTable rows={rows1} orderBook={bids} />
    </div>
  );
}

export default Wazirx;
