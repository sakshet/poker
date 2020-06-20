import { IPokerHomepageFormAction } from "../../shared";

export const UPDATE_CLIENT_ID: string = 'UPDATE_CLIENT_ID';
export const UPDATE_CLIENT_NAME: string = 'UPDATE_CLIENT_NAME';

export const updateClientId = (
  event: React.ChangeEvent<HTMLInputElement>
): IPokerHomepageFormAction => {
  return {
    clientId: event.target.value,
    type: UPDATE_CLIENT_ID
  };
};

export const updateClientName = (
  event: React.ChangeEvent<HTMLInputElement>
): IPokerHomepageFormAction => {
  return {
    clientName: event.target.value,
    type: UPDATE_CLIENT_NAME
  };
};