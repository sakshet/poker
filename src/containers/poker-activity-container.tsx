import * as React from 'react';
import { ActionBar, Header, Table } from '../components';
import { IPokerActivityContainerProps } from '../shared';

class PokerActivityContainer extends React.Component<IPokerActivityContainerProps> {
	render(): JSX.Element {
		const { 
			balance,
			clientName
		} = this.props;
		return (
			<div>
				<Header 
					balance={this.props.balance}
					clientName={this.props.clientName}             
				/>
				<Table />
				<ActionBar />
			</div>
		);
	}
}