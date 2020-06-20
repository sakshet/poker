import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IPokerHomepageContainerProps } from '../../shared';
import { updateClientId, updateClientName } from './poker-homepage-actions'; 
import { pokerHomepageSelector } from './poker-homepage-selectors';

class PokerHomepageContainer extends React.Component<
	IPokerHomepageContainerProps
> {
	private handleClientName = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.props.updateClientName(event);
  }

	private handleClientId = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.props.updateClientId(event);
	}
	
	render(): JSX.Element {
		return(
			<div>
				<div>Please enter your details</div>
				<div>
					<form>
					<label>
						<div>
							Name: <input type="text" onChange={this.handleClientName} />
						</div>
						<div>
							User ID: <input type="text" onChange={this.handleClientId}/>
						</div>
					</label>
					<input type="submit" value="Submit" />
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