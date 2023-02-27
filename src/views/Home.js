import React from "react";
import ProductCard from "../component/Home/ProductCard";

function Home() {
  let content = null;
  let products = {
    data: [
      {
        createdAt: "2023-02-27T00:01:40.301Z",
        name: "Practical Plastic Bike",
        description:
          "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        price: "258.00",
        image: "https://loremflickr.com/640/480/abstract",
        id: "1",
      },
      {
        createdAt: "2023-02-27T00:01:40.301Z",
        name: "Practical Plastic Bike",
        description:
          "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        price: "258.00",
        image: "https://loremflickr.com/640/480/abstract",
        id: "2",
      },
      {
        createdAt: "2023-02-27T00:01:40.301Z",
        name: "Practical Plastic Bike",
        description:
          "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        price: "258.00",
        image: "https://loremflickr.com/640/480/abstract",
        id: "3",
      },
    ],
  };

  content = products.data.map((el) => (
    <div key={el.id} className="flex-no-shrink w-full sm:w-1/4 sm:px-6">
      <ProductCard product={el} />
    </div>
  ));

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-3">Best Product</h1>
      <div className="sm:flex flex-wrap sm:-mx-6">{content}</div>
    </div>
  );
}

export default Home;
