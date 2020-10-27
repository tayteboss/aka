import { BsLayoutSidebar } from 'react-icons/bs';

export default {
  title: 'Panels',
  name: 'panels',
  type: 'document',
  icon: BsLayoutSidebar,
  fields: [
    {
      title: 'Panel ID',
      name: 'panelId',
      type: 'string',
    },
    {
      title: 'Panel Title',
      name: 'panelTitle',
      type: 'string',
    },
    {
      title: 'Three Column Panel',
      name: 'threeColumnPanel',
      type: 'boolean',
    },
    {
      title: 'Panel Description (only for three column layout)',
      name: 'panelDescription',
      type: 'richText',
    },
    {
      title: 'Panel List',
      name: 'panelList',
      type: 'richText',
    },
  ],

  preview: {
    select: {
      title: 'panelId',
    },
    prepare ({title = 'No title'}) {
      return {
        title
      }
    }
  }
};
