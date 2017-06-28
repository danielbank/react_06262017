import { nodeDefinitions, fromGlobalId } from 'graphql-relay';

export const { nodeInterface, nodeField } = nodeDefinitions(

  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'WidgetType') {
      return getWidget(id);
    } else if (type === 'Viewer') {
      return getViewer(id);
    }
    return null;
  }

);