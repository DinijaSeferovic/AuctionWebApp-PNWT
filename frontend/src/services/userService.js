import api from "../utils/api";

const logIn = (email, password) => {
	return api
		.post("api/users/auth/login", { email, password })
		.then((response) => {
			return response.data;
		});
};

const register = (firstName, lastName, email, password) => {
	const roles = ["user"];
	return api
		.post("api/users/auth/register", {
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
	return api.get(`api/users/user?token=${token}`).then((response) => {
		return response.data;
	});
};

const sendResetEmail = (email) => {
	return api
		.post(`api/users/send-reset-email?email=${email}`)
		.then((response) => {
			return response.data;
		});
};

const changePassword = (email, password) => {
	return api
		.put("api/users/change-password", { email, password })
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
