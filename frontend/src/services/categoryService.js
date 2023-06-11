import api from "../utils/api";

const getMainCategories = () => {
	return api.get("/api/items/categories/main");
};

const getCategories = () => {
	return api.get("/api/items/categories");
};

export default { getMainCategories, getCategories };
