import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

function ShopPage() {
  const { products } = useContext(ProductContext);

  return (
    <div className="shop-products">
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ShopPage;