import  {adviceForRentList} from '../../core/contence/AdviceForRentList'
import {Link} from "react-router-dom"


function AdviceForRent(){
    return(
        <>
        <div className='py-6 px-8 font-Vazir'>
            <div className="text-center">
                <p className="text-2xl font-bold">سقفینو فرصتی برای همه</p>
                <p className="text-xl">اگر مالک یا در جستجوی سقفی نو هستید، کلیک کنید</p>
            </div>
             <div className='grid grid-cols-3 gap-8 py-6'>
                {
                    adviceForRentList.map((item,index)=>(
                        <div key={index} className=' border-2 border-gray-100 rounded-xl shadow-lg shadow-gray-300'>
                            <div className='min-h-40 w-3/4 pt-3 mx-auto'>
                                <Link to=""><img src={item.image} alt="" className='w-full'/></Link>
                            </div>
                            <p className='w-3/4 mx-auto text-center pt-2 pb-3'>{item.description}</p>
                        </div>
                    ))
                }
             </div>
           
        </div>
        </>
    )
}

export default AdviceForRent