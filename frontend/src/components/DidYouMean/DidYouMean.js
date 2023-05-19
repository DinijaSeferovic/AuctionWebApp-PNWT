import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../../services/productService";
import classes from "./DidYouMean.module.scss";

const DidYouMean = ({ search }) => {
	const [suggestion, setSuggestion] = useState("");
	useEffect(() => {
		productService.getSuggestions(search).then((response) => {
			setSuggestion(response.data);
		});
		console.log(suggestion);
	}, [search, suggestion]);

	return (
		<div className={classes.suggestion}>
			{suggestion !== "" && (
				<div>
					Did you mean?
					<Link
						to={`/shop/search/?name=${suggestion}`}
						className={classes.suggestion_link}
					>
						{suggestion}
					</Link>
				</div>
			)}
		</div>
	);
};

export default DidYouMean;
