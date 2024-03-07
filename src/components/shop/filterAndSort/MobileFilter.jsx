import { IoMdOptions, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import FilterBase from "./FilterBase";
import SortBase from "./SortBase";
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
                    <label htmlFor="my-drawer" className="text-2xl drawer-button" onClick={toggleDrawer}>
                        <IoMdOptions />
                    </label>
                </div>
                <div className={`drawer-side ${isOpen ? 'md:block' : 'hidden md:block'}`}>
                    <label htmlFor="my-drawer" aria-label="close sidebar" className={`drawer-overlay ${isOpen ? 'md:block' : 'hidden md:block'}`} onClick={toggleDrawer}></label>
                    <ul className={`menu p-4 mt-28 md:w-80 w-80 min-h-full bg-base-200 text-base-content ${isOpen ? 'md:block' : 'hidden md:block'}`}>
                        <button className="btn btn-sm btn-primary btn-circle btn-ghost absolute right-2 top-2" onClick={toggleDrawer}>✕</button>
                        {/* Sidebar content here */}
                        <span className="font-bold">CATEGORIES</span>
                        <FilterBase/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Filter;
