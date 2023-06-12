import axios from "axios";
import Keycloak from "keycloak-js";

const keycloakConfig = {
	realm: "spring-boot-microservices-realm",
	url: "http://localhost:8181/auth",
	clientId: "react-client",
	onLoad: "check-sso",
	credentials: {
		secret: "HtaniJB9wyVTVdKNtPkQfgIa6OzJTJ4a",
	},
};

const keycloak = new Keycloak(keycloakConfig);

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND,
});

keycloak
	.init({
		onLoad: "check-sso",
		silentCheckSsoRedirectUri:
			window.location.origin + "/silent-check-sso.html",
	})
	.then((authenticated) => {
		if (authenticated) {
			console.log("User is authenticated");
			axiosInstance.defaults.headers.common[
				"Authorization"
			] = `Bearer ${keycloak.token}`;
		} else {
			console.log("User is not authenticated");
			keycloak.login();
		}
	})
	.catch((error) => {
		console.error("Keycloak initialization error", error);
	});

export default axiosInstance;
