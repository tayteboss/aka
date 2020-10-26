export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'pageId',
      type: 'string',
      title: 'Page ID'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'metaDescription',
      type: 'string',
      title: 'Meta Description'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Components',
      name: 'components',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'post'},
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare ({title = 'No title', slug = {}}) {
      return {
        title,
        subtitle: slug.current
      }
    }
  }
}