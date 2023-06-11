import api from "../utils/api";

const getSubcategories = (id) => {
	return api.get(`/api/items/subcategories/categories/${id}`);
};

export default { getSubcategories };
