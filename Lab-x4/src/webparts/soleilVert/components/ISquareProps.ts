import * as React from 'react';

export interface ISquareProps {
  value: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export interface ISquareState {
  value: string;
}
