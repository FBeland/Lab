import * as React from 'react';
import styles from './AboutLabx.module.scss';
import { IAboutLabxProps } from './IAboutLabxProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class AboutLabx extends React.Component<IAboutLabxProps, {}> {
  public render(): React.ReactElement<IAboutLabxProps> {
    return (
      <div className={ styles.aboutLabx }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>À propos de Lab-x1</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
