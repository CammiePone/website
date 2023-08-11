import { getBlogPosts } from "../../util/blog-posts";
import { JSDOM } from "jsdom";

function truncateString(str, maxLength) {
	if(str.length <= maxLength)
		return str;
	
	var truncatedStr = str.substr(0, maxLength);
	
	if(truncatedStr.charAt(truncatedStr.length - 1) !== ' ')
		truncatedStr = truncatedStr.substr(0, truncatedStr.lastIndexOf(' '));
	
	return truncatedStr + "...";
}

function getDescription(html) {
	let body = '';
	const doc = new JSDOM(html, {contentType: 'text/html'});
	const firstParagraph = doc.window.document.querySelector('p');
	
	if(firstParagraph)
		body = truncateString(firstParagraph.textContent, 160);

	return body;
}

export async function GET() {
	const data = getBlogPosts();
	const posts = Object.entries(data).map(([slug, post]) => { return { slug, frontmatter: post.frontmatter, html: post.html } });
	const body = render(data);
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/rss+xml',
	};

	return new Response(body, {headers});
}

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<atom:link href="https://cammiescorner.dev/rss.xml" rel="self" type="application/rss+xml" />
		<title>Cammie's Corner</title>
		<link>https://cammiescorner.dev</link>
		<description>Cammie's Blog</description>
		${Object.entries(posts)
			.map(
				([slug, post]) => `
				<item>
					<title>${post.frontmatter.title}</title>
					<link>https://cammiescorner.dev/blog/${slug}</link>
					<pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
					<content:encoded>${getDescription(post.html)}
						<div style="margin-top: 50px; font-style: italic;">
							<strong>
							<a href="https://cammiescorner.dev/blog/${slug}">
								[Keep reading]
							</a>
							</strong>  
						</div>
				  	</content:encoded>
				</item>`
			)
		.join('')}
	</channel>
</rss>`;