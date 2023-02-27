import React from "react";
import ProductCard from "../component/Home/ProductCard";
import Loader from "../component/Loader";
import { GetListProducts } from "../hooks/ReqProducts";

function Home() {
  let content = null;
  let url = "https://63fc1e31859df29986b6e2c8.mockapi.io/api/v1/products";
  let products = GetListProducts(url);

  if (products.loading) {
    content = (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  } else if (products.error) {
    content = (
      <div className="text-xl font-bold text-red-400 flex justify-center items-center h-64">
        {products.error}
      </div>
    );
  } else {
    content = products.data.map((el) => (
      <div key={el.id} className="flex-no-shrink w-full sm:w-1/4 sm:px-6">
        <ProductCard product={el} />
      </div>
    ));
    content = <div className="sm:flex flex-wrap sm:-mx-6">{content}</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-6">All Products</h1>
      <div>{content}</div>
    </div>
  );
}

export default Home;
