import React from "react";

import ListItem from "./ListItem";

function List({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <ListItem key={i} item={item} />
      ))}
    </ul>
  );
}

export default List;
