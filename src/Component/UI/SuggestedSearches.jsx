import {Link} from 'react-router-dom'
import {suggestedSearchesList} from "../../core/contence/SuggestedSearchesList"

function SuggestedSearches(){
    return(
        <>
        <div className='py-6 px-8 font-Vazir flex flex-col items-end'>
            <p className="HomePageSectionHeaders pb-6">جستجوهای پیشنهادی</p>
            <div className="w-10/12 grid grid-cols-6" >
                {
                    suggestedSearchesList.map((item,index)=>(
                        <Link key={index} to="" className="text-end text-lg text-gray-600 p-2">{item}</Link>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default SuggestedSearches