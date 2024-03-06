import { FaRegHeart, FaRegUser } from "react-icons/fa";
import Categories from "./Categories";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
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
	return (
		<div className="flex items-center justify-between shadow-lg px-[120px]">
			{/* logo */}
			<img
				src="https://cdn.icon-icons.com/icons2/2699/PNG/512/adidas_logo_icon_168690.png"
				alt="logo"
				className="w-[60px] h-[60px]"
			/>
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
				<RiSearch2Line className="text-2xl cursor-pointer" />
				<FaRegUser className="text-2xl cursor-pointer" />
				<FaRegHeart className="text-2xl cursor-pointer" />
				<MdOutlineShoppingCart className="text-2xl cursor-pointer" />
			</div>
		</div>
	);
};

export default Navbar;
