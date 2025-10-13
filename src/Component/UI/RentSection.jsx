import NewestHomesForRent from "./NewestHomesForRent"
import AdviceForRent from "./AdviceForRent"
import SuggestedSearches from "./SuggestedSearches"
import TopProperties from "./TopProperties"
import TopConsultants from "./TopConsultants"

function RentSection({getRentInput,selected}){
    return(
        <>
        <div>
            <NewestHomesForRent getRentInput={getRentInput}/>
            <AdviceForRent />
            <SuggestedSearches />
            <TopProperties getRentInput={getRentInput} selected={selected}/>
            <TopConsultants getRentInput={getRentInput} selected={selected}/>
        </div>
        </>
    )
}

export default RentSection