
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function UserReviewSlider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
        <SwiperSlide className="mySwiper flex justify-center items-center h-72">
          <div className='flex flex-col text-center items-center justify-center bg-white p-4 w-96 md:rounded-2xl rounded-3xl'>
            <span ><img className='rounded-full w-12 h-12' src="https://c.pxhere.com/photos/9f/64/people_old_man_black_senior_person_elderly_adult-702817.jpg!d" alt="" /></span>
            <p className='text-sm p-3'>Impressed with the customer service on this site! Had a query about my order, and the support team responded promptly and professionally. Great communication and resolution. Highly recommend!</p>
            <span>
            <div className="rating rating-sm flex  gap-1 items-center">
                  {[...Array(5)].map((_, index) => (
                    <input key={index} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={index === Math.floor(1+index)} />
                    
                  ))}
                  
                </div>
            </span>
            <span className='mt-2'>
                <p className='font-bold'>Samson Adenuga</p>
                <p className='text-sm'>CEO, Buy and Sell</p>
            </span>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="mySwiper flex justify-center items-center h-72">
          <div className='flex flex-col text-center items-center justify-center bg-white p-4 w-96 md:rounded-2xl rounded-3xl'>
            <span ><img className='rounded-full w-12 h-12' src="https://c.pxhere.com/photos/9f/64/people_old_man_black_senior_person_elderly_adult-702817.jpg!d" alt="" /></span>
            <p className='text-sm p-3'>Impressed with the customer service on this site! Had a query about my order, and the support team responded promptly and professionally. Great communication and resolution. Highly recommend!</p>
            <span>
            <div className="rating rating-sm flex  gap-1 items-center">
                  {[...Array(5)].map((_, index) => (
                    <input key={index} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={index === Math.floor(1+index)} />
                    
                  ))}
                  
                </div>
            </span>
            <span className='mt-2'>
                <p className='font-bold'>Samson Adenuga</p>
                <p className='text-sm'>CEO, Buy and Sell</p>
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default UserReviewSlider;