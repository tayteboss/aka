import { MdShortText } from 'react-icons/md';

export default {
  title: 'Tickers',
  name: 'tickers',
  type: 'document',
  icon: MdShortText,
  fields: [
    {
      title: 'Ticker ID',
      name: 'tickerId',
      type: 'string',
    },
    {
      title: 'Ticker Message',
      name: 'tickerMessage',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'tickerId',
    },
    prepare ({title = 'No title'}) {
      return {
        title
      }
    }
  }
};
