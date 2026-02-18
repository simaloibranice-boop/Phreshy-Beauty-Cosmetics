import products from "../assets/products";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-3xl font-bold mb-10">Shop</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
