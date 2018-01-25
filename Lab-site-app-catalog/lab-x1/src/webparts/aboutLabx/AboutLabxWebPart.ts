import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'AboutLabxWebPartStrings';
import AboutLabx from './components/AboutLabx';
import { IAboutLabxProps } from './components/IAboutLabxProps';

export interface IAboutLabxWebPartProps {
  description: string;
}

export default class AboutLabxWebPart extends BaseClientSideWebPart<IAboutLabxWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAboutLabxProps > = React.createElement(
      AboutLabx,
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
