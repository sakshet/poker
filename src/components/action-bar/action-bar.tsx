import * as React from 'react';
import { IActionBarProps } from '../../shared';
import * as styles from './action-bar.css';
export class ActionBar extends React.Component<IActionBarProps> {
	render(): JSX.Element {
		const { showCheck } = this.props;
		return (
			<div className={styles.actionBar}>
				<button disabled={!showCheck}>
					Check
				</button>
				<button>
					Fold
				</button>
				<button>
					Raise
				</button>
			</div>
		);
	}
}