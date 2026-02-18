import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-full object-contain mb-4"
      />

      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.brand}</p>
      <p className="text-pink-600 font-bold mt-2">KES {product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
          View Product
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
