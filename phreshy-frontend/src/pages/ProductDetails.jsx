import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../assets/products";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2 className="p-10">Product not found</h2>;
  }

  return (
    <div className="px-10 py-10">
      <div className="flex gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-64"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            {product.name}
          </h2>
          <p className="mb-2">{product.brand}</p>
          <p className="text-pink-500 font-bold mb-4">
            KES {product.price}
          </p>
          <p className="mb-6">{product.description}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-pink-500 text-white px-6 py-3 rounded-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
