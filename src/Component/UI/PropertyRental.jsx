
import {Link} from "react-router-dom"
import DropDown from "./DropdownMenu"
import { Icons } from "./Icon/Icon"
import LocationMarker from "./Location"
import {HousesForRent} from '../../core/contence/HomesForRent'

function PropertyRental({Input,InputValue}){
    const count=Math.ceil(Math.random()*90)
    return(
        <>
        <div className='py-6 px-8 font-Vazir'>
            <div className="flex items-start gap-3">
                <div className="flex gap-1 w-2/6 flex-row-reverse items-center px-2 border-2 border-gray-200 rounded-lg">
                    <Icons icon={'searchIcon'} />
                    <input className=" py-2 outline-none w-full placeholder-black text-end" type="text" value={Input} placeholder="شهر مورد نظر را اضافه کنید" onChange={InputValue}/>
                    {/* <div>
                        <span>{Input}</span>
                    </div> */}
                </div>
                <div className="w-4/6">
                    <DropDown />
                </div>
            </div>
            <div className="flex gap-4 pt-8"> 
                <div className="flex flex-col items-center">
                    <LocationMarker Input={Input}/>
                </div>
                <div style={{height:'400px'}}>
                    <p className="text-xl font-semibold text-end">املاک اجاره ای</p>
                    <div className="flex justify-between py-4">
                        <button className="border-2 border-gray-200 p-2 rounded-lg flex items-center text-center text-gray-600 justify-center bg-gray-100">
                            <Icons icon={'dropdown'} />
                            <span className="px-2">جدیدترین</span>
                            <Icons icon={"moreIcon"} />
                        </button>
                        <p className="text-red-600"> <span className="pe-2">{count}</span>مورد یافت شد</p>    
                    </div>
                    <div className='grid grid-cols-2 gap-2 '>   
                    {
                    HousesForRent.slice(0,4).map((item,index)=>(
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
                                    <p className=" text-end">{item.address}</p>
                                    <p className=' ps-1 text-end'>،متر{item.meterage} </p> 
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
                
            </div>   
        </div>
        </>
    )
}

export default PropertyRental