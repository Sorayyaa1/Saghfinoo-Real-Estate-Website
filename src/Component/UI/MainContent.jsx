import AdvertisementSection from "../../Component/UI/AdvertisementSection"
import PropertyIntroductionSection from "../../Component/UI/PropertyIntroductionSection"
import ConsultationSection from "../../Component/UI/ConsultationSection"
import RealEstateNewsSection from "../../Component/UI/RealEstateNewsSection"
import UseRentBuyHook from "../../Hook/UseRentBuyHook"
import RentSection from "./RentSection"

function MainContent(){
    const{isVisible}=UseRentBuyHook()
    return(
        <>
        <div>
            
            {
            !isVisible && <div>
                            <AdvertisementSection />
                            <PropertyIntroductionSection />
                            <ConsultationSection />
                            <RealEstateNewsSection />
                          </div>
            }
            <div>
                {
                    isVisible && <RentSection />
                } 
            </div>
        </div>
        </>
    )
}

export default MainContent