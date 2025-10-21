import {Icons} from "../UI/Icon/Icon"
import {regionPropertyTypeBtn,priceMeterage} from "../../core/contence/moreFilter"
import UsePropertyFilterHook from '../../Hook/UsePropertyFilterHook'
import MoreFilterSecondPart from "./MoreFilterSecondPart"

function MoreFilter(){
    const{closeMoreFilter,closeMoreFilterPopup,
        openMoreFilterSecondPart,moreFilterSecondPart
        }=UsePropertyFilterHook()

    return(
        <>
        {
            closeMoreFilter &&
            <div className="Vazir flex flex-col py-4 shadow-md shadow-slate-200 rounded-xl">
                <div className="ps-16">
                    <button onClick={closeMoreFilterPopup}>
                       <Icons icon={'remove'}/>
                    </button>
                    <div className="w-fit mx-auto pb-8">
                        <Icons icon={'saghfinooLogo'} />
                    </div>
                </div>
                <div className="flex gap-6 justify-center px-2 py-4">
                    {
                        regionPropertyTypeBtn.map((item,index)=>(
                          <div key={index} className="flex flex-col w-2/5">
                            <p className="text-end pb-1 text-sm font-semibold">{item.title}</p>
                            <button className="MoreFilterBtns"><Icons icon={"dropdown"}/>{item.btn}</button>
                          </div>  
                        ))
                    }
                </div>
                <div className="py-4 px-2">
                    {
                        priceMeterage.map((item,index)=>(
                            <div>
                               <p className="text-end font-semibold text-sm px-14 pb-1">{item.title}</p>
                                <div key={index} className="flex gap-6 justify-center pb-2">
                                    <div className="InternalDiv">
                                        <p className="Tooman-metr">{item.unit}</p>
                                        <input type="text" placeholder="مثلا ۱۰۰.۰۰۰.۰۰۰" className="outline-none placeholder-gray-400 py-1"/>
                                        <p className="from-to">{item.to}</p>
                                    </div>
                                    <div className="InternalDiv">
                                        <p className="Tooman-metr">{item.unit}</p>
                                        <input type="text"  placeholder="مثلا ۱۰۰.۰۰۰.۰۰۰" className="outline-none placeholder-gray-400 py-1"/>
                                        <p className="from-to">{item.from}</p>
                                    </div> 
                                </div> 
                            </div>
                        ))
                    }
                </div> 
                <div>
                    <button className="flex w-fit mx-auto text-red-600" onClick={moreFilterSecondPart}>
                       <Icons icon={'dropdown'} />
                       مشاهده بیشتر   
                    </button>
                    {
                     openMoreFilterSecondPart &&
                        <MoreFilterSecondPart />
                    }
                </div>       
        </div>
}
        </>
    )
}

export default MoreFilter