import {defineType, defineField, defineArrayMember} from 'sanity'

export const ContactForm = defineType({
  type: 'object',
  name: 'ContactForm',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'ContactForm Component',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
