import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SoleilVertWebPartStrings';
import Game from './components/Game';
import { IGameProp } from './components/Game';
import Board from './components/Board';
import { IBoardProps } from './components/ISoleilVertProps';

export interface ISoleilVertWebPartProps {
  description: string;
}

export default class SoleilVertWebPart extends BaseClientSideWebPart<ISoleilVertWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGameProp> = React.createElement(
      Game,
      {
        ok: true,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
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
