import {Link} from 'react-router-dom'
import {suggestedSearchesList} from "../../core/contence/SuggestedSearchesList"

function SuggestedSearches(){
    return(
        <>
        <div className='py-6 px-8 font-Vazir'>
            <p className="HomePageSectionHeaders pb-6">جستجوهای پیشنهادی</p>
            <div className="grid grid-cols-6 gap-1 justify-center" >
                {
                    suggestedSearchesList.map((item,index)=>(
                        <Link key={index} to="" className="text-end text-gray-600 p-2">{item}</Link>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default SuggestedSearches