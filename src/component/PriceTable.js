import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { testData } from "../utils/testData";

export default function PriceTable({ rows, orderbook }) {
  console.log("rwos", { rows });
  // const ord = orderBook.orderBook;
  // const rows1 = ord?.map((item, index) => ({
  //   id: index,
  //   E: item.E,
  //   T: item.T,
  //   U: item.U,
  //   a: item.a,
  //   b: item.b,
  //   c: item.c,
  //   h: item.h,
  //   l: item.l,
  //   o: item.o,
  //   q: item.q,
  //   s: item.s,
  //   u: item.u,
  // }));
  // creates dynamic column
  const columnHeader = Object.keys(testData[0]).map((item) => ({
    field: item,
    headerName: item,
  }));

  //by spreading columnHeader we can add additional field as per useage.
  // const columnHeader = [{ field: "id", headerName: "ID" }, ...columnHeader];

  // const columnHeader = header.map((item) => ({
  //   field: item,
  //   headerName: item,
  // }));

  // const rows1 = testData.map((rowItem, rowIndex) =>
  //   header.map((headerItem, colIndex) => ({
  //     headerItem: rowItem.headerItem,
  //   }))
  // );
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columnHeader}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
      {/* {ord.map((item, index) => (
        <div key={index}>
          <p>{item.o}</p>
        </div>
      ))} */}
    </div>
  );
}
