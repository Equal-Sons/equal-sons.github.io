import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";
import BackToTop from "../components/back-to-top";
import Contact from "../pages/contact";
import NotFoundPage from "../pages/not-found";
import ServicePage from "../pages/service";
import Home from "../pages/home";

export default function AppNavigation() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<ServicePage />} />
				<Route path="/contact" element={<Contact />} />

				{/* <Route path="/home-1" element={<HomeOne />} />
				<Route path="/home-2" element={<HomeTwo />} />
				<Route path="/home-3" element={<HomeThree />} />
				<Route path="/home-4" element={<HomeFour />} />
				<Route path="/home-5" element={<HomeFive />} />
				<Route path="/home-6" element={<HomeSix />} />
				<Route path="/home-7" element={<HomeSeven />} />
				<Route path="/home-8" element={<HomeEight />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/service" element={<ServicePage />} />
				<Route path="/service-2" element={<ServicePageTwo />} />
				<Route path="/service-3" element={<ServicePageThree />} />
				<Route path="/service-details" element={<ServiceDetailsPage />} />
				<Route path="/team" element={<TeamPage />} />
				<Route path="/team-details/:id" element={<TeamDetailsPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/faq" element={<FaqPage />} />
				<Route path="/project" element={<Project />} />
				<Route path="/project-2" element={<ProjectTwo />} />
				<Route path="/project-3" element={<ProjectThree />} />
				<Route path="/project-4" element={<ProjectFour />} />
				<Route path="/project-5" element={<ProjectFive />} />
				<Route path="/project-6" element={<ProjectSix />} />
				<Route path="/project-details" element={<ProjectDetails />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog-2" element={<BlogTwo />} />
				<Route path="/blog-details/:id" element={<BlogDetails />} /> */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<BackToTop />
		</BrowserRouter>
	);
}
