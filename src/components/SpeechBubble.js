import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './SpeechBubble.module.css';

export default class SpeechBubble extends React.PureComponent {
	static propTypes = {
		text: PropTypes.string
	};

	render() {
		const { text } = this.props;
		return text && (
			<div className={styles.container}>
				{text}
			</div>
		)
	}
}