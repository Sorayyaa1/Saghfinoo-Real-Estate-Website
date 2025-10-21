import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation,Pagination,Scrollbar,A11y,Autoplay} from "swiper/modules";
import {Link} from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {suggestedSearchesList} from "../../core/contence/SuggestedSearchesList"

function RelatedProperties(){
    return(
        <>
        <div className='py-6 px-8 font-Vazir bg-gray-100'>
            <div className=" flex items-center justify-start relative">
                 <Swiper modules={[Pagination,Navigation,Scrollbar,A11y,Autoplay]} 
                spaceBetween={40} slidesPerView={6} navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}} pagination={{clickable:true, el:'.swiper-pagination'}}
                scrollbar={{draggable:true, el:'swiper-scrollbar'}} direction="horizontal" loop="true" speed={300} grabCursor:true autoplay={{delay:'3000',pauseOnMouseEnter:true}} 
                ally={{prevSlideMessage:'Previous slide',nextSlideMessage:'Next slide'}} effect="creative" creativeEffect={{prev:{translate:[0,0,-400]},next:{translate:['100%',0,0]}}}
                className="swiper-container">
                    {
                        suggestedSearchesList.map((item,index)=>(
                            <SwiperSlide key={index}>
                                <p className="text-center text-gray-600 py-2 px-5 bg-white rounded-lg"><Link>{item}</Link></p>   
                            </SwiperSlide>   
                        ))
                    }
                </Swiper>

            </div>
           
        </div>
        </>
    )
}
export default RelatedProperties