import CategoryContainer from "../../components/category/CategoryContainer/CategoryContainer";
import MainNavBar from "../../components/layout/navigation/MainNavBar/MainNavBar";
import ProductHighlight from "../../components/product/ProductHighlight/ProductHighlight";
import ProductsTab from "../../components/product/ProductsTab/ProductsTab";
import TabContainer from "../../components/tabs/TabContainer/TabContainer";

import classes from "./Home.module.scss";

const Home = () => {
	return (
		<div className={classes.homepage}>
			<MainNavBar />
			<div className={classes.categoryhighlight}>
				<CategoryContainer />
				<ProductHighlight />
			</div>
			<TabContainer size="large">
				<div label="New Arrivals">
					<ProductsTab apiProducts={"/api/items/new-arrivals"} />
				</div>
				<div label="Last Chance">
					<ProductsTab apiProducts={"/api/items/last-chance"} />
				</div>
			</TabContainer>
		</div>
	);
};

export default Home;
