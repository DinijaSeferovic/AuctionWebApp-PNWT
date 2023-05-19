import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../../../../assets/images/icons/search-icon.png";
import Icon from "../../../../Icon/Icon";
import Input from "../../../../Input/Input";
import classes from "./Search.module.scss";

const Search = () => {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			setQuery(event.target.value);
			navigate(`/shop/search/?name=${query}`);
		}
	};

	const handleChange = (event) => {
		setQuery(event.target.value);
	};

	return (
		<div className={classes.search}>
			<Input
				type={"search"}
				placeholder={"Try enter: Shoes"}
				size={"medium"}
				className="search_input"
				onKeyDown={handleKeyDown}
				onChange={handleChange}
				inForm={false}
			/>
			<div className={classes.search_icon}>
				<Icon
					alt="search"
					href={query && `/shop/search/?name=${query}`}
					size="small"
					src={searchIcon}
				/>
			</div>
		</div>
	);
};

export default Search;
