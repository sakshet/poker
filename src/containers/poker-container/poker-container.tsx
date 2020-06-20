import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Pages } from '../../shared';
import { PokerActivityContainer } from '../poker-activity-container/';
import { PokerHomepageContainer, pokerHomepageReducer as pokerHomepage } from '../poker-homepage-container';
export interface IPokerContainerProps {
	history?: History;
}

type IPokerContainerState= {
	isFetching: boolean;
}

const sagaMiddleware = createSagaMiddleware();
export class PokerContainer extends React.Component<
	IPokerContainerProps,
	IPokerContainerState
> {/*
	private store = createStore(
		combineReducers({
			homepage: combineReducers({
				activity: pokerHomepage,
			}),
			poker: combineReducers({
				activity: pokerActivity
			})
		})
	);*/
	private middleware = [logger, sagaMiddleware];
	private store = createStore(pokerHomepage, applyMiddleware(...this.middleware));
	render(): JSX.Element {
		return(
			<Provider store={this.store}>
				<BrowserRouter>
					<Switch>
						<Route exact path={Pages.HOMEPAGE_ACTIVITY} component={PokerHomepageContainer} />
						<Route exact path={Pages.POKER_ACTIVITY} component={PokerActivityContainer} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}