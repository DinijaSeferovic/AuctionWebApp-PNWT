import { Link } from "react-router-dom";
import "./Icon.scss";

const Icon = ({ src, alt = "", size = "small", href, isExternal = false }) => {
	const IconImage = () => {
		return (
			<img
				src={src}
				alt={alt}
				className={`icon_${size}${href ? "" : "_unlinked"}`}
			/>
		);
	};

	return (
		<div>
			{isExternal
				? href && (
						<a href={href} target="_blank" rel="noreferrer">
							<IconImage />
						</a>
				  )
				: href && (
						<Link to={href} target="_self">
							<IconImage />
						</Link>
				  )}
			{!href && <IconImage />}
		</div>
	);
};

export default Icon;
