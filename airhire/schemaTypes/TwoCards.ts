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
      validation: (rule) => [rule.required()],
      title: 'Title',
    }),
    defineField({
      type: 'text',
      name: 'text',
      validation: (rule) => [rule.required()],
      title: 'Text',
    }),
    defineField({
      type: 'text',
      name: 'header',
      validation: (rule) => [rule.required()],
      title: 'Header',
    }),
    defineField({
      type: 'Button',
      name: 'button',
      validation: (rule) => [rule.required()],
      title: 'Button',
    }),
    defineField({
      type: 'array',
      name: 'cards',
      validation: (rule) => [rule.required()],
      title: 'Cards',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'percentage',
              validation: (rule) => [rule.required()],
            }),
            defineField({
              type: 'string',
              name: 'description',
              validation: (rule) => [rule.required()],
            }),
            defineField({
              type: 'image',
              name: 'image',
              validation: (rule) => [rule.required()],
            }),
            defineField({
              type: 'string',
              name: 'imageAlt',
              validation: (rule) => [rule.required()],
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
