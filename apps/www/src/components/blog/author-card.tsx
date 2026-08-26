import type { Author } from "../../types/blog";

type AuthorCardProps = {
	author: Author;
};

export default function AuthorCard({ author }: AuthorCardProps) {
	return (
		<aside className="blog__avatar-wrap" aria-label={`About ${author.name}`}>
			<div className="blog__avatar-img">
				<img src={author.image} alt={author.name} />
			</div>
			<div className="blog__avatar-info">
				<h4 className="name">{author.name}</h4>
				<p className="author-role">{author.role}</p>
				<p>{author.bio}</p>
			</div>
		</aside>
	);
}
