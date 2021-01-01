import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

/**
 * _pages and _pages/project directory where the markdown content will live
 * _pages will have the home.md (aka index or /)
 * _pages/project will be home to all other pages (aka [slug].js)
 */
const pagesDirectory = join(process.cwd(), '_pages');
const projectDirectory = join(pagesDirectory, 'project');

/**
 * Gets all the files (slugs) in a directory
 */
export function getSlugsFromDirectory(dir) {
	return fs.readdirSync(dir);
}

/**
 * Gets the contents of a file
 * The gray-matter (metadata at the top of the file) will be
 * added to the item object, the content will be in
 * item.content and the file name (slug) will be in item.slug.
 */
export function getBySlug(dir, slug, fields = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(dir, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (data[field]) {
			items[field] = data[field];
		}
	});

	return items;
}

/**
 * Returns contents of a page in the _pages directory
 */
export function getPageContentBySlug(slug, fields = []) {
	return getBySlug(pagesDirectory, slug, fields);
}

/**
 * Returns contents of a page in the _pages/dynamic directory
 */
export function getDynamicPageContentBySlug(slug, fields = []) {
	return getBySlug(projectDirectory, slug, fields);
}

/**
 * Returns a list of all the pages in the _pages/dynamic directory
 */
export function getAllDynamicPages(fields = []) {
	const slugs = getSlugsFromDirectory(projectDirectory);
	const pages = slugs.map((slug) => getDynamicPageContentBySlug(slug, fields));

	pages.sort(function(a, b) {
		var keyA = new Date(a.date),
			keyB = new Date(b.date);
		// Compare the 2 dates
		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	}).reverse();

	return pages;
}