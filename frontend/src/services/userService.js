import api from "../utils/api";

const logIn = (email, password) => {
	return api.post("/api/auth/login", { email, password }).then((response) => {
		return response.data;
	});
};

const register = (firstName, lastName, email, password) => {
	const roles = ["user"];
	return api
		.post("/api/auth/register", {
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
	return api.get(`api/auth/user?token=${token}`).then((response) => {
		return response.data;
	});
};

const sendResetEmail = (email) => {
	return api
		.post(`api/auth/send-reset-email?email=${email}`)
		.then((response) => {
			return response.data;
		});
};

const changePassword = (email, password) => {
	return api
		.put("api/auth/change-password", { email, password })
		.then((response) => {
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
