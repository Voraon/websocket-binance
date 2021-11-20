import React from "react";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "symbol", headerName: "Symbol", width: 300 },
  { field: "askingPrice", headerName: "AskingPrice", width: 330 },
  { field: "buyingPrice", headerName: "BuyingPrice", width: 330 },
  { field: "volume", headerName: "Volume", width: 150 },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 90,
  // },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, "buyingPrice") || ""} ${
  //       params.getValue(params.id, "askingPrice") || ""
  //     }`,
  // },
];

export default function PriceTable(orderBook) {
  console.log("bids", orderBook?.orderBook);
  const ord = orderBook?.orderBook;

  const rows1 = ord?.map((item, index) => ({
    id: index,
    askingPrice: item.o,
    buyingPrice: item.h,
    symbol: item.s,
    volume: item.v,
  }));
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows1}
        columns={columns}
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
