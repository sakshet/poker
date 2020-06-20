import cloneDeep from 'lodash-es/cloneDeep';
import { Reducer } from 'redux';
import { IPokerHomepageContainerState, IPokerHomepageFormAction } from '../../shared';
import * as actions from './poker-homepage-actions';

export const defaultState: IPokerHomepageContainerState = {
  clientId: '',
  clientName: ''
};

export const pokerHomepageReducer: Reducer< 
	IPokerHomepageContainerState,
	IPokerHomepageFormAction
> = (
  state: IPokerHomepageContainerState = defaultState, 
  action: IPokerHomepageFormAction
) => {
	const newState = cloneDeep(state);
	switch(action.type) {
    case actions.UPDATE_CLIENT_NAME:
      newState.clientName = action.clientName;
      break;
    case actions.UPDATE_CLIENT_ID:
      newState.clientId = action.clientId;
      break;
		default:
			return newState;
	}
	return newState;
};