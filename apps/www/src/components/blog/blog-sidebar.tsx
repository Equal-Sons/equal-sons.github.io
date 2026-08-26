import { Link } from "react-router-dom";
import { blogCategories } from "../../data/blog-categories";
import { getPostsByCategory } from "../../data/blog-posts";

type BlogSidebarProps = {
	activeCategory?: string;
};

export default function BlogSidebar({ activeCategory }: BlogSidebarProps) {
	return (
		<aside className="blog__sidebar">
			<div className="sidebar__widget">
				<h2 className="sidebar__widget-title">Categories</h2>
				<div className="sidebar__cat-list">
					<ul className="list-wrap">
						<li>
							<Link
								to="/blog"
								className={!activeCategory ? "active" : undefined}
							>
								All ({getPostsByCategory().length})
							</Link>
						</li>
						{blogCategories.map((category) => (
							<li key={category.id}>
								<Link
									to={`/blog?category=${category.id}`}
									className={
										activeCategory === category.id ? "active" : undefined
									}
								>
									{category.name} ({getPostsByCategory(category.id).length})
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="sidebar__widget">
				<div className="p-4 bg-theme text-white">
					<h2 className="h5 mb-3">Have a project?</h2>
					<p className="mb-3">
						Let's talk about how we can help you meet your goals.
					</p>
					<Link to="/contact" className="btn style-white">
						<span className="link-effect">
							<span className="effect-1">GET IN TOUCH</span>
							<span className="effect-1">GET IN TOUCH</span>
						</span>
					</Link>
				</div>
			</div>
		</aside>
	);
}
