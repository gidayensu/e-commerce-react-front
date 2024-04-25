import { AiOutlineUser, AiOutlineSearch, AiOutlineMenu, AiOutlineClose    } from "react-icons/ai";
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import CartItems from "../shop/NavCart";
import { filterBySearch } from "../../store/productFilterSlice";

export default function MainNavigation() {

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [activeSearchResult, setActiveSearchResult] = useState(false);
  
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log('currentUrl:', currentUrl)

  const dispatch = useDispatch();
  const { products } = useSelector((state)=>state.products);
  const { filteredProducts } = useSelector((state)=>state.filter)
  
  const searchResultsHandler = ()=> {
    setActiveSearchResult(false)
  }

  const filterBySearchHandler = (searchData)=> {
    setActiveSearchResult(true);
    dispatch(filterBySearch({
      searchData,
      products
    }))
  }

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  

  const toggleTheme = () => {
    if(theme=== 'light') {
      
      setTheme('dark')
    } else {
      setTheme('light')
      
    }
  }
   

  

  return (
    <>
    
    <nav data-theme={theme} className="bg-[#0b56ad] sticky top-0 z-30">
      <div className="menu">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              className="block lg:hidden h-8 w-auto"
              src="https://dummyimage.com/160x40"
              alt="Logo"
            />
            <img
              className="hidden lg:block h-8 w-auto"
              src="https://dummyimage.com/160x40"
              alt="Logo"
            />
            {/* desktop navbar */}
            <div className="hidden sm:flex sm:ml-6 sm:space-x-8">
              <MenuItem text="Home" link="/" />
              <MenuItem text="About" link="about-us" />
              <MenuItem text="Shop" link="shop" />
              <MenuItem text="Contact Us" link="contact-us" />
              <div className="relative group flex flex-col items-center justify-center">
              <label htmlFor="" className="rounded-full input input-bordered flex items-center gap-2">
                <input onChange={(event)=>filterBySearchHandler(event.target.value)} className="w-96 h-10 " type="text" placeholder="search" />
                <AiOutlineSearch className="text-2xl text-slate-400"/>
              </label>
              
              {filteredProducts[0] && currentUrl !== '/shop' && activeSearchResult &&
              <div className="flex flex-col items-center"> 
                <div className="absolute bg-white mt-2"> 
                  {
                    filteredProducts.map((product, index)=> {
                      console.log('product details:', product)

                      if (index <=2) {
                        
                      return (
                        <div key={index} className="z-10 w-96 h-auto"> 
                      <Link to ={`/shop/product/${product.id}`} onClick={searchResultsHandler}>    
                        <div  className="flex flex-col justify-center items-center">
                          <div className="grid grid-cols-4 col-span-1 border p-4  bg-gray-50 border-gray-300 w-80 my-2">
                    <img className="h-6 md:h-16"  src={product.thumbnail} alt={product.title} />
                    <p className="truncate col-span-3">{product.title}</p>
                    
                    </div>
                    
                    </div>
                    </Link>
                    </div>
                        
                      )}
                    })
                  }
                </div>
                </div>}


              
              </div>
            </div>
            
          </div>
          
          <div className="flex items-center">
            {/* cart items */}


    
          <CartItems/>

                
              <Link
              to="account"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
            >
              
              <AiOutlineUser />
            </Link>
            
            
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              {/* phone navbar  */}
              
              {isOpen ? <AiOutlineClose  className="text-2xl text-white z-50" />
               : <AiOutlineMenu className="text-2xl text-white z-50"/>}
            </button>
            
          </div>
          
          
        </div>
        <div className="flex flex-col justify-center gap-2 sm:hidden">
        <label htmlFor="" className="sm:hidden rounded-full h-8 input input-bordered flex items-center gap-2">
                <input onChange={(event)=>filterBySearchHandler(event.target.value)} className="w-full  text-sm " type="text" placeholder="search products" />
                <AiOutlineSearch className="text-2xl text-slate-400"/>
              </label>
              {filteredProducts[0] && currentUrl !== '/shop' && activeSearchResult &&
              <div className="flex flex-col items-center"> 
                <div className="absolute"> 
                  {
                    filteredProducts.map((product, index)=> {
                      console.log('product details:', product)

                      if (index <=2) {
                        
                      return (
                        <div key={index} className="z-10 bg-white w-96 h-auto"> 
                      <Link to ={`/shop/product/${product.id}`} onClick={searchResultsHandler}>    
                        <div  className="flex flex-col justify-center items-center">
                          <div className="grid grid-cols-4 col-span-1 border p-4  bg-gray-50 border-gray-300 w-80 my-2">
                    <img className="h-6 md:h-16"  src={product.thumbnail} alt={product.title} />
                    <p className="truncate col-span-3">{product.title}</p>
                    
                    </div>
                    
                    </div>
                    </Link>
                    </div>
                        
                      )}
                    })
                  }
                </div>
                </div>}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute bg-[#0b56ad] w-full h-screen top-0 flex justify-center items-center z-20" id="mobile-menu">
          <div className="px-2 pt-2  pb-3 space-y-1 flex flex-col justify-center items-center ">
            <MenuItem text="Home" link="/" toggleMenu={toggleMenu}/>
            <MenuItem text="About" link="about-us" toggleMenu={toggleMenu}/>
            <MenuItem text="Shop" link="shop" toggleMenu={toggleMenu}/>
            <MenuItem text="Contact Us" link="contact-us" toggleMenu={toggleMenu}/>
            
          </div>
        </div>
      )}
    </nav>
  </>);
  
}

function MenuItem({ text, link, toggleMenu }) {
  return (
    <NavLink to={link} className="text-gray-300 font-bold hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base text-center" onClick={toggleMenu}>{text}</NavLink>
  );
}
