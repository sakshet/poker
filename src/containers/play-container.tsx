import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Deck from '../components/common/Deck';
import Players from '../components/common/Players';
import { getNumberOfPlayers } from '../containers/play-actions';
import { IGameProps } from '../shared/types';
import { playSelector } from '../containers/play-selector';

class PlayContainer extends React.Component<IGameProps> {
    /*
    constructor(props) {
        super(props);
    }
    */
    render(): JSX.Element {
        const { numberOfPlayers } = this.props;
        return (
            <div>
                <Deck />
                <Players numberOfPlayers={numberOfPlayers} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    getNumberOfPlayers
};

export const connectedPlayContainer = withRouter(
    connect(
        playSelector,
        mapDispatchToProps
    )(PlayContainer)
);

export default PlayContainer;