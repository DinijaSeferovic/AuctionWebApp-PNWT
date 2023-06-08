import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainNavBar from "../../components/layout/navigation/MainNavBar/MainNavBar";
import Notification from "../../components/layout/Notification/Notification";
import Title from "../../components/layout/Title/Title";
import ProductImages from "../../components/product/ProductImages/ProductImages";
import ProductInfo from "../../components/product/ProductInfo/ProductInfo";
import { UserContext } from "../../contexts/UserContext";
import imageService from "../../services/imageService";
import productService from "../../services/productService";
import classes from "./SingleProduct.module.scss";

const SingleProduct = () => {
	let { id } = useParams();
	const { user, setUser } = useContext(UserContext);
	const [notification, setNotification] = useState({
		isVisible: false,
		type: "",
		message: "",
	});
	const [product, setProduct] = useState({
		id: id,
		name: "",
		description: "",
		startPrice: 0,
		startDate: "",
		endDate: "",
		sellerId: "",
		paid: false,
	});

	const [productImage, setProductImage] = useState([
		{ imagePath: "/products/no-img.png" },
	]);

	useEffect(() => {
		productService
			.getProduct(id)
			.then((response) => setProduct(response.data));
	}, [id]);

	useEffect(() => {
		imageService
			.getProductImage(id)
			.then((response) => setProductImage(response.data));
	}, [id]);

	const handleNotification = (type, text) => {
		setNotification({ isVisible: true, type: type, message: text });
		setTimeout(function () {
			setNotification({ isVisible: false, type: "", message: "" });
		}, 5000);
	};

	return (
		<div>
			<MainNavBar />
			<Title name={product.name} />
			{notification.isVisible && (
				<Notification
					type={notification.type}
					text={notification.message}
				/>
			)}
			<div className={classes.content}>
				<ProductImages images={productImage} />
				<ProductInfo
					product={product}
					showNotification={handleNotification}
				/>
			</div>
		</div>
	);
};

export default SingleProduct;
