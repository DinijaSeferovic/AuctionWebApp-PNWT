import MainNavBar from "../../components/layout/navigation/MainNavBar/MainNavBar";

import classes from "./Home.module.scss";

const Home = () => {
	return (
		<div className={classes.homepage}>
			<MainNavBar />
			<div className={classes.categoryhighlight}></div>
		</div>
	);
};

export default Home;
