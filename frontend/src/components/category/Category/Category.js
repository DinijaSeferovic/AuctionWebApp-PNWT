import classes from "./Category.module.scss";

const Category = ({ name }) => {
	return (
		<div className={classes.category}>
			<div className={classes.category_title}> {name} </div>
		</div>
	);
};

export default Category;
