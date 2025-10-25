import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation,Pagination,Scrollbar,A11y,Autoplay} from "swiper/modules";
import {Link} from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {HousesForRent} from '../../core/contence/HomesForRent'
import { Icons } from "./Icon/Icon";


function MoreHomeForRent({Input}){
    return(
        <>
        <div className='py-6 px-8 font-Vazir'>
            <div className=" flex gap-2 items-center justify-start relative">
                <Swiper modules={[Pagination,Navigation,Scrollbar,A11y,Autoplay]} 
                spaceBetween={40} slidesPerView={4} navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}} pagination={{clickable:true, el:'.swiper-pagination'}}
                scrollbar={{draggable:true, el:'swiper-scrollbar'}} direction="horizontal" loop="true" speed={300} grabCursor:true autoplay={{delay:'3000',pauseOnMouseEnter:true}} 
                ally={{prevSlideMessage:'Previous slide',nextSlideMessage:'Next slide'}} effect="creative" creativeEffect={{prev:{translate:[0,0,-400]},next:{translate:['100%',0,0]}}}
                className="swiper-container">
                   {
                    HousesForRent.map((item,index)=>(
                            <SwiperSlide key={index}>
                                <div key={index} className='rounded-xl border-2 border-gray-100'>
                                    <div className='relative min-h-9'>
                                        <Link to={`/rent/${item.id}`}><img src={item.image} alt="" className='rounded-t-xl'/></Link>
                                        <p className='bg-inherit text-white p-1 absolute z-10 top-2 left-2'> ساعت پیش <span>{item.uploadTime}</span></p>    
                                    </div>
                                    <div className='px-2 py-4 min-h-20'>
                                        <div className='flex justify-between py-1'>
                                            <Icons icon={'marked'} />
                                            <p className='text-gray-400 text-sm'>رهن و اجاره آپارتمان <span>{Input}</span></p>
                                        </div>
                                    <div className="flex text-gray-600 justify-end">
                                        <p className="text-end">{item.address}</p>
                                        <p className='ps-1 text-end'>،متر{item.meterage} </p> 
                                    </div>
                                    <div className='flex flex-col items-end font-semibold'>
                                        <p>{item.mortgagePrice} تومان رهن</p>
                                        <p>{item.rentalPrice} تومان اجاره</p>
                                    </div>
                                </div>   
                            </div>  
                            </SwiperSlide>
                    ))
                   }
                </Swiper>
                <button className=' swiper-button-prev absolute z-10 -left-5 origin-bottom-right bg-white p-3 rounded-full shadow-lg shadow-gray-400'>
                    <Icons icon={"next"} />
                </button>

            </div>

        </div>
        </>
    )
}

export default MoreHomeForRent