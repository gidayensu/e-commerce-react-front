import SortBase from '../components/shop/filterAndSort/SortBase.jsx';
import MobileFilter from '../components/shop/filterAndSort/MobileFilter.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import SideBarFilter from '../components/shop/filterAndSort/SideBarFilter.jsx';
import Categories from '../components/shop/categories/Categories.jsx';
import PaginatedProducts from '../components/shop/products/PaginatedProducts.jsx';
import { fetchData } from '../store/productSlice.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function ShopPage () {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchData())
    }, []) 
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
                <div className="md:hidden flex gap-32 mb-3">
                    
                    <MobileFilter/>
                    <SortBase/>
                </div>
                <div className='hidden md:flex md:flex-col gap-3'>
                <span className="font-bold">SORT</span>
                    <SortBase/>
                <span className="font-bold">CATEGORIES</span>
                    <SideBarFilter/>
                </div>
                <div className='col-span-3'>
                <PaginatedProducts itemsPerPage={10}/>
                </div>
            </section>
            

        </main>
    
    </>)
}

export default ShopPage;

