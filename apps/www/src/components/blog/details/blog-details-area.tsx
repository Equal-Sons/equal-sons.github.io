import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import typescript from "highlight.js/lib/languages/typescript";
import ReactMarkdown, { type Components } from "react-markdown";
import { NavLink } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
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

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("typescript", typescript);

const languageAliases: Record<string, string> = {
	js: "javascript",
	jsx: "javascript",
	jsonc: "json",
	sh: "bash",
	shell: "bash",
	ts: "typescript",
	tsx: "typescript",
};

const markdownComponents: Components = {
	code: ({ node: _node, className, children, ...props }) => {
		const languageMatch = /language-([\w-]+)/.exec(className ?? "");
		const requestedLanguage = languageMatch?.[1];
		const language = requestedLanguage
			? (languageAliases[requestedLanguage] ?? requestedLanguage)
			: undefined;

		if (!language || !hljs.getLanguage(language)) {
			return (
				<code className={className} {...props}>
					{children}
				</code>
			);
		}

		const highlightedCode = hljs.highlight(
			String(children).replace(/\n$/, ""),
			{
				language,
				ignoreIllegals: true,
			},
		).value;

		return (
			<code
				className={`hljs ${className}`}
				{...props}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Highlight.js escapes source code before returning markup.
				dangerouslySetInnerHTML={{ __html: highlightedCode }}
			/>
		);
	},
	table: ({ node: _node, ...props }) => (
		<section
			className="blog__table-wrap"
			aria-label="Scrollable article table"
			// biome-ignore lint/a11y/noNoninteractiveTabindex: Keyboard users need to focus and scroll wide tables.
			tabIndex={0}
		>
			<table {...props} />
		</section>
	),
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
										<ReactMarkdown
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											components={markdownComponents}
										>
											{blog.content}
										</ReactMarkdown>
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
