import {PropertyIntroductionSectionList} from "../../core/contence/PropertyIntroductionSectionList"

function PropertyIntroductionSection(){
    return(
        <>
        <div className='py-10 px-8'>
            <p className="HomePageSectionHeaders">در سقفینو به دنبال چه ملکی هستید</p>
            <div className=" flex flex-row-reverse gap-2">
               {
                PropertyIntroductionSectionList.map((item,index)=>(
                    <div key={index} className="bg-gray-50 rounded-xl border-2 border-gray-100">
                        <div>
                            <img src={item.image} alt="" className="rounded-t-xl"/>
                        </div>
                        <div>
                            <p className="text-center pt-4 pb-1">{item.price}</p>
                            <p className="text-center pb-10">{item.title}</p>
                        </div>
                    </div>
                ))
               }
            </div>
        </div>
        </>
    )
}

export default PropertyIntroductionSection