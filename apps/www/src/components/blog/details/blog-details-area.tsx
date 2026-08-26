import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import { getAuthor } from "../../../data/authors";
import { getBlogCategory } from "../../../data/blog-categories";
import { formatPublishedDate } from "../../../data/blog-posts";
import type { AdjacentPosts, BlogPost } from "../../../types/blog";
import AuthorCard from "../author-card";
import BlogSidebar from "../blog-sidebar";

type BlogDetailsAreaProps = {
	blog: BlogPost;
	adjacentPosts: AdjacentPosts;
};

export default function BlogDetailsArea({
	blog,
	adjacentPosts,
}: BlogDetailsAreaProps) {
	const author = getAuthor(blog.authorId);
	const category = getBlogCategory(blog.categoryId);

	if (!author || !category) return null;

	return (
		<section className="blog__details-area space">
			<div className="container">
				<div className="blog__inner-wrap">
					<div className="row">
						<div className="col-70">
							<article className="blog__details-wrap">
								{blog.image && (
									<div className="blog__details-thumb">
										<img src={blog.image} alt={blog.imageAlt ?? blog.title} />
									</div>
								)}
								<div className="blog__details-content">
									<div className="blog-post-meta">
										<ul className="list-wrap">
											<li>{formatPublishedDate(blog.publishedAt)}</li>
											<li>
												<NavLink to={`/blog?category=${category.id}`}>
													{category.name}
												</NavLink>
											</li>
											<li>by {author.name}</li>
										</ul>
									</div>
									<h1 className="title">{blog.title}</h1>
									<div className="blog__markdown">
										<ReactMarkdown>{blog.content}</ReactMarkdown>
									</div>
									{blog.tags.length > 0 && (
										<div className="blog__details-bottom">
											<div className="post-tags">
												<ul className="list-wrap">
													{blog.tags.map((tag) => (
														<li key={tag}>{tag}</li>
													))}
												</ul>
											</div>
										</div>
									)}
									{(adjacentPosts.previous || adjacentPosts.next) && (
										<nav
											className="inner__page-nav"
											aria-label="Article navigation"
										>
											{adjacentPosts.previous ? (
												<NavLink
													to={`/blog/${adjacentPosts.previous.slug}`}
													className="nav-btn"
												>
													<i className="fa fa-arrow-left" />
													<span>Previous article</span>
												</NavLink>
											) : (
												<span />
											)}
											{adjacentPosts.next && (
												<NavLink
													to={`/blog/${adjacentPosts.next.slug}`}
													className="nav-btn"
												>
													<span>Next article</span>
													<i className="fa fa-arrow-right" />
												</NavLink>
											)}
										</nav>
									)}
								</div>
								<AuthorCard author={author} />
							</article>
						</div>
						<div className="col-30">
							<BlogSidebar activeCategory={category.id} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
