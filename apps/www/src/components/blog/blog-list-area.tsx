import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getBlogCategory } from "../../data/blog-categories";
import { getPostsByCategory } from "../../data/blog-posts";
import usePagination from "../../hooks/usePagination";
import type { BlogPost } from "../../types/blog";
import Pagination from "../pagination";
import BlogListItem from "./blog-list-item";
import BlogSidebar from "./blog-sidebar";

export default function BlogListArea() {
	const [searchParams] = useSearchParams();
	const requestedCategory = searchParams.get("category");
	const activeCategory = requestedCategory
		? getBlogCategory(requestedCategory)?.id
		: undefined;
	const posts = useMemo(
		() => getPostsByCategory(activeCategory),
		[activeCategory],
	);
	const { currentItems, handlePageClick, pageCount } = usePagination<BlogPost>(
		posts,
		3,
	);

	return (
		<section className="blog__area space">
			<div className="container">
				<div className="blog__inner-wrap">
					<div className="row">
						<div className="col-70">
							<div className="blog-post-wrap">
								{currentItems.length > 0 ? (
									<div className="row gy-50 gutter-24">
										{currentItems.map((post) => (
											<div key={post.slug} className="col-md-12">
												<BlogListItem post={post} />
											</div>
										))}
									</div>
								) : (
									<p className="blog-empty-state">
										No articles have been published
										{activeCategory ? " in this category" : " yet"}.
									</p>
								)}
								{pageCount > 1 && (
									<div className="pagination-wrap mt-50">
										<nav aria-label="Blog pagination">
											<Pagination
												handlePageClick={handlePageClick}
												pageCount={pageCount}
											/>
										</nav>
									</div>
								)}
							</div>
						</div>
						<div className="col-30">
							<BlogSidebar activeCategory={activeCategory} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
