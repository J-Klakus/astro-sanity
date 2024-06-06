import {defineType, defineField, defineArrayMember} from 'sanity'

export const ThreeImages = defineType({
  type: 'object',
  name: 'ThreeImages',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
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
      title: 'Descriptions',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'pillText',
              title: 'Pill Text',
            }),
            defineField({
              type: 'string',
              name: 'text',
              title: 'Text',
            }),
          ],
        }),
      ],
    }),
  ],
})
