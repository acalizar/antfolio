import React from 'react';
import styles from './header-overlay.module.scss'

export default class HeaderOverlay extends React.Component {

	state = {
		blockItems: []
	}

	componentDidMount() {
		const blockItemGenerator = () => {
			let items = [];
			for (let i = 0; i < 9; i++) {
				items.push(this.randomBlock());
			}
			return items;
		}
		this.setState({ blockItems: blockItemGenerator() });

		this.setState({
			scrollY: window.scrollY
		});

		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		this.setState({
			scrollY: window.scrollY
		});
	}

	randomBlock = () => {

		const redRange = [10, 15];
		const greenRange = [15, 30];
		const blueRange = [60, 90];

		let r = Math.random() * (redRange[1] - redRange[0]) + redRange[0];
		let g = Math.random() * (greenRange[1] - greenRange[0]) + greenRange[0];
		let b = Math.random() * (blueRange[1] - blueRange[0]) + blueRange[0];
		let rgb = [r, g, b];

		let color = "linear-gradient(to right, rgb(" + rgb.toString() + "), rgb(" + Math.round((rgb[0] * .7)) + "," + Math.round((rgb[1] * .7)) + "," + Math.round((rgb[2] * .7)) + "))";
		let size = 'calc(20% + ' + Math.round((Math.floor(Math.random() * 2500))) + 'px)';
		let styles = { background: color, width: size, boxShadow: '0px 0px 100px -10px rgba(0,0,0,.5)' };
		return styles;
	}

	render() {
		return (
			<div className={styles.container + (this.state.scrollY < 750 ? ` ${styles.active}` : '') }>
				<div className={styles["block-row"]}>
					<div className={styles["block-item"]} style={this.state.blockItems[0]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[1]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[2]}></div>
				</div>
				<div className={styles["block-row"]}>
					<div className={styles["block-item"]} style={this.state.blockItems[3]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[4]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[5]}></div>
				</div>
				<div className={styles["block-row"]}>
					<div className={styles["block-item"]} style={this.state.blockItems[6]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[7]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[8]}></div>
				</div>
				<div className={styles["block-row"]}>
					<div className={styles["block-item"]} style={this.state.blockItems[2]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[0]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[1]}></div>
				</div>
				<div className={styles["block-row"]}>
					<div className={styles["block-item"]} style={this.state.blockItems[5]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[3]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[4]}></div>
				</div>
				<div className={styles["block-row"]}>
					<div className={styles["block-item"]} style={this.state.blockItems[8]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[6]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[7]}></div>
				</div>
				<div className={styles["block-row"]}>
					<div className={styles["block-item"]} style={this.state.blockItems[1]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[2]}></div>
					<div className={styles["block-item"]} style={this.state.blockItems[0]}></div>
				</div>
			</div>
		)
	}
}
