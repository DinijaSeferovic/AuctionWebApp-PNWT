import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import minusIcon from "../../../assets/images/icons/minus-icon.png";
import plusIcon from "../../../assets/images/icons/plus-icon.png";
import categoryService from "../../../services/categoryService";
import Icon from "../../Icon/Icon";
import Category from "../Category/Category";
import Subcategory from "../Subcategory/Subcategory";
import classes from "./CategoryShopContainer.module.scss";

const CategoryShopContainer = () => {
	const [filter, setFilter] = useSearchParams();
	const categoryId = filter.has("categoryId") && filter.get("categoryId");
	const name = filter.has("name") && filter.get("name");
	const [categories, setCategories] = useState([]);
	const [clicked, setClicked] = useState(categoryId);

	useEffect(() => {
		categoryService
			.getCategories()
			.then((response) => setCategories(response.data));
	}, []);

	const handleClick = (id) => {
		if (clicked === id) {
			return setClicked(null);
		}
		setClicked(id);
	};

	return (
		<div className={classes.category_container}>
			<div className={classes.category_container_title}>
				PRODUCT CATEGORIES
			</div>
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
						<div className={classes.category_container_card}>
							<div
								className={classes.category_container_card_item}
								onClick={() => handleClick(category.id)}
							>
								<Link
									to={`/shop/search/?name=${name}&categoryId=${category.id}`}
									className={
										classes.category_container_card_item_link
									}
								>
									<Category name={category.name} />
								</Link>
							</div>
							<div
								className={classes.category_container_card_icon}
							>
								{categoryId && clicked === category.id ? (
									<Icon src={minusIcon} size="xxsmall" />
								) : (
									<Icon src={plusIcon} size="xsmall" />
								)}
							</div>
							{clicked === category.id && categoryId && (
								<div
									className={
										classes.category_container_card_subcategories
									}
								>
									<Subcategory categoryId={category.id} />
								</div>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategoryShopContainer;
