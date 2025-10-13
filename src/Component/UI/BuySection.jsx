import NewestHomesToBuy from'./NewestHomesToBuy'
import AdviceForRent from "./AdviceForRent"
import SuggestedSearches from "./SuggestedSearches"
import TopProperties from "./TopProperties"
import TopConsultants from "./TopConsultants"

function BuySection({getBuyInput,selected}){
    return(
        <>
            <div>
               <NewestHomesToBuy getBuyInput={getBuyInput}/>
               <AdviceForRent />
               <SuggestedSearches />
               <TopProperties getBuyInput={getBuyInput} selected={selected}/>
               <TopConsultants getBuyInput={getBuyInput} selected={selected}/>
            </div> 
        </>
    )
}
export default BuySection