import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrowIcon from "../../../assets/images/icons/greater-than-icon.png";
import imageService from "../../../services/imageService";
import productService from "../../../services/productService";
import Button from "../../Button/Button";
import Image from "../../Image/Image";
import classes from "./ProductHighlight.module.scss";

const ProductHighlight = () => {
	const [product, setProduct] = useState({
		name: "",
		description: "",
		startPrice: 0,
		startDate: "",
		endDate: "",
	});

	const [productImage, setProductImage] = useState([
		{ imagePath: "/products/no-img.png" },
	]);

	useEffect(() => {
		productService.getProductHighlight().then((response) => {
			setProduct(response.data);
			imageService
				.getProductImage(response.data.id)
				.then((response) => setProductImage(response.data));
		});
	}, []);

	let path = "";
	if (productImage) {
		path = require(`../../../assets/images${productImage[0].imagePath}`);
	}
	const navigate = useNavigate();
	return (
		<div className={classes.container}>
			<div className={classes.container_info}>
				<div className={classes.container_info_name}>
					<Link
						to={`/single-product/${product.id}`}
						className={classes.container_info_name_link}
					>
						{product.name}
					</Link>
				</div>
				<div className={classes.container_info_price}>
					{`Start From $${product.startPrice.toFixed(2)}`}
				</div>
				<div className={classes.container_info_description}>
					{product.description}
				</div>
				<div className={classes.container_info_button}>
					<Button
						label="BID NOW"
						variant="primary"
						size="large"
						outlined={true}
						iconSrc={arrowIcon}
						onClick={() => {
							navigate(`/single-product/${product.id}`);
						}}
					/>
				</div>
			</div>
			<div className={classes.container_image}>
				<Image
					src={path}
					alt="Product image"
					size="large"
					href={`/single-product/${product.id}`}
				/>
			</div>
		</div>
	);
};

export default ProductHighlight;
