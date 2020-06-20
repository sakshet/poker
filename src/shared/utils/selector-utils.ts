import { IApplicationState } from '../../shared';

export function createPokerHomepageSelector(property: string) {
  return(state: IApplicationState) => {
    return state.poker.homepage[property];
  }
}