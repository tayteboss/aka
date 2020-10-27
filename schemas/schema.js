import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import richText from './array/richText';
import figure from './objects/figure';
import page from './documents/page';
import statement from './documents/statement';
import ticker from './documents/ticker';
import panel from './documents/panel';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(
    [
      page,
      richText, 
      figure,
      ticker, 
      statement, 
      panel, 
    ]
  ),
});
