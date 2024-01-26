import CategoryCard from "../card_components/CategoryCard";
import CategoryCards from "../card_components/CategoryCards";
import ProductCards from "../card_components/ProductCards";
import Pagination from "../detail_components/Pagination";
import ProductListPageHeader from "../detail_components/ProductListPageHeader";
import ProductListSearchHeader from "../detail_components/ProductListSearchHeader";

const ProductListPage = () => {
    return (
    <>
    <ProductListPageHeader/>
     <CategoryCards/>
   <ProductListSearchHeader/>
   <div className="flex gap-8 flex-wrap w-[100%] justify-center items-center">
                <ProductCards/>
                <Pagination/>
     </div>
    
    </>
        
    )
}
export default ProductListPage;