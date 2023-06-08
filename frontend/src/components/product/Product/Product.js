import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageService from "../../../services/imageService";
import Image from "../../Image/Image";
import "./Product.scss";

const Product = ({ product, imgSize = "small" }) => {
	const [productImage, setProductImage] = useState([
		{ imagePath: "/products/no-img.png" },
	]);

	useEffect(() => {
		imageService
			.getProductImage(product.id)
			.then((response) => setProductImage(response.data));
	}, [product.id]);

	let path = "";
	if (productImage) {
		path = require(`../../../assets/images${productImage[0].imagePath}`);
	}
	return (
		<div className={"product"}>
			<Image
				src={path}
				alt="Product image"
				size={imgSize}
				href={`/single-product/${product.id}`}
			/>
			<div className={"product_name"}>
				<Link
					to={`/single-product/${product.id}`}
					className={"product_name_link"}
				>
					{product.name}
				</Link>
			</div>
			<div className={"product_price"}>
				{product.highestBid ? "Highest bid" : "Start From"}
				<span className={"product_price_amount"}>
					{"$"}
					{product.highestBid
						? product.highestBid.toFixed(2)
						: product.startPrice.toFixed(2)}
				</span>
			</div>
		</div>
	);
};

export default Product;
