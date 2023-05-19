import { useEffect, useMemo, useState } from "react";
import userService from "../services/userService";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const value = useMemo(() => ({ user, setUser }), [user, setUser]);
	useEffect(() => {
		if (localStorage.getItem("isLoggedIn") === "true" && user === null)
			userService
				.getUserByToken(
					localStorage.getItem("token").replaceAll('"', "")
				)
				.then((response) => setUser(response));
	}, [user]);

	return (
		<UserContext.Provider value={value}> {children} </UserContext.Provider>
	);
};

export default UserProvider;
