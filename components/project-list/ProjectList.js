import Image from 'next/image'
import Link from 'next/link'
import styles from './project-list.module.scss'
import { getAllDynamicPages } from '../../lib/markdown';

export function RenderProjectList({ projects }) {
	return (
		<div className={`grid ${styles.projectList}`}>
			{projects.map((p) => {
				return (
					<div key={p.title} className="col col-6">
						<div className={styles.card}>
							<Link href={p.redirectLink ? p.redirectLink : '/project/' + p.slug} >
								<a target={p.redirectLink ? '_blank' : '_self'} rel="nofollow">
									<Image
										src={p.featuredImage}
										alt={p.title}
										width={1000}
										height={600}
									/>
									<h4 className={styles.title}>{p.title}</h4>
									<p className={styles.subhead}>{p.subhead}</p>
									<span className="btn btn-blue">View <span className="material-icons">chevron_right</span></span>
								</a>
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export function getProjectList() {
	const fields = ['title', 'slug', 'featuredImage', 'date', 'subhead', 'redirectLink'];
	const dynamicPages = getAllDynamicPages(fields);

	return dynamicPages;
}
