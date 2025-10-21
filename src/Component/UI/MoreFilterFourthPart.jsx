import {propertyFilterButtonsList} from '../../core/contence/PropertyFilterButtonsList'
import {MoreFilterFourthPartList} from '../../core/contence/moreFilter'
import { Icons } from './Icon/Icon'

function MoreFilterFourthPart(){
    return(
        <>
            <div className="flex flex-col justify-end pt-4">
               <p p className="text-end font-semibold text-sm py-2">
                   {propertyFilterButtonsList[6].title}
                </p>
                <div className="propertyFilterDiv">
                   {
                        propertyFilterButtonsList[6].subset.map((item,index)=>(
                            <button key={index}>{item}</button>
                        ))
                    }
                </div>
                <div className="flex flex-row-reverse gap-6 justify-center px-2 pt-4 pb-12">
                    {
                        MoreFilterFourthPartList.map((item,index)=>(
                            <div key={index} className="flex flex-col w-1/2">
                                <p className="text-end pb-1 text-sm font-semibold">{item.title}</p>
                                    <button className="MoreFilterBtns"><Icons icon={"dropdown"}/>{item.btn}</button>
                            </div>  
                        ))
                    }
                </div>
                <div className="flex justify-center gap-4 w-11/12 mx-auto">
                   <button className='w-1/2 py-3 border-2 border-gray-100 rounded-md text-sm focus:bg-red-600 focus:border-red-600 focus:text-white'>جستجو</button>
                   <button className='w-1/2 py-3 border-2 border-gray-100 rounded-md text-sm focus:bg-red-600 focus:border-red-600 focus:text-white'>حذف فیلترها</button>
                </div>
            </div>
        </>
    )
}

export default MoreFilterFourthPart