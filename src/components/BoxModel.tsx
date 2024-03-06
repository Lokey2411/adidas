import React, { PropsWithChildren } from "react";

const BoxModel = ({
	children,
	isOpenModel,
	setIsOpenModel,
}: PropsWithChildren & {
	isOpenModel: boolean;
	setIsOpenModel: any;
}) => {
	return (
		<div
			className={`bg-[rgba(0,0,0,0.1)]  z-50 fixed top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center ${!isOpenModel && "hidden"} cursor-default`}
			onClick={() => setIsOpenModel(false)}
		>
			{children}
		</div>
	);
};

export default BoxModel;
