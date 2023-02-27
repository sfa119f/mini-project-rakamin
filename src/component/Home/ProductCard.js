import React from "react";

function ProductCard(props) {
  return (
    <div className="border-2 border-black/50 rounded-lg mb-4 overflow-hidden bg-slate-100">
      <div
        style={{
          backgroundImage: `url('${props.product.image}')`,
        }}
        className="w-full h-64 sm:h-32 lg:h-48 bg-blue bg-cover"
      ></div>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">{props.product.name}</h3>
        <div className="font-bold mb-3">$ {props.product.price}</div>
        {/* <Link
        to={`/products/${props.product.id}`}
        className="bg-blue-500 text-white p-2 flex justify-center w-full"
      >
        View
      </Link> */}
      </div>
    </div>
  );
}

export default ProductCard;
