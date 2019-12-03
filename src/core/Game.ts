import { IGameCtx } from 'boardgame.io/core';

import { Card, Deck } from './models';
import { isSet, findSets } from './arbiter';


export const SIZE = 12;

type GameState = {
  deck: Deck,
  board: number[],
  next: number,
};


const Game = ({
  setup: (ctx: IGameCtx): GameState => ({
    deck: new Deck(ctx.random.Shuffle),
    board: [...Array(SIZE).keys()],
    next: SIZE,
  }),

  moves: {
    check: (G: GameState, ctx: IGameCtx, picked: Card[]) => {
      if (!isSet(picked)) return G;

      // let scores = [...G.scores];
      // scores[ctx.currentPlayer]++;

      let next = G.next;
      let board = [...G.board];
      for (let pos of board) {
        const card = G.deck.get(pos);
        if (picked.includes(card)) board[pos] = next++;
      }

      return { ...G, board };
    },

    hint: (G: GameState, ctx: IGameCtx) => {
      let cards = [];
      for (let pos of G.board) cards.push(G.deck.get(pos));

      findSets(cards);

      return G;
    }
  },
});

export default Game;
