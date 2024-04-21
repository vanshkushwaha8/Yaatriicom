import React from "react";
import "./ProductCard.css";
import { useLocation, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  console.log("Product",product)

  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-90">{product.title} </p>
          <p className="font-bold opacity-70">15 April - 25 April </p>
          
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold opacity-85">₹{product.price}</p>
          {/* <p className="line-through opacity-50">₹{product.discountedPrice}</p> */}
          
          <p className="text-green-600 font-semibold">{product.discountPercent}% off</p>
          
        </div>
        <div>
        <p className="font-semibold opacity-60">{product.brand}</p>        </div>
      </div>
    </div>
  );
};

export default ProductCard;
