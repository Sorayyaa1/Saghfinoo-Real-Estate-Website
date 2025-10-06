import NewestHomesForRent from "./NewestHomesForRent"
import AdviceForRent from "./AdviceForRent"
import SuggestedSearches from "./SuggestedSearches"
import TopProperties from "./TopProperties"
import TopConsultants from "./TopConsultants"

function RentSection(){
    return(
        <>
        <div>
            <NewestHomesForRent />
            <AdviceForRent />
            <SuggestedSearches />
            <TopProperties />
            <TopConsultants />
        </div>
        </>
    )
}

export default RentSection