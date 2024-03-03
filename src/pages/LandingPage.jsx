import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Categories from '../components/shop/Categories.jsx';
import Products from '../components/shop/Products.jsx';

function LandingPage () {
  
    return(
        <>
        <div className="font-roboto md:mr-64 md:ml-64 mr-8 ml-8 md:mt-10">

            <section>
                <div className="flex sm:justify-between sm:mr-20 mt-8">
                <h2 className='sm:text-3xl text-2xl font-bold mb-8 '>Browse by Category</h2>
                <span className="flex gap-3">
                    <button className="btn btn-primary rounded-full"><IoIosArrowBack /></button>
                    <button className="btn btn-primary rounded-full"><IoIosArrowForward /></button>                    
                </span>
                </div>
                <div className="sm:mr-16">
                {/* <Categories/> */}
                </div>
            </section>
            <section className="flex md:justify-between mt-10 flex-col md:flex-row gap-4 sm:gap-0 mb-8 md:mb-5 ">
                <h2 className='text-3xl font-bold'>Featured Products</h2>
                <Link to="shop"><button className='btn btn-primary mr-5'>View All Products {<AiOutlineArrowRight/>}</button></Link>
            </section>
            
            <Products featured={true}/>
            
            <h1>BLOG</h1>
            <h1>BRANDS HOVER PUSH FORWARD NOT HOVERED BLACK AND WHITE PALE</h1>
        </div>
        </>
    );
}

export default LandingPage;