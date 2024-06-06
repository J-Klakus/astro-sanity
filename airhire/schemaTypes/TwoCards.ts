import {defineType, defineField, defineArrayMember} from 'sanity'

export const TwoCards = defineType({
  type: 'object',
  name: 'TwoCards',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Two Card Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'text',
      name: 'text',
      title: 'Text',
    }),
    defineField({
      type: 'text',
      name: 'header',
      title: 'Header',
    }),
    defineField({
      type: 'Button',
      name: 'button',
      title: 'Button',
    }),
    defineField({
      type: 'array',
      name: 'cards',
      title: 'Cards',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'percentage',
            }),
            defineField({
              type: 'string',
              name: 'description',
            }),
            defineField({
              type: 'image',
              name: 'image',
            }),
            defineField({
              type: 'string',
              name: 'imageAlt',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
