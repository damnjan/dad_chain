import React, { Component } from 'react';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { requestJokes, generateJoke } from "../actions";
import SpeechBubble from "./SpeechBubble";
import Trolldad from "./Trolldad";
import Button from "./Button";

class App extends Component {

	generateJoke = () => {
		const { allJokes } = this.props;
		this.props.dispatch(generateJoke(allJokes));
	};

	componentDidMount() {
		this.props.dispatch(requestJokes());
	}

	render() {
		const { currentJoke, isFetching } = this.props;
		const placeholderText = `Ok, I'm ready. Press 'Generate joke' button and try not to laugh.`;
		return (
			<div className={styles.app}>
				<div className={styles.container}>
					<SpeechBubble text={isFetching ? 'Downloading some jokes... Wait!' : currentJoke || placeholderText}/>
					<div className={styles.bottom}>
						<Button visible={!isFetching} onClick={this.generateJoke}>Generate joke</Button>
						<Trolldad key={currentJoke}/>{/* Key is used to force re-render in order to trigger the animation */}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	allJokes: state.jokes.allJokes,
	currentJoke: state.jokes.currentJoke,
	isFetching: state.jokes.isFetching,
});

export default connect(mapStateToProps)(App);
