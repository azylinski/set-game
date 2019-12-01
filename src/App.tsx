import React from 'react';
import { IBoardProps, Client } from 'boardgame.io/react';

import { Card } from './core/models';
import Game, { ROWS, COLS } from './core/Game';


type BoardState = {
  picked: Set<Card>,
}

class Board extends React.Component<IBoardProps, BoardState> {
  constructor(props: IBoardProps) {
    super(props);
    this.state = { picked: new Set() };
  }

  onClick(card: Card): void {
    let picked = this.state.picked;
    picked.has(card) ? picked.delete(card) : picked.add(card);
    this.setState({ picked });

    if (this.state.picked.size === 3) {
      this.props.moves.check(
        Array.from(this.state.picked)
      );
      this.setState({ picked: new Set() });
      this.props.events.endTurn();
    }
  }

  render() {
    const { deck, board } = this.props.G;

    let tbody = [];
    for (let i = 0; i < ROWS; i++) {
      let row = [];
      for (let j = 0; j < COLS; j++) {
        const pos = 4 * i + j;
        const card = deck.get(board[pos]);
        const imgUrl = `icons/${card}.svg`;
        const cellStyle = {
          backgroundColor: this.state.picked.has(card) ? "grey" : "white"
        }

        row.push(
          <td key={pos} style={cellStyle} onClick={() => this.onClick(card)}>
            <img src={imgUrl} style={{width: "170px"}} alt="Card" />
          </td>
        );
      }
      tbody.push(<tr key={i}>{row}</tr>);
    }

    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
      </div>
    );
  }
}

const App = Client({
  game: Game,
  numPlayers: 1,
  board: Board
});

export default App;
