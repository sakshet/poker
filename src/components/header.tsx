import * as React from 'react';
import { IHeaderProps } from '../shared';

export class Header extends React.Component<IHeaderProps> {
    render(): JSX.Element {
        const { balance, clientName } = this.props;
        return (
            <div>
                {balance}
                {clientName}
            </div>
        );
    }
}