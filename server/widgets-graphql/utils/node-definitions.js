import { nodeDefinitions, fromGlobalId } from 'graphql-relay';

import { WidgetData } from '../models/widget-data';
import { Viewer, Widget } from '../models/graphql-models';


export const { nodeInterface, nodeField } = nodeDefinitions(

  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'WidgetType') {
      const widgetData = new WidgetData('http://localhost:3000/api');
      return widgetData.one(id).then(widget => Object.assign(new Widget(), widget));
    } else if (type === 'ViewerType') {
      return Object.assign(new Viewer(), { id: 1 });
    }
    return null;
  }

);