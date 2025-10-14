import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation,Pagination,Scrollbar,A11y,Autoplay} from "swiper/modules";
import {Link} from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icons } from "./Icon/Icon";
import {topPropertiesList} from '../../core/contence/TopPropertiesList'

function TopProperties({getBuyInput,getRentInput,selected}){
    return(
        <>
        <div className='py-6 px-8 font-Vazir'>
            <p className="HomePageSectionHeaders pb-6">املاک برتر
                {
                    selected==="RentingHome" &&
                       <span className="px-2">{getRentInput}</span>
                }
                {
                    selected==="BuyingHome" && 
                       <span className="px-2">{getBuyInput}</span>
                }
            </p>
            <div className=" flex gap-2 items-center justify-start relative">
                <Swiper 
                modules={[Pagination,Navigation,Scrollbar,A11y,Autoplay]} 
                spaceBetween={40} slidesPerView={4} navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}} pagination={{clickable:true, el:'.swiper-pagination'}}
                scrollbar={{draggable:true, el:'swiper-scrollbar'}} direction="horizontal" loop="true" speed={300} grabCursor:true autoplay={{delay:'3000',pauseOnMouseEnter:true}} 
                ally={{prevSlideMessage:'Previous slide',nextSlideMessage:'Next slide'}} effect="creative" creativeEffect={{prev:{translate:[0,0,-400]},next:{translate:['100%',0,0]}}}
                className="swiper-container">
                    {
                        topPropertiesList.map((item,index)=>(
                            <Link to="" key={index} >
                                        <SwiperSlide className="bg-white border-2 border-gray-100 rounded-xl shadow-md shadow-gray-100 text-center py-4">
                                            <div className="w-1/5 mx-auto py-2">
                                               <img src={item.image} className="w-full"/>
                                            </div>
                                            <div>
                                            {
                                            item.blueTick==="blueTick"  ? (
                                                <div className="flex items-center justify-center">
                                                   <Icons icon={item.blueTick} />
                                                   <p className=" px-1 font-semibold">{item.name}</p>
                                                </div> 
                                            ) : (
                                                <p className=" px-2 font-semibold">{item.name}</p>
                                            ) 
                                            }
                                            </div>
                                               <p className="text-sm py-1">{item.address}</p>
                                               <p className="text-xs text-gray-500 py-1">میزان رضایتمندی: <span>{item.rating}</span> از 5</p>
                                               <p className="text-xs text-gray-500 py-1">آگهی های فعال: بیش از <span>{item.numberOfAds}</span></p>
                                               <p className="text-xs text-gray-500 py-1">مشاهده نظرات کاربران: (<span className="ps-1">{item.numderOfComment}</span>نظر)</p>
                                        </SwiperSlide> 
                            </Link>    
                        ))
                    }          
                </Swiper>  
                    <button   className=' swiper-button-prev absolute z-10 -left-5 origin-bottom-right bg-white p-3 rounded-full shadow-lg shadow-gray-400'>
                        <Icons icon={"next"} />
                    </button> 
              </div>

        </div>
        </>
    )
}

export default TopProperties