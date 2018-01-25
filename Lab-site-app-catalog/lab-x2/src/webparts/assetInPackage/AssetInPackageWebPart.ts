import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'AssetInPackageWebPartStrings';
import AssetInPackage from './components/AssetInPackage';
import { IAssetInPackageProps } from './components/IAssetInPackageProps';

export interface IAssetInPackageWebPartProps {
  description: string;
}

export default class AssetInPackageWebPart extends BaseClientSideWebPart<IAssetInPackageWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAssetInPackageProps > = React.createElement(
      AssetInPackage,
      {
        description: this.dataVersion.toString()
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse(this.context.manifest.version);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
