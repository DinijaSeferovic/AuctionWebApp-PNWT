import api from "../utils/apiItem";

const getSubcategories = (id) => {
	return api.get(`/subcategories/categories/${id}`);
};

export default { getSubcategories };
