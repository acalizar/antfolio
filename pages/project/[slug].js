import Head from 'next/head'
import PrintMarkdown from '../../components/markdown/PrintMarkdown'
import { getDynamicPageContentBySlug, getAllDynamicPages } from '../../lib/markdown'

export default function DynamicPage({ page }) {
	const {
		featuredImage,
		title,
		subhead,
		description,
		slug,
		content,
	} = page;
	return (
		<div>
			<Head>
				<title>Anthony Calizar | {title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="title">
				<h1 className="header">{title}</h1>
				<h2 className="subhead">{subhead}</h2>
			</div>
			<h2>{description}</h2>
			<PrintMarkdown markdown={content} />
		</div>
	);
}

export async function getStaticProps({ params }) {
	const { slug } = params;

	// Pass in the fields that we want to get
	const page = getDynamicPageContentBySlug(slug, [
		'featuredImage',
		'title',
		'subhead',
		'description',
		'slug',
		'content',
	]);

	return {
		props: {
			page: {
				...page,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllDynamicPages(['slug']);
	const paths = posts.map(({ slug }) => ({
		params: {
			slug,
		},
	}));
	return {
		paths,
		fallback: false,
	};
}