import * as React from 'react';
import { Route, Switch } from 'react-router';
import { PokerActivityContainer } from '../../containers';

export class EntryForm extends React.Component {
	render(): JSX.Element {
		return (
			<Switch>
				<Route exact path="/" render={ () => <HomePage />} />
				<Route exact path="/game" render={ () => <PokerActivityContainer />} />
			</Switch>
		);
	}
}