import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IPokerHomepageContainerProps, IPokerHomepageContainerState } from '../../shared';
import { updateClientId, updateClientName } from './poker-homepage-actions'; 
import { pokerHomepageSelector } from './poker-homepage-selectors';

class PokerHomepageContainer extends React.Component<
	IPokerHomepageContainerProps
> {
	readonly state: IPokerHomepageContainerState = {
		clientId: "",
		clientName: ""
	};

	constructor(props) {
		super(props);
		this.handleClientId = this.handleClientId.bind(this);
		this.handleClientName = this.handleClientName.bind(this);
	}

	private handleClientName = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ [ event.target.name]: event.target.value });
		this.props.updateClientName(event);
  }

	private handleClientId = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ [ event.target.name]: event.target.value });
		this.props.updateClientId(event);
	}
	
	private handleSubmit = (): void => {
		const { clientId, history } = this.props;
		history.push({
			pathname: `/poker/${clientId}`
		});
	}

	render(): JSX.Element {
		return(
			<div>
				<div>Please enter your details</div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<div>
							Name: 
							<input
								name="clientName"
								onChange={this.handleClientName}
								placeholder="Name"
								type="text"
								value={this.state.clientName}
							/>
						</div>
						<div>
							User ID:
							<input
								name="clientId"
								onChange={this.handleClientId}
								placeholder="ID"
								type="text"
								value={this.state.clientId}
							/>
						</div>
						<input type = "submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}
const mapDispatchToProps = {
	updateClientId,
	updateClientName
};

export default withRouter(
	connect(
		pokerHomepageSelector,
		mapDispatchToProps
	)(PokerHomepageContainer)
);

export { PokerHomepageContainer };