import { NavLink } from "react-router-dom";
import { getAuthor } from "../../data/authors";
import { getBlogCategory } from "../../data/blog-categories";
import { formatPublishedDate } from "../../data/blog-posts";
import type { BlogPost } from "../../types/blog";
import ResponsiveImage from "../responsive-image";

type BlogListItemProps = {
	post: BlogPost;
};

export default function BlogListItem({ post }: BlogListItemProps) {
	const author = getAuthor(post.authorId);
	const category = getBlogCategory(post.categoryId);

	if (!author || !category) return null;

	return (
		<article className="blog-post-item">
			{post.image && (
				<div className="blog-post-thumb">
					<NavLink to={`/blog/${post.slug}`}>
					<ResponsiveImage
						image={post.image}
						alt={post.imageAlt ?? post.title}
						sizes="(min-width: 1200px) 520px, (min-width: 768px) 50vw, 100vw"
					/>
					</NavLink>
				</div>
			)}
			<div className="blog-post-content">
				<div className="blog-post-meta">
					<ul className="list-wrap">
						<li>{formatPublishedDate(post.publishedAt)}</li>
						<li>
							<NavLink to={`/blog?category=${category.id}`}>
								{category.name}
							</NavLink>
						</li>
						<li>by {author.name}</li>
					</ul>
				</div>
				<h2 className="title">
					<NavLink to={`/blog/${post.slug}`}>{post.title}</NavLink>
				</h2>
				<p>{post.excerpt}</p>
				<NavLink to={`/blog/${post.slug}`} className="link-btn">
					<span className="link-effect">
						<span className="effect-1">READ MORE</span>
						<span className="effect-1">READ MORE</span>
					</span>
					<img src="/assets/img/icon/arrow-left-top.svg" alt="" />
				</NavLink>
			</div>
		</article>
	);
}
