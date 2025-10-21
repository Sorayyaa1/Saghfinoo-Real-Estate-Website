import {MoreFilterThirdPartList} from '../../core/contence/moreFilter'
import MoreFilterFourthPart from './MoreFilterFourthPart'
import UsePropertyFilterHook from '../../Hook/UsePropertyFilterHook'
import { Icons } from './Icon/Icon'

function MoreFilterThirdPart(){
    const{openMoreFilterFourthPart,moreFilterFourthPart}=UsePropertyFilterHook()
    
    return(
        <>
        <div className="flex flex-col justify-end py-4">
            {
                MoreFilterThirdPartList.map((item,index)=>(
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
        <div className='pb-4'>
            <button className="flex w-fit mx-auto text-red-600" onClick={moreFilterFourthPart}>
                <Icons icon={'dropdown'} />
                مشاهده بیشتر   
            </button>
                {
                    openMoreFilterFourthPart &&
                        <MoreFilterFourthPart />
                }
        </div>
        </>
    )
}

export default MoreFilterThirdPart