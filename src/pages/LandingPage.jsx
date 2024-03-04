import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Categories from '../components/shop/Categories.jsx';
import Products from '../components/shop/Products.jsx';

function LandingPage () {
  
    return(
        <>
        <div>
       
<div className="carousel w-full h-64 md:h-[550px]">
    <div id="slide1" className="carousel-item relative w-full">
        <button className="absolute">sdfsf</button>
        <img className="object-cover h-full w-full" src="https://raw.githubusercontent.com/thurdeon/GuessGames/master/daniel-romero-6V5vTuoeCZg-unsplash.jpg" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div>

    <div id="slide2" className="carousel-item relative w-full">
        <img className="object-cover h-full w-full" src="https://raw.githubusercontent.com/thurdeon/GuessGames/master/c-d-x-PDX_a_82obo-unsplash(1).jpg" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 

    <div id="slide3" className="carousel-item relative w-full">
        <img className="object-cover h-full w-full" src="https://raw.githubusercontent.com/thurdeon/GuessGames/master/mnz-ToLMORRb97Q-unsplash.jpg" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div> 

    <div id="slide4" className="carousel-item relative w-full">
        <img className="object-cover h-full w-full" src="https://raw.githubusercontent.com/thurdeon/GuessGames/master/pexels-andrew-neel-3178938(1).jpg" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
</div>

        </div>
        <div className="md:mr-44 md:ml-44 mr-8 ml-8 md:mt-10">

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
            
            <Products featured={false}/>
            
            <h1>BLOG</h1>
            <h1>BRANDS HOVER PUSH FORWARD NOT HOVERED BLACK AND WHITE PALE</h1>
        </div>
        </>
    );
}

export default LandingPage;