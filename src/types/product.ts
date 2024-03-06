import { User } from "./user";

export type TProduct = {
	name: string;
	status?: string;
	id: string | number;
	category: string;
	price: number;
	comments: Comment[];
	image: string;
	departmentNum: number;
};

export type Comment = {
	commenter: User;
	comment: string;
	date: string;
	tite: string;
	rate: number;
};
