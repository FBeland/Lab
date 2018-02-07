import * as React from 'react';
import styles from './SoleilVert.module.scss';
import { ISquareProps, ISquareState } from './ISquareProps';
import { escape } from '@microsoft/sp-lodash-subset';



export default class Square extends React.Component<ISquareProps, ISquareState> {
  public constructor(props: ISquareProps) {
    super(props);
    this.state = {
      value: props.value,
    } as ISquareState;
    console.log(this.state);
  }

  public render(): React.ReactElement<ISquareProps> {
    return (
      <button className="square" onClick={() => this.handleCick()}>
        {this.state.value}
      </button>
    );
  }

  private handleCick() {
    this.setState(i  => {
      i.value = "X";
      return i;
    });
  }
}