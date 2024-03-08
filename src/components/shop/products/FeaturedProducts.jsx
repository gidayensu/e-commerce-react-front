import { useSelector } from "react-redux";
import ProductsUI from "./ProductsUI";

function FeaturedProducts () {
    const {products} = useSelector(state=>state.products);
    const featuredProducts = products.filter((product)=> product.discountPercentage > 17);
    
    return (
        <ProductsUI productsData={featuredProducts}/>
    );
}

export default FeaturedProducts;