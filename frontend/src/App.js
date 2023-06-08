import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/navigation/Header/Header";
import UserProvider from "./contexts/UserProvider";
import AdminPanel from "./views/AdminPanel/AdminPanel";
import ChangePassword from "./views/ChangePassword/ChangePassword";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Registration from "./views/Registration/Registration";
import ResetPassword from "./views/ResetPassword/ResetPassword";
import Shop from "./views/Shop/Shop";
import SingleProduct from "./views/SingleProduct/SingleProduct";
import AboutUs from "./views/Static/AboutUs/AboutUs";
import NotFound from "./views/Static/NotFound/NotFound";
import PrivacyAndPolicy from "./views/Static/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsAndConditions from "./views/Static/TermsAndConditions/TermsAndConditions";

function App() {
	return (
		<div className="page-container">
			<BrowserRouter>
				<div className="content-wrap">
					<UserProvider>
						<Header />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="about-us" element={<AboutUs />} />
							<Route
								path="terms-and-conditions"
								element={<TermsAndConditions />}
							/>
							<Route
								path="privacy-policy"
								element={<PrivacyAndPolicy />}
							/>
							<Route
								path="single-product/:id"
								element={<SingleProduct />}
							/>
							<Route path="shop" element={<Shop />} />
							<Route path="login" element={<Login />} />
							<Route
								path="reset-password"
								element={<ResetPassword />}
							/>
							<Route
								path="change-password"
								element={<ChangePassword />}
							/>
							<Route
								path="registration"
								element={<Registration />}
							/>
							<Route path="shop/search" element={<Shop />} />
							<Route
								path="admin-panel"
								element={<AdminPanel />}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</UserProvider>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
