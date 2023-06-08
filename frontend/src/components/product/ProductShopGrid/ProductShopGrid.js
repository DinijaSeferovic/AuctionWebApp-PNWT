import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import productService from "../../../services/productService";
import Button from "../../Button/Button";
import DidYouMean from "../../DidYouMean/DidYouMean";
import Product from "../Product/Product";
import classes from "./ProductShopGrid.module.scss";

const ProductShopGrid = () => {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(0);
	const [limit, setLimit] = useState(9);
	const [search, setSearch] = useSearchParams();

	const categoryId = search.has("categoryId") && search.get("categoryId");
	const productName = search.has("name") && search.get("name");

	useEffect(() => {
		productService
			.getFilteredProducts(productName, categoryId, page, limit)
			.then((response) => setProducts(response.data));
	}, [page, limit]);

	useEffect(() => {
		productService
			.getFilteredProducts(productName, categoryId, 0, 9)
			.then((response) => setProducts(response.data));
	}, [productName, categoryId]);

	const handlePage = () => {
		setPage(page + 1);
	};

	return (
		<div className={classes.product_container}>
			<div>
				{products.length === 0 && <DidYouMean search={productName} />}
			</div>
			<div className={classes.product_container_grid}>
				{products.map((product) => (
					<li key={product.id}>
						<div className={classes.product_container_grid_item}>
							<Product product={product} imgSize="medium" />
						</div>
					</li>
				))}
			</div>
			<div className={classes.product_container_button}>
				{products.length >= 9 && (
					<Button
						label="Explore More"
						onClick={() => handlePage()}
						variant="primary"
						size="medium"
						outlined={false}
					/>
				)}
			</div>
		</div>
	);
};

export default ProductShopGrid;
