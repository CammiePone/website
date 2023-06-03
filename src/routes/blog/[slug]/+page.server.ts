export function entries() {
	const files = import.meta.glob("/src/blog-posts/*.md", {as:"raw", eager:false});
	
	return Object.keys(files).map((filename) => { return {slug: filename} });
}

export const prerender = true;