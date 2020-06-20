import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Pages } from '../../shared';
import { PokerActivityContainer, pokerActivityReducer as pokerActivity, PokerHomepageContainer } from '../../containers';
export interface IPokerContainerProps {
	history: History;
}

type IPokerContainerState= {
	isFetching: boolean;
}

export class PokerContainer extends React.Component<
	IPokerContainerProps,
	IPokerContainerState
> {
	private store = createStore(pokerActivity);
	render(): JSX.Element {
		return(
			<Provider store={this.store}>
				<Route exact path={Pages.HOMEPAGE_ACTIVITY} component={PokerHomepageContainer} />
				<Route exact path={Pages.POKER_ACTIVITY} component={PokerActivityContainer} />
			</Provider>
		);
	}
}