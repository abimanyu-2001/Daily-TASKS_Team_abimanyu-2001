import React, { useEffect } from "react";

const Cart = ({ cart, setCart }) => {
  let total = 0;
  cart.forEach((data) => {
    total += Number(Number(data.count) * Number(data.price));
    return Number(total);
  });
  useEffect(() => {
    console.log(cart);
  }, []);
  return (
    <div>
      {cart.length !== 0 ? (
        <div>
          <h1 className="text-center py-4" style={{ color: "#6249a5" }}>
            Cart Items
          </h1>

          <div className="container">
            <div className="container overflow-x-scroll">
              <table className="table table-light table-hover align-content-center">
                <tbody>
                  {cart.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <img
                            width={50}
                            height={50}
                            src={item.images[0]}
                            alt="image"
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>&#36;{item.price}</td>
                        <td>
                          <button
                            className="btn btn-info"
                            onClick={() => {
                              let arr = [...cart];
                              let obj = { ...item };
                              obj.count = Number(Number(obj.count) + 1);
                              let newArr = arr.map((data) => {
                                if (data.id === obj.id) {
                                  return obj;
                                } else {
                                  return data;
                                }
                              });
                              setCart(newArr);
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <span className="px-1">{item.count}</span>
                        </td>
                        <td>
                          <button
                            className="btn btn-info "
                            onClick={() => {
                              let arr = [...cart];
                              let obj = { ...item };
                              obj.count = Number(Number(obj.count) - 1);
                              let newArr = arr.map((data) => {
                                if (data.id === obj.id) {
                                  return obj;
                                } else {
                                  return data;
                                }
                              });
                              setCart(newArr);
                            }}
                          >
                            -
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger text-wrap"
                            onClick={() => {
                              let arr = [...cart];
                              let newArr = arr.filter(
                                (data) => data.id !== item.id
                              );
                              // console.log(newArr);
                              setCart(newArr);
                            }}
                          >
                            Remove Item
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-center py-3">Your cart is empty!</h3>
      )}
      <div className="container col-md-4 d-flex flex-column justify-content-center py-5">
        <h3 className="col-12 text-center text-nowrap">
          Total amount: &#36;{total.toFixed(2)}
        </h3>
        <button className="btn btn-outline-success col-12">Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
