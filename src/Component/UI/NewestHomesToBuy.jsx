import {Link} from 'react-router-dom'
import {newestHomesToBuyList} from '../../core/contence/NewestHomesToBuyList'
import {Icons} from '../UI/Icon/Icon'

function NewestHomesToBuy(props){
    const{getBuyInput}=props
    return(
        <>
        <div className='py-8 px-8 font-Vazir'>
            <p className='HomePageSectionHeaders pb-6'>جدیدترین خانه ها برای خرید  <span className="ps-1"></span>{getBuyInput}</p>
            <div className='grid grid-cols-4 gap-2 '>
                {
                    newestHomesToBuyList.map((item,index)=>(
                        <div key={index} className='rounded-xl border-2 border-gray-100'>
                            <div className='relative min-h-9'>
                                <Link to=""><img src={item.image} alt="" className='rounded-t-xl'/></Link>
                                <p className='bg-inherit text-white p-1 absolute z-10 top-2 left-2'>2 ساعت پیش</p>    
                            </div>
                            <div className='px-2 py-4 min-h-20'>
                                <div className='flex justify-between py-1'>
                                    <Icons icon={'marked'} />
                                    <p className='text-gray-400 text-sm'> خرید آپارتمان <span>{getBuyInput}</span></p>
                                </div>
                                <div className="flex justify-end text-gray-600">
                                    <p>{item.address}</p>
                                    <p className='ps-1 text-end'> ،متر {item.meterage} </p> 
                                </div>
                                <div className='flex flex-col items-end font-semibold'>
                                    <p>{item.priceOfBuying} تومان </p>
                                    
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

export default NewestHomesToBuy