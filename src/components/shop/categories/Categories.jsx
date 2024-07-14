import { useDispatch } from "react-redux";
import CategoryUI from "./CategoryUI.jsx";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { updateCategories } from "../../../store/categoriesSlice.js";
import { useState, useEffect } from "react";

function Categories() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://dummyjson.com/products/category-list";

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        dispatch(updateCategories({ data: result }));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [dispatch, url]);

  if (isPending) {
    return <span className="loading loading-ring loading-md"></span>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
const list = ['m-watc', ]
  const categoryImages = [
    "https://i.postimg.cc/G2NRw6qp/skincare.jpg",
    "https://i.postimg.cc/YC1CN28z/fragrances.jpg",
    "https://i.postimg.cc/nL2V5dys/furniture.jpg",
    "https://i.postimg.cc/QxKttJTP/groceries.jpg",
    "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/1.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/1.png",
    "https://i.postimg.cc/GmJb87hM/laptops.webp",
    "https://c.pxhere.com/photos/a9/1d/business_suit_business_man_professional_suit_businessman_tie_confident-893391.jpg!d",
    "https://i.postimg.cc/W4NTMGds/men-shoes.jpg",
    "https://i.postimg.cc/TwP2XVxt/men-watches.jpg",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
    "https://i.postimg.cc/yxM792ZG/motorcycle.jpg",
    "https://i.postimg.cc/G2NRw6qp/skincare.jpg",
    "https://i.postimg.cc/Fz8Hp72D/smartphones.jpg",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/1.png",
    "https://i.postimg.cc/CKcYJR8k/sun-glasses.webp",
    "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/2.png",
    "https://get.pxhere.com/photo/women-lady-model-person-photography-wallpaper-plant-flower-smile-facial-expression-People-in-nature-leaf-flash-photography-happy-sunlight-grass-petal-leisure-people-natural-landscape-meadow-beauty-tree-lawn-electric-blue-fun-landscape-blond-brown-hair-annual-plant-grassland-garden-flowering-plant-wildflower-sitting-t-shirt-recreation-portrait-photography-vacation-laugh-child-shrub-floral-design-photo-shoot-portrait-floristry-1637546.jpg",
    "https://i.postimg.cc/C1d02wCt/automotive.jpg",
    "https://i.postimg.cc/X75j37M6/womens-bags.webp",
    "https://c.pxhere.com/images/07/c0/27b9d3cff0302be094e89f542241-1681230.jpg!d",
    "https://i.postimg.cc/bYBrpBsk/womens-jewelery.jpg",
    "https://i.postimg.cc/x1rdbNGd/womens-shoes.jpg",
    "https://i.postimg.cc/LhFMhLdK/womens-watches.jpg",
    "https://c.pxhere.com/photos/a9/1d/business_suit_business_man_professional_suit_businessman_tie_confident-893391.jpg!d",
    
    "https://i.postimg.cc/yxM792ZG/motorcycle.jpg",
    
    
    "https://i.postimg.cc/LhFMhLdK/womens-watches.jpg",
    "https://i.postimg.cc/X75j37M6/womens-bags.webp",
    "https://i.postimg.cc/bYBrpBsk/womens-jewelery.jpg",
    "https://i.postimg.cc/CKcYJR8k/sun-glasses.webp",
    "https://i.postimg.cc/C1d02wCt/automotive.jpg",
    "https://i.postimg.cc/ry3VvRP9/lighting.jpg",
  ];

  const windowWidth = window.innerWidth;
  return (
    <div className="-ml-5 md:-ml-0">
      <Swiper
        slidesPerView={windowWidth <= 640 ? 2 : windowWidth <= 768 ? 3 : 5}
        grid={{
          rows: 1,
        }}
        spaceBetween={windowWidth <= 640 ? 10 : windowWidth <= 768 ? 10 : 1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Grid, Pagination, Autoplay]}
        className="theSwiper"
      >
        {data.map((category, index) => {
          return (
            <SwiperSlide key={index}>
              <CategoryUI
                categoryName={category}
                imageUrl={categoryImages[index]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Categories;
