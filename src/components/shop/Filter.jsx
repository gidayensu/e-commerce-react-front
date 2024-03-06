import { IoMdOptions, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function Filter() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="drawer z-40">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="md:hidden btn btn-primary drawer-button" onClick={toggleDrawer}>
                        <IoMdOptions />
                    </label>
                </div>
                <div className={`drawer-side ${isOpen ? 'md:block' : 'hidden md:block'}`}>
                    <label htmlFor="my-drawer" aria-label="close sidebar" className={`drawer-overlay ${isOpen ? 'md:block' : 'hidden md:block'}`} onClick={toggleDrawer}></label>
                    <ul className={`menu p-4 mt-28 md:w-80 w-80 min-h-full bg-base-200 text-base-content ${isOpen ? 'md:block' : 'hidden md:block'}`}>
                        <button className="btn btn-sm btn-primary btn-circle btn-ghost absolute right-2 top-2" onClick={toggleDrawer}>✕</button>
                        {/* Sidebar content here */}
                        <div className="flex flex-col gap-4">
                            <span className="font-bold">SORT</span>
                            <div>
                                <div className="dropdown dropdown-bottom">
                                    <div tabIndex={0} role="button" className="btn font-light bg-white w-56 text-left">Sort by name [A-Z] <IoIosArrowDown /></div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><button>Expensive First</button></li>
                                        <li><button>Cheapest First</button></li>
                                        <li><button>Name [Z-A]</button></li>
                                    </ul>
                                </div>
                            </div>
                            <span className="font-bold">CATEGORIES</span>
                            <div className="flex flex-col gap-1 cursor-pointer">
                                <span className="-ml-4 w-80 shadow-sm bg-white h-9 flex items-center"><p className="ml-3">Men's Clothing (4)</p></span>
                                <span className="-ml-4 w-80 shadow-sm active active:text-white active:bg-primary bg-white h-9 flex items-center"><p className="ml-3">Women's Clothing (4)</p></span>
                                <span className="-ml-4 w-80 shadow-sm active active:text-white active:bg-primary bg-white h-9 flex items-center"><p className="ml-3">Electronics (4)</p></span>
                                <span className="-ml-4 w-80 shadow-sm active active:text-white active:bg-primary bg-white h-9 flex items-center"><p className="ml-3">Jewelry (4)</p></span>
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
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Filter;
