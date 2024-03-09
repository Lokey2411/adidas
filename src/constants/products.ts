import { TProduct } from "../types/product";
import moment from "moment";
import { EGender } from "../types/user";

export const products: TProduct[] = [
	{
		name: "Adidas",
		remain: 10,
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [
			{
				comment: "content",
				rate: 5,
				date: moment(Date.now()).format("DD/MM/YYYY"),
				commenter: {
					id: 1,
					name: "Nguyễn Văn A",
					address: [
						{
							city: "Hà Nội",
							street: "Đại học Đà Nẵng",
							building: "Đại học Đà Nẵng",
						},
					],
					birthDate: new Date(),
					phoneNumber: "0123456789",
					gender: "MALE" as EGender,
					email: "zTQgk@example.com",
					password: "123456",
				},
				title: "title",
			},
		],
		images: ["https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400"],
		departments: ["35", "36", "37", "38", "39", "40", "41", "42"],
	},
	{
		name: "Adidas",
		remain: 0,
		status: "Đang kinh doanh",
		id: 2,
		category: "Sneaker",
		price: 100000,
		comments: [],
		images: ["https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400"],
		departments: ["35", "36", "37", "38"],
	},
	{
		name: "Adidas",
		remain: 10,
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		images: ["https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400"],
		departments: ["35", "36", "37", "38"],
	},
	{
		name: "Adidas",
		remain: 10,
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		images: ["https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400"],
		departments: ["35", "36", "37", "38"],
	},
	{
		name: "Adidas",
		remain: 10,
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		images: ["https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400"],
		departments: ["35", "36", "37", "38"],
	},
	{
		name: "Adidas",
		remain: 10,
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		images: ["https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400"],
		departments: ["35", "36", "37", "38"],
	},
	{
		name: "Adidas",
		remain: 10,
		status: "Đang kinh doanh",
		id: 1,
		category: "Sneaker",
		price: 100000,
		comments: [],
		images: ["https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400", "https://kallos.co/cdn/shop/products/giay-adidas-edge-gameday-black-white-kallos-vietnam-1.jpg?v=1676072174&width=2400"],
		departments: ["35", "36", "37", "38"],
	},
];
