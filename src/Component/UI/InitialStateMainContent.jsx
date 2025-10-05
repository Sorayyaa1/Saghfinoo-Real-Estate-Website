import AdvertisementSection from "../../Component/UI/AdvertisementSection"
import PropertyIntroductionSection from "../../Component/UI/PropertyIntroductionSection"
import ConsultationSection from "../../Component/UI/ConsultationSection"
import RealEstateNewsSection from "../../Component/UI/RealEstateNewsSection"

function InitialStateMainContent(){
    return(
        <>
        <div>
            <AdvertisementSection />
            <PropertyIntroductionSection />
            <ConsultationSection />
            <RealEstateNewsSection />
        </div>
        </>
    )
}

export default InitialStateMainContent