import { useState,useEffect } from "react";
import axios from "axios";
function Home() {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        async function searchProducts() {
            const response = await axios.get(`https://fakestoreapi.com/products`)
            setProducts(response.data)
        }
        searchProducts();
        
    },[])
    return (
    <div className="p-6">
        {products.map((p)=>(<div key={p.id}>
            {p.title}
        </div>
    ))}
    </div>
  );
}

export default Home;