export default function authHeader() {
	let token = localStorage.getItem("token").replaceAll('"', "");
	if (localStorage.getItem("isLoggedIn") && token) {
		return { Authorization: `Bearer ${token}` };
	} else {
		return {};
	}
}
