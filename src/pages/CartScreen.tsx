import React from "react";
import Navbar from "../components/Layout/Navbar";
import Contact from "../components/Layout/Contact";
import Footer from "../components/Layout/Footer";

function CartScreen() {
	return (
		<div>
			<div className="">
				<p className="font-bold">Giỏ hàng</p>
			</div>
			<div className="flex w-full justify-around items-center border-solid border-2 border-black">
				<div className="w-1/2">
					<img
						src="https://picsum.photos/200/200"
						alt=""
						className="w-[200px] h-[200px] object-cover p-3"
					/>
				</div>
				<div className="w-1/2  ">
					<div>
						<p className="font-bold">Country og sftm</p>
					</div>
					<div>
						<p>
							Price : <span>3.000.000</span>
						</p>
					</div>
					<div className="flex flex-col">
						<label htmlFor="">Số lượng</label>
						<input
							className="border w-1/5"
							type="number"
						/>
					</div>
					<div>
						<button>Xóa</button>
					</div>
				</div>
			</div>
			<div>
				<button className="flex justify-center bg-white text-black hover:opacity-70 hover:bg-red-500 rounded-lg px-8 py-3 font-semibold mx-auto text-xl w-1/7 mb-4 cursor-pointer">Thanh toán</button>
			</div>
		</div>
	);
}

export default CartScreen;
