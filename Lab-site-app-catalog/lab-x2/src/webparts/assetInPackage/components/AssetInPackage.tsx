import * as React from 'react';
import styles from './AssetInPackage.module.scss';
import { IAssetInPackageProps } from './IAssetInPackageProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class AssetInPackage extends React.Component<IAssetInPackageProps, {}> {
  public render(): React.ReactElement<IAssetInPackageProps> {
    return (
      <div className={ styles.assetInPackage }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
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
