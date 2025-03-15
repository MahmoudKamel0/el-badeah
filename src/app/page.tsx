import Slider from "./components/Slider/Slider";
import OfferAdsLatest from "./components/OfferAdsLatest/OfferAdsLatest";
import SectionCategories from "./components/SectionCategories/SectionCategories";


export default function Home() {
       
       return (
       <>
              <Slider />
              <OfferAdsLatest />

              <SectionCategories title="العقارات" description="جميع الخدمات العقارية" className="mt-14"/>
              <SectionCategories title="العقارات" description="جميع الخدمات العقارية" className="mt-14"/>
              <SectionCategories title="العقارات" description="جميع الخدمات العقارية" className="mt-14"/>
       </>
       )
}
