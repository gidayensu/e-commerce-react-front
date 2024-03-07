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
  const source = 'categories'
    const {data, isPending, error} =  useQuery({
                
        queryKey: ['categories'],
        queryFn: ()=> fetchProducts({source})
      });

      if (isPending) {
        return <span className="loading loading-ring loading-md"></span>
      }

      if (error) {
        return error;
      }
      


    const categoryImages = [
    "https://i.postimg.cc/Fz8Hp72D/smartphones.jpg",
    "https://i.postimg.cc/GmJb87hM/laptops.webp",
    "https://i.postimg.cc/YC1CN28z/fragrances.jpg",
    "https://i.postimg.cc/G2NRw6qp/skincare.jpg",
    "https://i.postimg.cc/QxKttJTP/groceries.jpg",
    "https://i.postimg.cc/hGcP2F5W/home-decor.jpg",
    "https://i.postimg.cc/nL2V5dys/furniture.jpg",
    "https://get.pxhere.com/photo/women-lady-model-person-photography-wallpaper-plant-flower-smile-facial-expression-People-in-nature-leaf-flash-photography-happy-sunlight-grass-petal-leisure-people-natural-landscape-meadow-beauty-tree-lawn-electric-blue-fun-landscape-blond-brown-hair-annual-plant-grassland-garden-flowering-plant-wildflower-sitting-t-shirt-recreation-portrait-photography-vacation-laugh-child-shrub-floral-design-photo-shoot-portrait-floristry-1637546.jpg",
    "https://c.pxhere.com/images/07/c0/27b9d3cff0302be094e89f542241-1681230.jpg!d",
    "https://i.postimg.cc/x1rdbNGd/womens-shoes.jpg",
    "https://c.pxhere.com/photos/a9/1d/business_suit_business_man_professional_suit_businessman_tie_confident-893391.jpg!d",
    "https://i.postimg.cc/W4NTMGds/men-shoes.jpg",
    "https://i.postimg.cc/TwP2XVxt/men-watches.jpg",
    "https://i.postimg.cc/LhFMhLdK/womens-watches.jpg", 
    "https://i.postimg.cc/X75j37M6/womens-bags.webp", 
    "https://i.postimg.cc/bYBrpBsk/womens-jewelery.jpg",
    "https://i.postimg.cc/CKcYJR8k/sun-glasses.webp",  
    "https://i.postimg.cc/C1d02wCt/automotive.jpg", 
    "https://i.postimg.cc/yxM792ZG/motorcycle.jpg",     
    "https://i.postimg.cc/ry3VvRP9/lighting.jpg",
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

