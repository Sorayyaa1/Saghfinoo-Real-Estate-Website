import {PropertyRentalBtns} from "../../core/contence/PropertyRental"
import DropDown from "./DropdownMenu"
import { Icons } from "./Icon/Icon"
import LocationMarker from "./Location"

function PropertyRental({getRentInput,getBuyInput,selected}){
    return(
        <>
        <div className='py-8 px-8 font-Vazir'>
            <div className="flex items-start gap-3">
                <div className="flex gap-1 w-2/6 flex-row-reverse items-center px-2 border-2 border-gray-200 rounded-lg">
                    <Icons icon={'searchIcon'} />
                    <input className=" py-2 outline-none w-full placeholder-black text-end" type="text" value={getRentInput} placeholder="شهر مورد نظر را اضافه کنید" />
                    <div className="text-black">
                        {
                        selected==="RentingHome" &&
                            <span>{getRentInput}</span>
                        }
                        {
                        selected==="BuyingHome" && 
                            <span>{getBuyInput}</span>
                        }
                    </div>
                </div>
                <div className="w-4/6">
                    <DropDown />
                </div>
            </div>
            <div className="flex gap-4">
                <div>
                    <LocationMarker />
                </div>
                <div>

                </div>    
            </div>
            
        </div>
        </>
    )
}

export default PropertyRental