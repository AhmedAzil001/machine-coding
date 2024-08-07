import { useState } from "react";
import AccordianItem from "./AccordianItem.jsx";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Accordian = ({ isActive, onShow, data }) => {
  console.log(isActive);

  return (
    <>
      <div
        className="bg-slate-700 text-slate-300 font-medium w-full p-4 text-center flex justify-between items-center rounded-sm mt-2"
        onClick={onShow}
      >
        <h4>{data.title}</h4>
        <p>{isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</p>
      </div>
      {isActive && <AccordianItem description={data.description} />}
    </>
  );
};

export default Accordian;
