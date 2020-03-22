import { createStructuredSelector } from 'reselect';
export const numberOfPlayersSelector = () => {

}

export const playSelector = createStructuredSelector({
    numberOfPlayers: numberOfPlayersSelector
});