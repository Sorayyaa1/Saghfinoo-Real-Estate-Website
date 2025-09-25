import {AdvertisementSectionList} from '../../core/contence/AdvertisementSectionList'

function AdvertisementSection(){
    return (
        <>
        <div className='py-10 px-8'>
            <p className='text-2xl font-bold text-end py-8'>سقفینو چطور به خانه دار شدن شما کمک می کند</p>
            <div className='flex flex-row-reverse gap-4'>
              {
                AdvertisementSectionList.map((item,index)=>(
                    <div key={index} className='p-6 items-center justify-center rounded-xl bg-gray-50 border-2 border-gray-100'>
                        <div className='h-40'>
                            <img src={item.imgage} alt="" className='w-full h-full'/>
                        </div>
                        
                        <div className='text-center  pb-10 '>
                            <p className=' py-4 text-lg font-semibold'>{item.title}</p>
                            <p className='text-sm  pb-10 '>{item.description}</p>
                        </div>
                       
                        <button className='text-center text-white w-full bg-red-600 py-1 rounded-lg'>{item.buttonTitle}</button>
                    </div>
                     ))
               } 
            </div>
        </div>
        
        </>
    )
}

export default AdvertisementSection