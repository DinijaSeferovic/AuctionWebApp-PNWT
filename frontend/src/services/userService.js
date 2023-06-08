import api from "../utils/apiUser";

const logIn = (email, password) => {
	return api.post("/login", { email, password }).then((response) => {
		return response.data;
	});
};

const register = (firstName, lastName, email, password) => {
	const roles = ["user"];
	return api
		.post("/register", {
			firstName,
			lastName,
			email,
			password,
			roles,
		})
		.then((response) => {
			return response.data;
		});
};

const getUserByToken = (token) => {
	return api.get(`/user?token=${token}`).then((response) => {
		return response.data;
	});
};

const sendResetEmail = (email) => {
	return api.post(`/send-reset-email?email=${email}`).then((response) => {
		return response.data;
	});
};

const changePassword = (email, password) => {
	return api.put("/change-password", { email, password }).then((response) => {
		return response.data;
	});
};

export default {
	logIn,
	register,
	getUserByToken,
	sendResetEmail,
	changePassword,
};
