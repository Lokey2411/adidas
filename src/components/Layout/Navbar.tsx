import { RiSearch2Line } from "react-icons/ri";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import Categories from "./Categories";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context";
import BoxModel from "../BoxModel";
import Cart from "../Cart";
const categories = [
	{
		item: "Nam",
		subItems: ["Dòng sản phẩm original", "Bóng đá", "Chạy", "Tập luyện", "Ngoài trời", "Bóng rổ", "Quần vợt", "Giới hạn"],
	},
	{
		item: "Nữ",
		subItems: ["Dòng sản phẩm original", "Bóng đá", "Chạy", "Tập luyện", "Ngoài trời", "Bóng rổ", "Quần vợt", "Giới hạn"],
	},
	{
		item: "Trẻ em",
		subItems: ["Dòng sản phẩm original", "Bóng đá", "Chạy", "Tập luyện", "Ngoài trời", "Bóng rổ", "Quần vợt", "Giới hạn 2"],
	},
	{
		item: "Giảm giá",
		subItems: ["Dòng sản phẩm original", "Bóng đá", "Chạy", "Tập luyện", "Ngoài trời", "Bóng rổ", "Quần vợt", "Giới hạn"],
	},
	{
		item: "Sắp và mới ra mắt",
		subItems: ["Dòng sản phẩm original", "Bóng đá", "Chạy", "Tập luyện", "Ngoài trời", "Bóng rổ", "Quần vợt", "Giới hạn"],
	},
];

const Navbar = () => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const isLoggedIn = !!user.password;
	const defaultPage = "/login";
	const [isOpenSearchModel, setIsOpenSearchModel] = useState(false);
	const [isOpenCartModel, setIsOpenCartModel] = useState(false);
	return (
		<div className="flex items-center justify-between shadow-lg px-[120px]">
			{/* logo */}
			<Link to="/">
				<img
					src="https://cdn.icon-icons.com/icons2/2699/PNG/512/adidas_logo_icon_168690.png"
					alt="logo"
					className="w-[60px] h-[60px] cursor-pointer"
				/>
			</Link>
			{/* categories */}
			<div className="w-1/3 flex justify-between">
				{categories.map((category) => (
					<Categories
						{...category}
						key={category.item}
					/>
				))}
			</div>
			{/* models */}
			<div className="flex items-center justify-between w-1/6">
				<RiSearch2Line
					className="text-2xl cursor-pointer"
					onClick={() => setIsOpenSearchModel(true)}
				/>
				{/* search model */}
				<BoxModel
					isOpenModel={isOpenSearchModel}
					setIsOpenModel={setIsOpenSearchModel}
				>
					<div
						className="flex w-1/2 bg-white rounded-full items-center px-2 py-4"
						onClick={() => setIsOpenSearchModel(true)}
					>
						<input
							type="text"
							className="outline-none h-full w-full"
							autoFocus
						/>
						<RiSearch2Line className="text-2xl text-gray-400" />
					</div>
				</BoxModel>
				<FaRegUser
					className="text-2xl cursor-pointer"
					onClick={() => navigate(isLoggedIn ? `/profile/${user.id}` : defaultPage)}
				/>
				<FaRegHeart
					className="text-2xl cursor-pointer"
					onClick={() => {
						setIsOpenCartModel(true);
					}}
				/>
				<MdOutlineShoppingCart className="text-2xl cursor-pointer" />
			</div>
			<div
				className={`bg-[rgba(0,0,0,0.1)]  z-50 fixed top-0 right-0 left-0 bottom-0 flex flex-col ${!isOpenCartModel && "hidden"} cursor-default`}
				onClick={() => setIsOpenCartModel(false)}
			>
				<Cart />
			</div>
		</div>
	);
};

export default Navbar;
