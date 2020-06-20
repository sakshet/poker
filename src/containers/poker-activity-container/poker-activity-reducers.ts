import cloneDeep from 'lodash-es/cloneDeep';

import { Reducer } from 'redux';
import { IPokerActivityAction, IPokerActivityContainerState } from '../../shared';

const defaultState: IPokerActivityContainerState = {

};

export const pokerActivityReducer: Reducer< 
	IPokerActivityContainerState,
	IPokerActivityAction
> = (state = defaultState, action): IPokerActivityContainerState => {
	const newState = cloneDeep(state);
	switch(action.type) {
		default:
			return newState;
	}
	return newState;
};