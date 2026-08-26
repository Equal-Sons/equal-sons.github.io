export type Author = {
	id: string;
	name: string;
	role: string;
	image: string;
	bio: string;
};

export type BlogCategory = {
	id: string;
	name: string;
};

export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	publishedAt: string;
	authorId: string;
	categoryId: string;
	image?: string;
	imageAlt?: string;
	tags: string[];
	draft: boolean;
	content: string;
};

export type AdjacentPosts = {
	previous?: BlogPost;
	next?: BlogPost;
};
