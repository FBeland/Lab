import * as React from 'react';
import styles from './SoleilVert.module.scss';
import { IBoardProps, IBoardState } from './ISoleilVertProps';
import { ISquareProps } from './ISquareProps';
import { escape } from '@microsoft/sp-lodash-subset';

/*
const Square: React.SFC<ISquareProps> = (props) => {
  return (
    <button className="square" onClick={props.onClick}>>
      {props.value}
    </button>);
};
*/

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props) {
    super(props);
    /*
    this.state = {
      squares: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      xIsNext: true,
    } as IBoardState;
    */
  }

  public renderSquare(i: number): JSX.Element {
    console.log("renderSquare");
    console.log(this.props.squares[i]);
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onclick(i)} />
    );
  }

  public render(): React.ReactElement<IBoardProps> {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

  private calculateWinner(squares: string[]): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }
}