import React from "react";

const Header = () => {
	return (
		<div>
			<div className="bg-white flex justify-between px-[120px] items-center py-3">
				<p className="cursor-pointer">Theo dõi đơn hàng</p>
				<p className="cursor-pointer">Trợ giúp</p>
			</div>
			<div className="bg-black text-white font-semibold flex justify-center py-3">Trả hàng dễ dàng</div>
		</div>
	);
};

export default Header;
