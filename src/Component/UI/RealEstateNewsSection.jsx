import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation,Pagination,Scrollbar,A11y,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import {RealEstateNewsList} from "../../core/contence/RealEstateNewsSectionList"

import { Icons } from "./Icon/Icon";

function RealEstateNewsSection(){
     
    return(
        <>
           <div className='py-6 px-8'>
              <p className="HomePageSectionHeaders pb-6">آخرین اخبار املاک را از سقفینو دنبال کنید</p>
              <div className=" flex gap-2 items-center justify-start relative">
                <Swiper 
                modules={[Pagination,Navigation,Scrollbar,A11y,Autoplay]} 
                spaceBetween={40} slidesPerView={4} navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}} pagination={{clickable:true, el:'.swiper-pagination',background:"gray"}}
                scrollbar={{draggable:true, el:'swiper-scrollbar'}} direction="horizontal" loop="true" speed={300} grabCursor:true autoplay={{delay:'3000',pauseOnMouseEnter:true}} 
                ally={{prevSlideMessage:'Previous slide',nextSlideMessage:'Next slide'}} effect="creative" creativeEffect={{prev:{translate:[0,0,-400]},next:{translate:['100%',0,0]}}}
                className="swiper-container">
                    {
                        RealEstateNewsList.map((item,index)=>(
                                <SwiperSlide key={index} className="bg-gray-100 border-2 border-gray-200 rounded-xl">
                                    <img src={item.image} alt="" className='rounded-t-xl w-full'/>
                                    <p className="text-end px-2 py-4 font-semibold">{item.description}</p>
                                </SwiperSlide> 
                        ))
                    } 
                </Swiper>  
                    <button  className='swiper-button-next absolute z-10 right-5 origin-bottom-left bg-white p-2 rounded-full shadow-lg shadow-gray-400 '>
                        <Icons icon={'prev'} />
                    </button>
                    <button   className=' swiper-button-prev absolute z-10 -left-5 origin-bottom-right bg-white p-3 rounded-full shadow-lg shadow-gray-400'>
                        <Icons icon={"next"} />
                    </button>
                  
              </div>
           </div>
        </>
    )
}

export default RealEstateNewsSection