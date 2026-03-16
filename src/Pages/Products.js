import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Products() {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://tse1.mm.bing.net/th/id/OIP.yaxfsfMeCPqMQx-s2FHGRQHaFf?pid=Api&P=0&h=180"
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      image: "https://tse3.mm.bing.net/th/id/OIP.m04Cl5yKkPgWlwDWjfbcLwHaH7?pid=Api&P=0&h=180"
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      image: "https://tse1.mm.bing.net/th/id/OIP.sBTb2yXq7trgKqhjvMLjWgHaHw?pid=Api&P=0&h=180"
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      image: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-keyboard-606761_1280.jpg"
    },
    {
      id: 5,
      name: "Smart Watch",
      price: 7000,
      image: "https://tse4.mm.bing.net/th/id/OIP.YmsD3Gih-BRWaETvycMp4wHaH4?pid=Api&P=0&h=180"
    },
    {
      id: 6,
      name: "Mouse",
      price: 800,
      image: "https://tse2.mm.bing.net/th/id/OIP.T0c0zdTBCKXt2_GPLfpMYgHaFj?pid=Api&P=0&h=180"
    },
    {
      id: 7,
      name: "Monitor",
      price: 12000,
      image: "https://tse2.mm.bing.net/th/id/OIP.NxkzQlvFCUgYYOdxh4iydQHaHY?pid=Api&P=0&h=180"
    },
    {
      id: 8,
      name: "Camera",
      price: 25000,
      image: "https://tse1.mm.bing.net/th/id/OIP.K69sZLEeeGuEsB6_0pRp_AHaHH?pid=Api&P=0&h=180"
    },
    {
      id: 9,
      name: "Charger",
      price: 500,
      image: "https://up.yimg.com/ib/th/id/OIP.pnv5k5F2d0ciCDurAP19jwHaHa?pid=Api&rs=1&c=1&qlt=95&w=103&h=103"
    },
    {
      id: 10,
      name: "Tablet",
      price: 15000,
      image: "https://tse4.mm.bing.net/th/id/OIP.uYI3GBgFFS_FA6vNRrPb8AHaFX?pid=Api&P=0&h=180"
    }
  ];

  return (
    <div className="product-container">
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ objectFit: "cover", marginBottom: "10px" }} 
          />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;






 const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://tse1.mm.bing.net/th/id/OIP.yaxfsfMeCPqMQx-s2FHGRQHaFf?pid=Api&P=0&h=180"
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      image: "https://tse3.mm.bing.net/th/id/OIP.m04Cl5yKkPgWlwDWjfbcLwHaH7?pid=Api&P=0&h=180"
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      image: "https://tse1.mm.bing.net/th/id/OIP.sBTb2yXq7trgKqhjvMLjWgHaHw?pid=Api&P=0&h=180"
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      image: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-keyboard-606761_1280.jpg"
    },
    {
      id: 5,
      name: "Smart Watch",
      price: 7000,
      image: "https://tse4.mm.bing.net/th/id/OIP.YmsD3Gih-BRWaETvycMp4wHaH4?pid=Api&P=0&h=180"
    },
    {
      id: 6,
      name: "Mouse",
      price: 800,
      image: "https://tse2.mm.bing.net/th/id/OIP.T0c0zdTBCKXt2_GPLfpMYgHaFj?pid=Api&P=0&h=180"
    },
    {
      id: 7,
      name: "Monitor",
      price: 12000,
      image: "https://tse2.mm.bing.net/th/id/OIP.NxkzQlvFCUgYYOdxh4iydQHaHY?pid=Api&P=0&h=180"
    },
    {
      id: 8,
      name: "Camera",
      price: 25000,
      image: "https://tse1.mm.bing.net/th/id/OIP.K69sZLEeeGuEsB6_0pRp_AHaHH?pid=Api&P=0&h=180"
    },
    {
      id: 9,
      name: "Charger",
      price: 500,
      image: "https://up.yimg.com/ib/th/id/OIP.pnv5k5F2d0ciCDurAP19jwHaHa?pid=Api&rs=1&c=1&qlt=95&w=103&h=103"
    },
    {
      id: 10,
      name: "Tablet",
      price: 15000,
      image: "https://tse4.mm.bing.net/th/id/OIP.uYI3GBgFFS_FA6vNRrPb8AHaFX?pid=Api&P=0&h=180"
    }
  ];
