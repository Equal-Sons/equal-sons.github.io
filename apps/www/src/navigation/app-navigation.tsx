import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";
import BackToTop from "../components/back-to-top";
import Contact from "../pages/contact";
import NotFoundPage from "../pages/not-found";
import ServicePage from "../pages/service";
import Home from "../pages/home";
import AboutPage from "../pages/about";
import WorkPage from "../pages/work";
import WorkDetailsPage from "../pages/work-details";
import BuildPillarPage from "../pages/services/build";
import LeadPillarPage from "../pages/services/lead";
import SharePillarPage from "../pages/services/share";
import ServiceDetailsPage from "../pages/service-details";
import FreeWebsiteInitiative from "../pages/free-website-initiative";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blog-details";

export default function AppNavigation() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/services" element={<ServicePage />} />
				<Route path="/services/build" element={<BuildPillarPage />} />
				<Route path="/services/lead" element={<LeadPillarPage />} />
				<Route path="/services/share" element={<SharePillarPage />} />
				<Route
					path="/services/:pillar/:slug"
					element={<ServiceDetailsPage />}
				/>
				<Route path="/work" element={<WorkPage />} />
				<Route path="/work/:slug" element={<WorkDetailsPage />} />
				<Route
					path="/your-business-deserves-a-website"
					element={<FreeWebsiteInitiative />}
				/>
				<Route path="/contact" element={<Contact />} />

				<Route path="/blog" element={<Blog />} />
				<Route path="/blog-details/:id" element={<BlogDetails />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<BackToTop />
		</BrowserRouter>
	);
}
