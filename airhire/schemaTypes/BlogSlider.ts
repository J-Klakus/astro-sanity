import {defineType, defineField, defineArrayMember} from 'sanity'

export const BlogSlider = defineType({
  type: 'object',
  name: 'BlogSlider',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'BlogSlider Component',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
