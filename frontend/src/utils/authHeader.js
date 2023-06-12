export default function authHeader() {
	let token = localStorage.getItem("token").replaceAll('"', "");
	if (localStorage.getItem("isLoggedIn") && token) {
		return { "X-Authorization": `Bearer ${token}` };
	} else {
		return {};
	}
}
