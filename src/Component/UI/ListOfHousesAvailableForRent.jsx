import { Link } from 'react-router-dom'
import {HousesForRent} from '../../core/contence/HomesForRent'
import { Icons } from './Icon/Icon'

function ListOfHousesAvailableForRent({Input}){
    return(
        <>
        <div className='py-6 px-8 font-Vazir'>
            <div className='grid grid-cols-4 gap-2'>
                 {
                    HousesForRent.slice(3,HousesForRent.length-1).map((item,index)=>(
                        <div key={index} className='rounded-xl border-2 border-gray-100'>
                            <div className='relative min-h-9'>
                                <Link to=""><img src={item.image} alt="" className='rounded-t-xl'/></Link>
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
                    ))
                    }
            </div>
           
        </div>
        </>
    )
}

export default ListOfHousesAvailableForRent