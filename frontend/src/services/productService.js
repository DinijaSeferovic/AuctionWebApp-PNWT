import api from "../utils/api";

const getProductHighlight = () => {
	return api.get("/api/items/highlight");
};

const getProduct = (id) => {
	return api.get(`/api/items/${id}`);
};

const getProducts = () => {
	return api.get(`/api/items`);
};

const getNewProducts = (page, limit) => {
	return api.get(`/api/items/new-arrivals?page=${page}&limit=${limit}`);
};

const getLastProducts = (page, limit) => {
	return api.get(`/api/items/last-chance?page=${page}&limit=${limit}`);
};

const getProductSubcategoryCount = (id) => {
	return api.get(`/api/items/subcategories/${id}/count`);
};

const getFilteredProducts = (name, categoryId, page, limit) => {
	if (name && name !== "false" && categoryId) {
		return api.get(
			`/api/items/search?name=${name}&categoryId=${categoryId}&page=${page}&limit=${limit}`
		);
	} else if (name && name !== "false") {
		return api.get(
			`/api/items/search?name=${name}&page=${page}&limit=${limit}`
		);
	} else if (categoryId) {
		return api.get(
			`/api/items/search?categoryId=${categoryId}&page=${page}&limit=${limit}`
		);
	} else {
		return api.get(`/api/items/new-arrivals?page=${page}&limit=${limit}`);
	}
};

const getSuggestions = (search) => {
	return api.get(`/api/items/spell-check?search=${search}`);
};

const updatePaidStatus = (isPaid, product) => {
	return api.put(`/api/items/${product}/paid-status`, isPaid);
};

const updateBuyer = (user, product) => {
	return api.put(`/api/items/${product}/update-buyer?user=${user}`);
};

const getProductRow = (page, limit, status) => {
	return api.get(`/api/items/rows/${status}?page=${page}&limit=${limit}`);
};

const getProductsCount = (status) => {
	return api.get(`/api/items/${status}/count`);
};

export default {
	getProductHighlight,
	getProduct,
	getProducts,
	getNewProducts,
	getLastProducts,
	getProductSubcategoryCount,
	getFilteredProducts,
	updatePaidStatus,
	updateBuyer,
	getProductRow,
	getProductsCount,
	getSuggestions,
};
