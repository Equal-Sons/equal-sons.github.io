import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";
import HomeOne from "../pages/home-1";
import HomeTwo from "../pages/home-2";
import HomeThree from "../pages/home-3";
import HomeFour from "../pages/home-4";
import HomeFive from "../pages/home-5";
import BackToTop from "../components/back-to-top";
import HomeSix from "../pages/home-6";
import HomeSeven from "../pages/home-7";
import HomeEight from "../pages/home-8";
import Contact from "../pages/contact";
import Blog from "../pages/blog";
import BlogTwo from "../pages/blog-two";
import BlogDetails from "../pages/blog-details";
import Project from "../pages/project";
import ProjectTwo from "../pages/project-2";
import ProjectThree from "../pages/project-3";
import ProjectFour from "../pages/project-4";
import ProjectFive from "../pages/project-5";
import ProjectSix from "../pages/project-6";
import ProjectDetails from "../pages/project-details";
import AboutPage from "../pages/about";
import TeamPage from "../pages/team";
import TeamDetailsPage from "../pages/team-details";
import PricingPage from "../pages/pricing";
import FaqPage from "../pages/faq";
import NotFoundPage from "../pages/not-found";
import ServicePage from "../pages/service";
import ServicePageTwo from "../pages/service-2";
import ServicePageThree from "../pages/service-3";
import ServiceDetailsPage from "../pages/service-details";
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
