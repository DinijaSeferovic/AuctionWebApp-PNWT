import api from "../utils/apiItem";

const getProductImage = (id) => {
	return api.get(`/images/${id}`);
};

export default { getProductImage };
