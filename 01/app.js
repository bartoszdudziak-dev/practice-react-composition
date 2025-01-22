import React from "react";
import { createRoot } from "react-dom/client";

import Table from "./Table";
import data from "./data.json";

const totalPrice = data.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
const footer = ["Total", totalPrice, "", ""];
const cols = [
  { name: "Name", value: "name" },
  { name: "Price", value: "price" },
  { name: "Quantity", value: "quantity" },
  { name: "Total Price", value: (item) => item.price * item.quantity },
];

function App() {
  return <Table data={data} cols={cols} footer={footer} />;
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
