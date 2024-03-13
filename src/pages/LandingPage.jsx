import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FeaturedProduct from "../components/shop/products/FeaturedProduct.jsx";

import Categories from "../components/shop/categories/Categories.jsx";
import Accordion from "../components/common/Accordion.jsx";
import UserReviewSlider from "../components/common/UserReviewSlider.jsx";
import { fetchData } from "../store/productSlice.jsx";
import FeaturedProducts from "../components/shop/products/FeaturedProducts.jsx";

function LandingPage() {
  
  const dispatch = useDispatch();

    const { products, status, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchData());
      }, [dispatch]);
    
      if (status === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (status === 'failed') {
        return <div>Error: {error}</div>;
      }
    
      
  
  const slides = [
    "https://raw.githubusercontent.com/thurdeon/GuessGames/master/daniel-romero-6V5vTuoeCZg-unsplash.jpg",
    "https://raw.githubusercontent.com/thurdeon/GuessGames/master/c-d-x-PDX_a_82obo-unsplash(1).jpg",
    "https://raw.githubusercontent.com/thurdeon/GuessGames/master/mnz-ToLMORRb97Q-unsplash.jpg",
    "https://raw.githubusercontent.com/thurdeon/GuessGames/master/pexels-andrew-neel-3178938(1).jpg",
  ];

  return (
    <>
      <div>
        <div className="carousel w-full h-64 md:h-[550px]">
          {slides.map((slide, index) => (
            <div key={`slide${index + 1}`} className="carousel-item relative w-full">
              <img className="object-cover h-full w-full" src={slide} />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index === 0 ? slides.length : index}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#slide${index === slides.length - 1 ? 1 : index + 2}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mr-44 md:ml-44 mr-8 ml-8 md:mt-10">
        <section>
          <div className="flex flex-col sm:justify-between sm:mr-20 mt-8">
            <h2 className="md:text-2xl font-bold mb-8">Product Categories</h2>
            <Categories />
          </div>
        </section>
        <section className="flex md:justify-between mt-10 flex-col md:flex-row gap-4 sm:gap-0 mb-8 md:mb-5 ">
          <span className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-primary"></div>
            <div className="w-5 h-5 absolute rounded-full bg-primary animate-ping"></div>
            <h2 className="text-2xl font-bold">Featured Products</h2>
          </span>
          <Link to="shop">
            <button className="btn btn-primary mr-5 hidden md:block">
              View All Products
            </button>
          </Link>
        </section>
        <div className="flex flex-col md:grid md:grid-cols-4">
          <div>
            <FeaturedProduct productId={6} />
          </div>
          <div className="col-span-3">
            <FeaturedProducts />
          </div>
        </div>
        <Link to="shop">
          <button className="btn btn-primary w-full mr-5 block md:hidden mt-5">
            View All Products
          </button>
        </Link>
        <section className="mt-4">
          <div className="md:grid md:grid-cols-5 flex flex-col gap-6">
            <div className="col-span-2">
              <h2 className="md:text-2xl font-bold">Reviews</h2>
              <div className="h-[1px] w-full md:my-4 my-2 bg-gray-400"></div>
              <UserReviewSlider />
            </div>
            <div className="col-span-3 mr-6">
              <h2 className="md:text-2xl font-bold">Frequently Asked Questions</h2>
              <div className="h-[1px] w-full my-4 bg-gray-400"></div>
              <Accordion question={"How can I track my order?"}>
                <p>
                  <strong>You can track your order by:</strong> logging into your
                  account and checking your order history, using the tracking
                  number provided in your shipping confirmation email, or
                  contacting our customer support team for assistance.
                </p>
              </Accordion>
              <Accordion question={"What is your return policy?"}>
                <p>
                  <strong>Our return policy:</strong> We offer a 30-day return
                  policy for most items. Items must be returned in their original
                  condition with all tags attached. Please refer to our Returns &
                  Exchanges page for detailed instructions.
                </p>
              </Accordion>
              <Accordion question={"Do you offer international shipping?"}>
                <p>
                  <strong>Yes, we offer international shipping!</strong>
                  International shipping rates and delivery times may vary
                  depending on the destination. Please proceed to checkout for
                  more information.
                </p>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
