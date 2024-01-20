import Brands from "../detail_components/Brands";
import TopWeeks from "../detail_components/TopWeeks";
import Hero from "../detail_components/Hero";
import ProductCards from "../card_components/ProductCards";

const HomePage=()=>{
  return(
    <>
    <Hero/>
    <Brands/>
     <TopWeeks/>
     <ProductCards/>
    </>
  )
}
export default HomePage;