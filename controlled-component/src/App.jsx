import { useState } from "react";
import Accordian from "./component/Accordian.jsx";

function App() {
  const data = [
    {
      id: 1,
      title: "Title 1",
      description: "This is a sample description for accordian 1",
    },
    {
      id: 2,
      title: "Title 2",
      description: "This is a sample description for accordian 2",
    },
    {
      id: 3,
      title: "Title 3",
      description: "This is a sample description for accordian 3",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center font-sans">
      <div className="w-[30%] flex items-center flex-col p-4 rounded-sm border-2">
        {data.map((val, index) => (
          <Accordian
            key={val.id}
            isActive={activeIndex == index}
            onShow={() => {
              activeIndex == index
                ? setActiveIndex(null)
                : setActiveIndex(index);
            }}
            data={val}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
