import Categories from '../components/shop/Categories.jsx';
import Products from '../components/shop/Products.jsx';
function ShopPage () {
    return (
    <>
        <main className='font-roboto sm:mr-32 sm:ml-32 mr-8 ml-8 sm:mt-10'>
            <section className="flex  flex-col">
                <h2 className="text-center font-bold text-2xl mb-4 mt-4">Categories</h2>
                <div className="flex justify-center items-center sm:items-start sm:justify-start">
                <Categories/>
                </div>
            </section>

            <section>
            <h2 className="text-center font-bold text-2xl mb-4 mt-4">Products</h2>
                <div>
                    <Products/>
                </div>
            </section>
            

        </main>
    
    </>)
}

export default ShopPage;