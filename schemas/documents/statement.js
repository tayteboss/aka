import { MdShortText } from 'react-icons/md';

export default {
  title: 'Statements',
  name: 'statements',
  type: 'document',
  icon: MdShortText,
  fields: [
    {
      title: 'Statement ID',
      name: 'statementId',
      type: 'string',
    },
    {
      title: 'Statement',
      name: 'statement',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'statementId',
    },
    prepare ({title = 'No title'}) {
      return {
        title
      }
    }
  }
};
