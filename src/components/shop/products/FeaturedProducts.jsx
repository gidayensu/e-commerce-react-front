import { useSelector } from "react-redux";
import ProductsLayout from "./ProductsLayout";

function FeaturedProducts () {
    const {products} = useSelector(state=>state.products);
    const featuredProducts = products.filter((product)=> product.discountPercentage > 17);
    
    return (
        <ProductsLayout productsData={featuredProducts}/>
    );
}

export default FeaturedProducts;