import {defineType, defineField} from 'sanity'

export const BlogsPage = defineType({
  type: 'object',
  name: 'BlogsPage',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
  ],
})
