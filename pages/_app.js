import Head from 'next/head'
import '../styles/globals.scss'
import Link from 'next/link'
import HeaderOverlay from '../components/header-overlay/HeaderOverlay'
import Image from 'next/image'

const date = new Date().getFullYear();

function Layout({ Component, pageProps }) {
	return (
		<>
			<Head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-33535507-1"
				/>
				<script
					dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', 'UA-33535507-1');
					`
					}}
				/>
			</Head>
			<nav>
				<Link href="/" >
					<a>
						<span className="logo">
							<Image
								src="/logo.png"
								alt="Anthony Calizar logo"
								width={40}
								height={40}
							/>
						</span>
						Main
					</a>
				</Link>
				<Link href="/contact/">
					<a>Contact</a>
				</Link>
			</nav>
			<main>
				<HeaderOverlay key={Date.now()} />
				<div className="content-wrapper">
					<Component {...pageProps} />
				</div>
			</main>

			<footer className="footer">
				&copy; {date} Anthony Calizar
			</footer>
		</>
	)
}

export default Layout
