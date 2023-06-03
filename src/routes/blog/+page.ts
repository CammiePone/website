import { getBlogPosts } from "../../util/blog-posts";

export function load() {
	const posts = getBlogPosts();

	return { posts: Object.entries(posts).map(([slug, post]) => { return { slug, frontmatter: post.frontmatter, html: post.html } }) };
}