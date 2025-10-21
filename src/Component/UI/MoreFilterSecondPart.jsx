import {MoreFilterSecondPartList} from "../../core/contence/moreFilter"
import { Icons } from "./Icon/Icon"
import UsePropertyFilterHook from "../../Hook/UsePropertyFilterHook"
import MoreFilterThirdPart from './MoreFilterThirdPart'

function MoreFilterSecondPart(){
    
    const{openMoreFilterThirdPart,moreFilterThirdPart}=UsePropertyFilterHook()
    return(
        <>
        <div className="flex flex-col justify-end pb-4 px-16">
            <div className="pb-6">
                {
                    MoreFilterSecondPartList.map((item,index)=>(
                        <div key={index}>
                            <p className="text-end font-semibold text-sm py-2">{item.title}</p>
                            <div className="propertyFilterDiv">
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
           <div>
                <button className="flex w-fit mx-auto text-red-600" onClick={moreFilterThirdPart}>
                    <Icons icon={'dropdown'} />
                    مشاهده بیشتر   
                </button>
                    {
                        openMoreFilterThirdPart &&
                        <MoreFilterThirdPart />
                    }
            </div>       
        </div>
        </>
    )
}

export default MoreFilterSecondPart