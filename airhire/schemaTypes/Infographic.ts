import {defineType, defineField, defineArrayMember} from 'sanity'

export const Infographic = defineType({
  type: 'object',
  name: 'Infographic',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'InfoGraphic Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'string',
      name: 'header',
    }),
    defineField({
      type: 'string',
      name: 'text',
    }),
    defineField({
      type: 'image',
      name: 'image',
    }),
    defineField({
      type: 'string',
      name: 'imageAlt',
    }),
    defineField({
      type: 'Button',
      name: 'button',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
