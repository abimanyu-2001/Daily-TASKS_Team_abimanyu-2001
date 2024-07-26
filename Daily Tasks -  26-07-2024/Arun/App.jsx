import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boot from "./components/Boot";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import axios from "axios";
import Cart from "./components/Cart";

const App = () => {
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(category);
    if (category === "all") {
      setData(res.data.products);
    } else if (category === "beauty") {
      let fill = res.data.products.filter((data) => data.category === "beauty");
      setData(fill);
    } else if (category === "furniture") {
      let fill = res.data.products.filter(
        (data) => data.category === "furniture"
      );
      setData(fill);
    } else if (category === "groceries") {
      let fill = res.data.products.filter(
        (data) => data.category === "groceries"
      );
      setData(fill);
    } else if (category === "fragrances") {
      let fill = res.data.products.filter(
        (data) => data.category === "fragrances"
      );
      setData(fill);
    }
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div>
      <div>
        <div className="sticky-top">
          <Header
            category={category}
            setCategory={setCategory}
            fetchData={fetchData}
          />
        </div>
        <Routes>
          <Route
            path="/"
            element={<Boot category={category} data={data} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
        {/* <Boot category={category} data={data} /> */}
      </div>
    </div>
  );
};

export default App;
