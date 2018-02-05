import * as React from 'react';
import styles from './SoleilVert.module.scss';
import { ISoleilVertProps } from './ISoleilVertProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Square from './Square';

export default class Board extends React.Component<ISoleilVertProps, {}> {
  public renderSquare(i: number) : JSX.Element {
    return (<div>ok</div>);
  }
  public render(): React.ReactElement<ISoleilVertProps> {
    return (
      <div className={ styles.soleilVert }>
      </div>
    );
  }
}