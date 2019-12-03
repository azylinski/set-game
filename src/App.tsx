import React from 'react';
import { IBoardProps, Client } from 'boardgame.io/react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Card } from './core/models';
import Game, { SIZE } from './core/Game';


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

    let cards = [];
    for (let pos = 0; pos < SIZE; pos++) {
      const card = deck.get(board[pos]);
      const imgUrl = `icons/${card}.svg`;
      const cellStyle = {
        backgroundColor: this.state.picked.has(card) ? "grey" : "white"
      }

      cards.push(
        <Grid item key={pos} onClick={() => this.onClick(card)} style={cellStyle}>
          <img className="card-icon" src={imgUrl} style={{width: "170px"}} alt="Card" />
        </Grid>
      );
    }

    return (
      <Container fixed style={{ maxWidth: 900 }}>
        <Grid container spacing={1}>
          {cards}
        </Grid>
      </Container>
    );
  }
}

const App = Client({
  game: Game,
  numPlayers: 1,
  board: Board
});

export default App;
