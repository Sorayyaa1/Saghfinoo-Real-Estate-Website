import {useState } from "react"
import PropertyRental from '../../Component/UI/PropertyRental'
import AssociatedRealEstateOffice from '../../Component/UI/AssociatedRealEstateOffice'
import MoreHomeForRent from '../../Component/UI/MoreHomeForRent'
import RelatedProperties from '../../Component/UI/RelatedProperties'
import ListOfHousesAvailableForRent from '../../Component/UI/ListOfHousesAvailableForRent'
import Paginations from "../../Component/UI/Pagination"

function RentPage(){

    const[Input,setInput]=useState("تهران")
    
        function InputValue(e){
            setInput(e.target.value)
        }

    return(
        <>
        <div>
            <PropertyRental Input={Input} InputValue={InputValue}/>
            <AssociatedRealEstateOffice/>
            <MoreHomeForRent Input={Input} InputValue={InputValue}/>
            <RelatedProperties />
            <ListOfHousesAvailableForRent />
            <Paginations Input={Input}/>
        </div>
        </>
    )
}

export default RentPage