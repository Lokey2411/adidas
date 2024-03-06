import { PropsWithChildren, createContext, useState } from "react";
import { EGender, User } from "../types/user";
import { makeRequest } from "../axios";

type Context = {
	user: User;
	setUser: (user: User) => void;
	login: (formInput: any) => Promise<void>;
};
const initialState = {
	name: "",
	address: [],
	birthDate: new Date(),
	email: "",
	gender: EGender.MALE,
	phoneNumber: "",
	password: "",
};
export const UserContext = createContext<Context>({
	user: initialState,
	login: async (formInput) => {},
	setUser: (user) => {},
});

const UserContextProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<User>(initialState);
	const login = async (formInput: any) => {
		// const res = await makeRequest.post("/api/v1/auth/login", formInput, { withCredentials: true });
		// setUser(res.data);
		setUser(formInput);
	};
	return <UserContext.Provider value={{ user, setUser, login }}>{children}</UserContext.Provider>;
};
export default UserContextProvider;
