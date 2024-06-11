import {defineType, defineField, defineArrayMember} from 'sanity'

export const ThreeImages = defineType({
  type: 'object',
  name: 'ThreeImages',
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
      initialValue: 'Discover more tools to boost your productivity',
    }),
    defineField({
      type: 'string',
      name: 'header',
      initialValue: 'Featured',
    }),
    defineField({
      type: 'array',
      name: 'descriptions',
      validation: (rule) => [rule.required()],
      title: 'Descriptions',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'pillText',
              validation: (rule) => [rule.required()],
              title: 'Pill Text',
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
