import React from 'react';

const suites = ["Clubs", "Diamond", "Heart", "Spade"];
const values = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

class Deck extends React.Component {

    private get retrieveDeck() {
        let deck: string[] = [];
        suites.forEach(suite => (
            values.forEach(value => (
                deck.push(value + " of " + suite)
            ))
        ))
        return deck;
    }

    render() {
        return (
            <div>
                <h2>Deck</h2>
                <h4>
                    {(this.retrieveDeck).join("--")}
                </h4>
            </div>
        );
    }
}

export default Deck;