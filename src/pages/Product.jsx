import React from "react";
import useProductStore from "../store/productStore";

const Product = () => {
  const { products, addToCart } = useProductStore();

  return (
    <>
      <div>
        <div style={{ display: "flex", gap: "20px" }}>
          {products.map((product) => (
            <div class="bg-white rounded-lg shadow-lg w-[25%]" key={product.id}>
              <img
                src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                alt=""
                class="rounded-t-lg"
              />
              <div class="p-6">
                <h2 class="font-bold mb-2 text-2xl text-purple-800">
                  {product.name}
                </h2>
                <p class="text-purple-700 mb-2">Price: ${product.price}</p>
                <button
                  class="text-white transition-all hover:bg-purple-600 bg-purple-500 px-[20px] py-[10px] rounded-lg font-semibold"
                  onClick={() => addToCart(product, 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
