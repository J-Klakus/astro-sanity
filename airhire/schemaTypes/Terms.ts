import {defineType, defineField, defineArrayMember} from 'sanity'

export const Terms = defineType({
  type: 'object',
  name: 'Terms',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      initialValue: 'Terms and Conditions',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
