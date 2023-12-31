import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <h3>Selected Items:{cart.length}</h3>
      </div>
    </div>
  );
};

export default Shop;
