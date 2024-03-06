import React from "react";
import { TProduct } from "../../types/product";
import { MdOutlinePriceCheck, MdPriceChange } from "react-icons/md";

const Product = (props: TProduct) => {
	return (
		<div className="mb-4">
			<img
				src={props.image}
				alt={`avatar of ${props.name}`}
				className="w-[360px] h-[360px] object-cover rounded-md"
			/>
			<p className="text-lg font-semibold">{props.status}</p>
			<p className="font-bold text-lg uppercase">{props.name}</p>
			<p>
				{props.category} - {props.departmentNum} màu
			</p>
			<p className="flex items-center">
				<MdPriceChange className="mr-2" />
				{props.price} đ
			</p>
		</div>
	);
};

export default Product;
