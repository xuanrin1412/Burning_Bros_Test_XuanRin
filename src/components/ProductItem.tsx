import React from "react";
import { IProduct } from "../types/product";

export interface IProductItemProp {
    product: IProduct;
}

const ProductItem: React.FC<IProductItemProp> = ({ product }) => {
    return <div className="h-72 bg-white rounded-2xl border">
        <div className="h-48">
            <img
                className="h-full w-full object-contain rounded-t-2xl"
                src={product.images[0]} alt="" loading="lazy" />
        </div>
        <div className="p-2 ">
            <h2 className="font-semibold">{product.title}</h2>
            <h2 className="pt-1 font-bold text-red-700">{product.price}$</h2>
        </div>
    </div>;
}
export default ProductItem;
