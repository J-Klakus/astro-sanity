import {defineType, defineField, defineArrayMember} from 'sanity'

export const Faq = defineType({
  type: 'object',
  name: 'Faq',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Frequently Ask Questions Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
      initialValue: 'Faq',
    }),
    defineField({
      type: 'array',
      name: 'faq',
      validation: (rule) => [rule.required()],
      title: 'Faqs',
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
