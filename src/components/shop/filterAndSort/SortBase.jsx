import { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

function SortBase () {
    const [selectedSort, setSelectedSort] = useState('Name [A-Z]');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const selectedSortHandler = (sortName) => {
        setSelectedSort(sortName);
        setDropdownOpen(false); // Close the dropdown when an item is selected
    }

    return (
        <>

        <div>
            <div 
                tabIndex={0} 
                role="button" 
                className=" font-light md:w-56 w-80 text-left md:flex md:items-center md:justify-start flex items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)} 
            >
                <BiSortAlt2 className="text-2xl"/> {selectedSort} <IoIosArrowDown/>
            </div>
            {dropdownOpen && ( 
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 rounded-box w-52">
                    <li><button onClick={() => selectedSortHandler('Expensive First')}>Expensive First</button></li>
                    <li><button onClick={() => selectedSortHandler('Cheapest First')}>Cheapest First</button></li>
                    <li><button onClick={() => selectedSortHandler('Name [A-Z]')}>Name [A-Z]</button></li>
                    <li><button onClick={() => selectedSortHandler('Name [Z-A]')}>Name [Z-A]</button></li>
                </ul>
            )}
        </div>
        </>
    );
}

export default SortBase;
