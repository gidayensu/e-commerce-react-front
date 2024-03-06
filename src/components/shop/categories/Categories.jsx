// import { fetchProducts } from '../../../util/http.js'
import { useQuery } from '@tanstack/react-query';
import CategoryUI from './CategoryUI.jsx';
import { fetchProducts } from '../../../util/http.js';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


function Categories( ) {

    
    const source = "categories";

    const {data, isPending, error} =  useQuery({
        queryKey: ['categories'],
        queryFn: ()=> fetchProducts({source})
      });

      if (isPending) {
        return "...Loading"
      }

      if (error) {
        return error;
      }
      


    const categoryImages = [
    "https://i.postimg.cc/76jJwvmt/smartphones.jpg",
    "https://i.postimg.cc/RZG3qJgH/laptops.webp",
    "https://i.postimg.cc/CLs56fTQ/fragrances.jpg",
    "https://i.postimg.cc/L6phT37P/skincare.jpg",
    "https://get.pxhere.com/photo/food-produce-vegetable-fresh-basket-groceries-avocado-flowering-plant-2019.jpg",
    "https://i.ibb.co/6RzJQHV/home-decor.webp",
    "https://i.ibb.co/X2G4qVL/furniture.jpg",
    "https://get.pxhere.com/photo/women-lady-model-person-photography-wallpaper-plant-flower-smile-facial-expression-People-in-nature-leaf-flash-photography-happy-sunlight-grass-petal-leisure-people-natural-landscape-meadow-beauty-tree-lawn-electric-blue-fun-landscape-blond-brown-hair-annual-plant-grassland-garden-flowering-plant-wildflower-sitting-t-shirt-recreation-portrait-photography-vacation-laugh-child-shrub-floral-design-photo-shoot-portrait-floristry-1637546.jpg",
    "https://c.pxhere.com/images/07/c0/27b9d3cff0302be094e89f542241-1681230.jpg!d",
    "https://i.postimg.cc/KZvkwQYr/womens-shoes.jpg",
    "https://c.pxhere.com/photos/a9/1d/business_suit_business_man_professional_suit_businessman_tie_confident-893391.jpg!d",
    "https://i.ibb.co/nzgDN56/men-shoes.jpg",
    "https://i.postimg.cc/NM2LNJB6/men-watches.jpg",
    "https://i.postimg.cc/50zN5XSp/womens-watches.jpg", 
    "https://i.postimg.cc/gj9j1V2f/womens-bags.webp", 
    "https://i.postimg.cc/QM4WYK53/womens-jewelery.jpg",
    "https://i.postimg.cc/rwhmqXpG/sun-glasses.webp",  
    "https://i.ibb.co/L9rS978/automotive.jpg", 
    "https://i.postimg.cc/0jpjvz6r/motorcycle.jpg",     
    "https://i.postimg.cc/PqRPQssf/lighting.jpg",
     ]
  
    
    const windowWidth = window.innerWidth;
    return(

        <div className="-ml-5 md:-ml-0">
    <Swiper
    
    slidesPerView={windowWidth <=640? 2: windowWidth<=768 ? 3 : 5}
        grid={{
          rows: 1,
        }}
        spaceBetween={windowWidth <=640? 10: windowWidth<=768 ? 10: 1}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={false}
        modules={[Grid, Pagination, Autoplay]}
        className="theSwiper"
    >
        {data.map((category, index)=> {
            return(
            
            <div key={`${index}${category}`}>
                <SwiperSlide>
                <CategoryUI categoryName={category} imageUrl={categoryImages[index]}/>
                </SwiperSlide>
            </div>
            
            )
        }
            )}
        </Swiper>
            </div>
    
    )
}

export default Categories;

