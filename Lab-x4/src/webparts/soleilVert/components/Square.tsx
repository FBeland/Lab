import * as React from 'react';
import styles from './SoleilVert.module.scss';
import { ISquareProps } from './ISquareProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Square extends React.Component<ISquareProps, {}> {
  
  public render(): React.ReactElement<ISquareProps> {
    return (
      <button className="square">
        {this.props.value}
      </button> 
    );
  }
}