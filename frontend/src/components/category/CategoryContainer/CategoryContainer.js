import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryService from "../../../services/categoryService";
import Category from "../Category/Category";
import classes from "./CategoryContainer.module.scss";

const CategoryContainer = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		categoryService
			.getMainCategories()
			.then((response) => setCategories(response.data));
	}, []);

	return (
		<div className={classes.category_container}>
			<div className={classes.category_container_title}> Categories </div>
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
						<div className={classes.category_container_item}>
							<Link
								to={`/shop/search/?categoryId=${category.id}`}
								className={classes.category_container_item_link}
							>
								<Category name={category.name} />
							</Link>
						</div>
					</li>
				))}
				<li>
					<div className={classes.category_container_item}>
						<Link
							to={"/shop"}
							className={classes.category_container_item_link}
						>
							<Category name={"All Categories"} />
						</Link>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default CategoryContainer;
