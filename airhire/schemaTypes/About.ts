import {defineType, defineField, defineArrayMember} from 'sanity'

export const About = defineType({
  type: 'object',
  name: 'About',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'About Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
      initialValue: 'About Us',
    }),
    defineField({
      type: 'array',
      name: 'abouts',
      validation: (rule) => [rule.required()],
      title: 'Abouts',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
            }),
            defineField({
              type: 'string',
              name: 'text',
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
