import * as React from 'react';

export interface IBoardProps {
  squares: Array<string>;
  onclick(index: number);
}

export interface IBoardState {
  description: string;
  squares: Array<string>;
  xIsNext: boolean;
}

export class History {
  constructor() {
    this.squares = [null, null, null, null , null, null, null, null, null];
  }

  public squares: string[];
}

export interface IGameState {
  history: History[];
  xIsNext: boolean;
  stepNumber: number;
}
