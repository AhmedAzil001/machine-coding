const AccordianItem = ({description}) => {
    return <div className="flex justify-between bg-slate-100 p-9 items-center rounded-b-sm transition">
        <p className="text-slate-800">{description}</p>
    </div>
}

export default AccordianItem;