import cowgirlImage from "../../../assets/images/people/cowgirl-about.jpeg";
import girlImage from "../../../assets/images/people/girl-about.jpeg";
import manImage from "../../../assets/images/people/man-about.jpg";
import MainNavBar from "../../../components/layout/navigation/MainNavBar/MainNavBar";
import Title from "../../../components/layout/Title/Title";
import classes from "./AboutUs.module.scss";

const AboutUs = () => {
	return (
		<div>
			<MainNavBar />
			<Title name="About Us" />
			<div className={classes.aboutcontent}>
				<div className={classes.aboutcontent_text}>
					<h1>About Us</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Duis consequat pretium turpis, in eleifend mi laoreet
						sed. Donec ipsum mauris, venenatis sit amet porttitor
						id, laoreet eu magna. In convallis diam volutpat libero
						tincidunt semper. Ut aliquet erat rutrum, venenatis
						lacus ut, ornare lectus. Quisque congue ex sit amet diam
						malesuada, eget laoreet quam molestie. In id elementum
						turpis. Curabitur quis tincidunt mauris.{" "}
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Duis consequat pretium turpis, in eleifend mi laoreet
						sed. Donec ipsum mauris, venenatis sit amet porttitor
						id, laoreet eu magna. In convallis diam volutpat libero
						tincidunt semper. Ut aliquet erat rutrum, venenatis
						lacus ut, ornare lectus. Quisque congue ex sit amet diam
						malesuada, eget laoreet quam molestie. In id elementum
						turpis. Curabitur quis tincidunt mauris.{" "}
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Duis consequat pretium turpis, in eleifend mi laoreet
						sed. Donec ipsum mauris, venenatis sit amet porttitor
						id, laoreet eu magna. In convallis diam volutpat libero
						tincidunt semper. Ut aliquet erat rutrum, venenatis
						lacus ut, ornare lectus. Quisque congue ex sit amet diam
						malesuada, eget laoreet quam molestie. In id elementum
						turpis. Curabitur quis tincidunt mauris.{" "}
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Duis consequat pretium turpis, in eleifend mi laoreet
						sed. Donec ipsum mauris, venenatis sit amet porttitor
						id, laoreet eu magna. In convallis diam volutpat libero
						tincidunt semper. Ut aliquet erat rutrum, venenatis
						lacus ut, ornare lectus. Quisque congue ex sit amet diam
						malesuada, eget laoreet quam molestie. In id elementum
						turpis. Curabitur quis tincidunt mauris.{" "}
					</p>
				</div>
				<div className={classes.aboutcontent_imagegrid}>
					<img src={girlImage} alt="girl" id={classes.first} />
					<img src={cowgirlImage} alt="cowgirl" id={classes.second} />
					<img src={manImage} alt="man" id={classes.third} />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
