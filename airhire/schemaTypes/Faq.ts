import {defineType, defineField, defineArrayMember} from 'sanity'

export const Faq = defineType({
  type: 'object',
  name: 'Faq',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      initialValue: 'Faq',
    }),
    defineField({
      type: 'array',
      name: 'faq',
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
})
