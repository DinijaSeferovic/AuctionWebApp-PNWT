import React, { useEffect, useState } from "react";
import Image from "../../Image/Image";
import classes from "./ProductImages.module.scss";

const ProductImages = ({ images }) => {
	const [selectedImg, setSelectedImg] = useState(images[0].imagePath);

	useEffect(() => {
		setSelectedImg(images[0].imagePath);
	}, [images]);

	return (
		<div className={classes.container}>
			<Image
				src={require(`../../../assets/images${selectedImg}`)}
				alt=""
				size="xxlarge"
				className={classes.container_selected}
			/>
			<div className={classes.container_images}>
				{images.map((img, index) => (
					<div className={classes.container_images_alt} key={index}>
						<Image
							src={require(`../../../assets/images${img.imagePath}`)}
							alt=""
							size="xsmall"
							onClick={() => setSelectedImg(img.imagePath)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductImages;
