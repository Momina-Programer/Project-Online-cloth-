import ProductCard from "./ProductCard"

const ProductList = () => {
    return (
      <main className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProductCard />
        <ProductCard />
        <ProductCard />
</main>
  
    
    
    );
  };
  
  export default ProductList