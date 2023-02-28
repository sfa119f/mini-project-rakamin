import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../component/Loader";
import { GetListProducts } from "../hooks/ReqProducts";

function Product() {
  const { id } = useParams();

  const url = `https://63fc1e31859df29986b6e2c8.mockapi.io/products/${id}`;
  let product = GetListProducts(url);

  let content = null;

  if (product.loading) {
    content = (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  } else if (product.error) {
    content = (
      <div className="text-xl font-bold text-red-400 flex justify-center items-center h-64">
        {product.error}
      </div>
    );
  } else {
    content = (
      <div>
        <h1 className="font-bold text-2xl text-center mb-6">
          {product.data.name}
        </h1>
        <div className="md:flex gap-3">
          <div
            style={{
              backgroundImage: `url('${product.data.image}')`,
            }}
            className="w-full h-64 md:h-56 lg:h-80 bg-cover"
          ></div>
          <div className="py-3 md:px-3 md:py-1">
            <div>
              <span className="font-bold">Price: </span>$ {product.data.price}
            </div>
            <div>
              <div className="font-bold">Description: </div>
              {product.data.description}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="container mx-auto">{content}</div>;
}

export default Product;
