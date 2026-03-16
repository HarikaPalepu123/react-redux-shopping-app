import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart Page</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} width="80" />
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            {item.quantity}
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

            <br />

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
}

export default Cart;