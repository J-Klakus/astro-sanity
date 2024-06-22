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
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'title',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'header',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
