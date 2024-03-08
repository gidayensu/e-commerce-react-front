import { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import {useSelector, useDispatch } from 'react-redux';
import { sortProductsNamePrice } from "../../../store/productFilterSlice";

function SortBase () {
    const [selectedSort, setSelectedSort] = useState('Name [A-Z]');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    

    const { products } = useSelector(state=> state.products);

    const dispatch = useDispatch();

    const selectedSortHandler = (sortName, sortDirection) => {
        setSelectedSort(sortName);
        setDropdownOpen(false); 
        dispatch(sortProductsNamePrice({
            products, sortDirection
        }))
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
                    <li><button onClick={() => selectedSortHandler('Expensive First', 'expensive')}>Expensive First</button></li>
                    <li><button onClick={() => selectedSortHandler('Cheapest First', 'cheapest')}>Cheapest First</button></li>
                    <li><button onClick={() => selectedSortHandler('Name [A-Z]', 'nameAZ')}>Name [A-Z]</button></li>
                    <li><button onClick={() => selectedSortHandler('Name [Z-A]', 'nameZA')}>Name [Z-A]</button></li>
                </ul>
            )}
        </div>
        </>
    );
}

export default SortBase;
