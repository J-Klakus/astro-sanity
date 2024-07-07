import {defineType, defineField} from 'sanity'

export const BlogsPage = defineType({
  type: 'object',
  name: 'BlogsPage',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'BlogsPage Component',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
