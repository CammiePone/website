import { getBlogPosts } from '../../../util/blog-posts.js';

export async function load({params}) {
	const slug = params.slug;
	const { frontmatter, html } = getBlogPosts()[slug];

	return {
		slug: slug,
		img: frontmatter.img,
		alt: frontmatter.alt,
		title: frontmatter.title,
		date: frontmatter.date,
		body: html
	};
}