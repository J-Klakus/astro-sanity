import {defineType, defineField, defineArrayMember} from 'sanity'

export const ContactForm = defineType({
  type: 'object',
  name: 'ContactForm',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
  ],
})
