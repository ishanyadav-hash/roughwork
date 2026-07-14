import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="mb-6">
        <input
        type="text"
        placeholder="Search products..."
        className="w-full border rounded-lg px-4 py-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <h2 className="text-xl font-bold mb-4">Cart: {cart.length}</h2>
        <button onClick={() => navigate("/cart")}>Go to Cart</button>
      {products.filter((product) =>product.title.toLowerCase().includes(search.toLowerCase())).map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-xl p-4 flex flex-col h-full">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain"
          />

          <h2 className="font-bold mt-4 line-clamp-2 min-h-12">
            {product.title}
          </h2>

          <p className="text-lg font-semibold mt-2">
            ${product.price}
          </p>

          <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-blue-600">
            Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;