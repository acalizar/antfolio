import unified from 'unified';
import parse from 'remark-parse';
import html from 'remark-html';
import styles from './markdown-styles.module.scss';

export default function PrintMarkdown({ markdown }) {

	const content = unified()
	.use(parse)
	.use(html)
	.processSync(markdown);

	return (
		<div className={styles.markdown} dangerouslySetInnerHTML={{__html: content}}>
		</div>
	);
}