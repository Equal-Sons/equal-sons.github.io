import type { IMenuDT } from "../types/menu-d-t";

const menu_data_two: IMenuDT[] = [
  {
    id: 1,
    title: "HOME",
    isActive: true,
    subMenuItems: [
      { id: 1, label: "Digital Agency", link: "/" },
      { id: 2, label: "Creative Agency", link: "/home-2" },
      { id: 3, label: "Design Studio", link: "/home-3" },
      { id: 4, label: "Digital Marketing", link: "/home-4" },
      { id: 5, label: "Modern Agency", link: "/home-5" },
      { id: 6, label: "Creative Studio", link: "/home-6" },
      { id: 7, label: "Startup Agency", link: "/home-7" },
      { id: 8, label: "Personal Portfolio", link: "/home-8" },
      { id: 9, label: "Portfolio Showcase", link: "/home-9" },
      { id: 10, label: "Interactive Link", link: "/home-10" },
      { id: 11, label: "Showcase Carousal", link: "/home-11" },
      { id: 12, label: "Fullscreen Slideshow ", link: "/home-12" },
      { id: 13, label: "Branding Agency ", link: "/home-13" },
      { id: 14, label: "Marketing Agency", link: "/home-14" },
      { id: 15, label: "Web Studio", link: "/home-15" },
      { id: 16, label: "Agency Classic", link: "/home-16" },
      { id: 17, label: "AI Startup", link: "/home-17" },
      { id: 18, label: "Agency Shop", link: "/home-18" },
    ],
  },
  {
    id: 2,
    title: "PAGES",
    subMenuItems: [
      { id: 1, label: "About Page", link: "/about" },
      {
        id: 2,
        title: "Service Page",
        subMenuItems: [
          { id: 1, label: "Service Version 1", link: "/service" },
          { id: 2, label: "Service Version 2", link: "/service-2" },
          { id: 3, label: "Service Version 3", link: "/service-3" },
          { id: 4, label: "Service Details Page", link: "/service-details", },
        ],
      },
      { id: 3, label: "Team Page", link: "/team" },
      { id: 4, label: "Team Details Page", link: "/team-details/2" },
      { id: 5, label: "Pricing Page", link: "/pricing" },
      {
        id: 6,
        title: "Shop",
        subMenuItems: [
          { id: 1, label: "Shop Page", link: "/shop" },
          { id: 2, label: "Shop Details", link: "/shop-details/2" },
          { id: 3, label: "Cart Page", link: "/cart" },
          { id: 4, label: "Checkout", link: "/checkout", },
        ],
      },
      { id: 7, label: "FAQ Page", link: "/faq" },
      { id: 8, label: "Error Page", link: "/error" },
    ],
  },
  {
    id: 3,
    title: "PORTFOLIO",
    subMenuItems: [
      { id: 1, label: "Portfolio Masonary", link: "/project" },
      { id: 2, label: "Portfolio Pinterest", link: "/project-2" },
      { id: 3, label: "Portfolio Gallery", link: "/project-3" },
      { id: 4, label: "Portfolio Full Width", link: "/project-4" },
      { id: 5, label: "Portfolio Slider", link: "/project-5" },
      { id: 6, label: "Portfolio Interactive", link: "/project-6" },
      { id: 7, label: "Portfolio Details", link: "/project-details" },
    ],
  },
  {
    id: 4,
    title: "BLOG",
    subMenuItems: [
      { id: 1, label: "Blog Standard", link: "/blog" },
      { id: 2, label: "Blog 2 Column", link: "/blog-2" },
      { id: 3, label: "Blog Details", link: "/blog-details/5" },
    ],
  },
  {
    id: 5,
    title: "CONTACT",
    link: "/contact",
  },
];

export default menu_data_two;
