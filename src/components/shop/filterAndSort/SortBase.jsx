function SortBase () {
    return (
        <>
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
        </>
    );
}

export default SortBase;