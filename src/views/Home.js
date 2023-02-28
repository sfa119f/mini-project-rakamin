import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ProductCard from "../component/Home/ProductCard";
import Loader from "../component/Loader";
import { GetListProducts } from "../hooks/ReqProducts";

function Home() {
  const url = "https://63fc1e31859df29986b6e2c8.mockapi.io/api/v1/products";
  let products = GetListProducts(url);

  const [numData, setNumData] = useState(10);
  const [page, setPage] = useState(1);

  let content = null;
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
    content = products.data.map(
      (el, idx) =>
        idx >= (page - 1) * numData &&
        idx < page * numData && (
          <div key={el.id} className="flex-no-shrink w-full sm:w-1/4 sm:px-3">
            <ProductCard product={el} />
          </div>
        )
    );
    content = <div className="sm:flex flex-wrap sm:-mx-3">{content}</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-6">All Products</h1>
      <div className="text-lg flex gap-2 justify-end mb-3">
        <div className="py-2">Number of data:</div>
        <select
          id="num-data"
          value={numData}
          className="border-2 rounded p-2 dark:bg-navy-light"
          onChange={(e) => setNumData(e.target.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div>{content}</div>
      <div className="text-lg flex justify-center gap-3">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="cursor-pointer mt-2 py-2 px-3 hover:bg-gray-300/50"
          onClick={() => page > 1 && setPage(page - 1)}
        />

        {Math.ceil(products.data.length / numData) > 1 && (
          <div className="py-2">
            Page {page} / {Math.ceil(products.data.length / numData)}
          </div>
        )}

        <FontAwesomeIcon
          icon={faChevronRight}
          className="cursor-pointer mt-2 py-2 px-3 hover:bg-gray-300/50"
          onClick={() =>
            page < Math.ceil(products.data.length / numData) &&
            setPage(page + 1)
          }
        />
      </div>
    </div>
  );
}

export default Home;
