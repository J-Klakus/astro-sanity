import {defineType, defineField, defineArrayMember} from 'sanity'

export const ThreeVertical = defineType({
  type: 'object',
  name: 'ThreeVertical',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Three Images Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
      validation: (rule) => [rule.required()],
      initialValue: 'Designed for recruitment agencies',
    }),
    defineField({
      type: 'string',
      name: 'description',
      validation: (rule) => [rule.required()],
    }),
    defineField({
      type: 'Button',
      name: 'button',
      validation: (rule) => [rule.required()],
      initialValue: 'Designed for recruitment agencies',
    }),
    defineField({
      type: 'array',
      name: 'descriptions',
      validation: (rule) => [rule.required().length(3)],
      title: 'Descriptions',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
              validation: (rule) => [rule.required()],
              title: 'Title',
            }),
            defineField({
              type: 'string',
              name: 'text',
              validation: (rule) => [rule.required()],
              title: 'Text',
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
