import React, { useEffect } from "react";
import { useCart } from "./CartContext";

const Cart = ({ initialData }) => {
  const { cart, initializeCart, increaseQuantity, decreaseQuantity } =
    useCart();

  useEffect(() => {
    initializeCart(initialData);
  }, []);



  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="col-md-12 bg">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <div style={{ marginTop: "10px" }}>
            <span>
              <img src={item.image} alt="img" />
            </span>
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <div className="d-flex align-items-center justify-content-center ">
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="btn btn-primary me-2"
                  style={{ marginRight: "5px" }}
                >
                  +
                </button>

                {item.quantity}
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="btn btn-primary "
                  style={{ marginLeft: "5px" }}
                >
                  -
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
      <div>
        <strong>Total Quantity:</strong> {totalQuantity}
      </div>
      <div>
        <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
