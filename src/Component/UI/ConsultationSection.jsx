import {ConsultationSectionList} from "../../core/contence/ConsultationSectionList"
import { Icons } from "./Icon/Icon"

function ConsultationSection(){
    return (
        <>
        <div className='py-6 px-8'>
            <p className='HomePageSectionHeaders text-center'>همه به شما مشاوره می دهند</p>
            <p className="text-lg text-center">اما در سقفینو مشاوران املاک کنار شما می مانند</p>
            <div className="flex w-3/4 justify-between px-6 mx-auto  pt-10 pb-4">
                {
                    ConsultationSectionList.map((item,index)=>(
                        <div key={index} className="py-6 px-2 w-1/5 shadow-sm shadow-gray-400 rounded-2xl">
                           <div className=" mx-auto w-fit">
                               <Icons icon={item.icon} className="mx-auto"/>
                           </div>
                           <p className="text-center pt-2 w-3/4 mx-auto">{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default ConsultationSection