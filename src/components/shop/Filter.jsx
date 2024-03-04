import { IoMdOptions } from "react-icons/io";

function Filter () {
    return(

        <div>
            <div className="drawer z-40">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><IoMdOptions/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    
    <ul className="menu p-4 mt-28 md:w-80 w-80  min-h-full bg-base-200 text-base-content">
    <button  className="btn btn-sm btn-primary btn-circle btn-ghost absolute right-2 top-2">✕</button>
      {/* Sidebar content here */}
      <div className="flex flex-col gap-4">
       <span>CATEGORIES</span>
            <div className="flex flex-col gap-1">
                <span className="-ml-4 w-80 shadow-sm bg-white h-9 flex items-center"><p className="ml-3">Men's Clothing (4)</p></span>
                <span className="-ml-4 w-80 shadow-sm active active:bg-primary bg-white h-9 flex items-center"><p className="ml-3">Women's Clothing (4)</p></span>
                <span> (4)</span>
                <span>Electronics (4)</span>
                <span>Jewelery (4)</span>
            </div>
        <span className="mt-5">PRICE RANGE</span>
        <div className="flex gap-3 items-center">
            <span className="grid">
                <label htmlFor="" className="text-[11px]"> Minimum Price</label>
                <input type="text" className="w-24 h-12 border rounded-md text-sm"/> 
            </span>
                <p>-</p> 
            <span className="grid">
                <label htmlFor="" className="text-[11px]"> MaximumPrice</label>
                <input type="text" className="w-24 h-12 border rounded-md text-sm"/> 
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