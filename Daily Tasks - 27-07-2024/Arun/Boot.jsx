import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Boot = ({ category, data, setCart, cart }) => {
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
                  <li
                    className="list-group-item text-center"
                    style={{ color: "#624a95" }}
                  >
                    Price: &#36; {item.price}
                  </li>
                  <li
                    className="list-group-item text-center"
                    style={{ color: "#624a95" }}
                  >
                    In-Stock : {item.stock}
                  </li>
                  <li
                    className="list-group-item text-center"
                    style={{ color: "#624a95" }}
                  >
                    Category : {item.category}
                  </li>
                  <li
                    className="list-group-item text-center"
                    style={{ color: "#624a95" }}
                  >
                    Rating : {item.rating}
                  </li>
                  <li
                    className="list-group-item text-center"
                    style={{ color: "#624a95" }}
                  >
                    Discount Percentage : {item.discountPercentage}%
                  </li>
                </ul>
                <div className="card-body mx-auto">
                  <a href="#" className="btn btn-outline-primary">
                    Buy Now
                  </a>
                  <button
                    className="btn btn-outline-success ms-2"
                    onClick={() => {
                      let arr = [...cart];
                      let findObj = arr.find((obj) => obj.id === item.id);
                      if (findObj) {
                        // console.log(findObj);
                        let newObj = { ...findObj };
                        newObj.count = Number(Number(newObj.count) + 1);
                        // console.log(newObj.count, item.count);
                        let newArr = arr.map((data) => {
                          if (data.id === item.id) {
                            return newObj;
                          } else {
                            return data;
                          }
                        });
                        setCart(newArr);
                      } else {
                        // console.log("obj not found");
                        let newObj = { ...item, count: 1 };
                        arr.push(newObj);
                        setCart(arr);
                      }

                      // console.log(arr);
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
                ></div>
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
