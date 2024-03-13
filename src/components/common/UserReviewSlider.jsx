
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const reviews = [
  {
      reviewer: "Sarah H.",
      title: "Marketing Manager at BrightTech Solutions",
      review: "Absolutely thrilled with my recent purchase! The product quality exceeded my expectations, and the speedy delivery was a pleasant surprise. Highly recommend!"
  },
  {
      reviewer: "Michael S.",
      title: "Operations Director at SwiftSupplies Inc.",
      review: "Spot-on description and unbeatable value! Will definitely be a repeat customer. Five stars all the way."
  },
  {
      reviewer: "Emily R.",
      title: "Customer Experience Specialist at StellarGoods Co.",
      review: "Outstanding customer service! They resolved my issue promptly and with utmost professionalism. Impressed and grateful."
  },
  {
      reviewer: "David W.",
      title: "Sales Executive at PrimeTech Emporium",
      review: "Couldn't be happier with my purchase! Arrived earlier than expected and in perfect condition. Thank you!"
  },
  {
      reviewer: "Jessica L.",
      title: "Product Manager at InnovateMarket Solutions",
      review: "Effortless shopping experience and top-notch product quality. Highly recommend this site!"
  }
];

function UserReviewSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.reviewer} className="mySwiper flex justify-center items-center h-72">
            <div className="flex flex-col text-center items-center justify-center bg-white p-4 w-96 md:rounded-2xl rounded-3xl">
              <span>
                <img
                  className="rounded-full w-12 h-12"
                  src="https://c.pxhere.com/photos/9f/64/people_old_man_black_senior_person_elderly_adult-702817.jpg!d"
                  alt=""
                />
              </span>
              <p className="text-sm p-3">
                {review.review}
              </p>
              <span>
                <div className="rating rating-sm flex  gap-1 items-center">
                  {[...Array(5)].map((_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked={index === Math.floor(1 + index)}
                      readOnly
                    />
                  ))}
                </div>
              </span>
              <span className="mt-2">
                <p className="font-bold">{review.reviewer}</p>
                <p className="text-sm">{review.title}</p>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default UserReviewSlider;