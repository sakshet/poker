import { createStructuredSelector } from 'reselect';
import { IPokerHomepageContainerState } from '../../shared';
 
export function createPokerHomepageSelector(property: string) {
  return(state: IPokerHomepageContainerState) => {
    return state[property];
  }
}

export const pokerHomepageSelector = createStructuredSelector<IPokerHomepageContainerState, IPokerHomepageContainerState>({
  clientId: createPokerHomepageSelector('clientId'),
  clientName: createPokerHomepageSelector('clientName')
});