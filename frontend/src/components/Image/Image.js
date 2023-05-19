import { Link } from "react-router-dom";
import "./Image.scss";

const Image = ({ src, alt = "", size = "large", href, onClick }) => {
	return href ? (
		<div>
			<Link to={href} target="_self">
				<img
					src={src}
					alt={alt}
					className={`image_${size}`}
					onClick={onClick}
				/>
			</Link>
		</div>
	) : (
		<div>
			<img
				src={src}
				alt={alt}
				className={`image_${size}`}
				onClick={onClick}
			/>
		</div>
	);
};

export default Image;
