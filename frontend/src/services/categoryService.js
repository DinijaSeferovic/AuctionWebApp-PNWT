import api from "../utils/apiItem";

const getMainCategories = () => {
	return api.get("/categories/main");
};

const getCategories = () => {
	return api.get("/categories");
};

export default { getMainCategories, getCategories };
