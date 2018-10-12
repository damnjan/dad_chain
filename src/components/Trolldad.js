import * as React from 'react';
import PropTypes from 'prop-types';
import trolldad from '../trolldad.png';
import styles from './Trolldad.module.css';

export default class Trolldad extends React.PureComponent {
	render() {
		const classNames = ` ${styles.image} ${styles.animated}`;
		return <img alt="trolldad" src={trolldad} className={classNames} />
	}
}