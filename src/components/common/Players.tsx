import React from 'react';
import { IPlayers } from '../../shared/types';

class Players extends React.Component<IPlayers> {
    render(): JSX.Element {
        const { numberOfPlayers } = this.props;
        return (
            <div>
                {numberOfPlayers}
            </div>
        )
    }
}

export default Players;