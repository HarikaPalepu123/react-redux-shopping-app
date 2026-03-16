import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Productdetails({setCart}) {

  const { id } = useParams();    
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>

      <h3>{product.title}</h3>

      <img src={product.image} alt={product.title} width="200" />

      <p><b>Price:</b> ${product.price}</p>

      <p><b>Description:</b> {product.description}</p>

      <p><b>Category:</b> {product.category}</p>
       <button style={{backgroundColor:"#28a745",
        color:"white",padding:"10px",border:"none",borderRadius:"5px",cursor:"pointer"
       }}
            onClick={() =>
              setCart((prev) => {
                if (!Array.isArray(prev)) return [product]; 
                return [...prev, product];
              })
            }
          >
            Add to Cart
          </button>

    </div>
  );
}

export default Productdetails;