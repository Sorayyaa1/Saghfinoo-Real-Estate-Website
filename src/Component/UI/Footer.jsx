import {Link} from 'react-router-dom'
import {footerinfo} from '../../core/contence/SaghfinooFooterInfo'
import {serviceFooterLinks} from '../../core/contence/SaghfinooServicesFooter'
import { Icons } from './Icon/Icon'
import UseFooterHook from '../../Hook/UseFooterHook'

function Footer(){
    const{ShowMoreBtn1,ShowMoreBtn2,ShowMoreBtn3,isVisible,Display,preview}=UseFooterHook()

    return(
        <>
        <div className='pt-6 px-8 bg-gray-100'>
            <p className="HomePageSectionHeaders text-center pb-6">سقفینو؛ سقفی ایده آل برای زندگی</p>
            <div  className=' w-10/12 mx-auto border-b-2 border-gray-300 pb-6 '>
                <div className='grid grid-cols-4 gap-4 px-8 w-11/12'>
                   <div className='flex flex-col gap-2'>
                       <p className='footerInfoTitles'>{footerinfo[0].title}</p>
                        {footerinfo[0].Subset.map((item,index)=>(
                            <div key={index} className='flex gap-2 justify-end'>
                                <Link className='footerInfoSubset'>{item.title}</Link>
                                <Icons icon={item.icon} />
                            </div>
                        ))
                        }
                   </div>
                   <div className='footerInfoSubsetcontainer '>
                        <p className='footerInfoTitles'>{footerinfo[1].title}</p>
                         {
                            isVisible ? (
                                <div className='footerInfoSubsetcontainer'>
                                    {
                                    footerinfo[1].Subset.slice(0,3).map((item,index)=>(
                                        <div key={index}>
                                            <Link className='footerInfoSubset'>{item}</Link>
                                        </div>
                                    ))
                                    }
                                        <button onClick={ShowMoreBtn1}><span className='footerInfoButton'><Icons icon={'dropdown'}/>مشاده بیشتر</span></button>
                                </div>
                               
                           ) : (
                                <div className='footerInfoSubsetcontainer'>
                                    {
                                    footerinfo[1].Subset.map((item,index)=>(
                                        <div key={index}>
                                            <Link className='footerInfoSubset'>{item}</Link>
                                        </div>
                                    ))
                                    }
                                       <button onClick={ShowMoreBtn1}><span className='footerInfoButton'><Icons icon={'dropdown2'}/>مشاده کمتر</span></button>
                                </div>
                               
                           )
                         }    
                   </div>
                   <div className='footerInfoSubsetcontainer'>
                       <p className='footerInfoTitles'>{footerinfo[2].title}</p>
                        {
                            Display ? (
                                <div className='footerInfoSubsetcontainer'>
                                    {
                                    footerinfo[2].Subset.slice(0,3).map((item,index)=>(
                                        <div key={index}>
                                            <Link className='footerInfoSubset'>{item}</Link>
                                        </div>
                                    ))
                                    }
                                       <button onClick={ShowMoreBtn2}><span className='footerInfoButton'><Icons icon={'dropdown'}/>مشاده بیشتر</span></button>   
                                </div>   
                            ) : (
                                <div className='footerInfoSubsetcontainer'>
                                    {
                                    footerinfo[2].Subset.map((item,index)=>(
                                        <div key={index}>
                                           <Link className='footerInfoSubset'>{item}</Link>
                                        </div>
                                   ))
                                    }
                                        <button onClick={ShowMoreBtn2}><span className='footerInfoButton'><Icons icon={'dropdown2'}/>مشاده کمتر</span></button> 
                                </div>   
                            )  
                        }  
                   </div>
                   <div className='footerInfoSubsetcontainer'>
                       <p className='footerInfoTitles'>{footerinfo[3].title}</p>
                       {
                        preview ? (
                                <div className='footerInfoSubsetcontainer'>
                                    {
                                    footerinfo[3].Subset.slice(0,3).map((item,index)=>(
                                        <div key={index}>
                                            <Link className='footerInfoSubset'>{item}</Link>
                                        </div>
                                    ))
                                    }
                                        <button onClick={ShowMoreBtn3}><span className='footerInfoButton'><Icons icon={'dropdown'}/>مشاده بیشتر</span></button>
                                    </div>      
                        ) : (
                            <div className='footerInfoSubsetcontainer'>
                                {
                                footerinfo[3].Subset.map((item,index)=>(
                                    <div key={index}>
                                        <Link className='footerInfoSubset'>{item}</Link>
                                    </div>
                                ))
                                }
                                    <button onClick={ShowMoreBtn3}><span className='footerInfoButton'><Icons icon={'dropdown2'}/>مشاده کمتر</span></button>
                            </div>
                        )   
                        }
                   </div>    
               </div>
            </div>
            

            <div className=' w-10/12 mx-auto py-6 '>
                <div className='grid grid-cols-4 gap-6 px-8 w-11/12'>
                   {
                    serviceFooterLinks.map((item,index)=>(
                        <div key={index}>
                            <p className='footerInfoTitles'>{item.title}</p>
                            <div className='flex flex-col gap-2'>
                                {
                                    item.subset.map((item,index)=>(
                                        <Link key={index} className='footerInfoSubset'>{item}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                   }
                
                    <div className='flex flex-col justify-end text-end'>
                        <div className='flex justify-end'>
                            <Icons icon={'saghfinooLogo'}/>
                        </div>
                        <p className='text-end text-xs font-semibold py-3 '>تجربه لذت خانه دار شدن سریع و آسان</p>
                        <p className='footerInfoSubset'>سقفینو پلی است تا به سرعت در یبن هزاران آگهی ثبت شده جست و جو کنید.</p>
                        <p className='footerInfoSubset'>ملک مورد نظر را پیدا کنید و برای انجام معامله ای مطمئن، با مشاورین املاک معتمد و متخصص شهرتان در ارتباط باشید.</p>
                    </div>
            
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