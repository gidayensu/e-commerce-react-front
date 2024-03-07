import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import Products from "../components/shop/Products.jsx";
import Categories from "../components/shop/categories/Categories.jsx";

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
                <div className="flex flex-col sm:justify-between sm:mr-20 mt-8">
                <h2 className="md:text-2xl font-bold mb-8 ">Product Categories</h2>

                <Categories />
                    
                </div>
                
                <div className="sm:mr-16">
                {/* <Categories/> */}
                </div>
            </section>
            <section className="flex md:justify-between mt-10 flex-col md:flex-row gap-4 sm:gap-0 mb-8 md:mb-5 ">
                <span className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-primary"></div>
                <div className="w-5 h-5 absolute rounded-full bg-primary animate-ping"></div>
                <h2 className="text-2xl font-bold">Featured Products</h2>
                </span>
                <Link to="shop"><button className="btn btn-primary mr-5 hidden md:block">View All Products </button></Link>
            </section>
            
            <Products source={"featured"}/>
            <Link to="shop"><button className="btn btn-primary w-full mr-5 block md:hidden mt-5">View All Products </button></Link>
            
            <div className="flex items-center mt-5">
        <div className="h-[1px] w-full bg-gray-500"></div>
      <span className="mx-4 text-black text-sm tracking-widest">PARTNERS</span>
        <div className="h-[1px] w-full bg-gray-500"></div>
    </div>

            <h1>BRANDS HOVER PUSH FORWARD NOT HOVERED BLACK AND WHITE PALE</h1>
        </div>
        </>
    );
}

export default LandingPage;