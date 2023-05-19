import React, { useEffect, useState } from "react";
import productService from "../../../services/productService";
import subcategoryService from "../../../services/subcategoryService";
import classes from "./Subcategory.module.scss";

const Subcategory = ({ categoryId }) => {
	const [subcategories, setSubcategories] = useState([]);
	const [count, setCount] = useState([]);

	useEffect(() => {
		subcategoryService.getSubcategories(categoryId).then((response) => {
			setSubcategories(response.data);
			let countArray = Promise.all(
				response.data.map((subcategory) => {
					return productService.getProductSubcategoryCount(
						subcategory.id
					);
				})
			);
			countArray.then((values) => {
				setCount(values.map((v) => v.data));
			});
		});
	}, [categoryId]);

	return (
		<div className={classes.subcategory}>
			<ul>
				{subcategories.map((subcategory, i) => (
					<li
						key={subcategory.id}
						className={classes.subcategory_list}
					>
						<div className={classes.subcategory_list_title}>
							{subcategory.name} ({count[i]})
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Subcategory;
