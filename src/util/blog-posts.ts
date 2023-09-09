import Markdoc from '@markdoc/markdoc';
import yaml from 'js-yaml';

export interface Frontmatter {
	date: Date;
	title: string;
	img: string;
	alt?: string;
}

export interface Post {
	html: string;
	frontmatter: Frontmatter
}

export interface BlogPosts {
	[key: string]: Post;
}

export function getBlogPosts(): BlogPosts {
	const files = import.meta.glob("/src/blog-posts/**/*.md", {as:"raw", eager:true});
	let aaaaa = {};

	for(const [filename, sauce] of Object.entries(files)) {
		const ast = Markdoc.parse(sauce);
		const content = Markdoc.transform(ast);
		const frontmatter = ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {};
		const html = Markdoc.renderers.html(content).replace("<article>", "<article class='space-y-4'>").replaceAll("<img", "<img class='mx-auto'");

		if(frontmatter.date) {
			frontmatter.date = new Date(frontmatter.date);
		}

		aaaaa[filename.substring(filename.lastIndexOf('/') + 1, filename.length - 3)] = { frontmatter, html };
	}

	return aaaaa;
}
