import {footerinfo} from '../../core/contence/SaghfinooFooterInfo'
import {serviceFooterLinks} from '../../core/contence/SaghfinooServicesFooter'
import { Icons } from './Icon/Icon'


function Footer(){
    return(
        <>
        <div className='pt-6 px-8 bg-gray-100'>
            <p className="HomePageSectionHeaders text-center pb-6">سقفینو؛ سقفی ایده آل برای زندگی</p>
            <div className='flex flex-row-reverse justify-between w-10/12 mx-auto border-b-2 border-gray-300 pb-6 px-8'>
                {
                 footerinfo.slice(0,3).map((item,index)=>(
                    <div key={index} className='flex flex-col justify-end gap-1'>
                        <p className='font-semibold pb-4 text-end text-sm'>{item.title}</p>
                        <div className='flex flex-col gap-1 '>
                            {
                                item.Subset.slice(0,3).map((item,index)=>(
                                    <p key={index} className='text-gray-500 text-end text-sm'>{item}</p>
                                ))
                            }
                        </div>
                        <button> <span className='flex items-center justify-end text-sm text-red-700 '> <Icons icon={'dropdown'} />مشاهده بیشتر </span></button>
                    </div>
                    
                 ))
                }
                <div>
                    {
                        footerinfo.slice(3).map((item)=>(
                            <div>
                                <p className='font-semibold pb-4 text-end text-sm'>{item.title}</p>
                                <div className='flex flex-col gap-1'>
                                    {
                                        item.Subset.map((item,index)=>(
                                            <div key={index} className='flex gap-2 justify-end'>
                                                <p className='text-sm text-gray-500'>{item.title}</p>
                                                <Icons icon={item.icon} />       
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>  
                        ))
                    }
                </div>
            </div>
            

            
            <div className='flex  w-10/12 mx-auto py-6 px-6 justify-between'>
                   {
                    serviceFooterLinks.map((item,index)=>(
                        <div key={index}>
                            <p className='font-semibold pb-4 text-end text-sm'>{item.title}</p>
                            <div>
                                {
                                    item.subset.map((item,index)=>(
                                        <p key={index} className='text-gray-500 text-end text-sm'>{item}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                   }
                
                    <div className='flex flex-col justify-end text-end w-1/5 '>
                        <div className='flex justify-end'>
                            <Icons icon={'saghfinooLogo'}/>
                        </div>
                        <p className='py-4 text-sm '>تجربه لذت خانه دار شدن سریع و آسان</p>
                        <p className='text-sm text-gray-500'>سقفینو پلی است تا به سرعت در یبن هزاران آگهی ثبت شده جست و جو کنید.</p>
                        <p className='text-sm text-gray-500 pt-1'>ملک مورد نظر را پیدا کنید و برای انجام معامله ای مطمئن، با مشاورین املاک معتمد و متخصص شهرتان در ارتباط باشید.</p>
                    </div>
            </div>
            <div className='w-1/2 mx-auto'>
                <img src="/illustarion 2 1.png" alt="" />
            </div>
            
        </div>
        <div className='bg-gray-200 py-3'>
                <p className='text-sm text-gray-500 text-center'>حقوق این سایت متعلق به سقفینو است.</p>
        </div>
        
        </>
    )
}

export default Footer