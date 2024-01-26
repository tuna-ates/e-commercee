import Brands from "../detail_components/Brands";
import TopWeeks from "../detail_components/TopWeeks";
import Hero from "../detail_components/Hero";
import ProductCards from "../card_components/ProductCards";
import Featured from "../detail_components/Featured";
import Services from "../detail_components/Services";
import FeaturedPosts from "../detail_components/FeaturedPosts";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Brands />
      <TopWeeks />

      <div className="flex w-[100%] flex-col gap-10 items-center justify-center py-20">
        <div className="flex flex-col gap-3 items-center py-8 ">
          <p className="text-[#737373] text-xl">Featured Products</p>
          <p className=" font-bold text-[#252B42] text-2xl">BESTSELLER PRODUCTS</p>
          <p className="text-[#737373]">Problems trying to resolve the conflict between </p>
        </div>
        <div className="flex gap-8 flex-wrap w-[100%] justify-center items-center">
          <ProductCards />
        </div>

        <button className=" font-bold mt-7 hover:opacity-50 py-3 px-8 text-[#23A6F0] border-solid rounded-md border-2 border-[#23A6F0]">LOAD MORE PRODUCTS</button>


      </div>
      <Featured />
      <Services />
      <FeaturedPosts />
    </>
  )
}
export default HomePage;