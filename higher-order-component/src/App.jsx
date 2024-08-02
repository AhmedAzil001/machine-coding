import { useState } from "react";
import Item, { withPromoteLabel } from "./component/Item";

function App() {
  const ItemPromoted = withPromoteLabel(Item);
  const data = [
    {
      id: 1,
      title: "Nike Shoes",
      price: "$600",
      promote: false,
    },
    {
      id: 2,
      title: "Rebok Shoes",
      price: "$900",
      promote: true,
    },
    {
      id: 3,
      title: "Sport Shoes",
      price: "$450",
      promote: false,
    },
  ];

  return (
    <div className="flex gap-5 p-10 items-center h-[100vh]">
      {data.map((val) =>
        val.promote ? (
          <ItemPromoted list={val} key={val.id} />
        ) : (
          <Item list={val} key={val.id} />
        )
      )}
    </div>
  );
}

export default App;
