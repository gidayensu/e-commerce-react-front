
function FilterBase () {
    const filterClass = "-ml-4 md:-ml-0 w-80 md:w-60 h-9 flex items-center";
    return(
        <div className="flex flex-col gap-4">
                           
                            
                            <div className="flex flex-col gap-1 cursor-pointer">
                                <span className={filterClass}><p className="ml-3">Men's Clothing (4)</p></span>
                                <span className={filterClass}><p className="ml-3">Women's Clothing (4)</p></span>
                                <span className={filterClass}><p className="ml-3">Electronics (4)</p></span>
                                <span className={filterClass}><p className="ml-3">Jewelry (4)</p></span>
                            </div>
                            <span className="mt-5 font-bold">PRICE RANGE</span>
                            <div className="flex gap-3 items-center">
                                <span className="grid">
                                    <label htmlFor="" className="text-[11px]"> Minimum Price</label>
                                    <input type="text" className="w-24 h-12 border rounded-md text-sm" />
                                </span>
                                <p>-</p>
                                <span className="grid">
                                    <label htmlFor="" className="text-[11px]"> MaximumPrice</label>
                                    <input type="text" className="w-24 h-12 border rounded-md text-sm" />
                                </span>
                            </div>
                            <button className="bg-primary w-56 h-8 rounded-md text-white text-[12px]">Apply Filter</button>
                        </div>
    )
}

export default FilterBase;