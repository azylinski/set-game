import React from 'react';
import { IGameCtx } from 'boardgame.io/core';
import { Client } from 'boardgame.io/react';
import Deck from './core/models/Deck';


type GameState = {
  deck: Deck,
  board: Array<number>,
};

interface IProps {
  moves: any;
  events: any;
  isActive: boolean;
  G: GameState;
  ctx: IGameCtx;
}


const Game = ({
  setup: (ctx: IGameCtx) => ({
    deck: new Deck(ctx.random.Shuffle),
    board: [...Array(12).keys()],
  }),

  moves: {
    clickCell: (G: GameState, ctx: IGameCtx, id: number) => {
      // G.cells[id] = ctx.currentPlayer;
    },
  },
});

class Board extends React.Component<IProps> {
  onClick(id: number) {
    // TODO
  }

  render() {
    const { deck, board } = this.props.G;

    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 4; j++) {
        const pos = 4 * i + j;
        const card = deck.get(board[pos]);
        const imgUrl = `icons/${card}.svg`;

        row.push(
          <td key={pos}>
            <img src={imgUrl} alt="Card" />
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
  board: Board
});

export default App;
