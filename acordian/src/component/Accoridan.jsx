import { useState } from "react";
import AccordianItem from "./AccordianItem";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";

const Accordian = () => {

    const [isOpen,setIsOpen]= useState(false);

    function toggleAccordian(){
        setIsOpen(!isOpen);
    }
    return <div className="w-1/3 p-5 border-2 rounded-md font-sans">
        <div className="flex justify-between bg-slate-300 text-black p-5 items-center rounded-sm">
            <h4 className="text-xl">Title</h4>
            <button className="text-3xl cursor-pointer" onClick={toggleAccordian}>{isOpen? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</button>
        </div>
        {isOpen && <AccordianItem/>}
    </div>
}

export default Accordian;