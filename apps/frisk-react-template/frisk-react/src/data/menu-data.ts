import type { IMenuDT } from "../types/menu-d-t";

const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "HOME",
    isActive: true,
    mega_menu: [
      {
        id: 1,
        menu_details: [
          { link: "/", title: "Digital Agency", category: "Creative, Design" },
          { link: "home-2", title: "Creative Agency", category: "Digital, Studio", },
          { link: "home-3", title: "Design Studio", category: "Design, Agency", },
          { link: "home-4", title: "Digital Marketing", category: "Marketing, Corporate", },
          { link: "home-5", title: "Modern Agency", category: "Agency, Corporate", },
          { link: "home-6", title: "Creative Studio", category: "Digital, Creative", },
        ]
      },
      {
        id: 2,
        menu_details: [
          { link: "home-7", title: "Startup Agency", category: "Corporate, Startup" },
          { link: "home-8", title: "Personal Portfolio", category: "Project, Showcase" },
          { link: "home-9", title: "Portfolio Showcase", category: "Creative, Portfolio", tag: "New", },
          { link: "home-10", title: "Interactive Link", category: "Project, Design", tag: "New", },
          { link: "home-11", title: "Showcase Carousal", category: "Portfolio, Work", tag: "New", },
          { link: "home-12", title: "Full Screen Slideshow", category: "Slideshow, Project", tag: "New", },
        ]
      },
      {
        id: 3,
        menu_details: [
          { link: "home-13", title: "Branding Agency", category: "Branding, Corporate", tag: "New", },
          { link: "home-14", title: "Marketing Agency", category: "Strategy, Marketing", tag: "New", },
          { link: "home-15", title: "Web Studio", category: "Development, Website", tag: "New", },
          { link: "home-16", title: "Agency Classic", category: "Digital, Startup", tag: "New", },
          { link: "home-17", title: "AI Startup", category: "Solutions, Intelligence", tag: "New", },
          { link: "home-18", title: "Shop Home", category: "Shop, Store", tag: "New", },
        ]
      },
    ]
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

export default menu_data;
