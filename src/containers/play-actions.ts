export const GET_NUMBER_OF_PLAYERS: string = 'GET_NUMBER_OF_PLAYERS';
export const REQ_GET_NUMBER_OF_PLAYERS: string = `REQ_${GET_NUMBER_OF_PLAYERS}`;

export const getNumberOfPlayers = (numberOfPlayers: number) => {
    return {
        numberOfPlayers,
        type: REQ_GET_NUMBER_OF_PLAYERS
    }
};