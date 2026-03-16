import { useState,useEffect } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-container">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <h4>{p.title}</h4>
          <img src={p.image} width="100" alt={p.title} />
          <p className="price">Price: ${p.price}</p>
          <Link to={`/products/${p.id}`}><button>View Details</button></Link>
          <button
            onClick={() =>
              setCart((prev,p) => {
                if (!Array.isArray(prev)) return [p]; 
                return [...prev, p];
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
export default Products;