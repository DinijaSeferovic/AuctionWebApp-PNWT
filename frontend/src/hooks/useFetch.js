import { useEffect } from "react";
import actionTypes from "../utils/actionTypes";

// make API calls and pass the returned data via dispatch
export const useFetch = (data, apiProducts, dispatch) => {
	useEffect(() => {
		dispatch({ type: actionTypes.FETCHING_PRODUCTS, fetching: true });
		fetch(
			`${process.env.REACT_APP_BACKEND_ITEM}${apiProducts}?page=${data.page}&limit=8`
		)
			.then((data) => data.json())
			.then((products) => {
				dispatch({ type: actionTypes.STACK_PRODUCTS, products });
				dispatch({
					type: actionTypes.FETCHING_PRODUCTS,
					fetching: false,
				});
			})
			.catch((e) => {
				dispatch({
					type: actionTypes.FETCHING_PRODUCTS,
					fetching: false,
				});
				return e;
			});
	}, [dispatch, apiProducts, data.page]);
};
