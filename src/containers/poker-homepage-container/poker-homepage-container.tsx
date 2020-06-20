import * as React from 'react';
import { Field } from 'redux-form';
export class PokerHomepageContainer extends React.Component {
	render(): JSX.Element {
		return(
			<div>
				<form>
					<div>
						<label>Name</label>
						<Field name="Name" component="input" type="text" />
					</div>
					<div>
						<label>ID</label>
						<Field name="ID" component="input" type="text" />
					</div>
				</form>
			</div>
		);
	}
}