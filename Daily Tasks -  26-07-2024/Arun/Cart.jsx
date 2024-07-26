import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <div>
      {cart.length !== 0 ? (
        <div>
          {cart.map((item) => {
            <p key={item.id}>{JSON.stringify(item)}</p>;
          })}
        </div>
      ) : (
        <h3>No Data in Cart</h3>
      )}
    </div>
  );
};

export default Cart;
