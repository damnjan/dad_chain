import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default class Button extends React.PureComponent {
	static propTypes = {
		onClick: PropTypes.func,
		children: PropTypes.any,
		visible: PropTypes.bool,
	};

	render() {
		const { onClick, children, visible } = this.props;
		const customStyle = !visible ? {visibility: 'hidden'} : {};
		return (
			<div className={styles.button} style={customStyle} onClick={onClick}>{children}</div>
		)
	}
}