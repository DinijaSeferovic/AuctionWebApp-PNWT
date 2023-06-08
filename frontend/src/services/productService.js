import api from "../utils/apiItem";

const getProductHighlight = () => {
	return api.get("/products/highlight");
};

const getProduct = (id) => {
	return api.get(`/products/${id}`);
};

const getProducts = () => {
	return api.get(`/products`);
};

const getNewProducts = (page, limit) => {
	return api.get(`/products/new-arrivals?page=${page}&limit=${limit}`);
};

const getLastProducts = (page, limit) => {
	return api.get(`/products/last-chance?page=${page}&limit=${limit}`);
};

const getProductSubcategoryCount = (id) => {
	return api.get(`/products/subcategories/${id}/count`);
};

const getFilteredProducts = (name, categoryId, page, limit) => {
	if (name && name !== "false" && categoryId) {
		return api.get(
			`/products/search?name=${name}&categoryId=${categoryId}&page=${page}&limit=${limit}`
		);
	} else if (name && name !== "false") {
		return api.get(
			`/products/search?name=${name}&page=${page}&limit=${limit}`
		);
	} else if (categoryId) {
		return api.get(
			`/products/search?categoryId=${categoryId}&page=${page}&limit=${limit}`
		);
	} else {
		return api.get(`/products/new-arrivals?page=${page}&limit=${limit}`);
	}
};

const getSuggestions = (search) => {
	return api.get(`/products/spell-check?search=${search}`);
};

const updatePaidStatus = (isPaid, product) => {
	return api.put(`/products/${product}/paid-status`, isPaid);
};

const updateBuyer = (user, product) => {
	return api.put(`/products/${product}/update-buyer?user=${user}`);
};

const getProductRow = (page, limit, status) => {
	return api.get(`/products/rows/${status}?page=${page}&limit=${limit}`);
};

const getProductsCount = (status) => {
	return api.get(`/products/${status}/count`);
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
