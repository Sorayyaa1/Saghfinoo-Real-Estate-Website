import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import {HousesForRent} from '../../core/contence/HomesForRent'
import {Icons} from '../../Component/UI/Icon/Icon'
import HomeLocation from "../../Component/UI/HomeLocation"
import {topConsultantsList} from '../../core/contence/TopConsultantsList'

function HomeDetails(){
    const{HomeId}=useParams()
    const home=HousesForRent.find(home=>home.id===parseInt(HomeId))
    const numderAdViews=Math.ceil(Math.random()*(30-10)+10)
    const numberAdSave=Math.ceil(Math.random()*10)
    const ItemCategory=home.category
    const categoryList=HousesForRent.filter((item)=>item.category===ItemCategory)
  
    
    return(
        <>
        <div className="font-Vazir py-6 px-8">
            <div className="flex">
                <div className="row-span-2">
                    <img src={home.morePic[0]} alt="" />
                </div>
                <div className="flex">
                  <img src={home.morePic[1]} alt="" />
                  <img src={home.morePic[2]} alt="" />
                </div>
                <div className="flex">
                  <img src={home.morePic[3]} alt="" />
                  <img src={home.morePic[4]} alt="" />
                </div>
            </div>
            <div className="flex py-1 w-1/2 mx-auto justify-center">
                <Icons icon={'marked'} className="fill-black " />
                <Icons icon={'sending'} className="fill-red-500"/>
            </div>
            <p className='text-gray-400 text-sm py-2 text-end'>رهن و اجاره آپارتمان <span></span></p>
            <div className="flex gap-2 pt-2 pb-4 font-semibold text-sx justify-end">
                <p>{home.address}</p>
                <p>،{home.areaMeasurementUnit}</p>
                <p>{home.meterage}</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="Profile">
                    <div className="grid grid-cols-3 gap-4 border-2 border-gray-100 rounded-lg w-3/4">
                        {
                        <div className="col-span-2 flex flex-col items-end gap-3 px-2 py-4">
                            <div>
                                <img src={topConsultantsList[0].propertyImage} alt="" />
                                <p>{topConsultantsList[0].company}</p>
                            </div>
                           <p className="text-xl font-semibold">{topConsultantsList[0].name}</p>
                           <div className="flex gap-1">
                               <p>۵</p>
                               <p>از</p>
                               <p>{topConsultantsList[0].rating}</p>
                               <p>امتیاز</p>
                           </div>
                           <div className="flex gap-1">
                            <p>آگهی فعال</p>
                            <p>{topConsultantsList[0].numberActiveAds}</p>
                           </div>
                           <button className="bg-red-600 text-white w-full rounded-md py-2">اطلاعات تماس</button>
                        </div>  
                        }
                        <div className="py-4">
                        {
                           <img src={topConsultantsList[0].image} alt=""/>
                        }
                        </div>
                    </div> 
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-4 pt-2 pb-4 justify-end">
                        <div className="py-4 px-6 bg-gray-100 rounded-xl font-semibold">
                            <div className="flex gap-1">
                                <p>متراژ</p>
                               <Icons icon={'meterageIcon'}/>
                            </div>
                            <div className="flex gap-2 font-semibold py-2">
                                <p className="font-semibold text-sm text-center">{home.areaMeasurementUnit}</p>
                                <p  className="font-semibold text-sm text-center">{home.meterage}</p>
                            </div>
                        </div>
                        <div className="py-4 px-6 bg-gray-100 rounded-xl">
                           <div className="flex gap-1">
                               <p className="font-semibold">اتاق</p>
                               <Icons icon={'lampshade'}/>
                           </div>
                           <div className="flex gap-2 font-semibold text-sm text-center py-2">
                               <p> خواب</p>
                               <p>{home.numberRoom}</p>
                           </div>
                        </div>
                        <div className="py-4 px-6 bg-gray-100 rounded-xl">
                            <div className="flex gap-2">
                               <p className="font-semibold">طبقه</p>
                               <Icons icon={'building'}/>
                            </div>
                            <div className="flex gap-2 font-semibold text-sm py-2">
                               <p>{home.floor}</p>
                               <p>از</p>
                               <p>{home.desiredFloor}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between p-2 border-2 border-gray-100 rounded-xl">
                            <div className="flex gap-1">
                               <p>میلیون</p>
                               <p>{home.mortgagePrice}</p>
                            </div>
                           <p className="font-semibold">ودیعه</p>
                        </div>
                        <div className="flex justify-between p-2 border-2 border-gray-100 rounded-xl">
                            <div className="flex gap-1">
                               <p>میلیون</p>
                               <p>{home.rentalPrice}</p>
                            </div>
                            <p className="font-semibold">اجاره ماهیانه</p>
                        </div>
                        <div className="flex justify-between p-2 border-2 border-gray-100 rounded-xl">
                            <div className="flex gap-2">
                                <p>گزارش تخلف آگهی</p>
                                <Icons icon={'warnIcon'} />
                            </div>
                            <div className="flex flex-col gap-2">
                               <p className="text-end">ساعاتی پیش <span>{home.id}</span></p>
                               <p> شناسه آگهی <span>{home.AdID}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <p className="homeDetailsTitle">امکانات</p>
                        <div className="homeFacilities grid grid-cols-2 gap-3">
                            <div>
                               <p>{home.WC.count}</p>
                                <div>
                                    <p>:{home.WC.title}</p>
                                    <Icons icon={home.WC.icon} />
                                </div>
                            </div>
                            <div>
                                <p>{home.parking.count}</p>
                                <div>
                                    <p>:{home.parking.title}</p>
                                    <Icons icon={home.parking.icon} />
                                </div>
                            </div>
                            <div>
                                <p>{home.ToiletType.Type}</p>
                                <div>
                                   <p>:{home.ToiletType.title}</p>
                                   <Icons icon={home.ToiletType.icon} />
                                </div>
                            </div>
                            <div>
                                <p>{home.sroreRoom.count}</p>
                                <div>
                                    <p>:{home.sroreRoom.title}</p> 
                                    <Icons icon={home.sroreRoom.icon} />
                                </div>
                            </div>
                            <div>
                                <p>{home.coolingSystem.type}</p>
                                <div>
                                    <p>:{home.coolingSystem.title}</p>
                                    <Icons icon={home.coolingSystem.icon} />
                                </div>
                            </div>
                            <div>
                                <p>{home.elevator.count}</p>
                                <div>
                                    <p>:{home.elevator.title}</p>
                                    <Icons icon={home.elevator.icon} />
                                </div>
                            </div>
                            <div>
                                <p>{home.heatingSystem.type}</p>
                                <div>
                                    <p>:{home.heatingSystem.title}</p> 
                                    <Icons icon={home.heatingSystem.icon} />
                                </div>
                            </div>
                            <div>
                                <p>{home.floorMaterial.material}</p>
                                <div>
                                    <p>:{home.floorMaterial.title}</p>
                                    <Icons icon={home.floorMaterial.icon} />
                                </div>
                            </div> 
                        </div> 
                    </div>
                    <div>
                        <p className="homeDetailsTitle">توضیحات</p>
                        <div className="homeFacilities flex flex-col gap-3">
                            <div className="flex gap-2">
                                <p>{home.ageBuilding.value}</p>
                                <p>:{home.ageBuilding.title}</p>
                            </div>
                            <div>
                                <p>{home.geographicalLocation.value}</p>
                                <p>:{home.geographicalLocation.title}</p>
                            </div>
                            <div>
                                <p>{home.documentType.value}</p>
                                <p>:{home.documentType.title}</p>
                            </div>
                            <div>
                                <p>{home.securityFacility.value}</p>
                                <p>:{home.securityFacility.title}</p>
                            </div>
                            <div>
                                <p>{home.otherFacility.value}</p>
                                <p>:{home.otherFacility.title}</p>
                            </div>
                            <p className="text-end">زمان بازدید 
                                <span className="px-1">7</span>
                                صبح تا 
                                <span className="px-1">11</span>
                                شب
                                </p>
                        </div>
                    </div>
                    <div>
                        <p className="homeDetailsTitle">موقعیت</p>
                        <div>
                            <HomeLocation />
                        </div>
                    </div>
                    <div className="AdInfo">
                        <p>
                            تعداد ذخیره این آگهی:
                            <span>{numberAdSave}</span>
                        </p>
                        <p className=" border-s-2 border-e-2 border-gray-200">
                            تعدادمشاهده این آگهی:
                            <span>{numderAdViews}</span>
                        </p>
                        <p>زمان ثبت آگهی:
                            <span>{home.uploadTime}</span>
                            <span>ساعت پیش</span> 
                        </p>
                    </div>
                    <div className=" flex gap-4 justify-end">
                        <div className="flex gap-3">
                           <Icons icon={'like'} />
                           <Icons icon={'unlike'} />
                        </div>
                        <p>بازخورد شما درباره این آگهی چیست؟</p>
                    </div>
                </div>
            </div>
           <div className="pt-8">
                        <p className="homeDetailsTitle">آگهی های مشابه</p>
                        <div className="grid grid-cols-3 gap-2">
                           {
                            categoryList.slice(0,3).map((item,index)=>(
                                <div key={index} className='rounded-xl border-2 border-gray-100'>
                                    <div className='min-h-9'>
                                        <Link to={`/rent/${item.id}`}><img src={item.image} alt="" className='rounded-t-xl'/></Link>
                                       <p className='bg-inherit text-white p-1 absolute z-10 top-2 left-2'> ساعت پیش <span>{item.uploadTime}</span></p>    
                                    </div>
                                    <div className='px-2 py-4 min-h-20'>
                                    <div className='flex justify-between py-1'>
                                        <Icons icon={'marked'} />
                                        <p className='text-gray-400 text-sm'>رهن و اجاره آپارتمان <span>{}</span></p>
                                    </div>
                                    <div className="flex text-gray-600 justify-end">
                                       <p className=" text-end">{item.address}</p>
                                       <p className="px-1">،{item.areaMeasurementUnit}</p>
                                       <p className=' ps-1 text-end'>{item.meterage} </p> 
                                    </div>
                                    <div className='flex flex-col items-end font-semibold'>
                                        <div className="flex gap-1">
                                            <p>تومان</p>
                                            <p>{item.mortgagePrice} رهن</p>
                                        </div>
                                        <div className="flex gap-1">
                                            <p>تومان</p>
                                            <p>{item.rentalPrice} اجاره</p>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                            ))
                           } 
                        </div>
                    </div>
        </div>
        </>
    )
}

export default HomeDetails