import { History } from 'history';

export interface IActionBarProps {
	showCheck: boolean;
}

export interface IHeaderProps {
	balance: number;
	clientName: string;
}

export interface IPokerActivityContainerProps {
	balance: number;
	clientName: string;
	showCheck: boolean;
}

export interface IPokerActivityContainerState {
	clientId: string;
	clientName: string;
}

export interface IPokerActivityAction {
	type: string;
}

export interface ITableProps {
	
}

export interface IPokerHomepageContainerProps {
	history?: History;
	updateClientId?: (event: React.ChangeEvent<HTMLInputElement>) => IPokerHomepageFormAction;
	updateClientName?: (event: React.ChangeEvent<HTMLInputElement>) => IPokerHomepageFormAction;
}

export interface IPokerHomepageFormAction {
	clientId?: string;
	clientName?: string;
	type: string;
}

export interface IPokerHomepageContainerState {
	clientId: string;
	clientName: string;
}

export interface IApplicationState {
	poker: {
		homepage?: IPokerHomepageContainerState
	}
}