import Breadcrumbs from "../navigation/Breadcrumbs/Breadcrumbs";
import classes from "./Title.module.scss";

const Title = ({ name }) => {
	return (
		<div className={classes.titlecontainer}>
			<div className={classes.title}>{name}</div>
			<div className={classes.breadcrumbs}>
				<Breadcrumbs />
			</div>
		</div>
	);
};

export default Title;
