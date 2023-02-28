import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="border-2 border-black/50 rounded-lg mb-6 overflow-hidden bg-slate-100">
      <Link to={`/product/${props.product.id}`}>
        <div
          style={{
            backgroundImage: `url('${props.product.image}')`,
          }}
          className="w-full h-64 sm:h-32 lg:h-48 bg-cover overflow-hidden hover:scale-110"
        ></div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl truncate mb-3">
          {props.product.name}
        </h3>
        <div className="font-bold mb-3">$ {props.product.price}</div>
        <Link
          to={`/product/${props.product.id}`}
          className="text-white flex justify-center w-full p-2 bg-blue-500 hover:bg-blue-500/50"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
