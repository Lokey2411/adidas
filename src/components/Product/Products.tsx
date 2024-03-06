import React from "react";
import { TProduct } from "../../types/product";
import Product from "./Product";

const products: TProduct[] = [
	{
		name: "Adidas",
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		image: "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400",
		departmentNum: 1,
	},
	{
		name: "Adidas",
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		image: "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400",
		departmentNum: 1,
	},
	{
		name: "Adidas",
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		image: "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400",
		departmentNum: 1,
	},
	{
		name: "Adidas",
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		image: "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400",
		departmentNum: 1,
	},
	{
		name: "Adidas",
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		image: "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400",
		departmentNum: 1,
	},
	{
		name: "Adidas",
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		image: "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400",
		departmentNum: 1,
	},
	{
		name: "Adidas",
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		image: "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400",
		departmentNum: 1,
	},
];

const Products = () => {
	return (
		<div className="grid grid-cols-3 gap-4">
			{products.map((item) => (
				<Product {...item} />
			))}
		</div>
	);
};

export default Products;
