import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Boot = ({ category, data, setCart }) => {
  return (
    <div style={{ backgroundColor: "#bb9ab1" }}>
      <div className="container d-flex flex-wrap justify-content-evenly gap-2 py-5">
        {data.length !== 0 ? (
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="card bg-light shadow-lg"
                style={{ width: "25rem" }}
              >
                <img
                  width={150}
                  height={300}
                  src={item.images[0]}
                  className="card-img-top"
                  alt="images"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{ color: "#624a95" }}>
                    Price: &#36; {item.price}
                  </li>
                  <li className="list-group-item" style={{ color: "#624a95" }}>
                    In-Stock : {item.stock}
                  </li>
                  <li className="list-group-item" style={{ color: "#624a95" }}>
                    Category : {item.category}
                  </li>
                  <li className="list-group-item" style={{ color: "#624a95" }}>
                    Rating : {item.rating}
                  </li>
                  <li className="list-group-item" style={{ color: "#624a95" }}>
                    Discount Percentage : {item.discountPercentage}%
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="btn btn-outline-primary">
                    Buy Now
                  </a>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      let arr = [...cart];
                      arr.push(item);
                      setCart(arr);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
                <div
                  style={{
                    width: 700,
                  }}
                  className="gap-2"
                >
                  {/* <div
                    className="gap-2"
                    style={{
                      width: "100%",
                      height: 50,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      className="shadow"
                      style={{
                        width: "7%",
                        height: "100%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: "grey",
                      }}
                    >
                      <Icon
                        icon="fluent-emoji-high-contrast:left-arrow"
                        fontSize={25}
                        color="#624a95"
                      />
                    </div>
                    <div
                      className="ps-2 shadow-lg"
                      style={{
                        width: "68%",
                        height: "100%",
                        backgroundColor: "white",
                        borderRadius: 50,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        borderWidth: 1,
                        borderColor: "grey",
                        gap: 5,
                      }}
                    >
                      <Icon icon="charm:search" fontSize={25} color="#624a95" />
                      <input
                        placeholder="Tirunelveli"
                        type="text"
                        style={{ borderWidth: 0, width: "90%" }}
                      />
                    </div>
                    <div
                      style={{
                        width: "25%",
                        height: "100%",
                      }}
                    >
                      <button
                        className="btn shadow-lg py-2"
                        style={{
                          height: 50,
                          width: "100%",
                          color: "white",
                          backgroundColor: "#624a95",
                          borderRadius: 50,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        See Results
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            );
          })
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
};

export default Boot;
