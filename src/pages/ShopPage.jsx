import { BiSortAlt2 } from "react-icons/bi";
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import SideBarFilter from '../components/shop/filterAndSort/SideBarFilter.jsx';
import Products from '../components/shop/Products.jsx';
import Categories from '../components/shop/categories/Categories.jsx';


function ShopPage () {
    
    return (
    <>
    <Breadcrumbs/>
    
        <main className='md:mr-44 md:ml-44 mr-8 ml-8 md:mt-10'>
            <section className="flex  flex-col">
                <h2 className="text-left font-bold text-2xl mb-4 mt-4">Categories</h2>
                <Categories/>
            </section>
            <h2 className="text-left font-bold text-2xl mb-2 mt-8">Products</h2>
            <div className="w-full h-[1px] bg-gray-300 mb-3"></div>

            <section className='md:grid md:grid-cols-4'>
                <div className='md:block hidden'>
                    <SideBarFilter/>
                </div>
                <div className='col-span-3'>
                    <Products/>
                </div>
            </section>
            

        </main>
    
    </>)
}

export default ShopPage;

