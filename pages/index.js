import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
// import { getProjectList } from '../lib/markdown-list';
import {getProjectList, RenderProjectList} from '../components/project-list/ProjectList';

export default function Home({ projects }) {
	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Anthony Calizar</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.container}>
				<div className="title">
					<h1 className="header">
						Anthony Calizar
					</h1>

					<h2 className="subhead">
						Design. Develop. Create.
					</h2>
				</div>
				{/* {paths()} */}
				{/* <div className={styles.intro}>
					<p className={styles.description}>
						Hello! I am a designer and developer based in Bay Area, CA. Starting out as a passionate web and graphic designer, I have grown to love multiple disciplines – specifically around front-end development and UX design. At the end of the day, I simply just like to create. I have a strong background in web development, marketing design, and user experience.
					</p>
					<p>
						<strong>
							<a target="blank" href="https://linkedin.com/in/acalizar" >LinkedIn</a>
						</strong>
					</p>
				</div> */}
				<div className={styles.content}>
					<div className="container">
						<div className="grid">
							<div className={`col-4 ${styles["tile"]}`}>
								<Image
									src="/overview/icon-web-design-dev.svg"
									alt="HTML, CSS, JavaScript, Web Applications"
									width={200}
									height={200}
								/>
								<h3>HTML, CSS, JavaScript, Web Applications</h3>
							</div>
							<div className={`col-4 ${styles["tile"]}`}>
								<Image
									src="/overview/icon-front-end.svg"
									alt="Front-end Development, UI Design"
									width={200}
									height={200}
								/>
								<h3>Front-end Development, UI Design</h3>
							</div>
							<div className={`col-4 ${styles["tile"]}`}>
								<Image
									src="/overview/icon-branding.svg"
									alt="Graphic Design, Marketing, Branding"
									width={200}
									height={200}
								/>
								<h3>Graphic Design, Marketing, Branding</h3>
							</div>
						</div>

						<div className="bg bg-gray">
							<h2 id="featured-projects" className="center">Featured Projects</h2>
							<RenderProjectList projects={projects} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export async function getStaticProps() {

	const projects = getProjectList();

	return {
		props: {
			projects
		}
	};
}