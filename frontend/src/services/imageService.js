import api from "../utils/api";

const getProductImage = (id) => {
	return api.get(`api/items/images/${id}`);
};

export default { getProductImage };
