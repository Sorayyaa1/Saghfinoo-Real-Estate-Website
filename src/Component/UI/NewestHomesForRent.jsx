import {Link} from "react-router-dom"
import {NewestHousesForRent} from '../../core/contence/NewestHousesForRent'
import {Icons} from '../UI/Icon/Icon'

function NewestHomesForRent(){
    return (
        <>
        <div className='py-6 px-8 font-Vazir'>
            <div className="flex justify-between pt-8 p-4">
                <button className="hedearButtons">مشاهده همه</button>
                <p className='HomePageSectionHeaders'><span></span>جدیدترین خانه های اجاره ای </p>
            </div>
            <div className='grid grid-cols-4 gap-2 '>
                {
                    NewestHousesForRent.map((item,index)=>(
                        <div key={index} className='rounded-xl border-2 border-gray-100'>
                            <div className='relative min-h-9'>
                                <Link to=""><img src={item.image} alt="" className='rounded-t-xl'/></Link>
                                <p className='bg-inherit text-white p-1 absolute z-10 top-2 left-2'>2 ساعت پیش</p>    
                            </div>
                            <div className='px-2 py-4 min-h-20'>
                                <div className='flex justify-between py-1'>
                                    <Icons icon={'marked'} />
                                    <p className='text-gray-400 text-sm'><span></span>رهن و اجاره آپارتمان </p>
                                </div>
                                <div className="flex justify-end text-gray-600">
                                    <p>{item.address}</p>
                                    <p className='ps-1 text-end'> ،متر {item.meterage} </p> 
                                </div>
                                <div className='flex flex-col items-end font-semibold'>
                                    <p>{item.mortgagePrice} تومان رهن</p>
                                    <p>{item.rentalPrice} تومان اجاره</p>
                                </div>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default NewestHomesForRent