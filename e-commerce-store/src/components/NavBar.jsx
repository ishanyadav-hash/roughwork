import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        🛍️ My Store
      </h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>

        <Link to="/cart">
          🛒 Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;