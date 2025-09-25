import IntroSection from "../../Component/UI/IntroSection"
import AdvertisementSection from "../../Component/UI/AdvertisementSection"
import PropertyIntroductionSection from "../../Component/UI/PropertyIntroductionSection"

function HomePage(){
    return(
        <>
           <div>
               <IntroSection />
               <AdvertisementSection />
               <PropertyIntroductionSection />
           </div>
        </>
    )
}

export default HomePage