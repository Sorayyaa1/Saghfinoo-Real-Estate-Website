import {RealEstateNewsList} from "../../core/contence/RealEstateNewsSectionList"
import UseSliderHook from '../../Context/UseSliderHook';
import { Icons } from "./Icon/Icon";

function RealEstateNewsSection(){
    const{AutoPlayStop,AutoplayStart,slideNext,slidePrev,Index}=UseSliderHook();
    return(
        <>
           <div className='py-6 px-8'>
              <p className="HomePageSectionHeaders pb-6">آخرین اخبار املاک را از سقفینو دنبال کنید</p>
              <div onMouseEnter={AutoPlayStop} onMouseLeave={AutoplayStart} className="flex gap-2 relative items-center justify-start">
                    {
                        RealEstateNewsList.slice(Index[0],Index[Index.length-1]).map((item,index)=>(
                            <div key={index} className='absolute transition transform ease-linear duration-300 delay-150 translate-x-10 bg-gray-100 rounded-xl'>
                                <img src={item.image} alt="" className='rounded-t-xl max-w-md border-2 border-purple-300'/>
                                <p className="py-5 pe-4 ps-2 border-2 border-yellow-200">{item.description}</p>
                            </div>
                        ))
                    } 
                    <button onClick={
                        (e)=>{e.preventDefault()
                        slideNext()
                        }} className='absolute left-0 bottom-1/2 p-2 rounded-full shadow-lg shadow-gray-400 '>
                        <Icons icon={'next'} />
                    </button>
                    <button onClick={
                        (e)=>{e.preventDefault()
                        slidePrev()
                    }}  className='absolute right-0 bottom-1/2 p-3 rounded-full shadow-lg shadow-gray-400'>
                        <Icons icon={"prev"} />
                    </button>
              </div>
           </div>
        </>
    )
}

export default RealEstateNewsSection