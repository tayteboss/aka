import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import post from './documents/post';
import richText from './array/richText';
import figure from './objects/figure';
import page from './documents/page';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(
    [
      post, 
      richText, 
      figure,
      page,
    ]
  ),
});
