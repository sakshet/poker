import * as React from 'react';
import { ActionBar, Header, Table } from '../../components';
import { IPokerActivityContainerProps } from '../../shared';

export class PokerActivityContainer extends React.Component<IPokerActivityContainerProps> {
	render(): JSX.Element {
		const { 
			balance,
			clientName,
			showCheck
		} = this.props;
		return (
			<div>
				<Header
					balance={balance}
					clientName={clientName}             
				/>
				<Table />
				<ActionBar
					showCheck={showCheck}
				/>
			</div>
		);
	}
}