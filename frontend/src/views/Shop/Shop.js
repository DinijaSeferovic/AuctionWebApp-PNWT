import React from "react";
import CategoryShopContainer from "../../components/category/CategoryShopContainer/CategoryShopContainer";
import MainNavBar from "../../components/layout/navigation/MainNavBar/MainNavBar";
import ProductShopGrid from "../../components/product/ProductShopGrid/ProductShopGrid";
import classes from "./Shop.module.scss";

const Shop = () => {
	return (
		<div>
			<MainNavBar />
			<div className={classes.container}>
				<CategoryShopContainer />
				<ProductShopGrid />
			</div>
		</div>
	);
};

export default Shop;
