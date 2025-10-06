import NewestHomesForRent from "./NewestHomesForRent"
import AdviceForRent from "./AdviceForRent"
import SuggestedSearches from "./SuggestedSearches"
import TopProperties from "./TopProperties"


function RentSection(){
    return(
        <>
        <div>
            <NewestHomesForRent />
            <AdviceForRent />
            <SuggestedSearches />
            <TopProperties />
        </div>
        </>
    )
}

export default RentSection