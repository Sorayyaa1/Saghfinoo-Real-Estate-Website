import { Icons } from "./Icon/Icon"
import {propertyFilterButtonsList} from "../../core/contence/PropertyFilterButtonsList"
import UsePropertyFilterHook from '../../Hook/UsePropertyFilterHook'

function PropertyFilter(){

    const{close,closePopup}=UsePropertyFilterHook()
    return(
        <>
        { 
           close &&
        <div  className='font-Vazir flex flex-col items-end shadow-md shadow-slate-200 rounded-xl'>
            <div className="w-1/2 flex justify-between items-center pe-2 py-4">
                <p className="font-semibold">فیلترها</p>
                <button onClick={closePopup}>
                    <Icons icon={'remove'} />
                </button>
            </div>
            <div className="flex flex-col justify-end pb-4 bg-gray-100 p-2">
                {
                    propertyFilterButtonsList.map((item,index)=>(
                        <div key={index}>
                            <p className="text-end font-semibold text-xs py-2">{item.title}</p>
                            <div className=" propertyFilterDiv">
                            {
                                item.subset.map((item,index)=>(
                                   <button key={index}>{item}</button>
                                ))
                            }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="filter-search">
                <button>جستجو</button>
                <button>حذف فیلترها</button>
            </div>
        </div>
       } 
        </>
    )
}

export default PropertyFilter