import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IPokerActivityContainerProps } from '../../shared';
import { Table } from '../../components';
class PokerActivityContainer extends React.Component<
	IPokerActivityContainerProps
> {
	
	render(): JSX.Element {
		const { clientId } = this.props.match.params;
		return(
			<div>
				<div>clientId: {clientId}</div>
				<Table />
			</div>
		);
	}
}

const mapDispatchToProps = {
	
};

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(PokerActivityContainer)
);

export { PokerActivityContainer };